/* ProxyStack outbound-link registry.
 *
 * Вендорская ссылка пишется так:  <a data-out="iproyal" href="https://iproyal.com/">IPRoyal</a>
 * href — честный адрес, работает даже без JavaScript.
 * Партнёрский URL включается полем `affiliate`; тогда ссылка автоматически получает
 * rel="sponsored nofollow noopener" и на странице раскрывается дисклеймер.
 *
 * ВНИМАНИЕ, правила IPRoyal: запрещено покупать рекламу по их бренду в платном поиске и
 * запрещено размещать реферальные ссылки в Reddit / Discord / на форумах конкурентов.
 * Нарушение = отключение аккаунта и потеря комиссий. Продвижение — только свой сайт и органика.
 */
window.SITELINKS = {
  iproyal:    { url: "https://iproyal.com/",    affiliate: "https://iproyal.com/?r=1662324" },
  gologin:    { url: "https://gologin.com/",    affiliate: null },
  rdpm:       { url: "https://rdp.monster/",    affiliate: null },
  brightdata: { url: "https://brightdata.com/", affiliate: null },
  oxylabs:    { url: "https://oxylabs.io/",     affiliate: null }
};

(function () {
  "use strict";

  function upgrade() {
    var registry = window.SITELINKS || {};
    var links = document.querySelectorAll("a[data-out]");
    var marked = 0;

    for (var i = 0; i < links.length; i++) {
      var a = links[i];
      var entry = registry[a.getAttribute("data-out")];
      if (!entry) { continue; }

      if (entry.affiliate) {
        a.href = entry.affiliate;
        a.rel = "sponsored nofollow noopener";
        marked++;
      } else {
        a.href = entry.url;
        a.rel = "noopener";
      }
      a.target = "_blank";
    }

    if (marked > 0) {
      var notes = document.querySelectorAll(".sponsored-note");
      for (var j = 0; j < notes.length; j++) { notes[j].hidden = false; }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", upgrade);
  } else {
    upgrade();
  }
})();
