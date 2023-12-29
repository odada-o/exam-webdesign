$(function () {
     $("#gnb .depth1 > li").on("mouseenter focusin", function() {
        $(this).find(".depth2").slideDown();
    });

    $("#gnb .depth1 > li").on("mouseleave focusout", function() {
        $(this).find(".depth2").slideUp();
    });

    
    // 모달
    const modalWrap = $('#modal');
    const modalBtn = modalWrap.find('button');
    const listbbsEl = $('.lst-bbs li');

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
        now = (now + 1) % slideCount;
        updateSlidePosition();
    }, 3000);
});
