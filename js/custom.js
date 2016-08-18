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