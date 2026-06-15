export type Lang = "th" | "en";

type Dict = {
  nav: { about: string; work: string; skills: string; contact: string; cta: string };
  hero: {
    badge: string;
    titleA: string;
    titleHi: string;
    titleB: string;
    tagline: string;
    primaryCta: string;
    secondaryCta: string;
    stats: { value: string; label: string }[];
  };
  about: {
    heading: string;
    kicker: string;
    body: string[];
    pillars: { title: string; desc: string }[];
  };
  work: {
    heading: string;
    kicker: string;
    note: string;
    cases: CaseStudy[];
  };
  skills: {
    heading: string;
    kicker: string;
    groups: { title: string; items: string[] }[];
  };
  contact: {
    heading: string;
    kicker: string;
    body: string;
    emailLabel: string;
    phoneLabel: string;
    githubLabel: string;
  };
  footer: string;
};

export type CaseStudy = {
  tag: string;
  role: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  result: string;
  highlights: string[];
  stack: string[];
  metric: { value: string; label: string };
  link?: { url: string; label: string };
  images?: { src: string; caption: string }[];
};

export const profile = {
  name: "ภาณุเดช ทองเฟื่อง",
  nameEn: "Phanudech Thongfueang",
  title: "Digital Product Owner",
  email: "phanudech.tf@gmail.com",
  phone: "088-492-3778",
  location: "เขตบางแค กรุงเทพฯ",
  locationEn: "Bang Khae, Bangkok",
  age: "24",
  github: "https://github.com/phanudechtf",
};

export const displayName = (lang: Lang) => (lang === "th" ? profile.name : profile.nameEn);

