/* ==========================================================
   BINGO BLITZ - INTERACTIVE REPLICA ENGINE
   Reverse-Engineered with REA (Reverse Engineer Anything)
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileDrawer();
  initSmoothScroll();
  initFAQAccordion();
  initCityCarousel();
  initBingoSimulator();
  initModals();
});

/* ==========================================================
   1. SOUND FX ENGINE (Web Audio API Synthesizer)
   ========================================================== */
const SoundEngine = {
  ctx: null,
  enabled: true,

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
  },

  playDaub() {
    if (!this.enabled) return;
    this.init();
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(520, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12);

    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.15);
  },

  playCall() {
    if (!this.enabled) return;
    this.init();
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(660, ctx.currentTime + 0.2);

    gain.gain.setValueAtTime(0.25, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.25);
  },

  playWin() {
    if (!this.enabled) return;
    this.init();
    const ctx = this.ctx;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C E G C
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.12);

      gain.gain.setValueAtTime(0.3, ctx.currentTime + idx * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + idx * 0.12 + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + idx * 0.12);
      osc.stop(ctx.currentTime + idx * 0.12 + 0.4);
    });
  }
};

/* ==========================================================
   2. HEADER & NAVIGATION
   ========================================================== */
function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================
   3. MOBILE DRAWER MENU
   ========================================================== */
function initMobileDrawer() {
  const hamburger = document.querySelector('.header-hamburger');
  const closeBtn = document.querySelector('.mobile-drawer-close');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const overlay = document.querySelector('.mobile-drawer-overlay');
  const navLinks = document.querySelectorAll('.mobile-menu-links a');

  if (!hamburger || !drawer || !overlay) return;

  const openDrawer = () => {
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.classList.add('no-scroll');
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.classList.remove('no-scroll');
  };

  hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    openDrawer();
  });

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);
  navLinks.forEach(link => link.addEventListener('click', closeDrawer));
}

/* ==========================================================
   4. SMOOTH SCROLLING
   ========================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '#!' || !targetId) return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 90;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ==========================================================
   5. FAQ ACCORDION
   ========================================================== */
function initFAQAccordion() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const toggler = item.querySelector('.faq-toggler');
    const content = item.querySelector('.faq-content');
    if (!toggler || !content) return;

    toggler.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      items.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherContent = otherItem.querySelector('.faq-content');
          if (otherContent) otherContent.style.maxHeight = null;
        }
      });

      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        item.classList.remove('active');
        content.style.maxHeight = null;
      }
    });
  });
}

/* ==========================================================
   6. CITY TOUR CAROUSEL
   ========================================================== */
function initCityCarousel() {
  const track = document.querySelector('.carousel-track');
  const cards = document.querySelectorAll('.city-card');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  const dotsContainer = document.querySelector('.carousel-dots');

  if (!track || cards.length === 0) return;

  let currentIndex = 0;
  const totalCards = cards.length;

  function getCardsPerView() {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }

  function maxIndex() {
    return Math.max(0, totalCards - getCardsPerView());
  }

  // Create dots
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    const numDots = totalCards;
    for (let i = 0; i < numDots; i++) {
      const dot = document.createElement('div');
      dot.classList.add('carousel-dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        currentIndex = Math.min(i, maxIndex());
        updateCarousel();
      });
      dotsContainer.appendChild(dot);
    }
  }

  function updateCarousel() {
    const cardWidth = cards[0].getBoundingClientRect().width;
    const gap = 24;
    const offset = currentIndex * (cardWidth + gap);
    track.style.transform = `translateX(-${offset}px)`;

    // Update dots
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex();
      updateCarousel();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentIndex = currentIndex < maxIndex() ? currentIndex + 1 : 0;
      updateCarousel();
    });
  }

  window.addEventListener('resize', () => {
    if (currentIndex > maxIndex()) currentIndex = maxIndex();
    updateCarousel();
  });

  // Touch Swipe Support
  let touchStartX = 0;
  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
      currentIndex = currentIndex < maxIndex() ? currentIndex + 1 : 0;
      updateCarousel();
    } else if (touchEndX - touchStartX > 50) {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex();
      updateCarousel();
    }
  }, { passive: true });
}

