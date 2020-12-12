/* eslint no-undef: "off"*/
window.addEventListener("load",function(event) {
    console.log("ready forgotPassword.js!" );
    var emailAddress = '';
    function validateEmail(email) {
        var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailPattern.test(String(email).toLowerCase());
    }  
    
    $('.forgotemailaddress').on('keyup', function (e) {
        emailAddress = $('.forgotemailaddress').val();
        if(validateEmail(emailAddress)){
            $('.forgotemailField .errorMessage').addClass('hidden');
        }else{
            $('.forgotemailField .errorMessage').removeClass('hidden');
        }
    });


    //Submit Data
    function ForgotPasswordCheck(userParams){
        var url = "/homies/ForgotPassword";
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
                if(response.case === "sentEmail"){
                    $('.forgotmember').removeClass('hidden');
                 }else{
                    $('.forgotemailerror').removeClass('hidden');
                } 
			},
			error: function(error) {
				console.log(error);
			}
		});	
    }

    //Create User on submit
    $('.forgotPasswordtrigger').on('click', function (e) {
        var fieldsClear = true;
        emailAddress = $('.forgotemailaddress').val();
        if(emailAddress === null || emailAddress === ""){
            $('.forgotemailField .errorMessage').removeClass('hidden');
            fieldsClear = false;
        }
       
        if(fieldsClear=== true){
            $('.forgotNotfillError').addClass('hidden');
            var forgotParam ={}; 
            forgotParam =  {
                "email":emailAddress
            };
           ForgotPasswordCheck(forgotParam);
           
        }else{
            $('.forgotNotfillError').removeClass('hidden');
        }
    });
});
