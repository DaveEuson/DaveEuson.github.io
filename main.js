/* One piece of state: `active` — a thread key, a strip-only photo key, or
   null for resting. Everything else derives from it: which backdrop layer is
   opaque, which detail panel is up, which phrase is lit. */

(function () {
  'use strict';

  var THREADS = ['arch', 'cast', 'ai', 'music', 'code', 'photo'];

  var page    = document.getElementById('page');
  var layers  = document.querySelectorAll('.backdrop__layer[data-layer]');
  var panels  = document.querySelectorAll('.panel');
  var phrases = document.querySelectorAll('.thread[data-thread]');
  var thumbs  = document.querySelectorAll('.strip__thumb[data-thread]');

  var active = null;

  // Which input is being used right now, not which inputs exist. A touchscreen
  // laptop matches (hover: hover) and (pointer: fine) because a mouse is
  // attached, so a media query would hand a finger tap straight to the link
  // and the visitor would never see the panel. pointerType is per-interaction,
  // so the same device gets mouse behavior from the mouse and tap behavior
  // from the screen. Seeded from the media query so browsers without
  // PointerEvent keep the old behavior instead of none.
  var lastPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches ? 'mouse' : 'touch';

  if (window.PointerEvent) {
    // pointerover as well as pointerdown: a mouse arriving over a phrase fires
    // no pointerdown at all, and on a hybrid the pointer must be able to flip
    // back to 'mouse' without the visitor clicking anything first. Both fire
    // ahead of the mouse events they precede, in both input modes.
    ['pointerover', 'pointerdown'].forEach(function (type) {
      document.addEventListener(type, function (e) {
        lastPointer = e.pointerType || 'mouse';
      }, true);
    });
  }

  function pointerIsMouse() { return lastPointer === 'mouse'; }

  function setActive(key) {
    if (key === active) return;
    active = key;

    // Strip-only photos have a backdrop but no panel — the detail column
    // clears and the photograph carries the moment on its own.
    var panelKey = THREADS.indexOf(key) !== -1 ? key : (key === null ? 'idle' : '');

    each(layers,  function (el) { toggle(el, el.dataset.layer === key); });
    each(panels,  function (el) { toggle(el, el.dataset.panel === panelKey); });
    each(phrases, function (el) { toggle(el, el.dataset.thread === key); });
    each(thumbs,  function (el) { toggle(el, el.dataset.thread === key); });
  }

  function each(list, fn) { Array.prototype.forEach.call(list, fn); }
  function toggle(el, on) { el.classList.toggle('is-active', on); }

  // `none` is the resting thumbnail (bay) — hovering it returns to rest.
  function keyOf(el) {
    var k = el.dataset.thread;
    return k === 'none' ? null : k;
  }

  each(phrases, function (el) {
    // A tap emits a synthetic mouseenter before its click. Left ungated, that
    // opens the thread during the same tap that is about to be tested against
    // `active`, the guard passes, and the link fires on the first tap — the
    // two-step never happens on any touch device.
    el.addEventListener('mouseenter', function () {
      if (!pointerIsMouse()) return;
      setActive(keyOf(el));
    });

    // Keyboard users get the same reveal on focus; hover alone would lock
    // them out of the six panels entirely.
    el.addEventListener('focus', function () { setActive(keyOf(el)); });

    // Tapped rather than clicked: the first tap opens the thread and the
    // second follows the link, otherwise a visitor who never hovers could
    // never read the detail. A keyboard Enter arrives with no pointerdown,
    // but focus has already set active, so the guard below lets it through.
    el.addEventListener('click', function (e) {
      if (pointerIsMouse() || active === keyOf(el)) return;
      e.preventDefault();
      setActive(keyOf(el));
    });
  });

  each(thumbs, function (el) {
    el.addEventListener('mouseenter', function () {
      if (!pointerIsMouse()) return;
      setActive(keyOf(el));
    });
    el.addEventListener('click', function () { setActive(keyOf(el)); });
  });

  page.addEventListener('mouseleave', function () {
    if (!pointerIsMouse()) return;
    setActive(null);
  });

  // For a tap, dead space is the way back to rest. A mouse already has
  // mouseleave, so it keeps the designed behavior untouched.
  document.addEventListener('click', function (e) {
    if (pointerIsMouse()) return;
    if (!e.target.closest('[data-thread]')) setActive(null);
  });
})();
