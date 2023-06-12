$(function(){
    // 텝메뉴 - 클릭한 h2에 on 클래스 생성 / 나머지 형제는 on 클래스 삭제
    $("h2").on("click", function(){
        $(this).addClass("on") 
        .siblings("h2").removeClass("on"); 
    });
});