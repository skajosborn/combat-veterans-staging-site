(function () {
  var html = document.documentElement;

  function toggleTheme() {
    html.classList.toggle('dark');
    try {
      localStorage.setItem('cvc-theme-dark', html.classList.contains('dark') ? '1' : '0');
    } catch (e) {}
  }

  try {
    var saved = localStorage.getItem('cvc-theme-dark');
    if (saved === '0') {
      html.classList.remove('dark');
    } else if (saved === '1') {
      html.classList.add('dark');
    }
  } catch (e) {}

  document.querySelectorAll('#cvc-theme-toggle, #cvc-theme-toggle-mobile').forEach(function (btn) {
    btn.addEventListener('click', toggleTheme);
  });

  var navToggle = document.getElementById('cvc-nav-toggle');
  var navPanel = document.getElementById('cvc-nav-mobile');
  if (navToggle && navPanel) {
    navToggle.addEventListener('click', function () {
      var open = navPanel.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  var heroToggle = document.getElementById('cvc-hero-quick-toggle');
  var heroMenu = document.getElementById('cvc-hero-quick-menu');
  var heroHub = document.getElementById('cvc-hero-hub');
  if (heroToggle && heroMenu && heroHub) {
    heroToggle.addEventListener('click', function () {
      var open = heroHub.classList.toggle('is-open');
      heroToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open) {
        heroMenu.removeAttribute('hidden');
      } else {
        heroMenu.setAttribute('hidden', '');
      }
    });
  }

  var typewriterRoot = document.querySelector('.cvc-hero-copy__headlines');
  var typewriterSegments = typewriterRoot
    ? typewriterRoot.querySelectorAll('.js-typewriter-segment')
    : [];
  if (typewriterSegments.length) {
    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var charDelay = 72;
    var segmentPause = 320;
    var startDelay = 550;
    var cursor = typewriterRoot.querySelector('.cvc-typewriter-cursor');
    var typewriterLines = typewriterRoot.querySelectorAll('[data-typewriter-line]');

    function charDelayMs(charIndex, totalChars) {
      if (totalChars <= 1) return charDelay;
      var progress = charIndex / (totalChars - 1);
      var ease = 0.82 + 0.18 * Math.sin(progress * Math.PI);
      return Math.round(charDelay * ease);
    }

    function revealLineForSegment(segment) {
      var line = segment.closest('[data-typewriter-line]');
      if (line) {
        line.classList.add('is-visible');
      }
    }

    function hideCursor() {
      if (cursor) {
        cursor.hidden = true;
      }
    }

    function placeCursor(segment) {
      if (!cursor || !segment) {
        hideCursor();
        return;
      }
      segment.appendChild(cursor);
      cursor.hidden = false;
    }

    if (reducedMotion) {
      typewriterSegments.forEach(function (segment) {
        segment.textContent = segment.getAttribute('data-text') || '';
        revealLineForSegment(segment);
      });
      hideCursor();
    } else {
      var segmentIndex = 0;
      var charIndex = 0;
      var timer;

      function tick() {
        var segment = typewriterSegments[segmentIndex];
        if (!segment) {
          hideCursor();
          return;
        }

        revealLineForSegment(segment);

        var text = segment.getAttribute('data-text') || '';
        charIndex += 1;
        segment.textContent = text.slice(0, charIndex);
        placeCursor(segment);

        if (charIndex >= text.length) {
          hideCursor();
          segmentIndex += 1;
          charIndex = 0;
          timer = window.setTimeout(tick, segmentPause);
        } else {
          timer = window.setTimeout(tick, charDelayMs(charIndex, text.length));
        }
      }

      timer = window.setTimeout(tick, startDelay);
    }
  }

  document.querySelectorAll('[data-cvc-carousel]').forEach(function (carousel) {
    var slides = carousel.querySelectorAll('[data-cvc-carousel-slide]');
    if (slides.length < 2) return;
    var index = 0;
    var prev = carousel.querySelector('[data-cvc-carousel-prev]');
    var next = carousel.querySelector('[data-cvc-carousel-next]');

    function show(i) {
      slides[index].classList.remove('is-active');
      index = (i + slides.length) % slides.length;
      slides[index].classList.add('is-active');
    }

    if (prev) prev.addEventListener('click', function () { show(index - 1); });
    if (next) next.addEventListener('click', function () { show(index + 1); });
    window.setInterval(function () { show(index + 1); }, 5000);
  });
})();
