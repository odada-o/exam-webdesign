$(function () {
  // nav
  // #gnb .link-depth1 을 클릭했을 때
  // $("#gnb .link-depth1").on("click", function(){
  //   // .depth1 > li 에 있는 .active 삭제
  //   $(".depth1 > li").removeClass("active");
  //   // 내가 클릭한 아이의 엄마에게 .active 추가
  //   $(this).parent().addClass("active")
  //   // $(this).parents("li").addClass("active")
  // })

  // 조건문
  $("#gnb .link-depth1").on("click", function(){
    if($(this).parent().hasClass("active")){
      // 만약 .active 가지고 있다면
      $(this).parent().removeClass("active");
    }else{
      // 가지고 있지 않다면
      $(".depth1 > li").removeClass("active");
      $(this).parent().addClass("active")
    }

  })
});
