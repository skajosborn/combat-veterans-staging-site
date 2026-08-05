(function () {
  var html = document.documentElement;

  function syncThemeToggleLabels() {
    var dark = html.classList.contains('dark');
    document.querySelectorAll('#cvc-theme-toggle, #cvc-theme-toggle-mobile').forEach(function (btn) {
      btn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    });
  }

  function toggleTheme() {
    html.classList.toggle('dark');
    try {
      localStorage.setItem('cvc-theme-dark', html.classList.contains('dark') ? '1' : '0');
    } catch (e) {}
    syncThemeToggleLabels();
  }

  try {
    var saved = localStorage.getItem('cvc-theme-dark');
    if (saved === '0') {
      html.classList.remove('dark');
    } else if (saved === '1') {
      html.classList.add('dark');
    }
  } catch (e) {}

  syncThemeToggleLabels();

  document.querySelectorAll('#cvc-theme-toggle, #cvc-theme-toggle-mobile').forEach(function (btn) {
    btn.addEventListener('click', toggleTheme);
  });

  var navToggle = document.getElementById('cvc-nav-toggle');
  var navPanel = document.getElementById('cvc-nav-mobile');
  if (navToggle && navPanel) {
    navToggle.addEventListener('click', function () {
      var open = navPanel.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.documentElement.classList.toggle('nav-menu-open', open);
      if (open) {
        var cursor = document.querySelector('.cvc-typewriter-cursor');
        if (cursor) {
          cursor.hidden = true;
        }
      } else {
        navPanel.querySelectorAll('.menu-item-has-children').forEach(function (item) {
          item.classList.remove('is-submenu-open');
          var toggleLink = item.querySelector(':scope > a');
          if (toggleLink) {
            toggleLink.setAttribute('aria-expanded', 'false');
          }
        });
      }
    });
  }

  function toggleMobileSubmenu(link) {
    var parent = link.parentElement;
    if (!parent) return;
    var willOpen = !parent.classList.contains('is-submenu-open');
    parent.classList.toggle('is-submenu-open', willOpen);
    link.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
  }

  document.querySelectorAll('.cvc-nav__mobile-panel .menu-item-has-children > a').forEach(function (link) {
    link.setAttribute('aria-expanded', 'false');
    link.addEventListener('click', function (e) {
      if (!window.matchMedia('(max-width: 1023px)').matches) return;
      e.preventDefault();
      toggleMobileSubmenu(link);
    });
  });

  function closeDesktopSubmenuItem(item) {
    clearDesktopSubmenuTimer(item);
    item.classList.remove('is-submenu-open');
    var link = item.querySelector(':scope > a');
    if (link) {
      link.setAttribute('aria-expanded', 'false');
    }
  }

  function closeNestedFlyoutsInSubmenu(submenu, except) {
    if (!submenu) return;
    submenu.querySelectorAll(':scope > .menu-item-has-children').forEach(function (item) {
      if (item !== except) {
        closeDesktopSubmenuItem(item);
      }
    });
  }

  function closeDesktopSubmenus(except) {
    document.querySelectorAll('.cvc-nav__desktop .menu-item-has-children.is-submenu-open').forEach(function (item) {
      if (item === except) return;
      if (except && item.contains(except)) return;
      closeDesktopSubmenuItem(item);
    });
  }

  var desktopSubmenuTimers = new WeakMap();
  var DESKTOP_NAV_MQ = window.matchMedia('(min-width: 1024px)');
  var SUBMENU_CLOSE_DELAY = 320;

  function clearDesktopSubmenuTimer(item) {
    var timer = desktopSubmenuTimers.get(item);
    if (timer) {
      window.clearTimeout(timer);
      desktopSubmenuTimers.delete(item);
    }
  }

  function openDesktopSubmenu(item) {
    clearDesktopSubmenuTimer(item);
    closeDesktopSubmenus(item);
    var parentSubmenu = item.parentElement;
    if (parentSubmenu && parentSubmenu.classList.contains('sub-menu')) {
      closeNestedFlyoutsInSubmenu(parentSubmenu, item);
    }
    item.classList.add('is-submenu-open');
    var link = item.querySelector(':scope > a');
    if (link) {
      link.setAttribute('aria-expanded', 'true');
    }
  }

  function scheduleCloseDesktopSubmenu(item) {
    clearDesktopSubmenuTimer(item);
    desktopSubmenuTimers.set(
      item,
      window.setTimeout(function () {
        closeDesktopSubmenuItem(item);
        desktopSubmenuTimers.delete(item);
      }, SUBMENU_CLOSE_DELAY)
    );
  }

  function getDirectSubmenuLi(submenu, target) {
    if (!(target instanceof Element)) return null;
    var li = target.closest('li');
    while (li && li.parentElement !== submenu) {
      li = li.parentElement ? li.parentElement.closest('li') : null;
    }
    return li && li.parentElement === submenu ? li : null;
  }

  document.querySelectorAll('.cvc-nav__desktop .menu > .menu-item-has-children > .sub-menu').forEach(function (submenu) {
    submenu.addEventListener('mouseover', function (e) {
      if (!DESKTOP_NAV_MQ.matches) return;
      var li = getDirectSubmenuLi(submenu, e.target);
      if (!li) return;
      if (li.classList.contains('menu-item-has-children')) {
        openDesktopSubmenu(li);
        return;
      }
      closeNestedFlyoutsInSubmenu(submenu, null);
    });
  });

  document.querySelectorAll('.cvc-nav__desktop .menu > .menu-item-has-children').forEach(function (item) {
    item.addEventListener('mouseenter', function () {
      if (!DESKTOP_NAV_MQ.matches) return;
      openDesktopSubmenu(item);
    });
    item.addEventListener('mouseleave', function () {
      if (!DESKTOP_NAV_MQ.matches) return;
      scheduleCloseDesktopSubmenu(item);
    });
  });

  document.querySelectorAll('.cvc-nav__desktop .menu > .menu-item-has-children > .sub-menu .menu-item-has-children').forEach(function (item) {
    item.addEventListener('mouseleave', function (e) {
      if (!DESKTOP_NAV_MQ.matches) return;
      var submenu = item.parentElement;
      if (!submenu) return;
      var related = e.relatedTarget;
      if (related instanceof Element) {
        var nextLi = getDirectSubmenuLi(submenu, related);
        if (nextLi && nextLi !== item) return;
      }
      scheduleCloseDesktopSubmenu(item);
    });
  });

  document.querySelectorAll('.cvc-nav__desktop .cvc-nav__menu-wrap > .menu > .menu-item-has-children > a').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (window.matchMedia('(min-width: 1024px)').matches) {
        e.preventDefault();
        var parent = link.parentElement;
        if (!parent) return;
        var willOpen = !parent.classList.contains('is-submenu-open');
        closeDesktopSubmenus(parent);
        parent.classList.toggle('is-submenu-open', willOpen);
        link.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      }
    });
  });

  document.querySelectorAll('.cvc-nav__desktop .sub-menu > .menu-item-has-children > a').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (!window.matchMedia('(min-width: 1024px)').matches) return;
      e.preventDefault();
      e.stopPropagation();
      var parent = link.parentElement;
      if (!parent) return;
      var willOpen = !parent.classList.contains('is-submenu-open');
      if (willOpen) {
        openDesktopSubmenu(parent);
      } else {
        closeDesktopSubmenuItem(parent);
      }
    });
  });

  document.addEventListener('click', function (e) {
    if (!(e.target instanceof Element)) return;
    if (!e.target.closest('.cvc-nav__desktop .menu-item-has-children')) {
      closeDesktopSubmenus(null);
    }
  });

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
      if (!cursor || !segment || document.documentElement.classList.contains('nav-menu-open')) {
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
        if (document.documentElement.classList.contains('nav-menu-open')) {
          hideCursor();
          return;
        }

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

  document.querySelectorAll('[data-cvc-events-carousel]').forEach(function (card) {
    var slides = card.querySelectorAll('.cvc-hero-feature-card__slide');
    var copies = card.querySelectorAll('.cvc-hero-feature-card__copy-slide');
    var dots = card.querySelectorAll('.cvc-hero-feature-card__dot');
    if (slides.length < 2) return;

    var index = 0;
    var paused = false;
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function show(i) {
      slides[index].classList.remove('is-active');
      if (copies[index]) copies[index].classList.remove('is-active');
      if (dots[index]) dots[index].classList.remove('is-active');
      index = (i + slides.length) % slides.length;
      slides[index].classList.add('is-active');
      if (copies[index]) copies[index].classList.add('is-active');
      if (dots[index]) dots[index].classList.add('is-active');
    }

    card.addEventListener('mouseenter', function () { paused = true; });
    card.addEventListener('mouseleave', function () { paused = false; });
    card.addEventListener('focusin', function () { paused = true; });
    card.addEventListener('focusout', function () { paused = false; });

    if (!reduceMotion) {
      window.setInterval(function () {
        if (!paused) show(index + 1);
      }, 4500);
    }
  });
})();
