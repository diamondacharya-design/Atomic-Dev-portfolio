const ADMIN_PASSWORD = "atomic123";
const DEFAULT = {
  general: {
    name: "00_Atomic", line1: "Break &amp;", line2: "Build.",
    label: "Developer · Nepal 🇳🇵",
    sub: "I'm <strong>00_Atomic</strong> — a <strong>17-year-old developer</strong> from Nepal who loves making things. Python and Flutter are my core tools. I build apps, games, and whatever else sounds interesting.",
    age: "17", location: "Kathmandu, NP", stack: "Python · Flutter", status: "● Building",
    footer: "© 2026 · 00_Atomic · Break and Build", footerStatus: "Open to collabs"
  },
  about: {
    p1: "Hey y'all! I'm a <strong>17-year-old dev</strong> from <strong>Nepal</strong> who genuinely loves to program and build stuff.",
    p2: "I mainly use <strong>Python</strong> and <strong>Flutter</strong> as my core languages — whether that's scripting tools, building cross-platform apps, or making games from scratch.",
    p3: "My whole thing: <span class='g'>break things apart</span>, figure out why they work, and put them back together better than before. That's the loop I'm always in.",
    p4: "Still young, still learning — but the projects don't stop.",
    card: {
      name: "00_Atomic", age: "17", location: "Nepal 🇳🇵",
      primary: "Python · Flutter", interests: "Games · Apps · Tools", mantra: "Break and Build"
    }
  },
  skills: [
    { icon: "🐍", name: "Python",           sub: "Core Language"   },
    { icon: "🐦", name: "Flutter",          sub: "Core Framework"  },
    { icon: "🎯", name: "Dart",             sub: "Flutter Language" },
    { icon: "🎮", name: "Game Dev",         sub: "2D · Indie"       },
    { icon: "📱", name: "App Dev",          sub: "Cross-Platform"  },
    { icon: "🔧", name: "Problem Solving",  sub: "Always On"       }
  ],
  projects: [
    {
      name: "PirateMaker2D",
      desc: "A Mario Maker–style 2D platformer with a full level editor, tile sets, and multiple enemy types. Build levels, test them, play them. Cross-platform.",
      tags: "Game Dev, 2D, Level Editor, Cross-platform",
      link: "https://atomic-dev-123.itch.io/piratemaker2d",
      linkLabel: "itch.io ↗"
    },
    {
      name: "Pong Game",
      desc: "A clean, faithful recreation of the classic Pong arcade game. Tight, minimal, built from scratch.",
      tags: "Game Dev, Arcade, Classic",
      link: "https://atomic-dev-123.itch.io/pong-game",
      linkLabel: "itch.io ↗"
    },
    {
      name: "More on GitHub",
      desc: "Experiments, tools, and works-in-progress. The raw stuff — always being broken apart and rebuilt.",
      tags: "Python, Flutter, Open Source",
      link: "https://github.com/diamondacharya-design",
      linkLabel: "GitHub ↗"
    }
  ],
  contact: {
    h1: "Got an idea?",
    h2: "Let's <span>build</span> it.",
    note: "I'm open to collaborations, projects, and just general chat about code and games. Reach out anywhere below.",
    links: [
      { platform: "Email",   handle: "diamond.acharya@sifal.deerwalk.edu.np", url: "mailto:diamond.acharya@sifal.deerwalk.edu.np" },
      { platform: "GitHub",  handle: "diamondacharya-design",                  url: "https://github.com/diamondacharya-design"      },
      { platform: "itch.io", handle: "atomic-dev-123",                         url: "https://atomic-dev-123.itch.io/"               }
    ]
  }
};

// ── LOAD / SAVE DATA ──
function loadData() {
  try {
    const saved = localStorage.getItem('atomic_portfolio');
    return saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(DEFAULT));
  } catch {
    return JSON.parse(JSON.stringify(DEFAULT));
  }
}
function saveData(d) {
  localStorage.setItem('atomic_portfolio', JSON.stringify(d));
}

let DATA = loadData();

