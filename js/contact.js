
	$(function(){//// jQB ////////////////////////////////
		//// 드래그 적용 ////
		/// 이벤트 대상 : #move
		$("#move").draggable({
			axis: "x" //x축으로고정(y를 쓰면 y축고정)
		});///// draggable ////////////
		
		/// 드래그 대상에 transition을 설정하여
		/// 드래그를 떼었을때 약간 더 가는 애니메이션
		/// 효과를 줄 수 있다.
		$("#move").css({
			transition: "all .8s ease-out"
		});////// css /////////////
		
		
		/////////// 이동위치 한계설정하기 ////////////////
		/// 첫번째 이미지와 끝 이미지가 화면 중간까지만 오도록 설정함.
		// 사용할 이벤트///
		// 1. mouseup -> 마우스 왼쪽버튼을 누르다가 놓을때 발생하는 이벤트(각)
		// 2. mousedown -> 마우스 왼쪽버튼을 누르는 시점에 발생하는 이벤트(딸)
		// 3. mousemove -> 마우스 포인터가 설정영역에서 움직일때 연속적으로 발생하는 이벤트
		///////////////////////////////////////////////////////
		
		$("html,body")
		.bind("mousemove mouseup",function(e){
			//console.log("포인터X좌표:"+e.pageX+"\n포인터Y좌표:"+e.pageY);
			
			/// 1. 움직이는 박스(#move)의 현재 left값을 알아오기
			var mpos=$("#move").offset().left;
			// offset() 메서드 :  선택요소의 측정시점의 각종 위치 크기 등의 값을 반환해 주는 메서드.
			// 예) $(선택자).offset().width
			//console.log(mpos);
			
			/// 2. 화면의 절반 크기 계산(첫번째 한계값)
			var fpoint=$(window).width()/2;
			// $(window).width() - 현재브라우저 창의 가로폭
			//console.log("화면절반폭:"+fpoint);
			
			/// 3. 마지막이미지 한계값
			/// -> #move의 width크기에서 화면 절반 값을 뺀값-> 마지막 이미지 화면 중간 위치
			var lpoint=$("#move").width()-fpoint;
			
			//// 4. 처음과 마지막 위치 강제설정하기 ////
			if(mpos>fpoint){// 첫번째 이미지 한계
				$("#move").css({left:fpoint+"px"});				
			}///// if문 /////////////////////
			else if(mpos<-lpoint){// 마지막 이미지 한계
				$("#move").css({left:-lpoint+"px"});
			}//// else if문 ///////////////////////
		});//////// mousemove, mouseup ///////////////////
	});//// jQB //////////////////////////////////////////
	