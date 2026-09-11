document.addEventListener('DOMContentLoaded', function () {

  function $(id) { return document.getElementById(id); }
  function setText(id, value) { var el = $(id); if (el && value !== undefined) el.textContent = value; }

  /* ---------- Small on-screen message (replaces pop-up alerts) ---------- */
  var toast = $('toast');
  var toastTimer = null;
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 4500);
  }

  /* ---------- Hero text ---------- */
  setText('heroEyebrow', CONFIG.heroEyebrow);
  setText('heroTitle', CONFIG.heroTitle);
  setText('heroSub', CONFIG.heroSubtitle);
  document.title = CONFIG.heroTitle || document.title;

  /* ---------- Anniversary counter (counts up from the first date) ---------- */
  function parseLocalDate(str) {
    var p = String(str).split('-');
    return new Date(parseInt(p[0], 10), parseInt(p[1], 10) - 1, parseInt(p[2], 10));
  }
  function prettyDate(d) {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
  }
  var firstDate = parseLocalDate(CONFIG.firstDate);
  var anniversary = parseLocalDate(CONFIG.anniversaryDate);
  setText('counterLabel', CONFIG.counterLabel || ('Together since ' + prettyDate(firstDate)));

  function pad(n) { return n < 10 ? '0' + n : String(n); }
  function tick() {
    var now = new Date();
    var diff = now - firstDate;
    if (diff < 0) diff = 0;
    var totalSec = Math.floor(diff / 1000);
    $('cDays').textContent = Math.floor(totalSec / 86400);
    $('cHours').textContent = pad(Math.floor(totalSec / 3600) % 24);
    $('cMins').textContent = pad(Math.floor(totalSec / 60) % 60);
    $('cSecs').textContent = pad(totalSec % 60);

    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var daysTo = Math.round((anniversary - today) / 86400000);
    var note;
    if (daysTo > 1) note = daysTo + ' days until our first anniversary 🎉';
    else if (daysTo === 1) note = 'Tomorrow is our first anniversary! 🎉';
    else if (daysTo === 0) note = 'Today is our first anniversary! 🎉❤️';
    else note = 'One year and ' + (-daysTo) + (daysTo === -1 ? ' day' : ' days') + ' of us ❤️';
    $('counterNote').textContent = note;
  }
  tick();
  setInterval(tick, 1000);

  /* ---------- Photo wall (polaroids) ---------- */
  var photoWall = $('photoWall');
  var photos = CONFIG.photos || [];
  photos.forEach(function (p, i) {
    var card = document.createElement('div');
    card.className = 'polaroid';
    card.style.animationDelay = Math.min(i * 60, 900) + 'ms';

    var img = document.createElement('img');
    img.src = p.thumb || p.src;
    img.alt = p.caption ? p.caption : ('Our memory ' + (i + 1));
    img.loading = 'lazy';
    img.decoding = 'async';
    if (p.focus) img.style.objectPosition = p.focus;
    img.onerror = function () {
      var ph = document.createElement('div');
      ph.className = 'photo-placeholder';
      ph.innerHTML = '<div style="font-size:1.8rem;">🐼📷</div><div>Add your photo here</div><div style="font-size:0.7rem;opacity:0.7;">' + (p.thumb || p.src) + '</div>';
      card.replaceChild(ph, img);
    };
    card.appendChild(img);

    if (p.caption) {
      var cap = document.createElement('span');
      cap.className = 'cap';
      cap.textContent = p.caption;
      card.appendChild(cap);
    }

    card.addEventListener('click', function () {
      if (card.querySelector('img')) openLightbox(i);
    });

    photoWall.appendChild(card);
  });

  /* ---------- Our Story ---------- */
  setText('storySub', CONFIG.storySubtitle);
  var storyText = $('storyText');
  (CONFIG.story || []).forEach(function (para) {
    var el = document.createElement('p');
    el.className = 'intro-text';
    el.textContent = para;
    storyText.appendChild(el);
  });
  setText('storySignoff', CONFIG.storySignoff);

  /* ---------- Our Little Moments ---------- */
  var momentsGrid = $('momentsGrid');
  (CONFIG.littleMoments || []).forEach(function (m) {
    var card = document.createElement('div');
    card.className = 'moment-card reveal';
    card.innerHTML = '<span class="icon"></span><h3></h3><p></p>';
    card.querySelector('.icon').textContent = m.icon;
    card.querySelector('h3').textContent = m.title;
    card.querySelector('p').textContent = m.text;
    momentsGrid.appendChild(card);
  });

  /* ---------- Timeline ---------- */
  var timelineList = $('timelineList');
  (CONFIG.timeline || []).forEach(function (t) {
    var item = document.createElement('div');
    item.className = 'timeline-item reveal';
    item.innerHTML = '<div class="t-month"></div><h3></h3><p></p>';
    item.querySelector('.t-month').textContent = t.month;
    item.querySelector('h3').textContent = t.label;
    item.querySelector('p').textContent = t.text;
    timelineList.appendChild(item);
  });

  /* ---------- 20 Reasons (flip cards) ---------- */
  var loveGrid = $('loveGrid');
  (CONFIG.loveList || []).forEach(function (l, i) {
    var card = document.createElement('div');
    card.className = 'love-card reveal';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.innerHTML = '<div class="love-card-inner"><div class="love-face love-front"><span class="num"></span><span class="icon"></span><span class="front-text"></span></div><div class="love-face love-back"></div></div>';
    card.querySelector('.num').textContent = i + 1;
    card.querySelector('.icon').textContent = l.icon;
    card.querySelector('.front-text').textContent = l.front;
    card.querySelector('.love-back').textContent = l.back;
    function flip() { card.classList.toggle('flipped'); }
    card.addEventListener('click', flip);
    card.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(); } });
    loveGrid.appendChild(card);
  });

  /* ---------- Memory Jar ---------- */
  setText('jarSub', CONFIG.memoryJarSubtitle);
  var jarBtn = $('jarBtn');
  var jarNote = $('jarNote');
  var jarNoteText = $('jarNoteText');
  var jarCount = $('jarCount');
  var notes = CONFIG.memoryJar || [];
  var noteIndex = -1;
  jarBtn.addEventListener('click', function () {
    if (!notes.length) return;
    noteIndex = (noteIndex + 1) % notes.length;
    jarBtn.classList.remove('shake');
    void jarBtn.offsetWidth; // restart the animation
    jarBtn.classList.add('shake');
    jarNote.classList.remove('show');
    setTimeout(function () {
      jarNoteText.textContent = notes[noteIndex];
      jarCount.textContent = 'note ' + (noteIndex + 1) + ' of ' + notes.length;
      jarNote.classList.add('show');
    }, 180);
  });

  /* ---------- Letter ---------- */
  var letter = CONFIG.letter || {};
  setText('letterGreeting', letter.greeting);
  var letterBody = $('letterBody');
  (letter.paragraphs || []).forEach(function (para) {
    var el = document.createElement('p');
    el.textContent = para;
    letterBody.appendChild(el);
  });
  setText('letterSignoff', letter.signoff);

  /* ---------- Secret message ---------- */
  var secretBtn = $('secretBtn');
  var secretMessage = $('secretMessage');
  var secretLabel = CONFIG.secretButton || 'Open My Heart ❤️';
  secretBtn.textContent = secretLabel;
  setText('secretText', CONFIG.secretMessage);
  secretBtn.addEventListener('click', function () {
    secretMessage.classList.toggle('show');
    secretBtn.textContent = secretMessage.classList.contains('show') ? 'Close 🐼' : secretLabel;
  });

  /* ---------- Final anniversary reveal ---------- */
  setText('revealTease', CONFIG.revealTease);
  setText('revealDate', CONFIG.revealDate);
  setText('finalLine1', CONFIG.finalLine1);
  setText('finalLine2', CONFIG.finalLine2);
  setText('finalBig', CONFIG.finalBig);
  setText('finalClosing', CONFIG.finalClosing);
  var revealBtn = $('revealBtn');
  var finalCover = $('finalCover');
  var finalContent = $('finalContent');
  var burst = $('burst');
  revealBtn.textContent = CONFIG.revealButton || 'Tap to open ❤️';

  function burstHearts() {
    var emojis = ['❤️', '💕', '💗', '🐼', '✨', '💖'];
    for (var i = 0; i < 36; i++) {
      var h = document.createElement('span');
      h.className = 'burst-heart';
      h.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      h.style.left = (50 + (Math.random() - 0.5) * 20) + '%';
      h.style.setProperty('--dx', ((Math.random() - 0.5) * 90) + 'vw');
      h.style.setProperty('--dy', (-30 - Math.random() * 60) + 'vh');
      h.style.setProperty('--rot', ((Math.random() - 0.5) * 540) + 'deg');
      h.style.animationDelay = (Math.random() * 0.3) + 's';
      h.style.fontSize = (1 + Math.random() * 1.6) + 'rem';
      burst.appendChild(h);
    }
    setTimeout(function () { burst.innerHTML = ''; }, 3200);
  }
  function revealFinal(withBurst) {
    finalCover.classList.add('hidden');
    finalContent.classList.add('show');
    if (withBurst) burstHearts();
  }
  if (CONFIG.revealOnTap === false) {
    revealFinal(false);
  } else {
    revealBtn.addEventListener('click', function () { revealFinal(true); });
  }

  /* ---------- Lightbox with arrows, keyboard and swipe ---------- */
  var lightbox = $('lightbox');
  var lightboxImg = $('lightboxImg');
  var lightboxCaption = $('lightboxCaption');
  var lightboxCount = $('lightboxCount');
  var current = 0;

  function preload(i) {
    if (!photos.length) return;
    var n = ((i % photos.length) + photos.length) % photos.length;
    var im = new Image();
    im.src = photos[n].src;
  }
  function showPhoto(i) {
    if (!photos.length) return;
    current = ((i % photos.length) + photos.length) % photos.length;
    var p = photos[current];
    lightboxImg.classList.remove('loaded');
    lightboxImg.src = p.src;
    lightboxImg.alt = p.caption || ('Our memory ' + (current + 1));
    lightboxCaption.textContent = p.caption || '';
    lightboxCount.textContent = (current + 1) + ' / ' + photos.length;
    preload(current + 1);
    preload(current - 1);
  }
  lightboxImg.addEventListener('load', function () { lightboxImg.classList.add('loaded'); });
  window.openLightbox = function (i) {
    showPhoto(i);
    lightbox.classList.add('open');
    document.body.classList.add('no-scroll');
  };
  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }
  $('lightboxClose').addEventListener('click', closeLightbox);
  $('lightboxPrev').addEventListener('click', function (e) { e.stopPropagation(); showPhoto(current - 1); });
  $('lightboxNext').addEventListener('click', function (e) { e.stopPropagation(); showPhoto(current + 1); });
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox || e.target.classList.contains('lightbox-figure')) closeLightbox();
  });
  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowRight') showPhoto(current + 1);
    else if (e.key === 'ArrowLeft') showPhoto(current - 1);
  });

  // touch swipe: left/right changes photo, a clear downward swipe closes
  var touchStartX = 0, touchStartY = 0, touching = false;
  lightbox.addEventListener('touchstart', function (e) {
    if (e.touches.length !== 1) return;
    touching = true;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });
  lightbox.addEventListener('touchend', function (e) {
    if (!touching) return;
    touching = false;
    var t = e.changedTouches[0];
    var dx = t.clientX - touchStartX;
    var dy = t.clientY - touchStartY;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      showPhoto(dx < 0 ? current + 1 : current - 1);
    } else if (dy > 90 && Math.abs(dy) > Math.abs(dx)) {
      closeLightbox();
    }
  }, { passive: true });

  /* ---------- Music ---------- */
  var musicBtn = $('musicBtn');
  var bgMusic = $('bgMusic');
  bgMusic.src = CONFIG.musicFile;
  var songName = CONFIG.songTitle ? '“' + CONFIG.songTitle + '”' : 'Our Song';
  var playLabel = '🎵 Play ' + songName;
  var pauseLabel = '🔇 Pause ' + songName;
  musicBtn.textContent = playLabel;
  var playing = false;
  musicBtn.addEventListener('click', function () {
    if (!playing) {
      bgMusic.play().then(function () {
        playing = true;
        musicBtn.textContent = pauseLabel;
      }).catch(function () {
        var who = CONFIG.songTitle ? (' (' + CONFIG.songTitle + (CONFIG.songArtist ? ' — ' + CONFIG.songArtist : '') + ')') : '';
        showToast('Add the song file to the music folder and name it exactly: our-song.mp3' + who);
      });
    } else {
      bgMusic.pause();
      playing = false;
      musicBtn.textContent = playLabel;
    }
  });
  bgMusic.addEventListener('error', function () {
    if (playing) { playing = false; musicBtn.textContent = playLabel; }
  });

  /* ---------- Scroll reveal animations ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ---------- Floating hearts ---------- */
  var floatingHearts = $('floatingHearts');
  var heartEmojis = ['❤️', '💕', '🐼', '💗'];
  function spawnHeart() {
    var heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (8 + Math.random() * 6) + 's';
    heart.style.fontSize = (1 + Math.random() * 1.2) + 'rem';
    floatingHearts.appendChild(heart);
    setTimeout(function () { heart.remove(); }, 15000);
  }
  setInterval(spawnHeart, 1200);
  for (var i = 0; i < 6; i++) { setTimeout(spawnHeart, i * 400); }
});
