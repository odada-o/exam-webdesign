// function(파라미터){실행문}

// 준비이벤트
$(function(){

    // modal 띄우기
    // .link-bnr를 클릭했을 때
    // #modal를 css값을 'display:flex'로 변경
    $('.link-bnr').click(function(event){
        // a태그 링크값 없애기
        event.preventDefault()
        $('#modal').css('display', 'flex')
    })
    // .btn-close 클릭했을 때
    // #modal 안보이게...
    $('.btn-close').click(function(){
        $('#modal').hide()
    })

    // tab
    // .sec-tit을 클릭했을 때
    // 방금 클릭 아이의 엄마(section태그)에 .on 추가
    $('.tab .sec-tit').click(function(event){
        event.preventDefault()
        $('.tab section').removeClass('on')
        $(this).parent().addClass('on')
    })

    // slide
    // 변수
    // 슬라이드의 몇 번째
    let now = 1,
        $slide = $('.slide > ul'),
        height = 100
    // 3초 마다 실행
    setInterval(function(){
        slide()
    }, 3000)


    function slide(){
        // 조건문
        // 만약 1,2번째 슬라이드라면 
        // 다음 슬라이드로 이동
        // 그 밖에(3번째 슬라이드) 조건이라면
        // 첫번째 슬라이드로 이동
        // if(조건문){참일 경우 실행문}else{거짓일 경우 실행문}
        if(now < 3){
            // .slide ul이 애니메이션 되라~ 'left:-1200px'
            $slide.animate({
                top : (height * now * (-1)) + '%'
            })
            // now = now + 1
            now++
        }else{
            $slide.animate({
                top : 0
            })
            now = 1
        }
    }
    


})