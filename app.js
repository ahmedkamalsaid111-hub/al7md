/* ===== FURNITURE DATA =====
   IMAGE PATHS:
   Put your images in a folder called "images" in your GitHub repo.
   Inside "images", create these 5 subfolders:

   images/
   ├── bedroom/
   │   ├── 1.jpg
   │   ├── 2.jpg
   │   ├── 3.jpg
   │   ├── 4.jpg
   │   └── 5.jpg
   ├── kids/
   │   ├── 1.jpg
   │   ├── 2.jpg
   │   ├── 3.jpg
   │   ├── 4.jpg
   │   └── 5.jpg
   ├── dining/
   │   ├── 1.jpg
   │   ├── 2.jpg
   │   ├── 3.jpg
   │   ├── 4.jpg
   │   └── 5.jpg
   ├── salon/
   │   ├── 1.jpg
   │   ├── 2.jpg
   │   ├── 3.jpg
   │   ├── 4.jpg
   │   └── 5.jpg
   └── corner/
       ├── 1.jpg
       ├── 2.jpg
       ├── 3.jpg
       ├── 4.jpg
       └── 5.jpg

   So bedroom style 1 image = images/bedroom/1.jpg
   Salon style 3 image     = images/salon/3.jpg
   etc.
*/

const DATA = {
  bedroom: [
    {
      img: "images/bedroom/1.jpg",
      badge: "الأكثر مبيعًا", tag: "كلاسيك مصري",
      name: "غرفة نوم كلاسيك ملوكي",
      sub: "الطراز الكلاسيكي المصري الأصيل",
      desc: "غرفة نوم فاخرة بنقوشات ذهبية يدوية على خشب الزان الأحمر. تصميم ملكي يعكس الفخامة والأناقة مع تفاصيل دقيقة في كل زاوية.",
      features: ["خشب زان أحمر طبيعي ١٠٠٪","نقوشات يدوية مذهبة بماء الذهب","سرير ١٨٠×٢٠٠ + ٢ كمودينو + تسريحة + دولاب ٦ ضلف","دهان بولي استر إيطالي لامع","ضمان ١٠ سنوات على الهيكل"]
    },
    {
      img: "images/bedroom/2.jpg",
      badge: "عصري", tag: "مودرن",
      name: "غرفة نوم مودرن",
      sub: "التصميم العصري بلمسة مصرية",
      desc: "تصميم عصري أنيق يجمع بين البساطة والفخامة. خطوط مستقيمة ونظيفة مع إضاءة LED مخفية. مثالية للشباب والعرسان الجدد.",
      features: ["خشب MDF عالي الكثافة مع قشرة بلوط","إضاءة LED مخفية في الهيدبورد","سرير + ٢ كمودينو + تسريحة + دولاب جرار ٢.٤٠م","دهان سوفت تاتش مطفي","ضمان ٧ سنوات"]
    },
    {
      img: "images/bedroom/3.jpg",
      badge: "حصري", tag: "فرعوني",
      name: "غرفة نوم فرعوني",
      sub: "إلهام من حضارة سبعة آلاف سنة",
      desc: "تحفة فنية مستوحاة من الحضارة الفرعونية. نقوشات هيروغليفية يدوية مع زخارف ذهبية تحاكي مقابر الملوك.",
      features: ["خشب جوز أمريكي فاخر","نقوشات هيروغليفية يدوية محفورة","سرير ملكي + كمودينو × ٢ + تسريحة + دولاب ٨ ضلف","تذهيب يدوي بورق الذهب الحقيقي","ضمان ١٥ سنة - إصدار محدود"]
    },
    {
      img: "images/bedroom/4.jpg",
      badge: "مميز", tag: "نيوكلاسيك",
      name: "غرفة نوم نيوكلاسيك",
      sub: "الكلاسيكية الجديدة بروح عصرية",
      desc: "مزيج مثالي بين فخامة الكلاسيك وبساطة المودرن. ألوان هادئة مع لمسات ذهبية رقيقة.",
      features: ["خشب زان مع قشرة أوك طبيعية","تطعيمات نحاسية وذهبية أنيقة","سرير + ٢ كمودينو + تسريحة + شماعة + دولاب ٦ ضلف","دهان بولي استر نصف لامع","ضمان ١٠ سنوات"]
    },
    {
      img: "images/bedroom/5.jpg",
      badge: "بسيط", tag: "مينيمال",
      name: "غرفة نوم مينيمال",
      sub: "البساطة في أبهى صورها",
      desc: "لمحبي البساطة. خطوط بسيطة وألوان طبيعية هادئة تبعث على الراحة والاسترخاء. تناسب جميع المساحات.",
      features: ["خشب صنوبر معالج طبيعي","تصميم موفر للمساحة مع تخزين ذكي","سرير بأدراج + كمودينو + كونسول + دولاب جرار","ألوان طبيعية مطفية","ضمان ٥ سنوات"]
    }
  ],
  kids: [
    {
      img: "images/kids/1.jpg",
      badge: "بناتي", tag: "أميرات",
      name: "غرفة أطفال الأميرات",
      sub: "حلم كل بنوتة صغيرة",
      desc: "غرفة ساحرة بألوان الوردي والأبيض. آمنة ١٠٠٪ مع زوايا مدورة وخامات صديقة للبيئة.",
      features: ["خشب MDF مقاوم للرطوبة - آمن للأطفال","سرير ١٢٠×٢٠٠ + دولاب + مكتب + كمودينو","ألوان مائية صحية خالية من الرصاص","تصميم مرن قابل للتعديل مع النمو","ضمان ٧ سنوات"]
    },
    {
      img: "images/kids/2.jpg",
      badge: "ولادي", tag: "مغامرات",
      name: "غرفة أطفال المغامرين",
      sub: "لأبطال المستقبل الصغار",
      desc: "غرفة مليئة بالحيوية بألوان الأزرق والأخضر مع تصميمات مستوحاة من عالم المغامرات.",
      features: ["خشب طبيعي معالج + ألوان مائية آمنة","سرير دورين + مكتب + دولاب + أرفف","سلم آمن مع حواجز حماية","مساحة لعب مدمجة","ضمان ٧ سنوات"]
    },
    {
      img: "images/kids/3.jpg",
      badge: "يوني", tag: "فضاء",
      name: "غرفة أطفال الفضاء",
      sub: "رحلة بين النجوم والكواكب",
      desc: "تصميم خيالي مستوحى من الفضاء بألوان البنفسجي والأزرق الغامق مع نجوم مضيئة.",
      features: ["إضاءة نجوم LED مدمجة","سرير + مكتب زاوية + دولاب + مكتبة","ملصقات فسفورية مضيئة في الظلام","تصميم يناسب الأولاد والبنات","ضمان ٧ سنوات"]
    },
    {
      img: "images/kids/4.jpg",
      badge: "طبيعي", tag: "مونتيسوري",
      name: "غرفة أطفال مونتيسوري",
      sub: "دفء الطبيعة في غرفة طفلك",
      desc: "خشب طبيعي صديق للبيئة يشجع استقلالية الطفل بتصميم مونتيسوري.",
      features: ["خشب صنوبر طبيعي بدون كيماويات","سرير قابل للتطويل + دولاب + مكتب","دهانات مائية صديقة للبيئة","تصميم مونتيسوري تعليمي","ضمان ١٠ سنوات"]
    },
    {
      img: "images/kids/5.jpg",
      badge: "مراهقين", tag: "تين إيجرز",
      name: "غرفة شبابية تين إيجرز",
      sub: "لشباب المستقبل الطموح",
      desc: "تصميم عصري يناسب المراهقين مع مكتب واسع ووحدات تخزين ذكية.",
      features: ["خشب MDF هاي جلوس مع معدن","سرير ١٢٠ + مكتب كمبيوتر + دولاب جرار","فتحات تنظيم أسلاك وشواحن","تصميم قابل للتخصيص","ضمان ٧ سنوات"]
    }
  ],
  dining: [
    {
      img: "images/dining/1.jpg",
      badge: "كلاسيك", tag: "لويس",
      name: "سفرة كلاسيك لويس",
      sub: "فخامة القصور على مائدتك",
      desc: "سفرة كلاسيكية فاخرة بطراز لويس مع حفر يدوي متقن على خشب الزان وتذهيب بورق الذهب.",
      features: ["ترابيزة ٢٤٠×١٢٠ تتسع ٨ أشخاص","٨ كراسي محفورة يدويًا + تنجيد شانيل","نيش ٣ ضلف كريستال + بوفيه + مرآة","خشب زان أحمر + تذهيب يدوي","ضمان ١٥ سنة"]
    },
    {
      img: "images/dining/2.jpg",
      badge: "مودرن", tag: "عصري",
      name: "سفرة مودرن عصرية",
      sub: "أناقة العصر على مائدتك",
      desc: "سطح رخام طبيعي مع أرجل معدنية ذهبية وكراسي فيلفت إيطالية مريحة.",
      features: ["ترابيزة رخام طبيعي ٢٠٠×١٠٠","٦ كراسي فيلفت بأرجل ذهبية","بوفيه مودرن + وحدة عرض زجاجية","تصميم إيطالي بتنفيذ مصري","ضمان ١٠ سنوات"]
    },
    {
      img: "images/dining/3.jpg",
      badge: "فاخر", tag: "أرابيسك",
      name: "سفرة أرابيسك شرقية",
      sub: "روعة الزخارف الإسلامية",
      desc: "خشب جوز مصري أصيل مع تطعيمات صدف وعرق لؤلؤ حقيقي. تحفة فنية نادرة.",
      features: ["خشب جوز مصري + تطعيم صدف يدوي","ترابيزة مستديرة أو مستطيلة حسب الطلب","٨ كراسي أرابيسك + نيش + بوفيه","حفر أرابيسك يدوي ١٠٠٪","ضمان ٢٠ سنة"]
    },
    {
      img: "images/dining/4.jpg",
      badge: "نيوكلاسيك", tag: "معاصر",
      name: "سفرة نيوكلاسيك",
      sub: "بين الأصالة والمعاصرة",
      desc: "ترابيزة بيضاوية أنيقة مع كراسي كابيتونيه مريحة ونيش بإضاءة داخلية.",
      features: ["ترابيزة بيضاوية ٢٢٠×١١٠ قابلة للفرد","٨ كراسي كابيتونيه بتنجيد إيطالي","نيش بإضاءة LED + بوفيه","دهان بولي يوريثان أبيض + ذهبي","ضمان ١٢ سنة"]
    },
    {
      img: "images/dining/5.jpg",
      badge: "اقتصادي", tag: "عملي",
      name: "سفرة عملية اقتصادية",
      sub: "جودة عالية بسعر مناسب",
      desc: "سفرة عملية أنيقة تناسب العائلات المصرية والشقق الجديدة.",
      features: ["خشب MDF هاي جلوس","ترابيزة ١٨٠×٩٠ + ٦ كراسي مبطنة","نيش ضلفتين + بوفيه عملي","متوفر بعدة ألوان","ضمان ٥ سنوات"]
    }
  ],
  salon: [
    {
      img: "images/salon/1.jpg",
      badge: "ملوكي", tag: "كلاسيك فرنسي",
      name: "صالون كلاسيك فرنسي",
      sub: "فخامة القصور في بيتك",
      desc: "صالون ملكي بطراز فرنسي مع حفر يدوي متقن وتذهيب بورق الذهب. تنجيد شانيل أصلي.",
      features: ["كنبة ٣ + كنبة ٢ + ٢ فوتيه","هيكل زان أحمر محفور يدويًا","تنجيد شانيل أو جاكار إيطالي","ترابيزة وسط رخام + ٢ جانبية","ضمان ١٥ سنة"]
    },
    {
      img: "images/salon/2.jpg",
      badge: "عصري", tag: "مودرن لاكشري",
      name: "صالون مودرن لاكشري",
      sub: "الأناقة العصرية الفاخرة",
      desc: "تصميم إيطالي فاخر مع تنجيد فيلفت أو جلد طبيعي وقاعدة ستانلس ذهبية.",
      features: ["كنبة ٣ + ٢ + ٢ فوتيه مودرن","تنجيد فيلفت إيطالي أو جلد","قاعدة ستانلس ذهبية","ترابيزة وسط رخام","ضمان ١٠ سنوات"]
    },
    {
      img: "images/salon/3.jpg",
      badge: "شرقي", tag: "عثماني",
      name: "صالون عثماني شرقي",
      sub: "سحر الشرق في كل تفصيلة",
      desc: "مستوحى من الطراز العثماني بزخارف شرقية رائعة وتطعيمات نحاسية.",
      features: ["كنبة ٣ + ٢ + ٢ فوتيه عثماني","حفر يدوي بزخارف عثمانية","تنجيد أقمشة شرقية مطرزة","ترابيزة نحاسية مطعمة","ضمان ١٢ سنة"]
    },
    {
      img: "images/salon/4.jpg",
      badge: "نيوكلاسيك", tag: "كابيتونيه",
      name: "صالون كابيتونيه أنيق",
      sub: "رقي التنجيد الكلاسيكي",
      desc: "تنجيد كابيتونيه بفيلفت فاخر مع هيكل خشبي أنيق بألوان هادئة راقية.",
      features: ["كنبة ٣ + ٢ + ٢ فوتيه + بانكت","تنجيد كابيتونيه فيلفت","هيكل زان أوف وايت وذهبي","ترابيزة وسط خشب ورخام","ضمان ١٠ سنوات"]
    },
    {
      img: "images/salon/5.jpg",
      badge: "اقتصادي", tag: "عملي أنيق",
      name: "صالون عملي اقتصادي",
      sub: "أناقة بسعر يناسب الجميع",
      desc: "صالون أنيق بسعر اقتصادي للعرسان الجدد. متوفر بعدة ألوان تناسب جميع الديكورات.",
      features: ["كنبة ٣ + ٢ + ٢ فوتيه","هيكل زان + تنجيد مستورد","ترابيزة وسط + ٢ جانبية","متوفر بـ ١٠ ألوان","ضمان ٧ سنوات"]
    }
  ],
  corner: [
    {
      img: "images/corner/1.jpg",
      badge: "الأكثر مبيعًا", tag: "ركنة L",
      name: "ركنة L كلاسيك فاخرة",
      sub: "راحة ملكية لعائلتك",
      desc: "ركنة L بتصميم كلاسيكي فخم تتسع لـ ٧ أشخاص بكل راحة.",
      features: ["أبعاد ٣.٢٠ × ٢.٤٠ متر","هيكل زان + إسفنج عالي الكثافة","تنجيد شانيل أو جلد صناعي فاخر","وسائد قابلة للغسيل","ضمان ١٠ سنوات"]
    },
    {
      img: "images/corner/2.jpg",
      badge: "مودرن", tag: "U شكل",
      name: "ركنة U مودرن",
      sub: "تصميم عصري يحتضن العائلة",
      desc: "ركنة ضخمة U مع سرير مخفي وأدراج تخزين. تتسع ١٠ أشخاص.",
      features: ["أبعاد ٣.٨٠ × ٢.٨٠ متر","سرير مخفي قابل للطي ١٤٠×١٩٠","أدراج تخزين أسفل المقاعد","تنجيد فيلفت مقاوم للبقع","ضمان ١٠ سنوات"]
    },
    {
      img: "images/corner/3.jpg",
      badge: "مينيمال", tag: "اسكندنافي",
      name: "ركنة اسكندنافي بسيطة",
      sub: "بساطة أنيقة وراحة مطلقة",
      desc: "تصميم اسكندنافي بسيط بألوان طبيعية. تناسب المساحات الصغيرة والمتوسطة.",
      features: ["أبعاد ٢.٦٠ × ١.٨٠ متر","أرجل خشب زان طبيعي","وسائد قابلة للغسيل","قماش كتاني طبيعي مقاوم","ضمان ٧ سنوات"]
    },
    {
      img: "images/corner/4.jpg",
      badge: "فخم", tag: "شيسترفيلد",
      name: "ركنة شيسترفيلد فاخرة",
      sub: "أيقونة الأثاث الإنجليزي",
      desc: "شيسترفيلد بتنجيد كابيتونيه عميق بجلد إيطالي فاخر. لمسة أرستقراطية فريدة.",
      features: ["أبعاد ٣.٠٠ × ٢.٠٠ متر","تنجيد كابيتونيه جلد إيطالي","إسفنج طبي عالي الكثافة","متوفر: بني - أسود - بوردو","ضمان ١٢ سنة"]
    },
    {
      img: "images/corner/5.jpg",
      badge: "متحولة", tag: "ذكية",
      name: "ركنة ذكية متعددة الوظائف",
      sub: "أثاث ذكي لحياة عصرية",
      desc: "تتحول لسرير مزدوج في ثوانٍ مع أدراج تخزين ومنافذ USB وشاحن لاسلكي مدمج.",
      features: ["تتحول لسرير ١٦٠×٢٠٠","أدراج تخزين + حامل أكواب","منافذ USB + شاحن لاسلكي","تنجيد تكنو فابريك مقاوم للماء","ضمان ١٠ سنوات"]
    }
  ]
};