// ── RENDER PORTFOLIO ──
function render() {
  const g = DATA.general, ab = DATA.about, con = DATA.contact;

  // Nav + hero
  document.getElementById('nav-logo').innerHTML = `<span>${g.name.split('_')[0]}</span>_${g.name.split('_')[1] || ''}`;
  document.getElementById('hero-label').textContent = g.label;
  document.getElementById('hero-line1').innerHTML = g.line1;
  document.getElementById('hero-line2').innerHTML = g.line2;
  document.getElementById('hero-sub').innerHTML = g.sub;

  // Meta bar
  document.getElementById('hero-meta').innerHTML = `
    <div class="meta-item"><div class="meta-k">Age</div><div class="meta-v">${g.age}</div></div>
    <div class="meta-item"><div class="meta-k">Location</div><div class="meta-v">${g.location}</div></div>
    <div class="meta-item"><div class="meta-k">Stack</div><div class="meta-v">${g.stack}</div></div>
    <div class="meta-item"><div class="meta-k">Status</div><div class="meta-v live">${g.status}</div></div>
  `;

  // About
  document.getElementById('about-text').innerHTML =
    [ab.p1, ab.p2, ab.p3, ab.p4].filter(Boolean).map(p => `<p>${p}</p>`).join('');
  const c = ab.card;
  document.getElementById('about-card').innerHTML = `
    <div class="card-row"><span class="card-key">name</span><span class="card-val">${c.name}</span></div>
    <div class="card-row"><span class="card-key">age</span><span class="card-val">${c.age}</span></div>
    <div class="card-row"><span class="card-key">location</span><span class="card-val">${c.location}</span></div>
    <div class="card-row"><span class="card-key">primary</span><span class="card-val">${c.primary}</span></div>
    <div class="card-row"><span class="card-key">interests</span><span class="card-val">${c.interests}</span></div>
    <div class="card-row"><span class="card-key">mantra</span><span class="card-val g">${c.mantra}</span></div>
  `;

  // Skills
  document.getElementById('skills-grid').innerHTML = DATA.skills.map(s => `
    <div class="skill-item">
      <div class="skill-icon">${s.icon}</div>
      <div class="skill-name">${s.name}</div>
      <div class="skill-sub">${s.sub}</div>
    </div>
  `).join('');

  // Projects
  document.getElementById('projects-list').innerHTML = DATA.projects.map((p, i) => `
    <div class="project">
      <div>
        <div class="proj-top">
          <span class="proj-num">0${i + 1}</span>
          <span class="proj-name">${p.name}</span>
        </div>
        <div class="proj-desc">${p.desc}</div>
        <div class="proj-tags">${p.tags.split(',').map(t => `<span class="proj-tag">${t.trim()}</span>`).join('')}</div>
      </div>
      <a href="${p.link}" target="_blank" class="proj-link">${p.linkLabel}</a>
    </div>
  `).join('');

  // Contact
  document.getElementById('contact-headline').innerHTML = `${con.h1}<br>${con.h2}`;
  document.getElementById('contact-note').textContent = con.note;
  document.getElementById('contact-links').innerHTML = con.links.map(l => `
    <a href="${l.url}" target="_blank" class="contact-link">
      <span class="cl-platform">${l.platform}</span>
      <span class="cl-handle">${l.handle}</span>
      <span class="cl-arrow">↗</span>
    </a>
  `).join('');

  // Footer
  document.getElementById('footer-copy').textContent = g.footer;
  document.getElementById('footer-status').textContent = g.footerStatus;
}

// ── ADMIN ──
function openAdmin() {
  document.getElementById('admin-overlay').classList.add('show');
  document.getElementById('login-box').style.display = 'block';
  document.getElementById('admin-panel').style.display = 'none';
  document.getElementById('pw-input').value = '';
  document.getElementById('login-err').textContent = '';
  setTimeout(() => document.getElementById('pw-input').focus(), 100);
}

function closeAdmin() {
  document.getElementById('admin-overlay').classList.remove('show');
}

function doLogin() {
  if (document.getElementById('pw-input').value === ADMIN_PASSWORD) {
    document.getElementById('login-box').style.display = 'none';
    document.getElementById('admin-panel').style.display = 'flex';
    populateAdmin();
    updateFilesAdminUI();
  } else {
    document.getElementById('login-err').textContent = '✕ Incorrect password';
    document.getElementById('pw-input').value = '';
    document.getElementById('pw-input').focus();
  }
}

function switchTab(name, el) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-pane').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('tab-' + name).classList.add('active');
}

