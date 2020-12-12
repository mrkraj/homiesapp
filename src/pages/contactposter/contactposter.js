/* eslint no-undef: "off"*/
window.addEventListener("load",function(event) {
    console.log("ready forgotPassword.js!" ); 
    var emailAddress = '',
    phonenumber ='',
    quotedRent = '',
    fieldsClear = true,
    posterEmail = '',
    posterFirstName = '',
    emailMessage = '';


    function validateEmail(email) {
        var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailPattern.test(String(email).toLowerCase());
    }  
    

    //Contact poster.
    $(document).on('click', '.contact-poster', function(e){ 
        posterEmail = $(this).attr('mail');
        posterFirstName = $(this).attr('fn');
        var customerPopup = $('#contactPosterContainer');
        $('body').append(customerPopup);
        $('body > div').attr('aria-hidden','true').attr('tabindex','-1');
        customerPopup.removeAttr('aria-hidden').removeAttr('tabindex').removeClass('hidden');
    });
    //send email.  
    $('.contactpostertrigger').on('click', function (e) {
        emailAddress = $('.sender-email').val();
        if(emailAddress === null || emailAddress === ""){
            $('.senderemailfield .errorMessage').removeClass('hidden');
            fieldsClear = false;
        }
        phonenumber =$('.sharephonenumber').val(); 
        quotedRent = $('.rentquote').val(); 
        emailMessage = $('.email-message').val();
        if(emailMessage === null || emailMessage === ""){
            $('.email-messageField .errorMessage').removeClass('hidden');
            fieldsClear = false;
        }
        if(fieldsClear=== true){ 
            var emailposterparam ={}; 
            emailposterparam =  {
                "senderemail":emailAddress,
                "phonenumber":phonenumber,
                "rentquote":quotedRent,
                "emailmessage":emailMessage,
                "posteremail":posterEmail,
                "postername":posterFirstName
            };
            sendEmailPoster(emailposterparam); 
        }
    });

    function sendEmailPoster(emailposterparam){
        var url = "/homies/emailToPoster";
		$.ajax({
			async: true,
			type: 'POST',
			url: url,
			headers: {
				"Content-Type": "application/json"
			},
			data: JSON.stringify(emailposterparam),
			dataType: "json",
			success: function(response) {
                console.log(response);
                $('.contactPosterContainer').addClass('hidden');
                $('.email_sent').removeClass('hidden');
			},
			error: function(error) {
				console.log(error);
			}
		});	
    }

    $('.sender-email').on('keyup', function (e) {
        emailAddress = $('.sender-email').val();
        if(validateEmail(emailAddress)){
            $('.senderemailfield .errorMessage').addClass('hidden');
        }else{
            $('.senderemailfield .errorMessage').removeClass('hidden');
        } 
    });

    $('.email-message').on('keyup', function (e) {
        $('.email-messageField .errorMessage').addClass('hidden');
    });

    $("body").on("click", "#contactPosterContainer .close-btn", function (e) {
        hideCustomerPostPopup();
    });

    function hideCustomerPostPopup(){
        $('#contactPosterContainer').addClass('hidden');
        $('body > div').removeAttr('aria-hidden').removeAttr('tabindex');
    }
});