/* ==========================================================
   7. INTERACTIVE BINGO SIMULATOR
   ========================================================== */
function initBingoSimulator() {
  const boardEl = document.querySelector('.bingo-grid');
  const callerBallEl = document.querySelector('.caller-ball');
  const callerTextEl = document.querySelector('.caller-text');
  const meterFillEl = document.querySelector('.meter-fill');
  const callBtn = document.querySelector('.btn-bingo-call');
  const autoCallBtn = document.querySelector('.btn-auto-call');

  if (!boardEl) return;

  // Bingo Card Numbers Structure: B(1-15), I(16-30), N(31-45), G(46-60), O(61-75)
  const columns = [
    getRandomSubset(1, 15, 5),
    getRandomSubset(16, 30, 5),
    getRandomSubset(31, 45, 5),
    getRandomSubset(46, 60, 5),
    getRandomSubset(61, 75, 5)
  ];

  // Center is free
  columns[2][2] = 'FREE';

  // Build 5x5 grid in row-major order
  boardEl.innerHTML = '';
  const cellElements = [];
  const daubedMatrix = Array(5).fill(null).map(() => Array(5).fill(false));
  daubedMatrix[2][2] = true; // Free spot is always daubed

  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      const val = columns[c][r];
      const cell = document.createElement('div');
      cell.classList.add('bingo-cell');
      cell.dataset.row = r;
      cell.dataset.col = c;
      cell.dataset.val = val;

      if (val === 'FREE') {
        cell.classList.add('free-spot', 'daubed');
        cell.innerHTML = 'FREE<br>★';
      } else {
        cell.textContent = val;
      }

      cell.addEventListener('click', () => {
        if (!cell.classList.contains('daubed')) {
          cell.classList.add('daubed');
          daubedMatrix[r][c] = true;
          SoundEngine.playDaub();
          updatePowerupMeter();
          checkBingoWin();
        }
      });

      boardEl.appendChild(cell);
      cellElements.push(cell);
    }
  }

  // Caller numbers
  const allNumbers = [];
  for (let i = 1; i <= 75; i++) {
    const letter = i <= 15 ? 'B' : i <= 30 ? 'I' : i <= 45 ? 'N' : i <= 60 ? 'G' : 'O';
    allNumbers.push({ letter, num: i });
  }
  shuffle(allNumbers);

  let currentCallIdx = 0;
  let autoTimer = null;

  function callNextNumber() {
    if (currentCallIdx >= allNumbers.length) {
      if (callerTextEl) callerTextEl.textContent = 'All Numbers Called!';
      return;
    }
    const called = allNumbers[currentCallIdx++];
    if (callerBallEl) {
      callerBallEl.textContent = `${called.letter}-${called.num}`;
      callerBallEl.style.transform = 'scale(1.2)';
      setTimeout(() => callerBallEl.style.transform = 'scale(1)', 200);
    }
    if (callerTextEl) callerTextEl.textContent = `Calling ${called.letter} ${called.num}`;
    SoundEngine.playCall();

    // Auto highlight matching cell if player desires or let them daub
    cellElements.forEach(cell => {
      if (cell.dataset.val == called.num) {
        cell.style.border = '3px solid #ffde59';
      }
    });
  }

  // Call button
  if (callerBallEl) {
    callerBallEl.addEventListener('click', callNextNumber);
  }

  if (autoCallBtn) {
    autoCallBtn.addEventListener('click', () => {
      if (autoTimer) {
        clearInterval(autoTimer);
        autoTimer = null;
        autoCallBtn.textContent = 'Auto Call';
      } else {
        callNextNumber();
        autoTimer = setInterval(callNextNumber, 3000);
        autoCallBtn.textContent = 'Pause Caller';
      }
    });
  }

  // Check Powerup Meter
  let daubCount = 1;
  function updatePowerupMeter() {
    daubCount++;
    const pct = Math.min(100, daubCount * 18);
    if (meterFillEl) meterFillEl.style.width = pct + '%';
  }

  // Check for Bingo Win
  function checkBingoWin() {
    let hasBingo = false;

    // Check rows
    for (let r = 0; r < 5; r++) {
      if (daubedMatrix[r].every(v => v)) hasBingo = true;
    }
    // Check columns
    for (let c = 0; c < 5; c++) {
      if ([0, 1, 2, 3, 4].every(r => daubedMatrix[r][c])) hasBingo = true;
    }
    // Check diagonals
    if ([0, 1, 2, 3, 4].every(i => daubedMatrix[i][i])) hasBingo = true;
    if ([0, 1, 2, 3, 4].every(i => daubedMatrix[i][4 - i])) hasBingo = true;

    if (hasBingo) {
      callBtn.style.animation = 'pulse-glow 1s infinite';
      callBtn.textContent = 'SHOUT BINGO! 🎉';
    }
  }

  if (callBtn) {
    callBtn.addEventListener('click', () => {
      SoundEngine.playWin();
      triggerConfetti();
      alert('🎊 BINGO BLITZ VICTORY! 🎊\nYou just scored 5,000 Coins & Free Travel Souvenirs!');
    });
  }

  // Helpers
  function getRandomSubset(min, max, count) {
    const nums = [];
    while (nums.length < count) {
      const n = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!nums.includes(n)) nums.push(n);
    }
    return nums.sort((a, b) => a - b);
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
}