function populateAdmin() {
  const g = DATA.general, ab = DATA.about, con = DATA.contact;

  // General
  document.getElementById('g-name').value         = g.name;
  document.getElementById('g-line1').value        = g.line1.replace(/&amp;/g, '&');
  document.getElementById('g-line2').value        = g.line2;
  document.getElementById('g-label').value        = g.label;
  document.getElementById('g-sub').value          = g.sub;
  document.getElementById('g-age').value          = g.age;
  document.getElementById('g-location').value     = g.location;
  document.getElementById('g-stack').value        = g.stack;
  document.getElementById('g-status').value       = g.status;
  document.getElementById('g-footer').value       = g.footer;
  document.getElementById('g-footer-status').value = g.footerStatus;

  // About
  document.getElementById('ab-p1').value       = ab.p1;
  document.getElementById('ab-p2').value       = ab.p2;
  document.getElementById('ab-p3').value       = ab.p3;
  document.getElementById('ab-p4').value       = ab.p4;
  document.getElementById('c-name').value      = ab.card.name;
  document.getElementById('c-age').value       = ab.card.age;
  document.getElementById('c-location').value  = ab.card.location;
  document.getElementById('c-primary').value   = ab.card.primary;
  document.getElementById('c-interests').value = ab.card.interests;
  document.getElementById('c-mantra').value    = ab.card.mantra;

  renderSkillsAdmin();
  renderProjectsAdmin();

  // Contact
  document.getElementById('con-h1').value   = con.h1;
  document.getElementById('con-h2').value   = con.h2.replace(/<[^>]*>/g, '');
  document.getElementById('con-note').value = con.note;
  renderContactLinksAdmin();
}

function renderSkillsAdmin() {
  document.getElementById('skills-admin-list').innerHTML = DATA.skills.map((s, i) => `
    <div class="skill-admin-tag">
      <span>${s.icon}</span>
      <input class="form-input" style="width:100px;padding:4px 8px" value="${s.name}" onchange="DATA.skills[${i}].name=this.value">
      <input class="form-input" style="width:130px;padding:4px 8px" value="${s.sub}"  onchange="DATA.skills[${i}].sub=this.value">
      <button onclick="DATA.skills.splice(${i},1);renderSkillsAdmin()">✕</button>
    </div>
  `).join('');
}

function addSkill() {
  const icon = document.getElementById('new-skill-icon').value.trim() || '⚡';
  const name = document.getElementById('new-skill-name').value.trim();
  const sub  = document.getElementById('new-skill-sub').value.trim();
  if (!name) return;
  DATA.skills.push({ icon, name, sub });
  document.getElementById('new-skill-icon').value = '';
  document.getElementById('new-skill-name').value = '';
  document.getElementById('new-skill-sub').value  = '';
  renderSkillsAdmin();
}

function renderProjectsAdmin() {
  document.getElementById('proj-admin-list').innerHTML = DATA.projects.map((p, i) => `
    <div class="proj-admin-card">
      <div class="proj-admin-head">
        <span class="proj-admin-num">Project ${i + 1}</span>
        <div class="proj-actions">
          <button class="icon-btn del" onclick="DATA.projects.splice(${i},1);renderProjectsAdmin()">Delete</button>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">Name</label><input class="form-input" value="${p.name}" onchange="DATA.projects[${i}].name=this.value"></div>
        <div class="form-group"><label class="form-label">Link Label</label><input class="form-input" value="${p.linkLabel}" onchange="DATA.projects[${i}].linkLabel=this.value"></div>
      </div>
      <div class="form-group"><label class="form-label">Description</label><textarea class="form-textarea" onchange="DATA.projects[${i}].desc=this.value">${p.desc}</textarea></div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">Tags (comma separated)</label><input class="form-input" value="${p.tags}" onchange="DATA.projects[${i}].tags=this.value"></div>
        <div class="form-group"><label class="form-label">URL</label><input class="form-input" value="${p.link}" onchange="DATA.projects[${i}].link=this.value"></div>
      </div>
    </div>
  `).join('');
}

function addProject() {
  DATA.projects.push({ name: "New Project", desc: "Description here.", tags: "tag1, tag2", link: "#", linkLabel: "View ↗" });
  renderProjectsAdmin();
}

