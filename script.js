/* Number of photos per project: files are images/<slug>-01.webp, -02.webp ... */
const COUNTS = {
  'a-taste-of-honey': 17,
  'aya-love': 8,
  'children-of-the-night': 5,
  emilia: 5,
  'flesh-code': 18,
  harvest: 12,
  'queen-of-the-field-mice': 6,
  'shark-tooth-necklace': 4,
  'the-gardening-club': 8
};
const IMG = {};
for (const [slug, n] of Object.entries(COUNTS))
  IMG[slug] = Array.from(
    { length: n },
    (_, i) => slug + '-' + String(i + 1).padStart(2, '0') + '.webp'
  );
const E = '<span class="evie">Eve Jones</span>';
const PROJECTS = [
  {
    slug: 'harvest',
    title: 'Harvest',
    sub: 'Richard Bean · Paul McCartney Auditorium',
    role: 'Set design',
    cover: 1,
    credits: [
      ['Director', 'David Salter'],
      ['Set Designers', E + ' and Milly Noble'],
      ['Costume Designer', 'Grace Roberts'],
      ['Lighting Designer', 'Aideen McGaharan'],
      ['Photographer', 'Andrew AB']
    ],
    text: [
      'Richard Bean’s <em>Harvest</em> follows the journey of a Yorkshire farming family across generations, from the late 19th century to 2008. Our goal was to design a set that felt warm, lived in and authentic, while allowing smooth transitions between the play’s shifting time periods.',
      'Drawing inspiration from traditional Yorkshire farmhouse architecture and guided by a strong, cohesive colour palette, we created a stylised set that was both visually striking and functionally tailored to the needs of the production.'
    ],
    caps: {
      1: 'Production photo',
      2: 'The set, 1958: Muck Day',
      3: 'Scale model',
      4: 'Colour palette',
      5: 'Research: Yorkshire farmhouses'
    }
  },
  {
    slug: 'flesh-code',
    title: 'Flesh: Code',
    sub: 'Devised piece · George Harrison Studio',
    role: 'Set & costume design',
    cover: 1,
    credits: [
      ['Directors', 'Victoria Moseley and Ollie Dimdale'],
      ['Set and Costume Designers', E + ' and Shannon Blackwood'],
      ['Lighting Designer', 'Jasmine Lam Ching'],
      ['AV Designer', 'Faith To'],
      ['Photographer', 'Robin Clewley']
    ],
    text: [
      '<em>Flesh: Code</em> is a devised piece exploring the rise of AI within a human-centred society. For the set, we drew inspiration from the chaos of a circuit board, revealing the hidden complexity behind the polished image of modern technology.',
      'In contrast, the costumes grounded the piece in humanity. I wanted the characters to feel authentic and real, emphasising the tension between the organic and the artificial.'
    ],
    caps: {}
  },
  {
    slug: 'the-gardening-club',
    title: 'The Gardening Club',
    sub: 'New Wimbledon Theatre',
    role: 'Set design',
    cover: 1,
    credits: [
      ['Director', 'Tara Noonan'],
      ['Set Designer', E],
      ['Costume Designer', 'Shannon Blackwood'],
      ['Lighting Designer', 'Thea Bulgin']
    ],
    text: [
      'A new pop-rock musical set in 1960 Georgia, USA, where a group of women form a secret drug ring to distribute the birth control pill illegally, using a gardening club as a cover-up.',
      'A fiery journalist, a brave nurse, a cookie-cutter housewife and two teenage sisters join forces to do whatever it takes to help the women of Savannah.'
    ],
    caps: {
      5: 'Research and layout',
      6: 'Research: the newsroom',
      7: 'Research: 1960s Savannah'
    }
  },
  {
    slug: 'a-taste-of-honey',
    title: 'A Taste of Honey',
    sub: 'Shelagh Delaney · Everyman Theatre',
    role: 'Design from text',
    cover: 1,
    tag: 'Hypothetical project',
    credits: [
      ['Director', 'Nick Bagnell'],
      ['Designer', E]
    ],
    text: [
      'A hypothetical design for Shelagh Delaney’s <em>A Taste of Honey</em>, set on a revolving stage for the Everyman Theatre. The concept explores the cobbled streets of Salford and the working-class maisonettes that frame the story.',
      'My design aimed to reflect the play’s sombre tone and emotional weight, creating a space that feels both grounded and expressive.'
    ],
    caps: {
      1: 'Scale model',
      2: 'Scale model',
      3: 'Scale model: the cobbled street',
      4: 'Scale model: the cobbled street',
      10: 'Research: Salford',
      11: 'Research: Salford',
      12: 'Costume design: Helen, the mother',
      13: 'Costume design: Jo, the daughter',
      14: 'Costume design: Jo, the daughter',
      15: 'Colour scheme for Jo, contrasting her mother’s',
      16: 'Sketch',
      17: 'Sketch'
    }
  },
  {
    slug: 'shark-tooth-necklace',
    title: 'Shark Tooth Necklace',
    sub: 'Hugo Chegwin promo shoot',
    role: 'Scenic art',
    cover: 1,
    credits: [
      ['Art Director', 'Milly Noble'],
      ['Assistant Stylist', 'Phoebe de Angelis'],
      ['Scenic Artists', E + ' and Ewan Anderson'],
      ['Photographer', 'Charlie Harris']
    ],
    text: [],
    caps: {}
  },
  {
    slug: 'children-of-the-night',
    title: 'Children of the Night',
    sub: 'Danielle Phillips · Cast Theatre',
    role: 'Costume assistant',
    cover: 1,
    credits: [
      ['Director', 'Kimberly Sykes'],
      ['Set and Costume Designer', 'Hannah Sibai'],
      ['Costume Assistant', E],
      ['Lighting Designer', 'Jessie Addinnal'],
      ['Photographer', 'Marc Brenner']
    ],
    text: [
      'GCSE results day, 1997. Lindsay Jenkins, a young Donny lass with an A in English, a thirst for rave and £4.25 for the taxi home, embarks on her first proper night out in Doncaster’s infamous club Karisma.',
      'When chasing the high of clubland becomes all-consuming, and a national media storm erupts around the UK’s first heterosexual HIV cluster, Lindsay must confront the brutal truths lurking beneath the bassline.'
    ],
    caps: {}
  },
  {
    slug: 'queen-of-the-field-mice',
    title: 'Queen of the Field Mice',
    sub: 'Costume prop · after L. Frank Baum',
    role: 'Design & making',
    cover: 1,
    credits: [
      ['Inspired by', '<em>The Wonderful Wizard of Oz</em>, L. Frank Baum'],
      ['Designer', E]
    ],
    text: [
      'A costume prop inspired by the Queen of the Field Mice from <em>The Wonderful Wizard of Oz</em>. I wanted to give the character a dark twist, so I created a new backstory for her in which she killed her mice subjects and wore them as accessories.'
    ],
    caps: { 2: 'Design sketch', 6: 'Research' }
  },
  {
    slug: 'emilia',
    title: 'Emilia',
    sub: 'Morgan Lloyd Malcolm · Paul McCartney Auditorium',
    role: 'Costume & set assistant, wigs',
    cover: 1,
    credits: [
      ['Director', 'Jameela Kahn'],
      ['Costume Designer', 'Emily Griffiths'],
      ['Set Designer', 'Amy-Ellen Critchley'],
      ['Costume and Set Assistants, Wig Styling', E + ' and Jess Keenan'],
      ['Lighting Designer', 'Aideen McGaharan'],
      ['Photographer', 'Andrew AB']
    ],
    text: [
      '<em>Emilia</em> tells the story of Emilia Bassano, a real 17th-century poet and one of the first women to be published in England. The play reimagines her life, giving voice to a figure long overlooked by history, and explores her identity as a writer, mother and feminist within a deeply oppressive society.',
      'It was a bold, camp expression of Lloyd Malcolm’s feminist writing. I assisted the design team in bringing their vision to life, with a particular focus on wig-making, developing skills in sculpting and styling.'
    ],
    caps: {}
  },
  {
    slug: 'aya-love',
    title: 'Aya Love',
    sub: 'Drag transformation',
    role: 'Design, make-up & photography',
    cover: 1,
    credits: [
      ['Designer', E],
      ['Photographer', E]
    ],
    text: [
      'I transformed my dad into a drag queen inspired by the vibrant and rebellious aesthetics of 1980s drag culture, drawing on the era’s bold make-up and exaggerated fashion.',
      'I used this transformation to explore themes of identity and gender expression. The process became a playful yet meaningful collaboration that challenged norms, celebrated queer history and highlighted the power of transformation as both art and personal expression.'
    ],
    caps: {
      3: 'Make-up test',
      4: 'Make-up test',
      5: 'Using tulle to create the desired body shape',
      6: 'Fashion illustration'
    }
  }
];
const PHOTOG = {
  harvest: 'Andrew AB',
  'flesh-code': 'Robin Clewley',
  'shark-tooth-necklace': 'Charlie Harris',
  'children-of-the-night': 'Marc Brenner',
  emilia: 'Andrew AB',
  'aya-love': 'Eve Jones'
};
const SKILLS = [
  ['Set design', 'Harvest, Flesh: Code, The Gardening Club'],
  ['Costume design', 'Flesh: Code, A Taste of Honey'],
  ['Scale model making', 'Harvest, A Taste of Honey'],
  ['Wig making and styling', 'Emilia'],
  ['Costume props', 'Queen of the Field Mice'],
  ['Make-up', 'Aya Love'],
  ['Scenic art', 'Shark Tooth Necklace']
];

