/* eslint no-undef: "off"*/
window.addEventListener("load",function(event) {
    console.log("ready login.js!" );
    var emailAddress = '',
    password ='';

    function validateEmail(email) {
        var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailPattern.test(String(email).toLowerCase());
    }

    function setCookie(cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = "cus_homies" + "=" + cvalue + ";" + expires + ";path=/";
    }
    function getCookie(name) {
        match = document.cookie.match(new RegExp(name + '=([^;]+)'));
        if (match) return match[1];
    }

    function sessionActive(){
        if(getCookie("cus_homies")){
            var decookieValue = getCookie("cus_homies");
            var decodeString = atob(decookieValue);
            var parseCookie = decodeString.split("||"); 
            $('.gnavsignIn').addClass('hidden'); 
            $('.gnavmyAccount').text(parseCookie[0]); 
            $('.loggedinmenu').removeClass('hidden');
        }
    }
    
    $('.loginemailaddress').on('keyup', function (e) {
        emailAddress = $('.loginemailaddress').val();
        if(validateEmail(emailAddress)){
            $('.loginemailField .errorMessage').addClass('hidden');
        }else{
            $('.loginemailField .errorMessage').removeClass('hidden');
        }
    });

    $('.loginpassword').on('keyup', function (e) {
        password =$('.loginpassword').val();
        if(password.length > 7){
            $('.loginpasswordField .errorMessage').addClass('hidden');
        }else{
            $('.loginpasswordField .errorMessage').removeClass('hidden');
        }
    });


    //Submit Data
    function CheckUserAvailable(userParams){
        var url = "/homies/CheckUser";
		$.ajax({
			async: true,
			type: 'POST',
			url: url,
			headers: {
				"Content-Type": "application/json"
			},
			data: JSON.stringify(userParams),
			dataType: "json",
			success: function(response) {
                console.log(response);
                if(response.case === "loggedIn"){
                    var enCookieValue = response.firstName+"||"+emailAddress;
                    var encodeString = btoa(enCookieValue);
                    setCookie(encodeString,1);
                    sessionActive();
                    $('#LoginContainer').addClass('hidden');
			        $('body > div').removeAttr('aria-hidden').removeAttr('tabindex');
                }else if(response.case === "userDoesNotExist"){
                    $('.emailerrorMessage').removeClass('hidden');
                }else {
                    $('.passworderrorMessage').removeClass('hidden');
                }
			},
			error: function(error) {
				console.log(error);
			}
		});	
    }

    //Create User on submit
    $('.logInTrigger').on('click', function (e) {
        var fieldsClear = true;
        emailAddress = $('.loginemailaddress').val();
        if(emailAddress === null || emailAddress === ""){
            $('.loginemailField .errorMessage').removeClass('hidden');
            fieldsClear = false;
        }
        password =$('.loginpassword').val();
        if(password === null || password === ""){
            $('.loginpasswordField .errorMessage').removeClass('hidden');
            fieldsClear = false;
        }
    
        if(fieldsClear=== true){
            $('.logInError').addClass('hidden');
            var logInParam ={}; 
            logInParam =  {
                "email":emailAddress,
                "password":password
            };
            CheckUserAvailable(logInParam);
           
        }else{
            $('.logInError').removeClass('hidden');
        }
    });
});
