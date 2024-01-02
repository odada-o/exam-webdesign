$(function () {
    // 모달
    const modalWrap = $('#modal');
    const modalBtn = modalWrap.find('button');
    const listbbsEl = $('.lst-bbs li:first-child');

    modalWrap.removeClass('active');

    listbbsEl.on('click', function () {
        modalWrap.addClass('active');
    });

    modalBtn.on('click', function () {
        modalWrap.removeClass('active');
    });

    // 탭
    const tabEl = $('.tab-item');

    tabEl.removeClass('on');
    tabEl.first().addClass('on');

    $('.tab-item .tit').on('click', function () {
        tabEl.removeClass('on');
        $(this).parent().addClass('on');
    });

    // 슬라이드
    let now = 0;
    const slideCount = $('.lst-slide li').length;
    const lstSlide = $('.lst-slide');

    function updateSlidePosition() {
        lstSlide.css('top', 100 * now * -1 + '%');
    }

    setInterval(function () {
        //나머지 연산자(%)는 왼쪽 피연산자를 오른쪽 피연산자로 나눴을 때의 나머지를 구합니다.
        // 1(now) = (0(now) + 1) % 3
        // 2(now) = (1(now) + 1) % 3
        // 0(now) = (2(now) + 1) % 3
        now = (now + 1) % slideCount;
        updateSlidePosition();
    }, 3000);
});