function renderContactLinksAdmin() {
  document.getElementById('contact-admin-links').innerHTML = DATA.contact.links.map((l, i) => `
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr auto;gap:8px;margin-bottom:8px;align-items:center">
      <input class="form-input" value="${l.platform}" placeholder="Platform" onchange="DATA.contact.links[${i}].platform=this.value">
      <input class="form-input" value="${l.handle}"   placeholder="Handle"   onchange="DATA.contact.links[${i}].handle=this.value">
      <input class="form-input" value="${l.url}"      placeholder="URL"      onchange="DATA.contact.links[${i}].url=this.value">
      <button class="icon-btn del" onclick="DATA.contact.links.splice(${i},1);renderContactLinksAdmin()">✕</button>
    </div>
  `).join('');
}

function addContactLink() {
  DATA.contact.links.push({ platform: "Platform", handle: "handle", url: "#" });
  renderContactLinksAdmin();
}

function saveAll() {
  const encode = s => s.replace(/&/g, '&amp;');
  DATA.general = {
    name:         document.getElementById('g-name').value,
    line1:        encode(document.getElementById('g-line1').value),
    line2:        document.getElementById('g-line2').value,
    label:        document.getElementById('g-label').value,
    sub:          document.getElementById('g-sub').value,
    age:          document.getElementById('g-age').value,
    location:     document.getElementById('g-location').value,
    stack:        document.getElementById('g-stack').value,
    status:       document.getElementById('g-status').value,
    footer:       document.getElementById('g-footer').value,
    footerStatus: document.getElementById('g-footer-status').value
  };
  DATA.about = {
    p1: document.getElementById('ab-p1').value,
    p2: document.getElementById('ab-p2').value,
    p3: document.getElementById('ab-p3').value,
    p4: document.getElementById('ab-p4').value,
    card: {
      name:      document.getElementById('c-name').value,
      age:       document.getElementById('c-age').value,
      location:  document.getElementById('c-location').value,
      primary:   document.getElementById('c-primary').value,
      interests: document.getElementById('c-interests').value,
      mantra:    document.getElementById('c-mantra').value
    }
  };
  const h2raw = document.getElementById('con-h2').value;
  DATA.contact.h1   = document.getElementById('con-h1').value;
  DATA.contact.h2   = `Let's <span>${h2raw.replace("Let's ", "").replace(" it.", "")}</span> it.`;
  DATA.contact.note = document.getElementById('con-note').value;

  saveData(DATA);
  render();

  const msg = document.getElementById('save-msg');
  msg.classList.add('show');
  setTimeout(() => msg.classList.remove('show'), 2500);
}

// ── FILES ──
function handleFileUpload(input, type) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      localStorage.setItem('atomic_file_' + type, e.target.result);
      localStorage.setItem('atomic_file_' + type + '_name', file.name);
      updateFileButtons();
      updateFilesAdminUI();
    } catch (err) {
      alert('File too large to store. Please use a smaller PDF (under 4MB).');
    }
  };
  reader.readAsDataURL(file);
}

function clearFile(type) {
  localStorage.removeItem('atomic_file_' + type);
  localStorage.removeItem('atomic_file_' + type + '_name');
  updateFileButtons();
  updateFilesAdminUI();
}

function updateFileButtons() {
  ['resume', 'cv'].forEach(function(type) {
    const data = localStorage.getItem('atomic_file_' + type);
    const btn  = document.getElementById(type + '-btn');
    if (!btn) return;
    if (data) {
      btn.href = data;
      btn.style.opacity       = '1';
      btn.style.pointerEvents = 'auto';
    } else {
      btn.href = '#';
      btn.style.opacity       = '0.35';
      btn.style.pointerEvents = 'none';
    }
  });
}

function updateFilesAdminUI() {
  ['resume', 'cv'].forEach(function(type) {
    const name  = localStorage.getItem('atomic_file_' + type + '_name');
    const el    = document.getElementById(type + '-filename');
    const badge = document.getElementById(type + '-badge');
    if (el)    el.textContent      = name || 'No file uploaded';
    if (badge) badge.style.display = name ? 'inline' : 'none';
  });
}

// ── CURSOR ──
const cur  = document.getElementById('cur');
const ring = document.getElementById('cur-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cur.style.left = mx + 'px'; cur.style.top = my + 'px';
});
(function loop() {
  rx += (mx - rx) * .12;
  ry += (my - ry) * .12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(loop);
})();

// ── NAV SCROLL ──
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 40);
});

// ── SCROLL REVEAL ──
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// ── INIT ──
render();
updateFileButtons();
