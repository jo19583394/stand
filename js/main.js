// SP版グローバルメニューの表示・非表示
$(function(){
  $('.nav-btn').on('click',function(){
      $(this).toggleClass('-active');
      $('.nav').toggleClass('-active');
  });
});

// SP版メニュークリックで背景非表示
$(function(){
  $('.nav-item a').on('click', function(){
    $('.nav-btn').toggleClass('-active');
    $('.nav').toggleClass('-active');
  });
});

// アンカースクロール
$(document).ready(function(){
  //URLのハッシュ値を取得
  var urlHash = location.hash;

  var headerHight = 80;

  //ハッシュ値があればページ内スクロール
  if(urlHash) {
    //スクロールを0に戻す
    $('body,html').stop().scrollTop(0);
    setTimeout(function () {
      //ロード時の処理を待ち、時間差でスクロール実行
      scrollToAnker(urlHash) ;
    }, 100);
  }

  //通常のクリック時
  $('a[href^="#"]').click(function() {
    //ページ内リンク先を取得
    var href= $(this).attr("href");
    //リンク先が#か空だったらhtmlに
    var hash = href == "#" || href == "" ? 'html' : href;
    //スクロール実行
    scrollToAnker(hash);
    //リンク無効化
    return false;
  });

  // 関数：スムーススクロール
  // 指定したアンカー(#ID)へアニメーションでスクロール
  function scrollToAnker(hash) {
    var target = $(hash);
    var position = target.offset().top - headerHight;
    $('body,html').stop().animate({scrollTop:position}, 500);
  }
})
