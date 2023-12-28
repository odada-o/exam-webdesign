document.addEventListener('DOMContentLoaded', function () {
    // 슬라이드 기능
    const slideWrap = document.querySelector('.slide-wrap');
    let slideInterval;

    function startSlide() {
        slideInterval = setInterval(() => {
            slideWrap.appendChild(slideWrap.firstElementChild.cloneNode(true));
            slideWrap.removeChild(slideWrap.firstElementChild);
        }, 3000); // 3초마다 반복
    }

    startSlide();

    // 탭 기능
    const tabs = document.querySelectorAll('.tab-item');
    tabs.forEach((tab) => {
        tab.addEventListener('click', function () {
            tabs.forEach((t) => t.classList.remove('on'));
            this.classList.add('on');
        });
    });

    // 모달 기능
    const modal = document.getElementById('modal');
    const bbsFirstItem = document.querySelector('.lst-bbs li:first-child a');
    const closeModal = modal.querySelector('button');

    bbsFirstItem.addEventListener('click', function (event) {
        event.preventDefault();
        modal.classList.add('active');
    });

    closeModal.addEventListener('click', function () {
        modal.classList.remove('active');
    });
});