const app = document.getElementById('app');
const src = (f) => 'images/' + f;
const imgsOf = (p) => IMG[p.slug] || [];

function home() {
  const hero = IMG['emilia'][2];
  return `<div class="wrap fade">
    <div class="intro">
      <h1 class="caps">Eve Jones</h1>
      <p>Theatre designer working across set, costume, wigs and props. <span>Based in Manchester.</span></p>
    </div>
    <figure class="hero-fig">
      <a href="#emilia"><img src="${src(hero)}" alt="Two performers in sculpted pink wigs in Emilia"></a>
      <figcaption>Emilia, wig styling with Jess Keenan. Photo: Andrew AB</figcaption>
    </figure>
    <section>
      <div class="work-head"><h2 class="caps">Work</h2></div>
      <div class="grid">${PROJECTS.map((p) => {
        const c = imgsOf(p)[p.cover - 1];
        return `
        <a class="card" href="#${p.slug}">
          <div class="ph"><img loading="lazy" src="${src(c)}" alt=""></div>
          <h3 class="caps">${p.title}</h3>
          <div class="meta"><span class="label">${p.sub.split(' · ').pop()}</span><span class="role">${p.role}</span></div>
        </a>`;
      }).join('')}</div>
    </section>
  </div>`;
}

function project(p) {
  const i = PROJECTS.indexOf(p),
    prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length],
    next = PROJECTS[(i + 1) % PROJECTS.length];
  const ims = imgsOf(p);
  return `<div class="wrap fade">
    <div class="proj-top">
      <div>
        ${p.tag ? `<span class="tag">${p.tag}</span>` : ''}
        <h1 class="caps">${p.title}</h1>
        <p class="proj-sub">${p.sub}</p>
      </div>
      <div class="proj-body">
        <dl class="programme">${p.credits.map(([k, v]) => `<div class="row"><dt>${k}</dt><span class="lead" aria-hidden="true"></span><dd>${v}</dd></div>`).join('')}</dl>
        <div class="prose">${p.text.map((t) => `<p>${t}</p>`).join('')}${p.slug === 'children-of-the-night' ? '<p class="note">Synopsis of the play. Eve worked on the production as costume assistant.</p>' : ''}</div>
      </div>
    </div>
    <div class="gallery">${ims.map((m, k) => `<button type="button" data-i="${k}" aria-label="Open image ${k + 1} of ${ims.length}"><img loading="lazy" src="${src(m)}" alt="${p.title}${p.caps[k + 1] ? ': ' + p.caps[k + 1] : ''}">${p.caps[k + 1] ? `<p class="cap">${p.caps[k + 1]}</p>` : ''}</button>`).join('')}</div>
    ${PHOTOG[p.slug] ? `<p class="photo-credit">Production photography: ${PHOTOG[p.slug]}</p>` : ''}
    <nav class="pn" aria-label="More projects">
      <a href="#${prev.slug}"><span class="label">Previous</span><span class="caps">${prev.title}</span></a>
      <a href="#${next.slug}"><span class="label">Next</span><span class="caps">${next.title}</span></a>
    </nav>
  </div>`;
}

