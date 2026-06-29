(function () {
  var buttons = document.querySelectorAll('[data-lang-btn]');
  var blocks = document.querySelectorAll('.lang-block');
  var stored = localStorage.getItem('site-lang');
  var initial = stored || 'bn';

  function setLang(lang) {
    blocks.forEach(function (block) {
      block.hidden = block.dataset.lang !== lang;
    });
    buttons.forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.dataset.langBtn === lang));
    });
    localStorage.setItem('site-lang', lang);
  }

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLang(btn.dataset.langBtn);
    });
  });

  setLang(initial);
})();
