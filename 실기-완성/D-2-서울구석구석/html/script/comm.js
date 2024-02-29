$(function () {
    // 현재 보이는 슬라이드의 인덱스
    let now = 0
    // 슬라이드의 갯수 (3)
    const slideCount = $('.slide ul li').length
    // 슬라이드 송일국
    const slideList = $('.slide ul')

    // setInterval 함수를 사용하여 3초마다 슬라이드 이동
    // setInterval(function, milliseconds);
    setInterval(function () {
        // now 값을 1씩 증가시키고
        // slideCount(3)로 나눈 나머지 값을 now에 대입
        // (0 + 1) % 3 = 1 (나머지)
        // (1 + 1) % 3 = 2 (나머지)
        // (2 + 1) % 3 = 0 (나머지)
        now = (now + 1) % slideCount
        // left 속성을 변경하여 슬라이드 이동
        slideList.css('left', 100 * -now + '%')
    }, 3000)
})