/* ==========================================================
   8. MODALS & POPUPS
   ========================================================== */
function initModals() {
  const creditsModal = document.querySelector('#credits-modal');
  const playModal = document.querySelector('#play-modal');
  const closeButtons = document.querySelectorAll('.modal-close-btn');
  const overlays = document.querySelectorAll('.modal-overlay');

  // Open Free Credits Modal
  document.querySelectorAll('.open-credits-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (creditsModal) creditsModal.classList.add('active');
    });
  });

  // Open Play Now Modal
  document.querySelectorAll('.open-play-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (playModal) playModal.classList.add('active');
    });
  });

  // Close Modals
  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      overlays.forEach(m => m.classList.remove('active'));
    });
  });

  overlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.classList.remove('active');
    });
  });

  // Claim Daily Credits Button
  const claimBtn = document.querySelector('#claim-credits-btn');
  if (claimBtn) {
    claimBtn.addEventListener('click', () => {
      SoundEngine.playWin();
      triggerConfetti();
      claimBtn.textContent = 'CREDITS CLAIMED! (+100)';
      claimBtn.disabled = true;
      claimBtn.style.background = '#4cd137';
      setTimeout(() => {
        if (creditsModal) creditsModal.classList.remove('active');
      }, 1800);
    });
  }
}

/* ==========================================================
   9. CONFETTI EFFECT GENERATOR
   ========================================================== */
function triggerConfetti() {
  const colors = ['#01bdfc', '#ffc400', '#ff0055', '#4cd137', '#ffffff', '#9b51e0'];
  const count = 50;

  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.zIndex = '3000';
    particle.style.width = Math.random() * 10 + 6 + 'px';
    particle.style.height = Math.random() * 14 + 8 + 'px';
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.top = '50%';
    particle.style.left = '50%';
    particle.style.borderRadius = '3px';
    particle.style.pointerEvents = 'none';

    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 250 + 100;
    const destX = Math.cos(angle) * velocity;
    const destY = Math.sin(angle) * velocity + 150;

    document.body.appendChild(particle);

    particle.animate([
      { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
      { transform: `translate(${destX}px, ${destY}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
    ], {
      duration: Math.random() * 800 + 800,
      easing: 'cubic-bezier(0.25, 1, 0.5, 1)'
    }).onfinish = () => {
      particle.remove();
    };
  }
}
