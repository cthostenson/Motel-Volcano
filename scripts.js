//if(!isIE())
//{
var prevScrollpos = 0;
$(init);
//}
function init() {

	//$(window).scroll(moveBanner);
	//$(window).resize(resizeTop);
	//$("#wrapper").scroll(moveBanner);
	resizeTop();
	/*$("#cartLink").hover(showCartText);
	
	
	/*$(".neon-text-wrapper").click(movePage);*/
	
	/*$("body").css("max-width",windowWidth);
	$("#wrapper").css("max-width",windowWidth);*/
	/*
	$("#store").height(windowHeight-100);
	$("#twitter").height(windowHeight-100);
	$("#contact").height(windowHeight-100);
	*/
	
	
	//$("#contactContent").height(windowHeight-100);
	//$("#contactContent").css("background-size",windowHeight);
	//$("#storeContent").height(windowHeight);
	/*
	$("#toStore").click(displayStore);
	$("#toHome").click(displayHome);
	$("#toContact").click(displayContact);
	
	$("#storePage").hide();
	$("#contactPage").hide();*/
	//var prevScrollpos = window.pageYOffset;
}

function moveBanner() {
	var currentScrollPos = $(this).scrollTop();//window.pageYOffset;
	if(prevScrollpos > currentScrollPos) 
	{
		$("#banner").addClass("bannerMoveUpAnimation");
		$("#banner").removeClass("bannerMoveDownAnimation");
	} 
	else {
		$("#banner").addClass("bannerMoveDownAnimation");
		$("#banner").removeClass("bannerMoveUpAnimation");
	}
	prevScrollpos = currentScrollPos;
}

function resizeTop() {
	var windowHeight = $(window).height();
	$("header").height(windowHeight+100);
	$("#wrapper").height(windowHeight+100);
}