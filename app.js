/* ===== FURNITURE DATA ===== */
const DATA = {
  bedroom: [
    {
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
      badge: "الأكثر مبيعًا", tag: "كلاسيك مصري",
      name: "غرفة نوم كلاسيك ملوكي",
      sub: "الطراز الكلاسيكي المصري الأصيل",
      desc: "غرفة نوم فاخرة بنقوشات ذهبية يدوية على خشب الزان الأحمر. تصميم ملكي يعكس الفخامة والأناقة مع تفاصيل دقيقة في كل زاوية.",
      features: ["خشب زان أحمر طبيعي ١٠٠٪","نقوشات يدوية مذهبة بماء الذهب","سرير ١٨٠×٢٠٠ + ٢ كمودينو + تسريحة + دولاب ٦ ضلف","دهان بولي استر إيطالي لامع","ضمان ١٠ سنوات على الهيكل"],
      price: "٨٥,٠٠٠ ج.م", old: "٩٥,٠٠٠"
    },
    {
      img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
      badge: "عصري", tag: "مودرن",
      name: "غرفة نوم مودرن",
      sub: "التصميم العصري بلمسة مصرية",
      desc: "تصميم عصري أنيق يجمع بين البساطة والفخامة. خطوط مستقيمة ونظيفة مع إضاءة LED مخفية. مثالية للشباب والعرسان الجدد.",
      features: ["خشب MDF عالي الكثافة مع قشرة بلوط","إضاءة LED مخفية في الهيدبورد","سرير + ٢ كمودينو + تسريحة + دولاب جرار ٢.٤٠م","دهان سوفت تاتش مطفي","ضمان ٧ سنوات"],
      price: "٦٥,٠٠٠ ج.م", old: "٧٢,٠٠٠"
    },
    {
      img: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=800&q=80",
      badge: "حصري", tag: "فرعوني",
      name: "غرفة نوم فرعوني",
      sub: "إلهام من حضارة سبعة آلاف سنة",
      desc: "تحفة فنية مستوحاة من الحضارة الفرعونية. نقوشات هيروغليفية يدوية مع زخارف ذهبية تحاكي مقابر الملوك.",
      features: ["خشب جوز أمريكي فاخر","نقوشات هيروغليفية يدوية محفورة","سرير ملكي + كمودينو × ٢ + تسريحة + دولاب ٨ ضلف","تذهيب يدوي بورق الذهب الحقيقي","ضمان ١٥ سنة - إصدار محدود"],
      price: "١٢٠,٠٠٠ ج.م", old: ""
    },
    {
      img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
      badge: "مميز", tag: "نيوكلاسيك",
      name: "غرفة نوم نيوكلاسيك",
      sub: "الكلاسيكية الجديدة بروح عصرية",
      desc: "مزيج مثالي بين فخامة الكلاسيك وبساطة المودرن. ألوان هادئة مع لمسات ذهبية رقيقة.",
      features: ["خشب زان مع قشرة أوك طبيعية","تطعيمات نحاسية وذهبية أنيقة","سرير + ٢ كمودينو + تسريحة + شماعة + دولاب ٦ ضلف","دهان بولي استر نصف لامع","ضمان ١٠ سنوات"],
      price: "٧٥,٠٠٠ ج.م", old: "٨٥,٠٠٠"
    },
    {
      img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
      badge: "بسيط", tag: "مينيمال",
      name: "غرفة نوم مينيمال",
      sub: "البساطة في أبهى صورها",
      desc: "لمحبي البساطة. خطوط بسيطة وألوان طبيعية هادئة تبعث على الراحة والاسترخاء. تناسب جميع المساحات.",
      features: ["خشب صنوبر معالج طبيعي","تصميم موفر للمساحة مع تخزين ذكي","سرير بأدراج + كمودينو + كونسول + دولاب جرار","ألوان طبيعية مطفية","ضمان ٥ سنوات"],
      price: "٤٥,٠٠٠ ج.م", old: "٥٢,٠٠٠"
    }
  ],
  kids: [
    {
      img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
      badge: "بناتي", tag: "أميرات",
      name: "غرفة أطفال الأميرات",
      sub: "حلم كل بنوتة صغيرة",
      desc: "غرفة ساحرة بألوان الوردي والأبيض. آمنة ١٠٠٪ مع زوايا مدورة وخامات صديقة للبيئة.",
      features: ["خشب MDF مقاوم للرطوبة - آمن للأطفال","سرير ١٢٠×٢٠٠ + دولاب + مكتب + كمودينو","ألوان مائية صحية خالية من الرصاص","تصميم مرن قابل للتعديل مع النمو","ضمان ٧ سنوات"],
      price: "٣٥,٠٠٠ ج.م", old: ""
    },
    {
      img: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=800&q=80",
      badge: "ولادي", tag: "مغامرات",
      name: "غرفة أطفال المغامرين",
      sub: "لأبطال المستقبل الصغار",
      desc: "غرفة مليئة بالحيوية بألوان الأزرق والأخضر مع تصميمات مستوحاة من عالم المغامرات.",
      features: ["خشب طبيعي معالج + ألوان مائية آمنة","سرير دورين + مكتب + دولاب + أرفف","سلم آمن مع حواجز حماية","مساحة لعب مدمجة","ضمان ٧ سنوات"],
      price: "٣٨,٠٠٠ ج.م", old: "٤٣,٠٠٠"
    },
    {
      img: "https://images.unsplash.com/photo-1632829882891-5fb6d0c0f324?w=800&q=80",
      badge: "يوني", tag: "فضاء",
      name: "غرفة أطفال الفضاء",
      sub: "رحلة بين النجوم والكواكب",
      desc: "تصميم خيالي مستوحى من الفضاء بألوان البنفسجي والأزرق الغامق مع نجوم مضيئة.",
      features: ["إضاءة نجوم LED مدمجة","سرير + مكتب زاوية + دولاب + مكتبة","ملصقات فسفورية مضيئة في الظلام","تصميم يناسب الأولاد والبنات","ضمان ٧ سنوات"],
      price: "٤٢,٠٠٠ ج.م", old: ""
    },
    {
      img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80",
      badge: "طبيعي", tag: "مونتيسوري",
      name: "غرفة أطفال مونتيسوري",
      sub: "دفء الطبيعة في غرفة طفلك",
      desc: "خشب طبيعي صديق للبيئة يشجع استقلالية الطفل بتصميم مونتيسوري.",
      features: ["خشب صنوبر طبيعي بدون كيماويات","سرير قابل للتطويل + دولاب + مكتب","دهانات مائية صديقة للبيئة","تصميم مونتيسوري تعليمي","ضمان ١٠ سنوات"],
      price: "٣٢,٠٠٠ ج.م", old: "٣٧,٠٠٠"
    },
    {
      img: "https://images.unsplash.com/photo-1633505899118-4ca6bd143043?w=800&q=80",
      badge: "مراهقين", tag: "تين إيجرز",
      name: "غرفة شبابية تين إيجرز",
      sub: "لشباب المستقبل الطموح",
      desc: "تصميم عصري يناسب المراهقين مع مكتب واسع ووحدات تخزين ذكية.",
      features: ["خشب MDF هاي جلوس مع معدن","سرير ١٢٠ + مكتب كمبيوتر + دولاب جرار","فتحات تنظيم أسلاك وشواحن","تصميم قابل للتخصيص","ضمان ٧ سنوات"],
      price: "٤٠,٠٠٠ ج.م", old: ""
    }
  ],
  dining: [
    {
      img: "https://images.unsplash.com/photo-1617104678098-de229db51175?w=800&q=80",
      badge: "كلاسيك", tag: "لويس",
      name: "سفرة كلاسيك لويس",
      sub: "فخامة القصور على مائدتك",
      desc: "سفرة كلاسيكية فاخرة بطراز لويس مع حفر يدوي متقن على خشب الزان وتذهيب بورق الذهب.",
      features: ["ترابيزة ٢٤٠×١٢٠ تتسع ٨ أشخاص","٨ كراسي محفورة يدويًا + تنجيد شانيل","نيش ٣ ضلف كريستال + بوفيه + مرآة","خشب زان أحمر + تذهيب يدوي","ضمان ١٥ سنة"],
      price: "٩٥,٠٠٠ ج.م", old: ""
    },
    {
      img: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=800&q=80",
      badge: "مودرن", tag: "عصري",
      name: "سفرة مودرن عصرية",
      sub: "أناقة العصر على مائدتك",
      desc: "سطح رخام طبيعي مع أرجل معدنية ذهبية وكراسي فيلفت إيطالية مريحة.",
      features: ["ترابيزة رخام طبيعي ٢٠٠×١٠٠","٦ كراسي فيلفت بأرجل ذهبية","بوفيه مودرن + وحدة عرض زجاجية","تصميم إيطالي بتنفيذ مصري","ضمان ١٠ سنوات"],
      price: "٧٨,٠٠٠ ج.م", old: "٨٨,٠٠٠"
    },
    {
      img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
      badge: "فاخر", tag: "أرابيسك",
      name: "سفرة أرابيسك شرقية",
      sub: "روعة الزخارف الإسلامية",
      desc: "خشب جوز مصري أصيل مع تطعيمات صدف وعرق لؤلؤ حقيقي. تحفة فنية نادرة.",
      features: ["خشب جوز مصري + تطعيم صدف يدوي","ترابيزة مستديرة أو مستطيلة حسب الطلب","٨ كراسي أرابيسك + نيش + بوفيه","حفر أرابيسك يدوي ١٠٠٪","ضمان ٢٠ سنة"],
      price: "١٣٥,٠٠٠ ج.م", old: ""
    },
    {
      img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      badge: "نيوكلاسيك", tag: "معاصر",
      name: "سفرة نيوكلاسيك",
      sub: "بين الأصالة والمعاصرة",
      desc: "ترابيزة بيضاوية أنيقة مع كراسي كابيتونيه مريحة ونيش بإضاءة داخلية.",
      features: ["ترابيزة بيضاوية ٢٢٠×١١٠ قابلة للفرد","٨ كراسي كابيتونيه بتنجيد إيطالي","نيش بإضاءة LED + بوفيه","دهان بولي يوريثان أبيض + ذهبي","ضمان ١٢ سنة"],
      price: "٨٥,٠٠٠ ج.م", old: "٩٥,٠٠٠"
    },
    {
      img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      badge: "اقتصادي", tag: "عملي",
      name: "سفرة عملية اقتصادية",
      sub: "جودة عالية بسعر مناسب",
      desc: "سفرة عملية أنيقة تناسب العائلات المصرية والشقق الجديدة.",
      features: ["خشب MDF هاي جلوس","ترابيزة ١٨٠×٩٠ + ٦ كراسي مبطنة","نيش ضلفتين + بوفيه عملي","متوفر بعدة ألوان","ضمان ٥ سنوات"],
      price: "٤٥,٠٠٠ ج.م", old: "٥٢,٠٠٠"
    }
  ],
  salon: [
    {
      img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      badge: "ملوكي", tag: "كلاسيك فرنسي",
      name: "صالون كلاسيك فرنسي",
      sub: "فخامة القصور في بيتك",
      desc: "صالون ملكي بطراز فرنسي مع حفر يدوي متقن وتذهيب بورق الذهب. تنجيد شانيل أصلي.",
      features: ["كنبة ٣ + كنبة ٢ + ٢ فوتيه","هيكل زان أحمر محفور يدويًا","تنجيد شانيل أو جاكار إيطالي","ترابيزة وسط رخام + ٢ جانبية","ضمان ١٥ سنة"],
      price: "٧٥,٠٠٠ ج.م", old: ""
    },
    {
      img: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&q=80",
      badge: "عصري", tag: "مودرن لاكشري",
      name: "صالون مودرن لاكشري",
      sub: "الأناقة العصرية الفاخرة",
      desc: "تصميم إيطالي فاخر مع تنجيد فيلفت أو جلد طبيعي وقاعدة ستانلس ذهبية.",
      features: ["كنبة ٣ + ٢ + ٢ فوتيه مودرن","تنجيد فيلفت إيطالي أو جلد","قاعدة ستانلس ذهبية","ترابيزة وسط رخام","ضمان ١٠ سنوات"],
      price: "٦٥,٠٠٠ ج.م", old: "٧٥,٠٠٠"
    },
    {
      img: "https://images.unsplash.com/photo-1558211583-d26f610c1eb1?w=800&q=80",
      badge: "شرقي", tag: "عثماني",
      name: "صالون عثماني شرقي",
      sub: "سحر الشرق في كل تفصيلة",
      desc: "مستوحى من الطراز العثماني بزخارف شرقية رائعة وتطعيمات نحاسية.",
      features: ["كنبة ٣ + ٢ + ٢ فوتيه عثماني","حفر يدوي بزخارف عثمانية","تنجيد أقمشة شرقية مطرزة","ترابيزة نحاسية مطعمة","ضمان ١٢ سنة"],
      price: "٨٢,٠٠٠ ج.م", old: ""
    },
    {
      img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      badge: "نيوكلاسيك", tag: "كابيتونيه",
      name: "صالون كابيتونيه أنيق",
      sub: "رقي التنجيد الكلاسيكي",
      desc: "تنجيد كابيتونيه بفيلفت فاخر مع هيكل خشبي أنيق بألوان هادئة راقية.",
      features: ["كنبة ٣ + ٢ + ٢ فوتيه + بانكت","تنجيد كابيتونيه فيلفت","هيكل زان أوف وايت وذهبي","ترابيزة وسط خشب ورخام","ضمان ١٠ سنوات"],
      price: "٥٨,٠٠٠ ج.م", old: "٦٨,٠٠٠"
    },
    {
      img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80",
      badge: "اقتصادي", tag: "عملي أنيق",
      name: "صالون عملي اقتصادي",
      sub: "أناقة بسعر يناسب الجميع",
      desc: "صالون أنيق بسعر اقتصادي للعرسان الجدد. متوفر بعدة ألوان تناسب جميع الديكورات.",
      features: ["كنبة ٣ + ٢ + ٢ فوتيه","هيكل زان + تنجيد مستورد","ترابيزة وسط + ٢ جانبية","متوفر بـ ١٠ ألوان","ضمان ٧ سنوات"],
      price: "٣٥,٠٠٠ ج.م", old: "٤٢,٠٠٠"
    }
  ],
  corner: [
    {
      img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      badge: "الأكثر مبيعًا", tag: "ركنة L",
      name: "ركنة L كلاسيك فاخرة",
      sub: "راحة ملكية لعائلتك",
      desc: "ركنة L بتصميم كلاسيكي فخم تتسع لـ ٧ أشخاص بكل راحة.",
      features: ["أبعاد ٣.٢٠ × ٢.٤٠ متر","هيكل زان + إسفنج عالي الكثافة","تنجيد شانيل أو جلد صناعي فاخر","وسائد قابلة للغسيل","ضمان ١٠ سنوات"],
      price: "٣٥,٠٠٠ ج.م", old: ""
    },
    {
      img: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&q=80",
      badge: "مودرن", tag: "U شكل",
      name: "ركنة U مودرن",
      sub: "تصميم عصري يحتضن العائلة",
      desc: "ركنة ضخمة U مع سرير مخفي وأدراج تخزين. تتسع ١٠ أشخاص.",
      features: ["أبعاد ٣.٨٠ × ٢.٨٠ متر","سرير مخفي قابل للطي ١٤٠×١٩٠","أدراج تخزين أسفل المقاعد","تنجيد فيلفت مقاوم للبقع","ضمان ١٠ سنوات"],
      price: "٤٨,٠٠٠ ج.م", old: "٥٥,٠٠٠"
    },
    {
      img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80",
      badge: "مينيمال", tag: "اسكندنافي",
      name: "ركنة اسكندنافي بسيطة",
      sub: "بساطة أنيقة وراحة مطلقة",
      desc: "تصميم اسكندنافي بسيط بألوان طبيعية. تناسب المساحات الصغيرة والمتوسطة.",
      features: ["أبعاد ٢.٦٠ × ١.٨٠ متر","أرجل خشب زان طبيعي","وسائد قابلة للغسيل","قماش كتاني طبيعي مقاوم","ضمان ٧ سنوات"],
      price: "٢٥,٠٠٠ ج.م", old: "٣٠,٠٠٠"
    },
    {
      img: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=800&q=80",
      badge: "فخم", tag: "شيسترفيلد",
      name: "ركنة شيسترفيلد فاخرة",
      sub: "أيقونة الأثاث الإنجليزي",
      desc: "شيسترفيلد بتنجيد كابيتونيه عميق بجلد إيطالي فاخر. لمسة أرستقراطية فريدة.",
      features: ["أبعاد ٣.٠٠ × ٢.٠٠ متر","تنجيد كابيتونيه جلد إيطالي","إسفنج طبي عالي الكثافة","متوفر: بني - أسود - بوردو","ضمان ١٢ سنة"],
      price: "٤٢,٠٠٠ ج.م", old: ""
    },
    {
      img: "https://images.unsplash.com/photo-1558211583-d26f610c1eb1?w=800&q=80",
      badge: "متحولة", tag: "ذكية",
      name: "ركنة ذكية متعددة الوظائف",
      sub: "أثاث ذكي لحياة عصرية",
      desc: "تتحول لسرير مزدوج في ثوانٍ مع أدراج تخزين ومنافذ USB وشاحن لاسلكي مدمج.",
      features: ["تتحول لسرير ١٦٠×٢٠٠","أدراج تخزين + حامل أكواب","منافذ USB + شاحن لاسلكي","تنجيد تكنو فابريك مقاوم للماء","ضمان ١٠ سنوات"],
      price: "٣٨,٠٠٠ ج.م", old: "٤٥,٠٠٠"
    }
  ]
};

/* ===== STATE ===== */
const state = {};
let activeTab = 'bedroom';

/* ===== BUILD CARDS ===== */
function buildCard(item, index) {
  const oldPrice = item.old ? `<span class="old">${item.old}</span>` : '';
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
            <div class="price">${item.price} ${oldPrice}<small>شامل التوصيل والتركيب</small></div>
            <button class="btn-gold">اطلب الآن</button>
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