(function () {
  "use strict";

  // モバイルナビ開閉
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("global-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // スクロールで要素をフェードイン表示
  var targets = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && targets.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    targets.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    targets.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  // メールアドレスをスパムボットから保護しつつ表示する
  // data-user / data-domain を組み立てて mailto リンク化
  document.querySelectorAll("[data-user][data-domain]").forEach(function (el) {
    var address = el.dataset.user + "@" + el.dataset.domain;
    el.textContent = address;
    if (el.tagName === "A") {
      el.href = "mailto:" + address;
    }
  });
})();
