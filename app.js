// =============================================
// PsychoPrep – Main Application Logic
// =============================================

// ===== STATE =====
let currentPage = 'home';
let testState = {
  active: false,
  questions: [],
  answers: {},
  currentIdx: 0,
  timer: null,
  timeLeft: 0,
  type: '',
  totalMarks: 0
};

// ===== NAV =====
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(`page-${page}`).classList.add('active');
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.page === page);
  });
  currentPage = page;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (page === 'syllabus') renderSyllabus();
  if (page === 'blueprint') renderBlueprint();
  if (page === 'papers') renderPYQ();
  if (page === 'test') renderTestMenu();
  if (page === 'resources') {} // static

  // Close mobile menu
  document.getElementById('navLinks').classList.remove('open');
}

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

function toggleTheme() {
  const body = document.body;
  const current = body.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  body.setAttribute('data-theme', next === 'dark' ? '' : 'light');
  document.getElementById('themeToggle').textContent = next === 'light' ? '🌙' : '☀️';
  if (next === 'light') {
    body.setAttribute('data-theme', 'light');
  } else {
    body.removeAttribute('data-theme');
  }
}

function scrollToUnit(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ===== SYLLABUS =====
function renderSyllabus() {
  const container = document.getElementById('syllabusContent');
  if (!container || container.children.length > 0) return;

  container.innerHTML = SYLLABUS_UNITS.map(unit => `
    <div class="unit-block" id="unit${unit.id}">
      <div class="unit-header" onclick="toggleUnit(${unit.id})">
        <div class="unit-header-num" style="background: linear-gradient(135deg, ${unit.color}, ${unit.color}88)">${unit.id}</div>
        <div class="unit-header-title">
          <h3>${unit.title}</h3>
          <div class="unit-meta">
            <span class="unit-badge ${unit.priorityClass}">${unit.priority} Priority</span>
            <span class="unit-badge badge-low">${unit.weight} weightage</span>
          </div>
        </div>
        <div class="unit-expand">⌄</div>
      </div>
      <div class="unit-body">
        ${unit.sections.map(sec => `
          <div class="topic-section">
            <h4>${sec.title}</h4>
            <div class="topic-tags">
              ${sec.topics.map(t => `<span class="topic-tag">${t}</span>`).join('')}
            </div>
          </div>
        `).join('')}
        <div class="exam-tip">${unit.examTip}</div>
      </div>
    </div>
  `).join('');
}

function toggleUnit(id) {
  const block = document.getElementById(`unit${id}`);
  block.classList.toggle('expanded');
}

// ===== BLUEPRINT =====
function renderBlueprint() {
  renderBarChart();
  renderTrendChart();
  renderPriorityList();
  renderTopicMatrix();
}

function renderBarChart() {
  const container = document.getElementById('barChart');
  if (!container || container.children.length > 0) return;
  const maxQ = Math.max(...BLUEPRINT_DATA.units.map(u => u.avgQ));
  container.innerHTML = BLUEPRINT_DATA.units.map(u => `
    <div class="bar-item">
      <span class="bar-label">${u.shortName}: ${u.name.substring(0, 28)}${u.name.length > 28 ? '…' : ''}</span>
      <div class="bar-track">
        <div class="bar-fill" style="width: ${(u.avgQ / maxQ) * 100}%; background: ${u.color};"></div>
      </div>
      <span class="bar-val" style="color: ${u.color}">${u.avgQ}Q</span>
    </div>
  `).join('');
}

function renderTrendChart() {
  const container = document.getElementById('trendChart');
  if (!container || container.children.length > 0) return;
  const maxD = Math.max(...BLUEPRINT_DATA.difficulty);
  const colors = ['#8b5cf6','#06b6d4','#10b981','#f59e0b','#ef4444','#ec4899','#a78bfa'];

  container.innerHTML = BLUEPRINT_DATA.years.map((year, i) => {
    const height = Math.max(20, (BLUEPRINT_DATA.difficulty[i] / maxD) * 90);
    return `
    <div class="trend-year">
      <div class="trend-label">${year}</div>
      <div class="trend-bar-wrap">
        <span class="trend-score">${BLUEPRINT_DATA.difficulty[i]}%</span>
        <div class="trend-bar" style="height: ${height}px; background: ${colors[i]};" title="${year}: ${BLUEPRINT_DATA.difficulty[i]}% avg correct"></div>
      </div>
    </div>`;
  }).join('');
}

function renderPriorityList() {
  const container = document.getElementById('priorityList');
  if (!container || container.children.length > 0) return;
  const sorted = [...BLUEPRINT_DATA.units].sort((a, b) => b.avgQ - a.avgQ);
  container.innerHTML = sorted.map((u, i) => `
    <div class="priority-item">
      <div class="priority-rank" style="background: linear-gradient(135deg, ${u.color}, ${u.color}88)">${i + 1}</div>
      <span class="priority-text">${u.name}</span>
      <span class="priority-pct">${u.percentage}%</span>
    </div>
  `).join('');
}

function renderTopicMatrix() {
  const container = document.getElementById('topicMatrix');
  if (!container || container.children.length > 0) return;
  container.innerHTML = BLUEPRINT_DATA.topicMatrix.map(item => `
    <div class="matrix-item">
      <div class="matrix-freq ${item.freqClass}">${item.frequency}</div>
      <div>
        <div class="matrix-topic">${item.topic}</div>
        <div style="font-size:11px;color:var(--text-muted)">${item.unit}</div>
      </div>
    </div>
  `).join('');
}

// ===== PYQ =====
let pyqVisible = [];
let pyqShown = {};

function renderPYQ() {
  pyqVisible = [...PYQ_QUESTIONS];
  renderPYQList();
  renderPYQStats();
}

function filterPYQ() {
  const year = document.getElementById('yearFilter').value;
  const paper = document.getElementById('paperFilter').value;
  const unit = document.getElementById('unitFilter').value;
  const search = document.getElementById('pyqSearch').value.toLowerCase();

  pyqVisible = PYQ_QUESTIONS.filter(q => {
    if (year !== 'all' && q.year !== parseInt(year)) return false;
    if (paper !== 'all' && q.paper !== parseInt(paper)) return false;
    if (unit !== 'all' && q.unit !== parseInt(unit)) return false;
    if (search && !q.question.toLowerCase().includes(search) && !q.options.join(' ').toLowerCase().includes(search)) return false;
    return true;
  });

  renderPYQList();
  renderPYQStats();
}

function renderPYQList() {
  const container = document.getElementById('pyqList');
  if (!container) return;
  if (pyqVisible.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:60px;color:var(--text-muted)">No questions found for the selected filters.</div>';
    return;
  }
  container.innerHTML = pyqVisible.map((q, idx) => `
    <div class="pyq-item slide-up" id="pyq-${q.id}" style="animation-delay:${Math.min(idx * 0.03, 0.5)}s">
      <div class="pyq-item-header">
        <span class="pyq-year-badge">📅 ${q.year}</span>
        <span class="pyq-paper-badge paper-${q.paper}">Paper ${q.paper}</span>
        ${q.unit > 0 ? `<span class="pyq-unit-badge">Unit ${q.unit}</span>` : ''}
      </div>
      <div class="pyq-question"><strong>Q.</strong> ${q.question}</div>
      <div class="pyq-options" id="pyq-opts-${q.id}">
        ${q.options.map((opt, i) => `
          <div class="pyq-option" id="pyq-opt-${q.id}-${i}" onclick="selectPYQOption(${q.id}, ${i})">
            <span class="opt-letter">${String.fromCharCode(65 + i)}</span>
            ${opt}
          </div>
        `).join('')}
      </div>
      <div class="pyq-explain" id="pyq-explain-${q.id}">
        <strong>✅ Answer: ${String.fromCharCode(65 + q.answer)}. ${q.options[q.answer]}</strong><br/><br/>
        <strong>Explanation:</strong> ${q.explanation}
      </div>
      <div class="pyq-actions">
        <button class="btn btn-ghost btn-sm" onclick="showPYQAnswer(${q.id})">Show Answer</button>
      </div>
    </div>
  `).join('');
}

function renderPYQStats() {
  const container = document.getElementById('pyqStatsBar');
  if (!container) return;
  const years = [...new Set(pyqVisible.map(q => q.year))].sort();
  container.innerHTML = `
    <span class="pyq-stat">📊 Showing <strong>${pyqVisible.length}</strong> questions</span>
    <span class="pyq-stat">📅 Years: <strong>${years.join(', ') || 'None'}</strong></span>
    <span class="pyq-stat">📝 Paper I: <strong>${pyqVisible.filter(q => q.paper === 1).length}</strong></span>
    <span class="pyq-stat">🧪 Paper II: <strong>${pyqVisible.filter(q => q.paper === 2).length}</strong></span>
  `;
}

function selectPYQOption(qId, optIdx) {
  const q = PYQ_QUESTIONS.find(q => q.id === qId);
  if (!q) return;
  if (pyqShown[qId]) return; // already answered
  pyqShown[qId] = true;

  q.options.forEach((_, i) => {
    const el = document.getElementById(`pyq-opt-${qId}-${i}`);
    if (el) {
      el.classList.remove('correct', 'wrong');
      if (i === q.answer) el.classList.add('correct');
      else if (i === optIdx) el.classList.add('wrong');
      el.style.pointerEvents = 'none';
    }
  });
  showPYQAnswer(qId);
}

function showPYQAnswer(qId) {
  const el = document.getElementById(`pyq-explain-${qId}`);
  if (el) el.classList.add('show');
}

// ===== TEST =====
function renderTestMenu() {
  const historyContainer = document.getElementById('scoreHistory');
  if (!historyContainer) return;
  const history = getTestHistory();
  if (history.length === 0) {
    historyContainer.innerHTML = '<p style="color:var(--text-muted);font-size:14px">No tests taken yet. Start your first test!</p>';
    return;
  }
  historyContainer.innerHTML = history.map(h => `
    <div class="history-card">
      <div class="history-type">${h.type}</div>
      <div class="history-score">${h.score}/${h.total} marks</div>
      <div style="font-size:13px;color:var(--text-secondary)">${h.correct}/${h.questions} correct (${Math.round(h.pct)}%)</div>
      <div class="history-date">📅 ${h.date}</div>
    </div>
  `).join('');

  // Render unit select grid for modal
  const unitGrid = document.getElementById('unitSelectGrid');
  if (unitGrid) {
    unitGrid.innerHTML = SYLLABUS_UNITS.map(u => `
      <button class="unit-select-btn" onclick="startTest('unit', 20, 25, ${u.id})">
        Unit ${u.id}: ${u.title}
      </button>
    `).join('');
  }
}

function openUnitTest() {
  document.getElementById('unitTestModal').classList.remove('hidden');
}

function closeUnitModal() {
  document.getElementById('unitTestModal').classList.add('hidden');
}

function startTest(type, numQ, minutes, unitId = null) {
  closeUnitModal();
  let pool = [];
  const paper2Qs = PYQ_QUESTIONS.filter(q => q.paper === 2);
  const paper1Qs = PAPER1_QUESTIONS;

  switch (type) {
    case 'full':
      pool = [...shuffleArray(paper1Qs).slice(0, 50), ...shuffleArray(paper2Qs).slice(0, 100)];
      break;
    case 'paper2':
      pool = shuffleArray(paper2Qs).slice(0, Math.min(numQ, paper2Qs.length));
      break;
    case 'paper1':
      pool = shuffleArray(paper1Qs).slice(0, Math.min(numQ, paper1Qs.length));
      break;
    case 'pyq':
      pool = shuffleArray(PYQ_QUESTIONS).slice(0, Math.min(numQ, PYQ_QUESTIONS.length));
      break;
    case 'rapid':
      pool = shuffleArray(ALL_QUESTIONS).slice(0, Math.min(numQ, ALL_QUESTIONS.length));
      break;
    case 'unit':
      const unitQs = paper2Qs.filter(q => q.unit === unitId);
      pool = shuffleArray([...unitQs, ...shuffleArray(paper2Qs.filter(q => q.unit !== unitId)).slice(0, Math.max(0, numQ - unitQs.length))]).slice(0, numQ);
      break;
  }

  if (pool.length === 0) {
    alert('No questions available for this test type. Please try another option.');
    return;
  }

  const typeNames = {
    'full': 'Full Mock Test (Paper I + II)',
    'paper2': 'Paper II Mock Test',
    'paper1': 'Paper I Mock Test',
    'pyq': 'Previous Year Quiz',
    'rapid': 'Rapid Fire Test',
    'unit': `Unit ${unitId} Practice`
  };

  testState = {
    active: true,
    questions: pool,
    answers: {},
    currentIdx: 0,
    timeLeft: minutes * 60,
    type: typeNames[type] || type,
    totalMarks: pool.length * 2,
    startTime: Date.now()
  };

  // Show test view
  document.getElementById('test-menu').classList.add('hidden');
  document.getElementById('test-active').classList.remove('hidden');
  document.getElementById('test-result').classList.add('hidden');

  document.getElementById('testTitleBar').textContent = typeNames[type];

  renderQuestionPalette();
  renderCurrentQuestion();
  startTimer();
}

function renderQuestionPalette() {
  const container = document.getElementById('questionPalette');
  if (!container) return;
  container.innerHTML = testState.questions.map((_, i) => `
    <button class="palette-btn ${testState.answers[i] !== undefined ? 'answered' : ''} ${i === testState.currentIdx ? 'current' : ''}"
      onclick="goToQuestion(${i})">${i + 1}</button>
  `).join('');
}

function renderCurrentQuestion() {
  const q = testState.questions[testState.currentIdx];
  if (!q) return;

  document.getElementById('questionCounter').textContent =
    `Question ${testState.currentIdx + 1} of ${testState.questions.length}`;

  document.getElementById('questionMeta').innerHTML = `
    <span class="pyq-year-badge">📅 ${q.year}</span>
    <span class="pyq-paper-badge paper-${q.paper}">Paper ${q.paper}</span>
    ${q.unit > 0 ? `<span class="pyq-unit-badge">Unit ${q.unit}</span>` : ''}
    <span style="font-size:11px;color:var(--accent);font-weight:700">+2 marks</span>
  `;

  document.getElementById('questionText').textContent = q.question;

  const selected = testState.answers[testState.currentIdx];
  document.getElementById('optionsList').innerHTML = q.options.map((opt, i) => `
    <button class="option-btn ${selected === i ? 'selected' : ''}" onclick="selectOption(${i})">
      <div class="opt-num">${String.fromCharCode(65 + i)}</div>
      <span>${opt}</span>
    </button>
  `).join('');

  renderQuestionPalette();
}

function selectOption(optIdx) {
  testState.answers[testState.currentIdx] = optIdx;
  renderCurrentQuestion();
}

function clearResponse() {
  delete testState.answers[testState.currentIdx];
  renderCurrentQuestion();
}

function nextQuestion() {
  if (testState.currentIdx < testState.questions.length - 1) {
    testState.currentIdx++;
    renderCurrentQuestion();
  }
}

function prevQuestion() {
  if (testState.currentIdx > 0) {
    testState.currentIdx--;
    renderCurrentQuestion();
  }
}

function goToQuestion(idx) {
  testState.currentIdx = idx;
  renderCurrentQuestion();
}

function startTimer() {
  clearInterval(testState.timer);
  testState.timer = setInterval(() => {
    testState.timeLeft--;
    updateTimerDisplay();
    if (testState.timeLeft <= 0) {
      clearInterval(testState.timer);
      submitTest();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const h = Math.floor(testState.timeLeft / 3600);
  const m = Math.floor((testState.timeLeft % 3600) / 60);
  const s = testState.timeLeft % 60;
  const display = `⏱️ ${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  const el = document.getElementById('testTimer');
  if (el) {
    el.textContent = display;
    el.classList.toggle('urgent', testState.timeLeft < 300);
  }
}

function confirmSubmitTest() {
  const answered = Object.keys(testState.answers).length;
  const total = testState.questions.length;
  if (confirm(`You have answered ${answered}/${total} questions. Submit the test?`)) {
    submitTest();
  }
}

function submitTest() {
  clearInterval(testState.timer);
  testState.active = false;

  // Calculate results
  let correct = 0, wrong = 0;
  const unitResults = {};

  testState.questions.forEach((q, i) => {
    const unitKey = q.unit || 0;
    if (!unitResults[unitKey]) unitResults[unitKey] = { correct: 0, total: 0 };
    unitResults[unitKey].total++;

    if (testState.answers[i] !== undefined) {
      if (testState.answers[i] === q.answer) {
        correct++;
        unitResults[unitKey].correct++;
      } else {
        wrong++;
      }
    }
  });

  const skipped = testState.questions.length - correct - wrong;
  const marks = correct * 2;
  const pct = Math.round((marks / testState.totalMarks) * 100);

  // Save to history
  saveTestResult({
    type: testState.type,
    score: marks,
    total: testState.totalMarks,
    correct, wrong, skipped,
    questions: testState.questions.length,
    pct,
    date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
  });

  // Show result
  document.getElementById('test-active').classList.add('hidden');
  document.getElementById('test-result').classList.remove('hidden');

  const emoji = pct >= 80 ? '🏆' : pct >= 60 ? '🎉' : pct >= 40 ? '📈' : '💪';
  const title = pct >= 80 ? 'Excellent Performance!' : pct >= 60 ? 'Good Job!' : pct >= 40 ? 'Keep Practicing!' : 'Don\'t Give Up!';

  document.getElementById('resultIcon').textContent = emoji;
  document.getElementById('resultTitle').textContent = title;
  document.getElementById('resultSubtitle').textContent = `${testState.type} · ${new Date().toLocaleDateString()}`;
  document.getElementById('rsCorrect').textContent = correct;
  document.getElementById('rsWrong').textContent = wrong;
  document.getElementById('rsSkipped').textContent = skipped;
  document.getElementById('rsMarks').textContent = `${marks}/${testState.totalMarks}`;
  document.getElementById('scorePct').textContent = pct + '%';

  // Animate ring
  setTimeout(() => {
    const circumference = 2 * Math.PI * 80;
    const offset = circumference - (pct / 100) * circumference;
    const ring = document.getElementById('scoreRing');
    if (ring) ring.style.strokeDashoffset = offset;
  }, 100);

  // Unit breakdown
  const breakdownContainer = document.getElementById('unitBreakdown');
  if (breakdownContainer) {
    const unitNames = {0:'General',1:'Unit 1',2:'Unit 2',3:'Unit 3',4:'Unit 4',5:'Unit 5',6:'Unit 6',7:'Unit 7',8:'Unit 8',9:'Unit 9',10:'Unit 10'};
    breakdownContainer.innerHTML = Object.entries(unitResults).map(([unit, data]) => {
      const pctU = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
      return `
        <div class="ub-item">
          <span class="ub-label">${unitNames[unit] || 'Unit ' + unit}</span>
          <div class="ub-bar-wrap"><div class="ub-bar" style="width:${pctU}%"></div></div>
          <span class="ub-score" style="color:${pctU >= 70 ? 'var(--success)' : pctU >= 40 ? 'var(--warning)' : 'var(--danger)'}">${data.correct}/${data.total}</span>
        </div>
      `;
    }).join('');
  }

  document.getElementById('review-section').classList.add('hidden');
}

function reviewTest() {
  const section = document.getElementById('review-section');
  const list = document.getElementById('reviewList');
  section.classList.remove('hidden');

  list.innerHTML = testState.questions.map((q, i) => {
    const userAns = testState.answers[i];
    const isCorrect = userAns === q.answer;
    const isSkipped = userAns === undefined;

    return `
      <div class="review-item">
        <div class="pyq-item-header">
          <span class="pyq-year-badge">${q.year}</span>
          <span class="pyq-paper-badge paper-${q.paper}">Paper ${q.paper}</span>
          ${q.unit > 0 ? `<span class="pyq-unit-badge">Unit ${q.unit}</span>` : ''}
          <span style="font-size:14px">${isSkipped ? '⬜' : isCorrect ? '✅' : '❌'}</span>
        </div>
        <div class="question-text">${i + 1}. ${q.question}</div>
        <div class="review-answer">
          ${isSkipped
            ? '<span style="color:var(--text-muted)">Skipped</span>'
            : isCorrect
              ? `<span class="ra-correct">Your answer: ${String.fromCharCode(65 + userAns)}. ${q.options[userAns]} ✓</span>`
              : `<span class="ra-wrong">Your answer: ${String.fromCharCode(65 + userAns)}. ${q.options[userAns]} ✗</span>`
          }
        </div>
        ${!isCorrect ? `<div class="review-answer"><span class="ra-correct">Correct: ${String.fromCharCode(65 + q.answer)}. ${q.options[q.answer]}</span></div>` : ''}
        <div class="ra-explain">${q.explanation}</div>
      </div>
    `;
  }).join('');

  section.scrollIntoView({ behavior: 'smooth' });
}

function backToTestMenu() {
  document.getElementById('test-active').classList.add('hidden');
  document.getElementById('test-result').classList.add('hidden');
  document.getElementById('test-menu').classList.remove('hidden');
  renderTestMenu();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== LOCAL STORAGE =====
function saveTestResult(result) {
  const history = getTestHistory();
  history.unshift(result);
  const trimmed = history.slice(0, 20); // keep last 20
  localStorage.setItem('psychoprep_history', JSON.stringify(trimmed));
}

function getTestHistory() {
  try {
    return JSON.parse(localStorage.getItem('psychoprep_history')) || [];
  } catch { return []; }
}

// ===== UTILITIES =====
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) {
    nav.style.boxShadow = window.scrollY > 10 ? '0 2px 20px rgba(0,0,0,0.4)' : 'none';
  }
});

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  // Add SVG gradient for score ring
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.style.cssText = 'position:absolute;width:0;height:0';
  svg.innerHTML = `
    <defs>
      <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#8b5cf6"/>
        <stop offset="100%" style="stop-color:#06b6d4"/>
      </linearGradient>
    </defs>`;
  document.body.appendChild(svg);

  // Initialize PYQ data
  pyqShown = {};

  // Animate hero stats on load
  setTimeout(() => {
    document.querySelectorAll('.stat-num').forEach(el => {
      el.style.opacity = '0';
      el.style.animation = 'fadeIn 0.5s ease forwards';
    });
  }, 200);
});