/* ===== STATE ===== */
const state = {};
let activeTab = 'bedroom';

/* ===== BUILD CARD (NO PRICE) ===== */
function buildCard(item, index) {
  const feats = item.features.map(f => `<li>${f}</li>`).join('');
  return `
    <div class="card ${index === 0 ? 'active' : ''}" data-i="${index}">
      <div class="card-inner">
        <div class="card-img">
          <img src="${item.img}" alt="${item.name}" loading="lazy">
          <div class="card-overlay"></div>
          <div class="card-badge">${item.badge}</div>
          <div class="card-tag">${item.tag}</div>
        </div>
        <div class="card-info">
          <h3>${item.name}</h3>
          <p class="sub">${item.sub}</p>
          <p class="desc">${item.desc}</p>
          <ul class="features">${feats}</ul>
          <div class="price-row">
            <a href="https://wa.me/201155833994?text=${encodeURIComponent('مرحبًا، أنا مهتم بـ ' + item.name + ' وأريد الاستفسار عن السعر')}" target="_blank">
              <button class="btn-gold">استفسر عن السعر 💬</button>
            </a>
          </div>
        </div>
      </div>
    </div>`;
}

function buildDots(name, count) {
  let html = '';
  for (let i = 0; i < count; i++) {
    html += `<div class="dot ${i === 0 ? 'active' : ''}" onclick="go('${name}',${i})"></div>`;
  }
  return html;
}

