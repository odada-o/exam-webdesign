$(function () {
  // modal

  const modalWrap = $("#modal");
  //$("#modal").find("button")
  const modalBtn = modalWrap.find("button");
  const listbbsEl = $(".lst-bbs li:first-child");

  modalWrap.removeClass("active");
  // modal 열기
  // .lst-bbs li:first-child 를 클릭했을 때
  listbbsEl.on("click", function () {
    // #modal에 클래스 active를 추가
    modalWrap.addClass("active");
  });

  // modal 닫기
  // #modal button 을 클릭했을 때
  modalBtn.on("click", function () {
    // #modal에 .active를 삭제
    modalWrap.removeClass("active");
  });

  // tabs
  const tabEl = $(".tab-item");
  const tabTit = tabEl.find(".tit");

  // .tab-item 옆에 .on 삭제
  tabEl.removeClass("on");
  // .tab-item:first-child 에게 .on 추가
  // $(".tab-item:first-child").addClass("on");
  tabEl.first().addClass("on");

  // .tab-item .tit 을 클릭했을 때
  tabTit.on("click", function () {
    // .tab-item에 붙어 있는 .on 삭제
    tabEl.removeClass("on");

    // 방금 클릭한 나(this)의 부모(parent())에게 .on 추가
    $(this).parent().addClass("on");
  });

  // slide
  let now = 1;
  const slideEls = $(".lst-slide");
  let height = 100;

  // 3초 마다 실행
  setInterval(function () {
    slide();
  }, 3000);

  // 슬라이드 기능 만들기
  function slide() {
    console.log("dd");
    // 조건문
    // now : 0 - 1번째 슬라이드
    // now : 1 - 2번째 슬라이드
    // now : 2 - 3번째 슬라이드
    // 참: 만약 1, 2번째 슬라이드일 경우
    // 거짓 : 3번 슬라이드일 경우
    if (now < 3) {
      // 참 일 경우
      // 다음 슬라이드로 이동
      // .lst-slide를 애니메이션(top: -300px)
      // 3초 후에 -100% 6초 후에 -200%
      slideEls.animate({
        top: height * now * -1 + "%",
      });
      // 변수 재선언
      now = now + 1;
    } else {
      // 거짓 일 경우
      // 첫번째 슬라이드로 이동
      slideEls.animate({
        top: 0,
      });
      now = 1;
    }
  }
});
