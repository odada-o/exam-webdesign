$(function () {
  // modal
  // .lst-bbs li:first-child 를 클릭했을 때
  $(".lst-bbs li:first-child").on("click", function () {
    // #modal에 클래스 active를 추가
    $("#modal").addClass("active");
  });
});
