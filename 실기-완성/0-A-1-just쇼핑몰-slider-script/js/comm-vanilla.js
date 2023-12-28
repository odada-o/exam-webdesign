document.addEventListener('DOMContentLoaded', function () {
    // 슬라이드
    let now = 0;
    const slideCount = document.querySelectorAll('.lst-slide li').length;
    const lstSlide = document.querySelector('.lst-slide');

    setInterval(function () {
        slide();
    }, 3000);

    function slide() {
        now = (now + 1) % slideCount;
        lstSlide.style.top = 100 * now * -1 + '%';
    }

    // 탭
    const tabEl = document.querySelectorAll('.tab-item');

    tabEl.forEach((el) => el.classList.remove('on'));
    tabEl[0].classList.add('on');

    tabEl.forEach((el) => {
        el.querySelector('.tit').addEventListener('click', function () {
            tabEl.forEach((innerEl) => innerEl.classList.remove('on'));
            this.parentNode.classList.add('on');
        });
    });

    // 모달
    const modalWrap = document.querySelector('#modal');
    const modalBtn = modalWrap.querySelector('button');
    const listbbsEl = document.querySelectorAll('.lst-bbs li');

    modalWrap.classList.remove('active');

    listbbsEl[0].addEventListener('click', function () {
        modalWrap.classList.add('active');
    });

    modalBtn.addEventListener('click', function () {
        modalWrap.classList.remove('active');
    });
});
