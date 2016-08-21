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