function about() {
  return `<div class="wrap fade">
    <div class="about">
      <div>
        <h1 class="caps">About</h1>
        <div class="prose">
          <p>Eve Jones is a theatre designer based in Manchester, working across set, costume, wigs and props.</p>
          <p>Her work ranges from warm, lived-in period sets, like the Yorkshire farmhouse of Richard Bean’s <a href="#harvest"><em>Harvest</em></a>, to devised pieces exploring technology and the human body, like <a href="#flesh-code"><em>Flesh: Code</em></a>.</p>
          <p>Alongside design she works as a scenic artist and costume assistant, and is drawn to bold, transformative work, from a dark-twist <a href="#queen-of-the-field-mice"><em>Queen of the Field Mice</em></a> to turning her dad into a 1980s drag queen in <a href="#aya-love"><em>Aya Love</em></a>.</p>
        </div>
      </div>
      <div>
        <p class="label" style="margin:0 0 12px">Practice</p>
        <ul class="skills">${SKILLS.map(([s, w]) => `<li>${s}<span>${w}</span></li>`).join('')}</ul>
        <!-- CV: save the PDF as cv/Eve-Jones-CV.pdf next to index.html -->
        <a class="cv-btn" href="cv/Eve-Jones-CV.pdf" target="_blank" rel="noopener">Download CV</a>
      </div>
    </div>
  </div>
  <section id="contact-section">
    <div class="wrap contact">
        <h2 class="caps">Contact</h2>
        <div class="c-item"><span class="label">Email</span><span class="v"><a href="mailto:joneseve42@gmail.com">joneseve42@gmail.com</a></span></div>
        <div class="c-item"><span class="label">Instagram</span><span class="v"><a href="https://www.instagram.com/_jonesevie_/" target="_blank" rel="noopener">@_jonesevie_</a></span></div>
        <div class="c-item"><span class="label">LinkedIn</span><span class="v"><a href="https://www.linkedin.com/" target="_blank" rel="noopener" class="placeholder">LinkedIn to be added</a></span></div>
    </div>
  </section>`;
}

