/* Calculus Midterm MCQ Practice — client-side only, localStorage progress.
   Questions come from mcqs.js (const MCQS). Each question has:
   n, topic, q, options[4], answer ("A"–"D"), explain (one line). */
(function () {
  'use strict';

  var LETTERS = ['A', 'B', 'C', 'D'];

  /* ---------- topics ---------- */
  var TOPICS = [
    { id: 'all', label: 'Sab Topics' },
    { id: 'function', label: 'Function / Domain / Range' },
    { id: 'limits-simple', label: 'Limits (Simple)' },
    { id: 'limits-multi', label: 'Limits (Multivariable)' },
    { id: 'continuity', label: 'Continuity / Discontinuity' },
    { id: 'deriv-basic', label: 'Derivatives (Basic)' },
    { id: 'product-quotient', label: 'Product & Quotient Rule' },
    { id: 'trig', label: 'Trig Derivatives' },
    { id: 'log-exp', label: 'Log & Exp Derivatives' },
    { id: 'partial', label: 'Partial Derivatives' }
  ];
  function topicLabel(id) {
    for (var i = 0; i < TOPICS.length; i++) if (TOPICS[i].id === id) return TOPICS[i].label;
    return id;
  }
  function topicCount(id) {
    if (id === 'all') return MCQS.length;
    var c = 0;
    MCQS.forEach(function (q) { if (q.topic === id) c++; });
    return c;
  }

  /* ---------- storage keys ---------- */
  var K_ANSWERS = 'calc-mcqs-answers';
  var K_SHUFFLE = 'calc-mcqs-shuffle';
  var K_TOPIC = 'calc-mcqs-topic';
  function orderKey(f) { return 'calc-mcqs-order-' + f; }
  function posKey(f) { return 'calc-mcqs-pos-' + f; }

  /* ---------- storage helpers ---------- */
  function loadAnswers() {
    try { return JSON.parse(localStorage.getItem(K_ANSWERS) || '{}'); } catch (e) { return {}; }
  }
  function saveAnswers(a) { localStorage.setItem(K_ANSWERS, JSON.stringify(a)); }
  function isShuffle() { return localStorage.getItem(K_SHUFFLE) === '1'; }
  function setShuffle(v) { localStorage.setItem(K_SHUFFLE, v ? '1' : '0'); }
  function getFilter() {
    var f = localStorage.getItem(K_TOPIC) || 'all';
    for (var i = 0; i < TOPICS.length; i++) if (TOPICS[i].id === f) return f;
    return 'all';
  }
  function setFilter(f) { localStorage.setItem(K_TOPIC, f); }

  /* Working set: question numbers (n) in the current filter, in order. */
  function workingSet() {
    var f = getFilter();
    var arr = [];
    MCQS.forEach(function (q) {
      if (f === 'all' || q.topic === f) arr.push(q.n);
    });
    return arr;
  }
  function defaultOrder() { return workingSet(); }
  function shuffledOrder() {
    var arr = defaultOrder();
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    return arr;
  }
  function loadOrder() {
    var total = workingSet().length;
    if (total === 0) return [];
    if (!isShuffle()) return defaultOrder();
    try {
      var o = JSON.parse(localStorage.getItem(orderKey(getFilter())) || 'null');
      if (Array.isArray(o) && o.length === total) return o;
    } catch (e) {}
    var fresh = shuffledOrder();
    localStorage.setItem(orderKey(getFilter()), JSON.stringify(fresh));
    return fresh;
  }
  function loadPos() {
    var total = workingSet().length;
    var p = parseInt(localStorage.getItem(posKey(getFilter())) || '0', 10);
    return (isNaN(p) || p < 0 || p >= total) ? 0 : p;
  }

  /* ---------- state ---------- */
  var answers = loadAnswers();
  var order = loadOrder();
  var pos = loadPos();
  var TOTAL = workingSet().length; // questions in current filter

  function refreshFilterState() {
    order = loadOrder();
    pos = loadPos();
    TOTAL = workingSet().length;
  }

  /* ---------- element helpers ---------- */
  function $(id) { return document.getElementById(id); }
  function show(viewId) {
    ['view-home', 'view-practice', 'view-result'].forEach(function (id) {
      $(id).classList.toggle('hidden', id !== viewId);
    });
    window.scrollTo(0, 0);
  }
  function byNum(n) { return MCQS[n - 1]; }

  function answeredCount() {
    var c = 0;
    workingSet().forEach(function (n) { if (answers[n]) c++; });
    return c;
  }
  function correctCount() {
    var c = 0;
    workingSet().forEach(function (n) {
      var q = byNum(n);
      if (q && answers[n] === q.answer) c++;
    });
    return c;
  }
  function allAnswered() { return TOTAL > 0 && answeredCount() >= TOTAL; }

  /* ---------- home ---------- */
  function renderTopicChips() {
    var box = $('topic-chips');
    box.innerHTML = '';
    TOPICS.forEach(function (t) {
      var count = topicCount(t.id);
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip' + (getFilter() === t.id ? ' active' : '');
      b.disabled = count === 0;
      var label = document.createElement('span');
      label.textContent = t.label;
      var c = document.createElement('span');
      c.className = 'count';
      c.textContent = ' (' + count + ')';
      b.appendChild(label);
      b.appendChild(c);
      b.addEventListener('click', function () {
        setFilter(t.id);
        refreshFilterState();
        renderHome();
      });
      box.appendChild(b);
    });
  }

  function renderHome() {
    var a = answeredCount(), c = correctCount();
    $('header-total').textContent = MCQS.length;
    $('stat-total').textContent = TOTAL;
    $('stat-answered').textContent = a;
    $('stat-correct').textContent = c;
    $('home-progress-text').textContent = a + ' / ' + TOTAL + ' Mukammal';
    $('home-progress-fill').style.width = (TOTAL ? (a / TOTAL * 100) : 0) + '%';
    $('btn-result-home').classList.toggle('hidden', !allAnswered());
    $('btn-order-original').classList.toggle('active', !isShuffle());
    $('btn-order-shuffle').classList.toggle('active', isShuffle());
    $('btn-start').disabled = TOTAL === 0;
    renderTopicChips();
  }

  /* ---------- practice ---------- */
  function currentQuestion() { return byNum(order[pos]); }

  function renderQuestion() {
    var q = currentQuestion();
    if (!q) { renderHome(); show('view-home'); return; }
    var n = q.n;
    var picked = answers[n];

    $('q-count').textContent = 'Sawal ' + (pos + 1) + ' / ' + TOTAL + '  (Q' + n + ')';
    $('practice-progress-text').textContent = answeredCount() + ' / ' + TOTAL + ' jawab diye gaye';
    $('practice-progress-fill').style.width = (TOTAL ? (answeredCount() / TOTAL * 100) : 0) + '%';
    $('q-topic').textContent = topicLabel(q.topic);
    $('question-text').textContent = q.q;

    var box = $('options');
    box.innerHTML = '';
    q.options.forEach(function (optText, i) {
      var letter = LETTERS[i];
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'option';
      btn.dataset.letter = letter;
      if (picked) {
        btn.disabled = true;
        if (letter === q.answer) btn.classList.add('correct');
        else if (letter === picked) btn.classList.add('wrong');
        else btn.classList.add('dim');
      }
      var badge = document.createElement('span');
      badge.className = 'letter';
      badge.textContent = letter;
      var txt = document.createElement('span');
      txt.className = 'opt-text';
      txt.textContent = optText;
      btn.appendChild(badge);
      btn.appendChild(txt);
      btn.addEventListener('click', function () { answerQuestion(letter); });
      box.appendChild(btn);
    });

    var fb = $('feedback');
    var ex = $('explain');
    if (picked) {
      fb.textContent = picked === q.answer ? 'Sahi jawab!' : 'Ghalat jawab — sahi jawab sabz rang mein dikhaya gaya hai.';
      fb.className = 'feedback ' + (picked === q.answer ? 'ok' : 'bad');
      ex.textContent = q.explain ? ('Wajah: ' + q.explain) : '';
    } else {
      fb.textContent = '';
      fb.className = 'feedback';
      ex.textContent = '';
    }

    $('btn-prev').disabled = pos === 0;
    var atEnd = pos >= TOTAL - 1;
    $('btn-next').classList.toggle('hidden', picked ? atEnd : true);
    $('btn-result-practice').classList.toggle('hidden', !(picked && allAnswered()));
    localStorage.setItem(posKey(getFilter()), String(pos));
  }

  function answerQuestion(letter) {
    var q = currentQuestion();
    if (answers[q.n]) return; // locked
    answers[q.n] = letter;
    saveAnswers(answers);
    renderQuestion();
  }

  function firstUnansweredPos() {
    for (var i = 0; i < TOTAL; i++) {
      if (!answers[order[i]]) return i;
    }
    return 0;
  }

  function startPractice() {
    refreshFilterState();
    if (TOTAL === 0) return;
    if (allAnswered()) { renderResult(); show('view-result'); return; }
    pos = firstUnansweredPos();
    renderQuestion();
    show('view-practice');
  }

  /* ---------- result ---------- */
  function renderResult() {
    var c = correctCount(), w = TOTAL - c;
    var pct = TOTAL ? Math.round(c / TOTAL * 100) : 0;
    $('result-percent').textContent = pct + '%';
    $('result-summary').textContent = c + ' sahi / ' + TOTAL;
    $('result-total').textContent = TOTAL;
    $('result-correct').textContent = c;
    $('result-wrong').textContent = w;

    var list = $('review-list');
    list.innerHTML = '';
    var wrong = [];
    workingSet().forEach(function (n) {
      var q = byNum(n);
      if (q && answers[n] && answers[n] !== q.answer) wrong.push(q);
    });
    wrong.sort(function (a, b) { return a.n - b.n; });

    $('review-wrap').classList.toggle('hidden', wrong.length === 0);
    $('review-empty').classList.toggle('hidden', wrong.length !== 0);

    wrong.forEach(function (q) {
      var item = document.createElement('div');
      item.className = 'review-item';
      var qEl = document.createElement('p');
      qEl.className = 'rq';
      qEl.textContent = 'Sawal ' + q.n + ': ' + q.q;
      var yourEl = document.createElement('p');
      yourEl.className = 'ra';
      var yourB = document.createElement('b');
      yourB.textContent = 'Aapka Jawab: ';
      yourEl.appendChild(yourB);
      yourEl.appendChild(document.createTextNode(answers[q.n] + ' — ' + q.options[LETTERS.indexOf(answers[q.n])]));
      var rightEl = document.createElement('p');
      rightEl.className = 'ra correct-line';
      var rightB = document.createElement('b');
      rightB.textContent = 'Sahi Jawab: ';
      rightEl.appendChild(rightB);
      rightEl.appendChild(document.createTextNode(q.answer + ' — ' + q.options[LETTERS.indexOf(q.answer)]));
      item.appendChild(qEl);
      item.appendChild(yourEl);
      item.appendChild(rightEl);
      if (q.explain) {
        var exEl = document.createElement('p');
        exEl.className = 're';
        var exB = document.createElement('b');
        exB.textContent = 'Wajah: ';
        exEl.appendChild(exB);
        exEl.appendChild(document.createTextNode(q.explain));
        item.appendChild(exEl);
      }
      list.appendChild(item);
    });
  }

  /* ---------- jump grid ---------- */
  function renderJumpGrid() {
    var grid = $('jump-grid');
    grid.innerHTML = '';
    order.forEach(function (num) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'jump-btn';
      b.textContent = num;
      var q = byNum(num);
      if (answers[num]) b.classList.add(answers[num] === q.answer ? 'correct' : 'wrong');
      if (order[pos] === num) b.classList.add('current');
      b.addEventListener('click', function () {
        pos = order.indexOf(num);
        $('jump-modal').classList.add('hidden');
        renderQuestion();
      });
      grid.appendChild(b);
    });
  }

  /* ---------- reset ---------- */
  function clearProgress() {
    answers = {};
    pos = 0;
    localStorage.removeItem(K_ANSWERS);
    localStorage.setItem(posKey(getFilter()), '0');
  }

  /* ---------- wiring ---------- */
  $('btn-start').addEventListener('click', startPractice);
  $('btn-result-home').addEventListener('click', function () { renderResult(); show('view-result'); });
  $('btn-result-practice').addEventListener('click', function () { renderResult(); show('view-result'); });

  $('btn-restart').addEventListener('click', function () {
    clearProgress();
    refreshFilterState();
    pos = 0;
    renderQuestion();
    show('view-practice');
  });
  $('btn-clear').addEventListener('click', function () {
    if (confirm('Kya aap apni tamam progress saaf karna chahte hain?')) {
      clearProgress();
      renderHome();
    }
  });

  $('btn-order-original').addEventListener('click', function () {
    setShuffle(false);
    refreshFilterState();
    pos = 0;
    localStorage.setItem(posKey(getFilter()), '0');
    renderHome();
  });
  $('btn-order-shuffle').addEventListener('click', function () {
    setShuffle(true);
    order = shuffledOrder();
    localStorage.setItem(orderKey(getFilter()), JSON.stringify(order));
    pos = 0;
    localStorage.setItem(posKey(getFilter()), '0');
    renderHome();
  });

  $('btn-home').addEventListener('click', function () { renderHome(); show('view-home'); });
  $('btn-jump').addEventListener('click', function () { renderJumpGrid(); $('jump-modal').classList.remove('hidden'); });
  $('btn-jump-close').addEventListener('click', function () { $('jump-modal').classList.add('hidden'); });
  $('jump-modal').addEventListener('click', function (e) {
    if (e.target === $('jump-modal')) $('jump-modal').classList.add('hidden');
  });

  $('btn-prev').addEventListener('click', function () {
    if (pos > 0) { pos--; renderQuestion(); }
  });
  $('btn-next').addEventListener('click', function () {
    if (pos < TOTAL - 1) { pos++; renderQuestion(); }
  });

  $('btn-again').addEventListener('click', function () {
    clearProgress();
    refreshFilterState();
    pos = 0;
    renderQuestion();
    show('view-practice');
  });
  $('btn-result-home2').addEventListener('click', function () { renderHome(); show('view-home'); });

  /* ---------- init ---------- */
  renderHome();
})();
