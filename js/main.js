$(function () {
    /*=================================================
    ハンバーガーメニュー
    ===================================================*/
  $(".toggle_btn").on("click", function () {
  
    ($("header").toggleClass("open"));
  })
  
  
  // #maskのエリアをクリックした時にメニューを閉じる
  $("#mask").on("click", function () {
    // #maskをクリックしたときに実行する
    $("header").toggleClass("open");
  
  });
  
  // リンクをクリックした時にメニューを閉じる
  $("#navi a").on("click", function () {
  $("header").toggleClass("open");
  });

});