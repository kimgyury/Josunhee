				
			/*  ----  섹션1  ----  */

var acall;//setInterval함수용
$(function(){//jQB2
	//자동슬라이드 함수호출하기	
	acall=setInterval(flowImg,20);
	//img li에 마우스 오버시 멈춤, 아웃시 다시 실행
	$(".flowImg li").hover(
		function(){//over
			clearInterval(acall);//진행멈춤!
		},
		function(){//out
			acall=setInterval(flowImg,20);// 다시진행!
		});//hover
});//jQB2

/*함수명: flowImg 
  기능: 이미지를 왼쪽으로 계속이동하여 흐르게함*/
var fnum = 0;//이동픽셀수 전역변수
function flowImg(){
	// 잘라낼 이미지 하나의 크기를 측정함
	var iw=$(".flowImg li").first().width();
//	console.log(iw);
	fnum--;//1씩감소
	// 이미지 하나의 width 크기 만큼 left값이 변경되면 이때 나간 이미지를 잘라서 맨뒤로 보내고 css의 left값과 fnum값을 0으로 초기화
	if(fnum<=-iw){
		$(".flowImg").append($(".flowImg li").first())
		.css({left:"0"});// lefe값 초기화!
		fnum=0;//픽셀수 초기화!
	}/// if문
	
	// 이동대상: .flowImg
	$(".flowImg").css({left:fnum+"px"});
}///flowImg함수








// ------------------------------------------------------------------------------------------------------------------------------------------------------



							/*  ----  섹션2  ----  */

var bcall;//setInterval함수용
var rinit;//오른쪽 초기값
$(function(){//jQB2
	rinit=$(window).width()*0.6;//right값 -60%위치값 px로 계산!
	bnum=-rinit;//초기값이 right값이 나가있는 위치이므로!!!
//	console.log(-rinit);
	$(".flowImg2").css({right:-rinit+"px"});
	
	//자동슬라이드 함수호출하기	
	bcall=setInterval(flowImg2,20);
	//img li에 마우스 오버시 멈춤, 아웃시 다시 실행
	/*$(".flowImg2 li").hover(
		function(){//over
			clearInterval(bcall);//진행멈춤!
		},
		function(){//out
			bcall=setInterval(flowImg2,20);// 다시진행!
		});//hover*/
});//jQB2



/*함수명: flowImg2
  기능: 이미지를 오른쪽으로 계속이동하여 흐르게함*/

var bnum = 0;//이동픽셀수 전역변수
function flowImg2(){
	
	// 잘라낼 이미지 하나의 크기를 측정함
	var ib=$(".flowImg2 li").first().width();
//	console.log(iw);
	bnum--;//1씩감소
	
	// 이미지 하나의 width 크기 만큼 right값이 변경되면 이때 나간 이미지를 잘라서 맨뒤로 보내고 css의 left값과 fnum값을 0으로 초기화
	if(bnum<=-(ib+rinit)){
		$(".flowImg2").prepend($(".flowImg2 li").last())
		.css({right:-rinit+"px"});// right값 초기화!
		bnum=-rinit;//픽셀수 초기화!
	}/// if문
	
	// 이동대상: .flowImg
	$(".flowImg2").css({right:bnum+"px"});
}///flowImg함수



/* 모바일 할거면 swipe 사용하기
js 모바일 - icox_pj - index.html  main.js 맨아래 참고!*/






