function rotateSpan(elem){
	var span = $(elem).parents(".row").find(".rotatable");
	if(span.hasClass("rotated")){
		span.animate({rotate: '0'},1000);
		span.removeClass("rotated");
	}
	else{
		span.addClass("rotated")
		span.animate({rotate: '180'},1000);	
	}
}


function initializeCustomImgSlider(currentModal){
	var x = $('#'+currentModal+ ' .sliderImages');
	if(x != null && x.length > 0)
		x[0].style.display = "inline";
}

function showNextImage(currentModal){
	var elem = $("#"+currentModal + " input[name='imageSliderIndex']");
	var currentIndex = elem.val();
	var indexToShow = parseInt(currentIndex)+1;
	elem.val(indexToShow);
	showImage(currentModal,indexToShow)
}

function showPrevImage(currentModal){
	var elem = $("#"+currentModal + " input[name='imageSliderIndex']");
	var currentIndex = elem.val();
	var indexToShow = parseInt(currentIndex)-1;
	elem.val(indexToShow);
	showImage(currentModal,indexToShow)
}



function showImage(currentModal,n) {
	var elem = $("#"+currentModal + " input[name='imageSliderIndex']");
	var i;
	var x = $('#'+currentModal+ ' .sliderImages');
	if(x == null || x.length<=0)
		return;
	if (n > x.length) {
		elem.val("1");
	}
	if (n < 1) {
		elem.val(x.length);
	}
	var slideIndex = parseInt(elem.val());
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x[slideIndex-1].style.display = "inline";
}


function showModal(modalId,postId,category,imageArray){
	var imagesArea = $(modalId+" .image-container-div");
	if($.trim($(imagesArea).html()).length == 0 && imageArray.length>0){
		$(modalId+" .ajax-loading-div").css("display","inline");
		var imgPath = "img/portfolio/" + category +"/" + postId +"/"; 
		for(var i=0;i<imageArray.length;i++){
			var img = $("<img />").css({"width":imageArray[i].width,"height":imageArray[i].height,"display":"none"})
			.addClass("sliderImages img-responsive img-centered").attr('src', imgPath + imageArray[i].name)
			.on('load', function() {	
				if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0) {
					alert('broken image!');
				} else {
					if($.trim($(imagesArea).html()).length == 0){
						$(this).css("display","inline");
						$(modalId+" .ajax-loading-div").css("display","none");
					}
					$(imagesArea).append($(this));
				}
			});
		}
	}
	$(modalId).modal();

}

function formatImageStr(str){
	var re = new RegExp('=>', 'g');
	str = str.replace(re, ':');
	re = new RegExp('}{','g');
	str = str.replace(re,'},{');
	re = new RegExp('nil','g');
	str = str.replace(re,'null');
	var imageJSON = JSON.parse(str);
	return imageJSON;

}