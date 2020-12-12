/* eslint no-undef: "off"*/
 window.addEventListener("load",function(event) {
    console.log("ready logIn!");
	try{   
        $('.gnavsignIn').on('click', function (e) {
            var customerPopup = $('#LoginContainer');
            $('body').append(customerPopup);
            $('body > div').attr('aria-hidden','true').attr('tabindex','-1');
            customerPopup.removeAttr('aria-hidden').removeAttr('tabindex').removeClass('hidden');
        });

        $('.signUpsection').on('click', function (e) {
            hideForgotPasswordPopup();
            hideCustPopup();
            var customerPopup = $('#SignUpContainer');
            $('body').append(customerPopup);
            $('body > div').attr('aria-hidden','true').attr('tabindex','-1');
            customerPopup.removeAttr('aria-hidden').removeAttr('tabindex').removeClass('hidden');
        });

        $('.membersection').on('click', function (e) {
            hideSignInPopup();
            hideForgotPasswordPopup();
            var customerPopup = $('#LoginContainer');
            $('body').append(customerPopup);
            $('body > div').attr('aria-hidden','true').attr('tabindex','-1');
            customerPopup.removeAttr('aria-hidden').removeAttr('tabindex').removeClass('hidden');
        });
        $('.forgotPassword').on('click', function (e) {
            hideCustPopup();
            var customerPopup = $('#forgotPasswordContainer');
            $('body').append(customerPopup);
            $('body > div').attr('aria-hidden','true').attr('tabindex','-1');
            customerPopup.removeAttr('aria-hidden').removeAttr('tabindex').removeClass('hidden');
        });

        //signout the customer 
        $('.gnsignout').on('click', function (e) { 
            document.cookie = 'cus_homies=; Max-Age=0; path=/';
            $('.gnavsignIn').removeClass('hidden'); 
            $('.loggedinmenu').addClass('hidden');
            //location.reload(); 
        }); 

         // SignIn type popup close
         $("body").on("click", "#SignUpContainer .close-btn", function (e) {
            hideSignInPopup();
        });

        // Customer type popup close
        $("body").on("click", "#LoginContainer .close-btn", function (e) {
            hideCustPopup();
        });

         // Customer type popup close
         $("body").on("click", "#forgotPasswordContainer .close-btn", function (e) {
            hideForgotPasswordPopup();
        });

        //hide Login overlay
        function hideCustPopup() {
			$('#LoginContainer').addClass('hidden');
			$('body > div').removeAttr('aria-hidden').removeAttr('tabindex');
        }
         //hide SignIn overlay
         function hideSignInPopup() {
			$('#SignUpContainer').addClass('hidden');
			$('body > div').removeAttr('aria-hidden').removeAttr('tabindex');
        }
        function hideForgotPasswordPopup() {
			$('#forgotPasswordContainer').addClass('hidden');
			$('body > div').removeAttr('aria-hidden').removeAttr('tabindex');
		}

    }catch(error){
        
    }
});