export const content: Record<Lang, Dict> = {
  th: {
    nav: { about: "เกี่ยวกับ", work: "ผลงาน", skills: "ทักษะ", contact: "ติดต่อ", cta: "ติดต่อ" },
    hero: {
      badge: "Full-stack Developer → Product Owner",
      titleA: "Developer ที่ลงมือ build",
      titleHi: "จริงทั้ง stack",
      titleB: "และต่อยอดเป็น Product Owner",
      tagline:
        "เริ่มจากสาย dev — ออกแบบและพัฒนา product เองทั้ง frontend, backend และ infra เลยรู้ว่ากว่า feature จะถึงมือ user ต้องผ่านอะไร ตอนนี้ต่อยอดเป็น Product Owner ที่เขียน requirement ทีม dev ทำได้จริง ขับเคลื่อนด้วย data และ user need",
      primaryCta: "ดูผลงาน",
      secondaryCta: "ติดต่อ",
      stats: [
        { value: "3", label: "Product ที่สร้างเอง" },
        { value: "~20k", label: "Device ที่ระบบรองรับ" },
        { value: "End-to-end", label: "Vision → Release" },
      ],
    },
    about: {
      kicker: "เกี่ยวกับ",
      heading: "Developer ที่คิดแบบ Product Owner",
      body: [
        "เริ่มจากสาย development — ลงมือ build product จริงทั้ง frontend, backend และ infra ด้วยตัวเอง ทำให้เข้าใจว่า feature หนึ่งกว่าจะถึงมือ user ต้องผ่านอะไรบ้าง",
        "จุดนี้คือข้อต่างของผมในบทบาท Product Owner — ผมเขียน PRD และ user story ที่ทีม dev เอาไปทำได้ทันที จัดลำดับ backlog จากทั้งคุณค่าต่อ user และต้นทุน technical และคุยกับทุกฝ่ายด้วยภาษาเดียวกัน",
        "เป้าหมายไม่ใช่แค่ส่งของให้ทัน แต่คือส่ง product ที่ตอบโจทย์ธุรกิจและวัดผลได้จริง",
      ],
      pillars: [
        { title: "Product thinking", desc: "เริ่มจากปัญหาและ user need ก่อนเสมอ ไม่ใช่เริ่มจาก feature" },
        { title: "Technical fluency", desc: "คุยกับ dev รู้เรื่อง ประเมิน trade-off และ effort ได้เอง" },
        { title: "Data-driven", desc: "ออกแบบ dashboard และ metric เพื่อตัดสินใจจาก insight จริง" },
        { title: "End-to-end ownership", desc: "รับผิดชอบตั้งแต่ vision, design, delivery จนถึงผลลัพธ์" },
      ],
    },
    work: {
      kicker: "ผลงาน",
      heading: "Case studies",
      note: "เล่าแต่ละงานในมุม product: ปัญหา → ทางแก้ → ผลลัพธ์",
      cases: [
        {
          tag: "Recruitment & Company Platform",
          role: "UX/UI design + full-stack development",
          title: "Company Profile & Recruitment Platform",
          subtitle: "เว็บบริษัท + ระบบรับสมัครงานครบวงจร พร้อม admin dashboard",
          problem:
            "บริษัทไม่มี digital presence และจัดการใบสมัครงานด้วยมือ ทำให้ HR เสียเวลาคัดกรองและตามสถานะผู้สมัครได้ยาก",
          solution:
            "รับผิดชอบตั้งแต่วาง concept, UX/UI design จนถึง development — สร้าง public site สองภาษา + recruitment pipeline และ admin dashboard จัดการ content/ใบสมัครพร้อมกราฟวิเคราะห์ ครอบคลุมงานทั้งฝั่ง user และ admin",
          result:
            "Deploy ใช้งานจริง ลดเวลา HR ในการคัดและจัดการใบสมัคร รวมงานที่เคยกระจัดกระจายมาไว้ในระบบเดียว end-to-end",
          highlights: [
            "Public site 8 ส่วน: หน้าหลัก, สถิติ, เกี่ยวกับ, นักลงทุน, สินค้า, ผลงาน, คุณค่า, ส่วนท้าย",
            "Careers: job board + ฟอร์มสมัคร 5 ขั้น + สร้าง PDF อัตโนมัติ",
            "Events + Bilingual ไทย/อังกฤษ",
            "หลังบ้าน — Dashboard: สรุป event/ใบสมัคร/ตำแหน่งงาน/อัตรารับ + charts",
            "หลังบ้าน — Company Profile editor: แก้ทุก section, live + device preview, TH/EN, Revert",
            "หลังบ้าน — จัดการตำแหน่งงาน / อีเวนต์ / ใบสมัคร (CRUD, track waiting → hired)",
            "หลังบ้าน — แบบประเมิน (feedback / survey)",
            "Rich text editor (Tiptap), image crop, AI assistant (Gemini)",
          ],
          stack: ["Next.js 15", "TypeScript", "Tailwind", "MongoDB", "PDF generation", "Recharts"],
          metric: { value: "Live", label: "deploy ใช้งานจริง" },
          link: { url: "https://www.ledonhome.co.th/", label: "ดูเว็บจริง" },
          images: [
            { src: "/loh-dashboard.png", caption: "หลังบ้าน — Dashboard สรุปภาพรวม + charts" },
            { src: "/loh-companyprofile.png", caption: "หลังบ้าน — Company Profile editor (live preview, แก้ทุก section)" },
          ],
        },
        {
          tag: "IoT Device Management",
          role: "Full-stack + infrastructure development",
          title: "IoT AC / Street Control",
          subtitle: "แพลตฟอร์ม monitor และควบคุมอุปกรณ์ IoT แบบรวมศูนย์",
          problem:
            "ต้อง monitor และสั่งงานอุปกรณ์ IoT (โคมไฟถนน/เครื่องปรับอากาศ) จำนวนมากแบบรวมศูนย์ พร้อมจัดการสิทธิ์ผู้ใช้หลายระดับ",
          solution:
            "พัฒนาทั้ง frontend, backend และ infrastructure — แดชบอร์ดดูอุปกรณ์บนแผนที่ (Deck.gl/Leaflet), สั่งเปิด-ปิดอุปกรณ์แบบ realtime, RBAC 3 ระดับ และ sync ข้อมูลกับ IoT platform ภายนอกอัตโนมัติ (cron ทุก 5 นาที)",
          result:
            "ออกแบบสถาปัตยกรรมให้รองรับอุปกรณ์ระดับ ~20,000 ตัว วาง infra ด้วย Docker + PostgreSQL ใช้งานและดูข้อมูลผ่าน Navicat",
          highlights: [
            "Monitoring map: ดูอุปกรณ์บนแผนที่ realtime (online/offline) + สั่ง เปิด/ปิด/หรี่แสง + ดู telemetry",
            "รายการอุปกรณ์ + จัดการอุปกรณ์ (CRUD)",
            "จัดการรุ่นโคมไฟ (luminaire model)",
            "จัดการโครงการ / พื้นที่ / ถนน",
            "กำหนดการทำงานอุปกรณ์ (task scheduling)",
            "จัดการพารามิเตอร์อุปกรณ์",
            "จัดการผู้ใช้ + RBAC 3 ระดับ",
            "รายการแจ้งเตือน / alarm + sync external IoT API (cron 5 นาที)",
          ],
          stack: ["Next.js", "MUI", "Deck.gl", "Bun + Elysia", "PostgreSQL", "Docker"],
          metric: { value: "~20k", label: "device ที่รองรับ" },
          images: [
            { src: "/iot-monitoring.png", caption: "Monitoring map — ดูอุปกรณ์ realtime, สั่งงาน และดูค่า telemetry" },
          ],
        },
        {
          tag: "Data & Feedback",
          role: "ทำ feature นี้ — ภายใน enterprise portal",
          title: "Customer Satisfaction Survey",
          subtitle: "ระบบแบบประเมินความพอใจลูกค้า พร้อม dashboard สรุปผล",
          problem:
            "การเก็บความพึงพอใจลูกค้าด้วยกระดาษทำให้รวบรวมและวิเคราะห์ผลตามแผนกได้ยาก",
          solution:
            "แปลง business requirement ด้าน QA เป็นแบบประเมิน digital — 4 ส่วน 28 เกณฑ์ (คุณภาพ/บริการ, การจัดส่ง, พนักงานขาย, ข้อเสนอแนะ) พร้อม dashboard รวมคะแนนแยกตามแผนก รองรับสองภาษา",
          result:
            "เปลี่ยนกระบวนการประเมินจากกระดาษเป็น digital ทำให้ได้ insight ตามแผนกแบบ real-time ลด manual ในการรวมผล",
          highlights: [
            "แปลง requirement → form ที่ใช้งานได้จริง",
            "Dashboard สรุปคะแนนตามแผนก",
            "ทำงานร่วมในทีมบน enterprise portal ขนาดใหญ่",
            "เข้าใจ ecosystem microservice (shared backend หลาย frontend)",
          ],
          stack: ["React", "Material-UI", "i18n", "REST API"],
          metric: { value: "4 / 28", label: "section / เกณฑ์ประเมิน" },
          images: [
            { src: "/survey-dashboard.png", caption: "Dashboard สรุปผล — 4 หมวด (Product Quality / Delivery / Staff / Improvement) แยกตามแผนก" },
          ],
        },
        {
          tag: "Senior Project / Full-stack",
          role: "ทำเองทั้งหมด — UX/UI + full-stack",
          title: "AI Content Writer Assistant",
          subtitle: "เว็บแอปช่วยสร้างคอนเทนต์ด้วย AI — โปรเจคจบการศึกษา",
          problem:
            "การสร้างคอนเทนต์คุณภาพ (บทความ SEO, โพสต์โซเชียล, สคริปต์วิดีโอ) ใช้เวลามากและต้องอาศัยทักษะการเขียน ผู้ใช้ทั่วไปทำเองได้ยาก",
          solution:
            "พัฒนาเว็บแอปครบวงจรเองทั้ง stack — ออกแบบ UX/UI ใน Figma, frontend React + Tailwind responsive, backend Node.js + Express เชื่อมหลาย AI API (ChatGPT, Gemini, Claude) ให้ผู้ใช้เลือกโมเดล กรอกหัวข้อ/กลุ่มเป้าหมาย/โทน/ความยาว แล้ว generate คอนเทนต์ตามรูปแบบที่ต้องการ",
          result:
            "ผู้ใช้สร้างคอนเทนต์คุณภาพได้เร็วและง่าย รองรับหลายรูปแบบ (SEO / โซเชียล / สคริปต์วิดีโอ) เหมาะกับทุกระดับทักษะ — deploy ใช้งานจริง",
          highlights: [
            "เลือก AI model ได้: ChatGPT / Gemini / Claude",
            "สร้างบทความ SEO, โพสต์โซเชียล, สคริปต์วิดีโอ",
            "ปรับแต่ง: หัวข้อ, กลุ่มเป้าหมาย, โทนการเขียน, ความยาว",
            "UX/UI design ใน Figma",
            "Frontend React + TailwindCSS, responsive",
            "Backend Node.js + Express เชื่อมหลาย AI API + จัดการ SEO + deploy",
          ],
          stack: ["React", "TailwindCSS", "Node.js", "Express", "AI API", "Figma"],
          metric: { value: "Thesis", label: "โปรเจคจบ end-to-end" },
          images: [
            { src: "/thesis-ai-hero.png", caption: "หน้าแรก — AI Content Writer Assistant" },
            { src: "/thesis-ai-detail.png", caption: "UX/UI, Frontend และ Backend" },
          ],
        },
        {
          tag: "Full-stack — เว็บจองสตูดิโอ",
          role: "ทำเองทั้งหมด — UX/UI + full-stack (ฝึกงาน)",
          title: "Canvas Studio",
          subtitle: "เว็บไซต์จองสตูดิโอถ่ายภาพ — full-stack พร้อม admin",
          problem:
            "สตูดิโอถ่ายภาพต้องการเว็บไซต์ให้ลูกค้าจองเวลาใช้สตูดิโอออนไลน์ พร้อมหลังบ้านให้แอดมินจัดการและตรวจสอบการจอง",
          solution:
            "พัฒนาเว็บครบวงจรเองทั้ง stack — ออกแบบ UX/UI ใน Figma, frontend HTML/CSS/JavaScript, backend PHP + MySQL ระบบจองสตูดิโอ + admin dashboard จัดการการจอง (ยืนยัน/ยกเลิก), payment slip และใบกำกับภาษี รองรับ 2 ภาษา",
          result:
            "deploy ใช้งานจริงที่ canvasstudio.in.th — ลูกค้าจองออนไลน์ได้ แอดมินจัดการการจองได้ครบในระบบเดียว",
          highlights: [
            "ระบบจองสตูดิโอออนไลน์ (Studio 1 / 2 / Equipment)",
            "Admin Dashboard — จัดการการจอง ยืนยัน/ยกเลิก",
            "อัปโหลด payment slip + ใบกำกับภาษี",
            "รองรับ 2 ภาษา (ไทย/อังกฤษ)",
            "UX/UI ใน Figma, responsive ทุกอุปกรณ์",
          ],
          stack: ["HTML / CSS / JS", "PHP", "MySQL", "Figma"],
          metric: { value: "Live", label: "canvasstudio.in.th" },
          link: { url: "https://canvasstudio.in.th", label: "ดูเว็บจริง" },
          images: [
            { src: "/canvas-hero.png", caption: "หน้าเว็บ Canvas Studio — จองสตูดิโอ (deploy จริง)" },
            { src: "/canvas-detail.png", caption: "UX/UI (Figma), Frontend และ Admin Dashboard (PHP/MySQL)" },
          ],
        },
        {
          tag: "UX/UI Design — โมบายแอป",
          role: "ออกแบบ UX/UI (Figma)",
          title: "KU SWAP",
          subtitle: "แอปแลกเปลี่ยนของมือสองสำหรับนักศึกษา ม.เกษตร",
          problem:
            "นักศึกษามีของมือสอง (เสื้อผ้า กระเป๋า รองเท้า) ที่ไม่ใช้แล้ว อยากแลกเปลี่ยนกันในมหาวิทยาลัย แต่ไม่มีช่องทางที่น่าเชื่อถือและจัดการง่าย",
          solution:
            "ออกแบบ UX/UI โมบายแอปใน Figma — ระบบลงประกาศของ, ค้นหาและกรองตามหมวด, ระบบแต้ม (point) สำหรับแลกเปลี่ยน, คำขอแลกเปลี่ยน (exchange request), โปรไฟล์ผู้ใช้ พร้อม rating และประวัติการแลก",
          result:
            "ได้ flow และ prototype แอปครบทั้งการค้นหา ลงของ แลกเปลี่ยน และจัดการบัญชี ออกแบบให้ใช้ง่ายตาม theme ของมหาวิทยาลัย",
          highlights: [
            "ค้นหา + กรองตามหมวด (เสื้อผ้า / กระเป๋า / รองเท้า)",
            "ระบบแต้ม — แลกได้สูงสุด 3 ครั้ง/วัน",
            "Exchange request + แจ้งเตือน",
            "โปรไฟล์ + rating + ประวัติการแลก",
            "ออกแบบใน Figma ตาม theme ม.เกษตร",
          ],
          stack: ["Figma", "UX/UI Design", "Prototyping"],
          metric: { value: "Mobile", label: "UX/UI design" },
          images: [{ src: "/kuswap.png", caption: "หน้าจอแอป KU SWAP — ค้นหา, แต้ม, แลกเปลี่ยน, โปรไฟล์" }],
        },
        {
          tag: "UX/UI Design — เว็บไซต์",
          role: "ออกแบบ UX/UI เว็บไซต์",
          title: "TIERRA",
          subtitle: "เว็บไซต์บริษัทออกแบบสถาปัตยกรรม Tierra Design",
          problem:
            "บริษัทออกแบบสถาปัตย์/ภูมิสถาปัตย์ต้องการเว็บไซต์ที่นำเสนอผลงาน (housing, interior) อย่างสวยงามและเป็นมืออาชีพ",
          solution:
            "ออกแบบ UX/UI เว็บไซต์ — โครงสร้าง Works (Housing / Interior), About, Clients, Contact พร้อมแผนที่ เน้น layout ภาพใหญ่โชว์งานออกแบบให้ดูหรูและสะอาด",
          result:
            "ได้ดีไซน์เว็บที่นำเสนอ portfolio งานสถาปัตย์ได้ครบ ดูเป็นมืออาชีพ ใช้งานง่าย",
          highlights: [
            "โครงสร้าง: Works (Housing / Interior), About, Clients, Contact",
            "Layout ภาพใหญ่โชว์งานออกแบบ",
            "หน้า Contact + แผนที่",
            "ดีไซน์ minimal สะอาด ระดับมืออาชีพ",
          ],
          stack: ["Figma", "UX/UI Design", "Web Design"],
          metric: { value: "Web", label: "UX/UI design" },
          images: [{ src: "/tierra.png", caption: "เว็บไซต์ Tierra Design — About, แผนที่, Housing, Interior" }],
        },
        {
          tag: "UX/UI Design — เว็บไซต์",
          role: "ออกแบบ UX/UI เว็บไซต์",
          title: "Thoongthong Food Villa",
          subtitle: "เว็บไซต์ตลาดถุงทอง ฟู้ดวิลล่า บางบ่อ — 2 ภาษา",
          problem:
            "ตลาดถุงทอง ฟู้ดวิลล่า ต้องการเว็บไซต์ประชาสัมพันธ์ตลาด ผังร้านค้า ข่าวสาร และช่องทางติดต่อ รองรับทั้งไทย/อังกฤษ",
          solution:
            "ออกแบบ UX/UI เว็บไซต์ตลาด — ผังตลาด, หน้าเกี่ยวกับตลาด, ข่าวสาร/โปรโมชัน (street food, food truck), ฟอร์มติดต่อสอบถาม พร้อม gallery ภาพบรรยากาศ รองรับ 2 ภาษา",
          result:
            "ได้เว็บตลาดที่แสดงผังร้าน ข่าวสาร และบรรยากาศครบ ติดต่อสอบถามผ่านฟอร์มได้ รองรับไทย/อังกฤษ",
          highlights: [
            "ผังตลาด + รายการร้านค้า",
            "ข่าวสาร / โปรโมชัน + QR code",
            "ฟอร์มติดต่อสอบถาม",
            "Gallery ภาพบรรยากาศตลาด",
            "รองรับ 2 ภาษา ไทย / อังกฤษ",
          ],
          stack: ["Figma", "UX/UI Design", "Web Design"],
          metric: { value: "Web", label: "UX/UI design" },
          images: [{ src: "/thoongthong.png", caption: "เว็บตลาดถุงทอง ฟู้ดวิลล่า — ฟอร์มติดต่อ + gallery" }],
        },
      ],
    },
    skills: {
      kicker: "ทักษะ",
      heading: "เครื่องมือและความเชี่ยวชาญ",
      groups: [
        {
          title: "Product & Process",
          items: ["Product thinking", "Requirement / User Stories", "Backlog & prioritization", "Agile mindset"],
        },
        {
          title: "Frontend",
          items: ["Next.js / React", "TypeScript / JavaScript", "Tailwind / Bootstrap", "HTML5 / CSS3, Responsive UI"],
        },
        {
          title: "Backend & Data",
          items: ["Node.js / Express, PHP", "Bun / Elysia", "MongoDB / PostgreSQL / MySQL", "Docker, REST APIs, JWT / RBAC"],
        },
        {
          title: "Design & AI",
          items: ["Figma, Adobe Illustrator", "AI (Chatbot / Generative AI)", "AI-assisted development", "Git, VS Code, Navicat"],
        },
      ],
    },
    contact: {
      kicker: "ติดต่อ",
      heading: "มาคุยเรื่อง product กัน",
      body: "เปิดรับโอกาสในตำแหน่ง Digital Product Owner ติดต่อได้ทุกช่องทาง",
      emailLabel: "อีเมล",
      phoneLabel: "โทร",
      githubLabel: "GitHub",
    },
    footer: "ออกแบบและพัฒนาเองด้วย Next.js + Tailwind",
  },

  en: {
    nav: { about: "About", work: "Work", skills: "Skills", contact: "Contact", cta: "Get in touch" },
    hero: {
      badge: "Full-stack Developer → Product Owner",
      titleA: "A developer who builds",
      titleHi: "the whole stack",
      titleB: "now owning the product",
      tagline:
        "I started in dev — designing and shipping products across frontend, backend and infra myself, so I know what it takes for a feature to reach the user. Now a Product Owner who writes requirements dev teams can build, driven by data and real user needs.",
      primaryCta: "View work",
      secondaryCta: "Contact",
      stats: [
        { value: "3", label: "Products built" },
        { value: "~20k", label: "Devices supported" },
        { value: "End-to-end", label: "Vision → Release" },
      ],
    },
    about: {
      kicker: "About",
      heading: "A developer who thinks like a Product Owner",
      body: [
        "I started in development — building real products across frontend, backend and infrastructure myself. That taught me exactly what it takes for a feature to reach the user.",
        "That's my edge as a Product Owner: I write PRDs and user stories the dev team can build immediately, prioritize the backlog by both user value and technical cost, and speak the same language as every stakeholder.",
        "The goal isn't just shipping on time — it's shipping products that serve the business and can be measured.",
      ],
      pillars: [
        { title: "Product thinking", desc: "Always start from the problem and user need, not the feature." },
        { title: "Technical fluency", desc: "Speak dev fluently; assess trade-offs and effort myself." },
        { title: "Data-driven", desc: "Design dashboards and metrics to decide from real insight." },
        { title: "End-to-end ownership", desc: "Own it from vision and design through delivery to outcome." },
      ],
    },
    work: {
      kicker: "Work",
      heading: "Case studies",
      note: "Each project framed as product: problem → solution → result.",
      cases: [
        {
          tag: "Recruitment & Company Platform",
          role: "UX/UI design + full-stack development",
          title: "Company Profile & Recruitment Platform",
          subtitle: "Company site + end-to-end recruitment platform with admin dashboard",
          problem:
            "The company had no digital presence and handled job applications manually, making it hard for HR to screen and track candidates.",
          solution:
            "Responsible from concept and UX/UI design through development — a bilingual public site plus a recruitment pipeline and an admin dashboard for content and applications with analytics charts, covering both the user and admin sides.",
          result:
            "Deployed and live. Cut HR time on screening and managing applications, consolidating scattered work into one end-to-end system.",
          highlights: [
            "Public site, 8 sections: home, stats, about, investors, products, work, values, footer",
            "Careers: job board + 5-step application form + automatic PDF",
            "Events + bilingual Thai/English",
            "Admin — Dashboard: events / applications / jobs / hire rate + charts",
            "Admin — Company Profile editor: edit every section, live + device preview, TH/EN, Revert",
            "Admin — manage jobs / events / applications (CRUD, waiting → hired tracking)",
            "Admin — feedback / satisfaction survey",
            "Rich text editor (Tiptap), image crop, AI assistant (Gemini)",
          ],
          stack: ["Next.js 15", "TypeScript", "Tailwind", "MongoDB", "PDF generation", "Recharts"],
          metric: { value: "Live", label: "in production" },
          link: { url: "https://www.ledonhome.co.th/", label: "View live site" },
          images: [
            { src: "/loh-dashboard.png", caption: "Admin — overview dashboard + charts" },
            { src: "/loh-companyprofile.png", caption: "Admin — Company Profile editor (live preview, every section)" },
          ],
        },
        {
          tag: "IoT Device Management",
          role: "Full-stack + infrastructure development",
          title: "IoT AC / Street Control",
          subtitle: "Centralized platform to monitor and control IoT devices",
          problem:
            "Needed to monitor and command a large fleet of IoT devices (street lamps / AC units) from one place, with multi-level user access.",
          solution:
            "Developed the frontend, backend and infrastructure — a map-based device dashboard (Deck.gl/Leaflet), real-time device on/off control, 3-tier RBAC, and automated sync with an external IoT platform (cron every 5 minutes).",
          result:
            "Architected to support a fleet of ~20,000 devices, with infrastructure on Docker + PostgreSQL, operated and inspected via Navicat.",
          highlights: [
            "Monitoring map: devices on a live map (online/offline) + on/off/dim control + telemetry",
            "Device list + device management (CRUD)",
            "Luminaire model management",
            "Project / area / road management",
            "Task scheduling",
            "Device parameter management",
            "User management + 3-tier RBAC",
            "Notifications / alarms + external IoT API sync (cron every 5 min)",
          ],
          stack: ["Next.js", "MUI", "Deck.gl", "Bun + Elysia", "PostgreSQL", "Docker"],
          metric: { value: "~20k", label: "devices supported" },
          images: [
            { src: "/iot-monitoring.png", caption: "Monitoring map — live devices, control actions and telemetry" },
          ],
        },
        {
          tag: "Data & Feedback",
          role: "Built this feature — within an enterprise portal",
          title: "Customer Satisfaction Survey",
          subtitle: "Customer satisfaction survey system with a results dashboard",
          problem:
            "Collecting customer satisfaction on paper made it hard to aggregate and analyze results by department.",
          solution:
            "Translated QA business requirements into a digital survey — 4 sections, 28 criteria (quality/service, delivery, sales staff, suggestions) — with a dashboard aggregating scores by department, in two languages.",
          result:
            "Moved the evaluation process from paper to digital, surfacing department-level insight in near real time and cutting manual aggregation.",
          highlights: [
            "Turned requirements into a usable form",
            "Dashboard aggregating scores by department",
            "Collaborated within a large enterprise portal",
            "Understood the microservice ecosystem (shared backend, many frontends)",
          ],
          stack: ["React", "Material-UI", "i18n", "REST API"],
          metric: { value: "4 / 28", label: "sections / criteria" },
          images: [
            { src: "/survey-dashboard.png", caption: "Results dashboard — 4 aspects (Product Quality / Delivery / Staff / Improvement) by department" },
          ],
        },
        {
          tag: "Senior Project / Full-stack",
          role: "Solo — UX/UI + full-stack",
          title: "AI Content Writer Assistant",
          subtitle: "AI-powered content generation web app — senior thesis project",
          problem:
            "Creating quality content (SEO articles, social posts, video scripts) is time-consuming and takes writing skill — hard for everyday users to do themselves.",
          solution:
            "Built the whole web app across the stack myself — designed the UX/UI in Figma, a responsive React + Tailwind frontend, and a Node.js + Express backend wiring up multiple AI APIs (ChatGPT, Gemini, Claude). Users pick a model, enter topic / audience / tone / length, and generate content in the format they need.",
          result:
            "Users create quality content quickly and easily across formats (SEO / social / video script), for any skill level — deployed and live.",
          highlights: [
            "Choose the AI model: ChatGPT / Gemini / Claude",
            "Generate SEO articles, social posts, video scripts",
            "Customize: topic, audience, tone, length",
            "UX/UI designed in Figma",
            "React + TailwindCSS frontend, responsive",
            "Node.js + Express backend wiring multiple AI APIs + SEO + deploy",
          ],
          stack: ["React", "TailwindCSS", "Node.js", "Express", "AI API", "Figma"],
          metric: { value: "Thesis", label: "end-to-end senior project" },
          images: [
            { src: "/thesis-ai-hero.png", caption: "Landing — AI Content Writer Assistant" },
            { src: "/thesis-ai-detail.png", caption: "UX/UI, frontend and backend" },
          ],
        },
        {
          tag: "Full-stack — Studio Booking",
          role: "Solo — UX/UI + full-stack (internship)",
          title: "Canvas Studio",
          subtitle: "Photography studio booking website — full-stack with admin",
          problem:
            "A photography studio needed a website for customers to book studio time online, with an admin back office to manage and verify bookings.",
          solution:
            "Built the whole site across the stack myself — UX/UI in Figma, an HTML/CSS/JavaScript frontend, and a PHP + MySQL backend with a booking system plus an admin dashboard to manage bookings (confirm/cancel), payment slips and tax invoices, in two languages.",
          result:
            "Deployed and live at canvasstudio.in.th — customers book online and admins manage every booking in one system.",
          highlights: [
            "Online studio booking (Studio 1 / 2 / Equipment)",
            "Admin dashboard — manage bookings, confirm/cancel",
            "Payment slip + tax invoice upload",
            "Bilingual (Thai / English)",
            "UX/UI in Figma, responsive on all devices",
          ],
          stack: ["HTML / CSS / JS", "PHP", "MySQL", "Figma"],
          metric: { value: "Live", label: "canvasstudio.in.th" },
          link: { url: "https://canvasstudio.in.th", label: "View live site" },
          images: [
            { src: "/canvas-hero.png", caption: "Canvas Studio site — studio booking (live)" },
            { src: "/canvas-detail.png", caption: "UX/UI (Figma), frontend and admin dashboard (PHP/MySQL)" },
          ],
        },
        {
          tag: "UX/UI Design — Mobile App",
          role: "UX/UI design (Figma)",
          title: "KU SWAP",
          subtitle: "Secondhand item-swap app for Kasetsart University students",
          problem:
            "Students have unused secondhand items (clothes, bags, shoes) they want to swap on campus, but there's no trustworthy, easy-to-manage channel.",
          solution:
            "Designed the mobile app UX/UI in Figma — item listings, search and category filters, a points system for swaps, exchange requests, and user profiles with ratings and swap history.",
          result:
            "A complete flow and prototype covering search, listing, swapping and account management — designed to be easy to use and on-brand with the university.",
          highlights: [
            "Search + filter by category (clothes / bags / shoes)",
            "Points system — up to 3 swaps/day",
            "Exchange requests + notifications",
            "Profile + ratings + swap history",
            "Designed in Figma, on KU's theme",
          ],
          stack: ["Figma", "UX/UI Design", "Prototyping"],
          metric: { value: "Mobile", label: "UX/UI design" },
          images: [{ src: "/kuswap.png", caption: "KU SWAP screens — search, points, swap, profile" }],
        },
        {
          tag: "UX/UI Design — Website",
          role: "Website UX/UI design",
          title: "TIERRA",
          subtitle: "Website for the Tierra Design architecture firm",
          problem:
            "An architecture / landscape design firm needed a website to present its work (housing, interior) beautifully and professionally.",
          solution:
            "Designed the website UX/UI — a Works (Housing / Interior), About, Clients, Contact structure with a map, using large-image layouts to show off the design work cleanly and elegantly.",
          result:
            "A web design that presents the architecture portfolio fully, looks professional and is easy to navigate.",
          highlights: [
            "Structure: Works (Housing / Interior), About, Clients, Contact",
            "Large-image layouts showcasing design work",
            "Contact page + map",
            "Clean, minimal, professional design",
          ],
          stack: ["Figma", "UX/UI Design", "Web Design"],
          metric: { value: "Web", label: "UX/UI design" },
          images: [{ src: "/tierra.png", caption: "Tierra Design website — About, map, Housing, Interior" }],
        },
        {
          tag: "UX/UI Design — Website",
          role: "Website UX/UI design",
          title: "Thoongthong Food Villa",
          subtitle: "Bilingual website for Thoongthong Food Villa market, Bang Bo",
          problem:
            "Thoongthong Food Villa market needed a website to promote the market, its stall map, news, and contact channels, in both Thai and English.",
          solution:
            "Designed the market website UX/UI — a stall map, an about page, news / promotions (street food, food truck), a contact form and a photo gallery, in two languages.",
          result:
            "A market site showing the stall map, news and atmosphere, with an inquiry form, supporting Thai / English.",
          highlights: [
            "Stall map + vendor listing",
            "News / promotions + QR codes",
            "Contact / inquiry form",
            "Market atmosphere gallery",
            "Bilingual Thai / English",
          ],
          stack: ["Figma", "UX/UI Design", "Web Design"],
          metric: { value: "Web", label: "UX/UI design" },
          images: [{ src: "/thoongthong.png", caption: "Thoongthong Food Villa site — contact form + gallery" }],
        },
      ],
    },
    skills: {
      kicker: "Skills",
      heading: "Tools & expertise",
      groups: [
        {
          title: "Product & Process",
          items: ["Product thinking", "Requirements / User Stories", "Backlog & prioritization", "Agile mindset"],
        },
        {
          title: "Frontend",
          items: ["Next.js / React", "TypeScript / JavaScript", "Tailwind / Bootstrap", "HTML5 / CSS3, Responsive UI"],
        },
        {
          title: "Backend & Data",
          items: ["Node.js / Express, PHP", "Bun / Elysia", "MongoDB / PostgreSQL / MySQL", "Docker, REST APIs, JWT / RBAC"],
        },
        {
          title: "Design & AI",
          items: ["Figma, Adobe Illustrator", "AI (Chatbot / Generative AI)", "AI-assisted development", "Git, VS Code, Navicat"],
        },
      ],
    },
    contact: {
      kicker: "Contact",
      heading: "Let's talk product",
      body: "Open to Digital Product Owner opportunities. Reach me on any channel.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      githubLabel: "GitHub",
    },
    footer: "Designed & built with Next.js + Tailwind",
  },
};
