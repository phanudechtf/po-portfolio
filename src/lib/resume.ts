import type { Lang } from "./content";

export type ResumeContent = {
  labels: {
    summary: string;
    experience: string;
    projects: string;
    skills: string;
    education: string;
    languages: string;
    qualities: string;
    personal: string;
    age: string;
    location: string;
    present: string;
    download: string;
    backHome: string;
  };
  summary: string;
  experience: {
    role: string;
    org: string;
    period: string;
    bullets: string[];
  }[];
  projects: { name: string; desc: string; link?: string }[];
  skills: { group: string; items: string }[];
  education: { degree: string; org: string; period: string }[];
  qualities: string[];
  languages: string[];
};

export const resume: Record<Lang, ResumeContent> = {
  th: {
    labels: {
      summary: "สรุปโดยย่อ",
      experience: "ประสบการณ์การทำงาน",
      projects: "ผลงานเด่น",
      skills: "ทักษะด้านคอมพิวเตอร์",
      education: "ประวัติการศึกษา",
      languages: "ภาษา",
      qualities: "คุณสมบัติส่วนตัว",
      personal: "ข้อมูลส่วนตัว",
      age: "อายุ",
      location: "ที่อยู่",
      present: "ปัจจุบัน",
      download: "ดาวน์โหลด PDF",
      backHome: "← กลับหน้าแรก",
    },
    summary:
      "Full-stack Developer ประสบการณ์ ~1 ปี ลงมือสร้าง product มาทั้ง stack ด้วยตนเอง ตั้งแต่ออกแบบ UX/UI จนถึง frontend, backend และฐานข้อมูล กำลังก้าวสู่บทบาท Product Owner — ถนัดแปลง user need และเป้าหมายธุรกิจเป็น requirement ที่ทำได้จริง และดูแลงานเองตั้งแต่ต้นจนจบ",
    experience: [
      {
        role: "Full-stack Developer",
        org: "บริษัทพัฒนาซอฟต์แวร์",
        period: "ก.ค. 2568 – ปัจจุบัน",
        bullets: [
          "พัฒนา Company Profile & Recruitment Platform แบบ end-to-end — ออกแบบ UX/UI และทำ full-stack (Next.js, TypeScript, MongoDB) deploy ใช้งานจริง พร้อม public site สองภาษา, ระบบรับสมัครงาน 5 ขั้น, สร้าง PDF อัตโนมัติ, recruitment dashboard และ admin จัดการ content/event/ประกาศงาน",
          "พัฒนา IoT device-management platform ครอบคลุม frontend, backend และ infrastructure — map monitoring (Deck.gl), สั่งงานอุปกรณ์ realtime, RBAC 3 ระดับ, sync external API อัตโนมัติ; backend Bun/Elysia + PostgreSQL บน Docker ออกแบบรองรับอุปกรณ์ระดับ ~20,000 ตัว",
          "พัฒนา feature Customer Satisfaction Survey บน enterprise portal (React) — แบบประเมิน 4 ส่วน 28 เกณฑ์ พร้อม dashboard สรุปผลตามแผนก",
          "ใช้ AI tools ช่วยพัฒนาและเร่ง workflow ครอบคลุมหลายเครื่องมือ",
        ],
      },
      {
        role: "Full-stack Developer Intern",
        org: "บริษัทชาร์โคล ดีไซน์ จำกัด",
        period: "พ.ค. 2566 – พ.ย. 2566",
        bullets: [
          "พัฒนาเว็บไซต์ของบริษัทด้วยตนเองตั้งแต่เริ่มจนเสร็จสมบูรณ์ — ออกแบบ UX/UI วางโครงร่างใน Figma และออกแบบโลโก้กับไอคอนใน Adobe Illustrator",
          "เขียนโค้ดฝั่งผู้ใช้ด้วย HTML, CSS, JavaScript",
          "ดูแลฐานข้อมูล MySQL พร้อมเขียนสคริปต์ฝั่งเซิร์ฟเวอร์ (Backend)",
          "บริหารจัดการงานทั้งหมดด้วยตนเอง พร้อมประสานงานและรับคำแนะนำจากทีมภายในอย่างต่อเนื่อง",
          "มุ่งเน้นสร้างเว็บไซต์ที่ใช้งานง่าย ตรงตามภาพลักษณ์แบรนด์ และรองรับการขยายในอนาคต",
        ],
      },
    ],
    projects: [
      {
        name: "Company Profile & Recruitment Platform",
        desc: "เว็บบริษัท + ระบบรับสมัครงานครบวงจร พร้อม admin dashboard (Next.js, MongoDB) — พัฒนา end-to-end, deploy ใช้งานจริง",
      },
      {
        name: "IoT AC / Street Control",
        desc: "แพลตฟอร์ม monitor และควบคุมอุปกรณ์ IoT บนแผนที่ รองรับ ~20k devices (Next.js, Bun/Elysia, PostgreSQL, Docker)",
      },
      {
        name: "Customer Satisfaction Survey",
        desc: "ระบบแบบประเมินความพอใจลูกค้า 4 ส่วน 28 เกณฑ์ พร้อม dashboard สรุปตามแผนก (React, Material-UI)",
      },
    ],
    skills: [
      { group: "Programming", items: "HTML5, CSS3, JavaScript, TypeScript, PHP, Node.js" },
      { group: "Frameworks", items: "React.js / Next.js, Express.js, Bun / Elysia, Tailwind CSS, Bootstrap" },
      { group: "Database & DevOps", items: "MongoDB, PostgreSQL, MySQL, Docker, Git, RESTful APIs" },
      { group: "AI Integration", items: "Chatbot, Generative AI, AI-assisted development" },
      { group: "Design & Editor", items: "Figma, Adobe Illustrator, VS Code, Navicat" },
    ],
    education: [
      {
        degree: "ปริญญาตรี คณะวิทยาศาสตร์ — วิทยาการคอมพิวเตอร์ (ภาคพิเศษ)",
        org: "มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตศรีราชา",
        period: "2563 – 2567",
      },
      {
        degree: "มัธยมปลาย หลักสูตรวิทย์-คณิต",
        org: "โรงเรียนบางปะกอกวิทยาคม",
        period: "2560 – 2562",
      },
    ],
    qualities: [
      "ทำงานร่วมกับทีมได้อย่างมีประสิทธิภาพ และประสานงานได้ดี",
      "มีความรับผิดชอบ ตรงต่อเวลา และใส่ใจในรายละเอียดงาน",
      "มีมนุษยสัมพันธ์ดี ปรับตัวเข้ากับสภาพแวดล้อมการทำงานได้รวดเร็ว",
      "ทำงานภายใต้ความกดดัน และรับมือกับสถานการณ์ที่เปลี่ยนแปลงได้ดี",
      "มีความคิดสร้างสรรค์ เปิดรับและเรียนรู้สิ่งใหม่ ๆ เพื่อพัฒนาตนเองอย่างต่อเนื่อง",
    ],
    languages: [],
  },

  en: {
    labels: {
      summary: "Summary",
      experience: "Experience",
      projects: "Selected Projects",
      skills: "Technical Skills",
      education: "Education",
      languages: "Languages",
      qualities: "Personal Qualities",
      personal: "Personal Info",
      age: "Age",
      location: "Location",
      present: "Present",
      download: "Download PDF",
      backHome: "← Back to home",
    },
    summary:
      "A full-stack developer with ~1 year of experience building products end to end — from UX/UI design through frontend, backend and database — now moving into Product Ownership. I translate user and business needs into requirements that can actually be built, and see work through from start to finish.",
    experience: [
      {
        role: "Full-stack Developer",
        org: "Software Development Company",
        period: "Jul 2025 – Present",
        bullets: [
          "Developed a Company Profile & Recruitment Platform end to end — designed the UX/UI and built it full-stack (Next.js, TypeScript, MongoDB), deployed live, with a bilingual public site, a 5-step application flow, automatic PDF generation, a recruitment dashboard and an admin area for content / events / job postings.",
          "Developed an IoT device-management platform across frontend, backend and infrastructure — map monitoring (Deck.gl), real-time device control, 3-tier RBAC, automated external-API sync; Bun/Elysia + PostgreSQL backend on Docker, architected for ~20,000 devices.",
          "Built the Customer Satisfaction Survey feature on an enterprise portal (React) — a 4-section / 28-criteria form with a department-level results dashboard.",
          "Used AI tools across the workflow to speed up development.",
        ],
      },
      {
        role: "Full-stack Developer Intern",
        org: "Charcoal Design Co., Ltd.",
        period: "May 2023 – Nov 2023",
        bullets: [
          "Developed the company website end to end myself — designed the UX/UI and wireframes in Figma, and created the logo and icons in Adobe Illustrator.",
          "Built the client side with HTML, CSS and JavaScript.",
          "Maintained the MySQL database and wrote server-side (backend) scripts.",
          "Managed the entire project myself while coordinating with and taking guidance from the internal team.",
          "Focused on an easy-to-use website that matched the brand image and supported future growth.",
        ],
      },
    ],
    projects: [
      {
        name: "Company Profile & Recruitment Platform",
        desc: "Company site + end-to-end recruitment system with admin dashboard (Next.js, MongoDB) — developed end to end, deployed live.",
      },
      {
        name: "IoT AC / Street Control",
        desc: "Map-based platform to monitor and control IoT devices, scaled for ~20k devices (Next.js, Bun/Elysia, PostgreSQL, Docker).",
      },
      {
        name: "Customer Satisfaction Survey",
        desc: "Customer satisfaction survey, 4 sections / 28 criteria, with a department-level results dashboard (React, Material-UI).",
      },
    ],
    skills: [
      { group: "Programming", items: "HTML5, CSS3, JavaScript, TypeScript, PHP, Node.js" },
      { group: "Frameworks", items: "React.js / Next.js, Express.js, Bun / Elysia, Tailwind CSS, Bootstrap" },
      { group: "Database & DevOps", items: "MongoDB, PostgreSQL, MySQL, Docker, Git, RESTful APIs" },
      { group: "AI Integration", items: "Chatbot, Generative AI, AI-assisted development" },
      { group: "Design & Editor", items: "Figma, Adobe Illustrator, VS Code, Navicat" },
    ],
    education: [
      {
        degree: "B.Sc. in Computer Science (Special Program)",
        org: "Kasetsart University, Sriracha Campus",
        period: "2020 – 2024",
      },
      {
        degree: "High School — Science & Math Program",
        org: "Bangpakok Wittayakom School",
        period: "2017 – 2019",
      },
    ],
    qualities: [
      "Works effectively in a team and coordinates well.",
      "Responsible, punctual and detail-oriented.",
      "Personable and adapts quickly to new work environments.",
      "Performs well under pressure and handles change well.",
      "Creative, open to and eager to learn new things for continuous growth.",
    ],
    languages: [],
  },
};
