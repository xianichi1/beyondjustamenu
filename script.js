const dataSources = {
  national: [
    {
      source: 'Pew Research',
      metric: '58%',
      desc: 'of Asian adults report experiencing racial discrimination, slurs, or being told to "go back."',
      coral: true
    },
    {
      source: 'Stop AAPI Hate',
      metric: '68%',
      desc: 'of 3,800+ reported incidents involved verbal harassment in commercial & dining venues.',
      coral: false
    }
  ],
  canada: [
    {
      source: 'Stats Canada',
      metric: '+301%',
      desc: 'increase in police-reported hate crimes targeting East & Southeast Asian communities.',
      coral: true
    },
    {
      source: 'CCNC Toronto',
      metric: '40%',
      desc: 'of national community incidents were reported in Ontario, heavily concentrated in the GTA.',
      coral: false
    }
  ]
};

let currentScope = 'national';
let transitionTimer = null;
let typewriterInterval = null;

function renderStats() {
  const container = document.getElementById('stats-grid');
  if (!container) return;
  const items = dataSources[currentScope];
  container.innerHTML = items.map(item => `
    <div class="research-card">
      <div class="research-card-header">
        <span class="research-source">${item.source}</span>
        <span class="status-dot ${item.coral ? 'status-dot-coral' : 'status-dot-white'}"></span>
      </div>
      <div class="research-metric ${item.coral ? 'metric-coral' : 'metric-white'}">${item.metric}</div>
      <p class="research-desc">${item.desc}</p>
    </div>
  `).join('');
}

function showScreen(stepNum) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const active = document.getElementById('screen-' + stepNum);
  if (active) active.classList.add('active');
}

let audioCtx = null;
function getAudioContext() {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) audioCtx = new AudioContextClass();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

function playPaperRip() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const bufferSize = Math.floor(ctx.sampleRate * 0.45);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      data[i] = (lastOut + 0.04 * white) / 1.04;
      lastOut = data[i];
      if (Math.random() < 0.03) {
        data[i] += (Math.random() * 2 - 1) * 0.3;
      }
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(800, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(350, ctx.currentTime + 0.4);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.35, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    noise.start(ctx.currentTime);
  } catch (e) {}
}

function playDarkImpact() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(120, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(32, ctx.currentTime + 0.4);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.42);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.45);
  } catch (e) {}
}

function startTransition() {
  showScreen(2);
  const overlay = document.getElementById('tear-overlay');
  const textEl = document.getElementById('typed-text');
  const progressFill = document.getElementById('progress-fill');
  const fullText = 'boba loading...';

  if (overlay) {
    overlay.className = 'tear-overlay initial';
  }
  if (textEl) textEl.textContent = '';
  if (progressFill) progressFill.style.width = '10%';

  if (typewriterInterval) clearInterval(typewriterInterval);
  if (transitionTimer) clearTimeout(transitionTimer);

  setTimeout(() => {
    if (overlay) overlay.className = 'tear-overlay tearing';
    playPaperRip();
  }, 350);

  setTimeout(() => {
    if (overlay) overlay.className = 'tear-overlay torn';
    if (progressFill) progressFill.style.width = '100%';

    let idx = 0;
    typewriterInterval = setInterval(() => {
      if (idx <= fullText.length) {
        if (textEl) textEl.textContent = fullText.slice(0, idx);
        idx++;
      } else {
        clearInterval(typewriterInterval);
      }
    }, 70);
  }, 850);

  transitionTimer = setTimeout(() => {
    finishTransition();
  }, 3800);
}

function finishTransition() {
  if (typewriterInterval) clearInterval(typewriterInterval);
  if (transitionTimer) clearTimeout(transitionTimer);
  playDarkImpact();
  showScreen(3);
  renderStats();
}

document.getElementById('btn-claim')?.addEventListener('click', () => {
  startTransition();
});

document.getElementById('btn-skip-transition')?.addEventListener('click', () => {
  finishTransition();
});

document.getElementById('btn-proceed')?.addEventListener('click', () => {
  showScreen(4);
});

document.getElementById('btn-back')?.addEventListener('click', () => {
  showScreen(1);
});

document.getElementById('btn-scope-national')?.addEventListener('click', () => {
  currentScope = 'national';
  document.getElementById('btn-scope-national')?.classList.add('active');
  document.getElementById('btn-scope-canada')?.classList.remove('active');
  renderStats();
});

document.getElementById('btn-scope-canada')?.addEventListener('click', () => {
  currentScope = 'canada';
  document.getElementById('btn-scope-canada')?.classList.add('active');
  document.getElementById('btn-scope-national')?.classList.remove('active');
  renderStats();
});

document.getElementById('btn-open-citations')?.addEventListener('click', () => {
  openModal('modal-citations');
});

document.getElementById('btn-open-helplines')?.addEventListener('click', () => {
  openModal('modal-helplines');
});

function openActionModal(tabId) {
  openModal('modal-action');
  switchActionTab(tabId);
}

function openModal(id) {
  document.getElementById(id)?.classList.add('open');
}

function closeModal(id) {
  document.getElementById(id)?.classList.remove('open');
}

function switchActionTab(tab) {
  const tabs = ['research', 'report', 'donate', 'share'];
  tabs.forEach(t => {
    const pane = document.getElementById('action-pane-' + t);
    const btn = document.getElementById('tab-btn-' + t);
    if (pane) pane.style.display = (t === tab) ? 'block' : 'none';
    if (btn) {
      if (t === tab) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    }
  });
}

document.getElementById('form-incident')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const formEl = document.getElementById('form-incident');
  const successEl = document.getElementById('incident-success-message');
  if (formEl) formEl.style.display = 'none';
  if (successEl) successEl.style.display = 'block';
});

function resetIncidentForm() {
  const formEl = document.getElementById('form-incident');
  const successEl = document.getElementById('incident-success-message');
  const textarea = document.getElementById('incident-story-input');
  if (textarea) textarea.value = '';
  if (formEl) formEl.style.display = 'block';
  if (successEl) successEl.style.display = 'none';
}

function copyCampaignText() {
  const shareText = 'beyond just a menu: "You like our food, but what about us?" — An interactive project about what Asian food workers and communities face behind the counter. Check it out: ' + window.location.href;
  if (navigator?.clipboard) {
    navigator.clipboard.writeText(shareText);
  }
  const btn = document.getElementById('btn-copy-share');
  if (btn) {
    const originalText = btn.innerHTML;
    btn.innerHTML = '<span>✓ Copied to Clipboard!</span>';
    setTimeout(() => {
      btn.innerHTML = originalText;
    }, 2500);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  renderStats();
});
