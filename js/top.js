// ページが読み込まれた後に実行
$(document).ready(function() {
  // クラスがslideである要素に対し１回づつ関数を実行
  $(".slide").each(function() {
    // img要素内の画像要素の取得
    var $imgs = $(this).find('img');
    // 各スライド内の画像の数を数える
    var totalImgs = $imgs.length;
    // 現在表示されている画像インデックスの初期化
    var currentIdx = 0;

    // 現在の画像を次の画像に切り替える
    function slide() {
      // 現在の画像を非表示にする
      $($imgs[currentIdx]).fadeOut();
      // 次の画像（index数が次の画像）が表示される
      currentIdx = (currentIdx + 1) % totalImgs;
      $($imgs[currentIdx]).fadeIn();
    }

    // slide()（上の関数）を２５００ミリ秒ごとに実行
    var slideInterval = setInterval(slide, 2500);
    
    // マウスが画像の上にある場合にスライドショーを停止する
    $(this).hover(function() {
      clearInterval(slideInterval);
    }, function() {
      slideInterval = setInterval(slide, 2500);
    });
  });
});

// ドキュメントが読み込まれるのを待機
$(function(){
  // アニメーション速度を制御するduration変数を設定
  var duration = 300;
  // クラス名が"page_main"の要素内にあるaside要素を検索
  var aside = $(".page_main > aside");
  // aside要素内のbutton要素を検索し、クリックイベントリスナーを検索
  var asideButton = aside.find("button")
  .on("click", function(){
    // aside要素に"open"クラスをトグル
    aside.toggleClass("open");
    // もしaside要素が"open"クラスを持っていれば...
    if(aside.hasClass("open")){
      // aside要素をdurationの時間で左に70pxスライド
      aside.stop(true).animate({left: "-70px"}, duration);
      // ボタン要素内のimgタグのソースを"./img/button.png"に変更
      asideButton.find("img").attr("src", "./img/button.png");
      }else{
      // aside要素を元の位置に戻す
      aside.stop(true).animate({left: "-350px"}, duration);
      // ボタン要素内のimgタグのソースを元に戻す
      asideButton.find("img").attr("src", "./img/button.png");
      };
    });
  });