let current = null;
function route() {
  const h = location.hash.replace('#', '');
  const p = PROJECTS.find((x) => x.slug === h);
  let view = 'work';
  if (p) {
    app.innerHTML = project(p);
    current = p;
    view = 'work';
    document.title = p.title + ' · Eve Jones';
  } else if (h === 'about' || h === 'contact') {
    app.innerHTML = about();
    current = null;
    view = h;
    document.title = 'About · Eve Jones';
  } else {
    app.innerHTML = home();
    current = null;
    document.title = 'Eve Jones';
  }
  document.querySelectorAll('[data-nav]').forEach((a) => {
    if (a.dataset.nav === view) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
  if (h === 'contact')
    document.getElementById('contact-section').scrollIntoView();
  else window.scrollTo(0, 0);
}
const burger = document.getElementById('burger'),
  menu = document.getElementById('menu');
function setMenu(open) {
  menu.hidden = !open;
  burger.setAttribute('aria-expanded', open);
  burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  document.body.classList.toggle('menu-open', open);
}
burger.addEventListener('click', () => setMenu(menu.hidden));
menu.addEventListener('click', (e) => {
  if (e.target.closest('a')) setMenu(false);
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !menu.hidden) setMenu(false);
});
window.addEventListener('hashchange', () => {
  setMenu(false);
  route();
});
route();

/* lightbox */
const lb = document.getElementById('lb'),
  lbImg = document.getElementById('lb-img'),
  lbCap = document.getElementById('lb-cap'),
  lbCount = document.getElementById('lb-count');
let li = 0;
function show(k) {
  const ims = imgsOf(current);
  li = (k + ims.length) % ims.length;
  lbImg.src = src(ims[li]);
  lbImg.alt = current.title;
  lbCap.textContent = current.caps[li + 1] || '';
  lbCount.textContent = `${current.title} · ${li + 1} / ${ims.length}`;
}
app.addEventListener('click', (e) => {
  const b = e.target.closest('.gallery button');
  if (!b || !current) return;
  show(+b.dataset.i);
  try {
    lb.showModal();
  } catch (_) {
    lb.setAttribute('open', '');
  }
});
document.getElementById('lb-close').onclick = () => lb.close();
document.getElementById('lb-prev').onclick = () => show(li - 1);
document.getElementById('lb-next').onclick = () => show(li + 1);
lb.addEventListener('click', (e) => {
  if (e.target.classList.contains('lb-stage')) lb.close();
});
document.addEventListener('keydown', (e) => {
  if (!lb.open) return;
  if (e.key === 'ArrowLeft') show(li - 1);
  if (e.key === 'ArrowRight') show(li + 1);
});
let tx = null;
lb.addEventListener(
  'touchstart',
  (e) => {
    tx = e.touches[0].clientX;
  },
  { passive: true }
);
lb.addEventListener('touchend', (e) => {
  if (tx === null) return;
  const d = e.changedTouches[0].clientX - tx;
  if (Math.abs(d) > 50) show(li + (d < 0 ? 1 : -1));
  tx = null;
});
