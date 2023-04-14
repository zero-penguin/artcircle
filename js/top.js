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