function init() {
  Object.keys(DATA).forEach(name => {
    const items = DATA[name];
    const slider = document.getElementById('slider-' + name);
    const dotsEl = document.getElementById('dots-' + name);
    slider.innerHTML = items.map((item, i) => buildCard(item, i)).join('');
    dotsEl.innerHTML = buildDots(name, items.length);
    state[name] = { current: 0, total: items.length, interval: null };
  });
  startAutoplay('bedroom');
}

/* ===== SLIDER LOGIC ===== */
function go(name, idx) {
  const s = state[name];
  const slider = document.getElementById('slider-' + name);
  const cards = slider.querySelectorAll('.card');
  const dots = document.getElementById('dots-' + name).querySelectorAll('.dot');

  cards.forEach(c => c.classList.remove('active', 'exit'));
  if (s.current !== idx) cards[s.current].classList.add('exit');

  setTimeout(() => {
    cards.forEach(c => c.classList.remove('exit'));
    cards[idx].classList.add('active');
  }, s.current !== idx ? 80 : 0);

  dots.forEach(d => d.classList.remove('active'));
  dots[idx].classList.add('active');
  s.current = idx;
  resetProgress(name);
}

function next(n) { go(n, (state[n].current + 1) % state[n].total); }
function prev(n) { go(n, (state[n].current - 1 + state[n].total) % state[n].total); }

