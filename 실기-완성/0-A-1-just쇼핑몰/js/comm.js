$(function () {
  // modal
  $("#modal").removeClass("active");
  // modal 열기
  // .lst-bbs li:first-child 를 클릭했을 때
  $(".lst-bbs li:first-child").on("click", function () {
    // #modal에 클래스 active를 추가
    $("#modal").addClass("active");
  });

  // modal 닫기
  // #modal button 을 클릭했을 때
  $("#modal button").on("click", function () {
    // #modal에 .active를 삭제
    $("#modal").removeClass("active");
  });

  // tabs
  // .tab-item 옆에 .on 삭제
  $(".tab-item").removeClass("on");
  // .tab-item:first-child 에게 .on 추가
  $(".tab-item:first-child").addClass("on");

  // .tab-item .tit 을 클릭했을 때
  $(".tab-item .tit").on("click", function () {
    // .tab-item에 붙어 있는 .on 삭제
    $(".tab-item").removeClass("on");

    // 방금 클릭한 나(this)의 부모(parent())에게 .on 추가
    $(this).parent().addClass("on");
  });
});
