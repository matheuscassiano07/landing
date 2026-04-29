/**
 * ZIRA landing · oscillating float on scroll + “shake” on fast scrolling
 */
(function () {
  'use strict';

  var mqReduce =
    typeof window.matchMedia !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)');

  function reducedMotion() {
    try {
      return mqReduce && mqReduce.matches;
    } catch (e) {
      return false;
    }
  }

  function modalOpen() {
    var el = document.getElementById('schedule-modal');
    return el && !el.hidden;
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (reducedMotion()) return;

    var stage = document.getElementById('site-stage');
    if (!stage) return;

    var floatEls = document.querySelectorAll('.site-scroll-float');
    var lastY =
      typeof window.scrollY !== 'undefined'
        ? window.scrollY
        : typeof document.documentElement !== 'undefined'
          ? document.documentElement.scrollTop || 0
          : 0;
    var velSmooth = 0;
    var shakeImpulse = 0;
    var tBase =
      typeof performance !== 'undefined' ? performance.now() : Date.now();
    var rafId;

    window.addEventListener(
      'scroll',
      function () {
        var y =
          typeof window.scrollY !== 'undefined'
            ? window.scrollY
            : typeof document.documentElement !== 'undefined'
              ? document.documentElement.scrollTop || 0
              : 0;
        var d = Math.abs(y - lastY);
        lastY = y;
        velSmooth = velSmooth * 0.32 + d * 0.68;
        if (velSmooth > 36) {
          shakeImpulse = Math.min(130, shakeImpulse + velSmooth * 0.52);
        }
      },
      { passive: true }
    );

    function phaseVal(el, def) {
      var raw = el.getAttribute('data-float-phase');
      var v = raw != null ? parseFloat(raw, 10) : NaN;
      return !isNaN(v) ? v : def;
    }

    function tick(now) {
      if (reducedMotion()) {
        stage.style.transform = '';
        for (var j = 0; j < floatEls.length; j++) {
          floatEls[j].style.transform = '';
        }
        return;
      }

      var tMs =
        (typeof now === 'number' && !isNaN(now) ? now : performance.now()) -
        tBase;
      var t = tMs * 0.001;

      shakeImpulse *= 0.87;
      if (shakeImpulse < 0.25) shakeImpulse = 0;
      velSmooth *= 0.93;

      var yScroll =
        typeof window.scrollY !== 'undefined'
          ? window.scrollY
          : typeof document.documentElement !== 'undefined'
            ? document.documentElement.scrollTop || 0
            : 0;

      var s = Math.sin(yScroll * 0.00178);
      var co = Math.cos(yScroll * 0.0015);

      var i = 0;
      for (; i < floatEls.length; i++) {
        var el = floatEls[i];
        var phase = phaseVal(el, i) * 0.31 + i * 0.12;
        var ax =
          el.dataset.floatSx != null
            ? parseFloat(el.dataset.floatSx, 10)
            : 10 + (i % 3) * 3;
        var ay =
          el.dataset.floatSy != null
            ? parseFloat(el.dataset.floatSy, 10)
            : 8 + ((i + 2) % 4) * 2.25;
        if (isNaN(ax)) ax = 10;
        if (isNaN(ay)) ay = 9;

        var ox =
          Math.sin(yScroll * 0.002 + phase) * ax * 0.1 + co * ay * 0.055;
        var oy =
          Math.cos(yScroll * 0.0017 + phase * 1.07) * ay * 0.098 +
          s * ax * -0.048;

        el.style.transform =
          'translate3d(' + ox.toFixed(2) + 'px,' + oy.toFixed(2) + 'px,0)';
      }

      var mod = modalOpen();
      if (!mod && shakeImpulse > 0.45) {
        var jit = shakeImpulse;
        var wobX =
          Math.sin(t * 17.6) * jit * 0.068 + Math.sin(t * 31.9) * jit * 0.036;
        var wobY =
          Math.cos(t * 19.1) * jit * 0.056 + Math.sin(t * 27.3) * jit * 0.041;
        var rot =
          Math.sin(t * 22 + jit * 0.018) * jit * 0.004 +
          Math.cos(t * 18.05) * jit * 0.0027;
        stage.style.transform =
          'translate3d(' +
          wobX.toFixed(3) +
          'px,' +
          wobY.toFixed(3) +
          'px,0) rotate(' +
          rot.toFixed(6) +
          'deg)';
      } else {
        stage.style.transform = '';
      }

      rafId = window.requestAnimationFrame(tick);
    }

    rafId = window.requestAnimationFrame(tick);

    if (mqReduce && mqReduce.addEventListener) {
      mqReduce.addEventListener('change', function () {
        if (reducedMotion()) {
          if (typeof rafId === 'number' && cancelAnimationFrame) {
            cancelAnimationFrame(rafId);
          }
          stage.style.transform = '';
          for (var k = 0; k < floatEls.length; k++) {
            floatEls[k].style.transform = '';
          }
        }
      });
    }
  });
})();
