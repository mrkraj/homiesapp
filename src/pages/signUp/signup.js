/* eslint no-undef: "off"*/
window.addEventListener("load",function(event) {
    console.log("ready singup!" );
    var userAddress = '',
    aptNo = '',
    emailAddress = '',
    password ='',
    confirmPassword = '',
    firstName = '',
    lastName = '',
    phoneNumber = '',
    Student = '',
    notifications = '',
    signUpAutoComplete = false;
    
    $('.userAddress').on('keyup', function (e) {
        userAddress = $(this).val();
        if(!signUpAutoComplete){
            userAddressSearch();
        }
    });
    
    function userAddressSearch() {
        if(window.google) {
            signUpAutoComplete=true;
            var landmarkinput, infowindow;
            landmarkinput = document.getElementById('userAddress');
            infowindow = new google.maps.InfoWindow();
            autocomplete = new google.maps.places.Autocomplete(landmarkinput);
            autocomplete.setComponentRestrictions({ 'country': ['us']});
            autocomplete.setTypes(['geocode']);
            autocomplete.addListener('place_changed', function () {
                try{
                    var autoObj = autocomplete.gm_accessors_.place;
                    userAddress = autoObj.qe.formattedPrediction;
                    console.log("userAddress:"+userAddress);
                }catch(e){
                    console.log("auto suggestion object is empty");
                } 
            })
        } 
    }	
    
    //Fields update Listerns 
    //phone number validator
    function validatePhoneNumber(phone) {
        var phoneNumberPattern =  /^[2-9]{1}[0-9]{2}[0-9]{3}[0-9]{4}/;
        return phoneNumberPattern.test(phone);
    }

    function validateEmail(email) {
        var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailPattern.test(String(email).toLowerCase());
    }

    $('.signupemailaddress').on('keyup', function (e) {
        emailAddress = $('.signupemailaddress').val();
        if(validateEmail(emailAddress)){
            $('.signupemailField .errorMessage').addClass('hidden');
        }else{
            $('.signupemailField .errorMessage').removeClass('hidden');
        }
    });

    $('.signuppassword').on('keyup', function (e) {
        password =$('.signuppassword').val();
        if(password.length > 7){
            $('.signuppasswordField .errorMessage').addClass('hidden');
        }else{
            $('.signuppasswordField .errorMessage').removeClass('hidden');
        }
    });
    $('.confirmPassword').on('keyup', function (e) {
        confirmPassword = $('.confirmPassword').val();
        if(confirmPassword.length > 7){
            if(password === confirmPassword){
                $('.confirmPasswordField .errorMessage').addClass('hidden');
            }else{
                $('.confirmPasswordField .errorMessage').removeClass('hidden');
            }
        }
    });

    $('.fname').on('keyup', function (e) {
        $('.fnameField .errorMessage').addClass('hidden');
    });

    $('.lname').on('keyup', function (e) {
        $('.lnameField .errorMessage').addClass('hidden');
    });
    
    $('.phonenumber').on('keyup', function (e) {
        phoneNumber = $('.phonenumber').val();
        console.log("phoneNumber:"+phoneNumber);
        if(validatePhoneNumber(phoneNumber)){
            $('.phoneField .errorMessage').addClass('hidden');
        }else{
            $('.phoneField .errorMessage').removeClass('hidden');
        }
    });

    $( "#allowNotification").change(function(){
        $('.roomMatesField .errorMessage').addClass('hidden');
    });


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
            $('.loggedinmenu').removeClass('hidden');
            $('.gnavmyAccount').text(parseCookie[0]); 
        }
    }

    //Submit Data
    function createUser(userParams){
        var url = "/homies/CreateUser";
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
                if(response.case === "Already_Exist"){
                    $('.memberContainer').removeClass('hidden');
                }else{
                    var enCookieValue = firstName+"||"+emailAddress;
                    var encodeString = btoa(enCookieValue);
                    setCookie(encodeString,1);
                    sessionActive();
                    $('#SignUpContainer').addClass('hidden');
			        $('body > div').removeAttr('aria-hidden').removeAttr('tabindex');
                }
			},
			error: function(error) {
				console.log(error);
			}
		});	
    }

    //Create User on submit
    $('.signUp').on('click', function (e) {
        var fieldsClear = true;
        emailAddress = $('.signupemailaddress').val();
        if(emailAddress === null || emailAddress === ""){
            $('.signupemailField .errorMessage').removeClass('hidden');
            fieldsClear = false;
        }
        password =$('.signuppassword').val();
        if(password === null || password === ""){
            $('.signuppasswordField .errorMessage').removeClass('hidden');
            fieldsClear = false;
        }
        firstName = $('.fname').val();
        if(firstName === null || firstName === ""){
            $('.fnameField .errorMessage').removeClass('hidden');
            fieldsClear = false;
        }
        lastName = $('.lname').val();
        if(lastName === null || lastName === ""){
            $('.lnameField .errorMessage').removeClass('hidden');
            fieldsClear = false;
        }
        notifications = $('#allowNotification').val();
		if(notifications === null || notifications === "" || notifications === "select"){
		    $('.notificationField .errorMessage').removeClass('hidden');
			fieldsClear = false;
        }
        aptNo = $('.apartmentNo').val();
        Student = $('#isStudent').val();

        if(fieldsClear=== true){
            $('.signUpError').addClass('hidden');
            var signUpParam ={}; 
            signUpParam =  {
                "email":emailAddress,
                "password":password,
                "fname":firstName,
                "lname":lastName,
                "address":userAddress,
                "apt":aptNo,
                "phone":phoneNumber,
                "isStudent":Student,
                "notification":notifications
            };
            createUser(signUpParam);
           
        }else{
            $('.signUpError').removeClass('hidden');
        }
    });
    sessionActive();
});
