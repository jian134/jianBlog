// 随机 Banner 图片
(function () {
  var images = [
    '/img/MRX01.png',
    '/img/MRX02.png',
    '/img/banner001.png',
    '/img/kong.png',
    '/img/JKS01.png',
    '/img/foot.png'
  ];

  function setRandomBanner() {
    var img = images[Math.floor(Math.random() * images.length)];
    var el = document.querySelector('.page-header') || document.getElementById('page-header');
    if (el) {
      el.style.setProperty('background-image', 'url(' + img + ')', 'important');
    }
  }

  // 页面加载后执行
  if (document.readyState === 'complete') {
    setRandomBanner();
  } else {
    window.addEventListener('load', setRandomBanner);
  }
})();
