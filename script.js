/* ============================================================
   Collegiate Church Network — 2025 Annual Impact Report
   script.js
   ============================================================ */

(function () {
  'use strict';

  /* ---------- 1. Scroll Progress Bar ---------- */
  const progressBar = document.getElementById('progressBar');

  function updateProgressBar() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = scrollPercent + '%';
  }

  window.addEventListener('scroll', updateProgressBar, { passive: true });
  updateProgressBar();

  /* ---------- 2. Fade-In on Scroll (IntersectionObserver) ---------- */
  const fadeElements = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    fadeElements.forEach((el) => fadeObserver.observe(el));
  } else {
    // Fallback: just show everything
    fadeElements.forEach((el) => el.classList.add('visible'));
  }

  /* ---------- 3. Count-Up Animation for Stats ---------- */
  const statNumbers = document.querySelectorAll('.stat__number[data-target]');
  let statsAnimated = false;

  function animateCountUp(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const prefix = el.getAttribute('data-prefix') || '';
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 2000; // ms
    const startTime = performance.now();

    function easeOutQuart(t) {
      return 1 - Math.pow(1 - t, 4);
    }

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      const current = Math.round(easedProgress * target);

      el.textContent = prefix + current.toLocaleString() + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = prefix + target.toLocaleString() + suffix;
      }
    }

    requestAnimationFrame(update);
  }

  if ('IntersectionObserver' in window) {
    const statsSection = document.getElementById('impact');

    if (statsSection) {
      const statsObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !statsAnimated) {
              statsAnimated = true;
              // Stagger the animations slightly
              statNumbers.forEach((el, index) => {
                setTimeout(() => animateCountUp(el), index * 150);
              });
              statsObserver.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.3,
        }
      );

      statsObserver.observe(statsSection);
    }
  } else {
    // Fallback: just show final numbers
    statNumbers.forEach((el) => {
      const target = parseInt(el.getAttribute('data-target'), 10);
      const prefix = el.getAttribute('data-prefix') || '';
      const suffix = el.getAttribute('data-suffix') || '';
      el.textContent = prefix + target.toLocaleString() + suffix;
    });
  }

  /* ---------- 4. Smooth Scroll for Hero Indicator ---------- */
  const scrollIndicator = document.querySelector('.hero__scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      const letterSection = document.getElementById('letter');
      if (letterSection) {
        letterSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
    scrollIndicator.style.cursor = 'pointer';
  }

  /* ---------- 5. Map Dot Tooltips (optional enhancement) ---------- */
  const mapDots = document.querySelectorAll('.us-map__dot');
  mapDots.forEach((dot) => {
    dot.addEventListener('mouseenter', function () {
      this.setAttribute('r', '10');
    });
    dot.addEventListener('mouseleave', function () {
      // Restore original radius
      const originalR = this.getAttribute('data-original-r') || '7';
      this.setAttribute('r', originalR);
    });
    // Store original radius
    dot.setAttribute('data-original-r', dot.getAttribute('r'));
  });
})();