function startAutoplay(n) {
  stopAutoplay(n);
  state[n].interval = setInterval(() => next(n), 6000);
}
function stopAutoplay(n) {
  if (state[n] && state[n].interval) { clearInterval(state[n].interval); state[n].interval = null; }
}
function resetProgress(n) {
  const p = document.getElementById('progress-' + n);
  if (p) { p.style.animation = 'none'; p.offsetHeight; p.style.animation = 'prog 6s linear infinite'; }
}

/* ===== TABS ===== */
function switchTab(name) {
  stopAutoplay(activeTab);
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  document.getElementById('content-' + name).classList.add('active');
  activeTab = name;
  go(name, 0);
  startAutoplay(name);
}

/* ===== HELPERS ===== */
function scrollTo(sel) {
  document.querySelector(sel).scrollIntoView({ behavior: 'smooth' });
}

/* ===== HEADER SCROLL ===== */
window.addEventListener('scroll', () => {
  document.getElementById('header').classList.toggle('scrolled', window.scrollY > 80);
});

/* ===== SCROLL ANIMATIONS ===== */
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.animate').forEach(el => obs.observe(el));

/* ===== COUNTER ===== */
const statsObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      document.querySelectorAll('.stat-number').forEach(c => {
        const t = +c.dataset.target;
        let cur = 0;
        const step = t / 125;
        const up = () => {
          cur += step;
          if (cur < t) { c.textContent = Math.floor(cur) + '+'; requestAnimationFrame(up); }
          else c.textContent = t + '+';
        };
        up();
      });
      statsObs.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
statsObs.observe(document.querySelector('.stats-bar'));

/* ===== TOUCH SWIPE ===== */
let tsx = 0;
document.addEventListener('touchstart', e => { tsx = e.changedTouches[0].screenX; }, { passive: true });
document.addEventListener('touchend', e => {
  const d = tsx - e.changedTouches[0].screenX;
  if (Math.abs(d) > 50) { d > 0 ? prev(activeTab) : next(activeTab); }
}, { passive: true });

/* ===== KEYBOARD ===== */
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') next(activeTab);
  if (e.key === 'ArrowRight') prev(activeTab);
});

/* ===== HOVER PAUSE ===== */
document.querySelectorAll('.showcase').forEach(s => {
  s.addEventListener('mouseenter', () => stopAutoplay(activeTab));
  s.addEventListener('mouseleave', () => startAutoplay(activeTab));
});

/* ===== INIT ===== */
init();