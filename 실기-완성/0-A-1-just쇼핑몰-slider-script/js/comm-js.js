document.addEventListener('DOMContentLoaded', function () {
  // modal
  const modalWrap = document.querySelector("#modal");
  const modalBtn = modalWrap.querySelector("button");
  const listbbsEl = document.querySelectorAll(".lst-bbs li");

  modalWrap.classList.remove("active");

  listbbsEl[0].addEventListener("click", function () {
    modalWrap.classList.add("active");
  });

  modalBtn.addEventListener("click", function () {
    modalWrap.classList.remove("active");
  });

  // tabs
  const tabEl = document.querySelectorAll(".tab-item");

  tabEl.forEach(el => el.classList.remove("on"));
  tabEl[0].classList.add("on");

  tabEl.forEach(el => {
    el.querySelector(".tit").addEventListener("click", function () {
      tabEl.forEach(innerEl => innerEl.classList.remove("on"));
      this.parentNode.classList.add("on");
    });
  });

  // slide
  let now = 1;
  setInterval(function () {
    slide();
  }, 3000);

  function slide() {
    console.log("dd");
    const lstSlide = document.querySelector(".lst-slide");
    lstSlide.style.top = (100 * now * -1) + "%";
  }
});
