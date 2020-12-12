/* eslint no-undef: "off"*/
window.addEventListener("load",function(event) {
    console.log("ready forgotPassword.js!" ); 
    //zipcode, state, city.
    //get the matching based on these values. 

    var requestUrl = window.location.href;
    if(requestUrl.includes('/myaccount')){ 
    var activepost = '';
    function getCookie(name) {
        match = document.cookie.match(new RegExp(name + '=([^;]+)'));
        if (match) return match[1];
    }

    var useremail = '';
    if(getCookie("cus_homies")){
        var decookieValue = getCookie("cus_homies");
        var decodeString = atob(decookieValue);
        var parseCookie = decodeString.split("||"); 
        useremail = parseCookie[1];
    } 
    var filterParams ={}; 
    filterParams =  {
        "email":useremail 
    }; 
    getUserPosts(filterParams); 

    function getUserPosts(filterParams){
        var url = "/homies/userPosts";
		$.ajax({
			async: true,
			type: 'POST',
			url: url,
			headers: {
				"Content-Type": "application/json"
			},
			data: JSON.stringify(filterParams),
			dataType: "json",
			success: function(response) { 
                console.log(response);  
                postdatas = response;
                var gwsize = response.length;
                for(var i=0; i<gwsize;i++){ 
                    var tempval = response[i];
                var gwhtml = "<div class='girdsplitcontainer'>\
                    <div class='househighlightscontainer'>\
                        <div class='housedetails'>\
                            <h3 class='houses-grid-title'>"+tempval.map.postTitle+"</h3>\
                            <p class='house-grid-address'>"+tempval.map.postAddress+"</p>\
                            <ul class='house-feature-list'>\
                                <li>\
                                    <div class='details-high-label'>\
                                    <p class='highlights-label'>Posted By</p>\
                                    <p class='highlights-value'>"+tempval.map.firstName+"</p>\
                                    </div>\
                                </li>\
                                <li>\
                                    <div class='details-high-label'>\
                                    <p class='highlights-label'>Contact:</p>\
                                    <p class='highlights-value'>"+tempval.map.phoneNumber+"</p>\
                                    </div>\
                                </li>\
                                <li>\
                                    <div class='details-high-label'>\
                                    <p class='highlights-label'>Posted On</p>\
                                    <p class='highlights-value'>"+tempval.map.postedDate+"</p>\
                                    </div>\
                                </li>\
                                <li>\
                                    <div class='details-high-label'>\
                                    <p class='highlights-label'>Property Type</p>\
                                    <p class='highlights-value'>"+tempval.map.propertyType+"</p>\
                                    </div>\
                                </li>\
                                <li>\
                                    <div class='details-high-label'>\
                                    <p class='highlights-label'>Available Date</p>\
                                    <p class='highlights-value'>"+tempval.map.availableDate+"</p>\
                                    </div>\
                                </li>\
                                <li>\
                                    <div class='details-high-label'>\
                                    <p class='highlights-label'>Gender</p>\
                                    <p class='highlights-value'>"+tempval.map.gender+"</p>\
                                    </div>\
                                </li>\
                            </ul>\
                            <div class='grid-tile-action-container'>\
                                <div class='tile-action'>\
                                    <button postid="+tempval.map.postID+" class='delete-post tile-action-button'>Delete Post</button>\
                                </div>\
                            </div>\
                        </div>\
                        <div class='house-img-container'>\
                            <span class='price-badge'>"+tempval.map.rent+"</span>\
                            <img class='swiperImagehold' src='https://images1.apartments.com/i2/5u0Xua6LrsvhB_Z3C04WDs3eZyHF7IzYNUZmckZQhkQ/117/15fifty5-walnut-creek-ca-building-photo.jpg'/>\
                        </div>\
                    </div>\
                </div>"; 
                $('.housesGridContainer .userpostsgw').append(gwhtml);
                }
            }, 
			error: function(error) {
				console.log(error);
			}
		});	
    } 
    $(document).on('click', '.delete-post', function(e){ 
        var editpostPopUp = $('#edit_postadd');
        $('body').append(editpostPopUp);
        $('body > div').attr('aria-hidden','true').attr('tabindex','-1');
        editpostPopUp.removeAttr('aria-hidden').removeAttr('tabindex').removeClass('hidden'); 
        activepost = parseInt($(this).attr("postid"));
    });

    $("body").on("click", "#edit_postadd .close-btn", function (e) {
        $('#edit_postadd').addClass('hidden');
        $('body > div').removeAttr('aria-hidden').removeAttr('tabindex');
    });

    $(document).on('click', '.canceldeleteing', function(e){ 
        $('#edit_postadd').addClass('hidden');
        $('body > div').removeAttr('aria-hidden').removeAttr('tabindex');
    }); 

    $(document).on('click', '.deletepost', function(e){ 
        var posterfeedback = $('#posterFeedback').val();
        var deleteParams ={}; 
        deleteParams =  {
            "postId":activepost,
            "feedback":posterfeedback
        }; 
        deleteUserPosts(deleteParams);
    }); 

    function deleteUserPosts(deleteParams){
        var url = "http://localhost:8080/homies/deletePost";
		$.ajax({
			async: true,
			type: 'POST',
			url: url,
			headers: {
				"Content-Type": "application/json"
			},
			data: JSON.stringify(deleteParams),
			dataType: "json",
			success: function(response) { 
                console.log(response); 
                $('.deleteConfirmation').removeClass('hidden');
                $('.feedbackcontainer').addClass('hidden'); 
            },
            error: function(error) {
				console.log(error);
			}
        });
    }

    } 
});
