import type { Lang } from "./content";

export type IconKey =
  | "nextjs"
  | "react"
  | "typescript"
  | "tailwind"
  | "mongodb"
  | "nodejs"
  | "bun"
  | "elysia"
  | "express"
  | "postgresql"
  | "mysql"
  | "docker"
  | "git"
  | "restapi"
  | "json"
  | "deckgl"
  | "figma"
  | "illustrator"
  | "php"
  | "html"
  | "css"
  | "javascript";

export type Tech = { name: string; icon: IconKey };

export type ResumeContent = {
  labels: {
    about: string;
    experience: string;
    projects: string;
    techStack: string;
    education: string;
    strengths: string;
    stats: string;
    softSkills: string;
    careerGoal: string;
    contact: string;
    technologies: string;
    present: string;
    download: string;
    backHome: string;
  };
  title: string;
  about: string;
  education: { degree: string; org: string; period: string }[];
  strengths: string[];
  techStack: { group: string; items: Tech[] }[];
  experience: {
    role: string;
    org: string;
    period: string;
    bullets: string[];
  }[];
  projects: {
    no: string;
    name: string;
    bullets: string[];
    tech: Tech[];
    image?: string;
  }[];
  stats: { value: string; label: string; desc: string; icon: string }[];
  softSkills: { label: string; icon: string }[];
  careerGoal: { from: string; to: string; quote: string };
};

export const resume: Record<Lang, ResumeContent> = {
  th: {
    labels: {
      about: "เกี่ยวกับฉัน",
      experience: "ประสบการณ์การทำงาน",
      projects: "ผลงานสำคัญ",
      techStack: "ทักษะทางเทคนิค (Tech Stack)",
      education: "การศึกษา",
      strengths: "จุดเด่นของฉัน",
      stats: "ผลงานและตัวเลขสำคัญ",
      softSkills: "ทักษะด้านการทำงาน (Soft Skills)",
      careerGoal: "เป้าหมายในสายอาชีพ",
      contact: "ข้อมูลติดต่อ",
      technologies: "TECHNOLOGIES",
      present: "ปัจจุบัน",
      download: "ดาวน์โหลด PDF",
      backHome: "← กลับหน้าแรก",
    },
    title: "FULL-STACK DEVELOPER | PRODUCT OWNER",
    about:
      "นักพัฒนาระบบ Full-stack ที่มีประสบการณ์พัฒนา Web Application ตั้งแต่การเก็บ Requirement ออกแบบ UX/UI พัฒนา Frontend และ Backend ไปจนถึง Deploy ใช้งานจริง มีประสบการณ์สร้างระบบ Recruitment, IoT และ Enterprise Survey พร้อมความสนใจในการเติบโตสู่สาย Product Owner และ Product Management",
    education: [
      {
        degree: "วิทยาศาสตรบัณฑิต สาขาวิทยาการคอมพิวเตอร์",
        org: "มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตศรีราชา",
        period: "2563 – 2567",
      },
    ],
    strengths: [
      "พัฒนาระบบครบวงจร (End-to-End)",
      "คิดเชิงผลิตภัณฑ์ (Product Thinking)",
      "สื่อสารและประสานงานกับผู้ใช้/ทีมได้ดี",
      "ทำงานแบบ Agile / Scrum",
      "ออกแบบสถาปัตยกรรมระบบ",
      "แก้ปัญหาอย่างเป็นระบบ",
      "เรียนรู้เทคโนโลยีใหม่อย่างต่อเนื่อง",
    ],
    techStack: [
      {
        group: "FRONTEND",
        items: [
          { name: "Next.js", icon: "nextjs" },
          { name: "React.js", icon: "react" },
          { name: "TypeScript", icon: "typescript" },
          { name: "Tailwind CSS", icon: "tailwind" },
        ],
      },
      {
        group: "BACKEND",
        items: [
          { name: "Node.js", icon: "nodejs" },
          { name: "Bun", icon: "bun" },
          { name: "Elysia", icon: "elysia" },
          { name: "Express.js", icon: "express" },
        ],
      },
      {
        group: "DATABASE",
        items: [
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "MongoDB", icon: "mongodb" },
          { name: "MySQL", icon: "mysql" },
        ],
      },
      {
        group: "INFRASTRUCTURE & TOOLS",
        items: [
          { name: "Docker", icon: "docker" },
          { name: "Git", icon: "git" },
          { name: "REST API", icon: "restapi" },
          { name: "JSON", icon: "json" },
        ],
      },
    ],
    experience: [
      {
        role: "FULL-STACK DEVELOPER",
        org: "บริษัท แอลอีดี อน เทรดดิ้ง จำกัด",
        period: "ก.ค. 2568 – ปัจจุบัน",
        bullets: [
          "พัฒนาระบบ Web Application สำหรับธุรกิจและองค์กร ตั้งแต่การเก็บความต้องการผู้ใช้งาน",
          "ออกแบบ UX/UI พัฒนา Frontend และ Backend ไปจนถึง Deploy และดูแลระบบจริง",
          "ออกแบบ Workflow และสถาปัตยกรรมระบบเพื่อรองรับการเติบโตในอนาคต",
          "ประสานงานกับผู้ใช้งาน ทีมภายใน และผู้มีส่วนเกี่ยวข้องเพื่อส่งมอบผลิตภัณฑ์ที่มีคุณค่า",
        ],
      },
      {
        role: "FULL-STACK DEVELOPER INTERN",
        org: "บริษัท ฮาร์โค้ด ดีไซน์ จำกัด",
        period: "พ.ค. 2566 – พ.ย. 2566",
        bullets: [
          "ออกแบบและพัฒนาเว็บไซต์ของบริษัท ตั้งแต่เริ่มจนใช้งานจริง",
          "ออกแบบ UX/UI ด้วย Figma และสร้าง Branding ด้วย Adobe Illustrator",
          "พัฒนา Frontend ด้วย HTML, CSS, JavaScript และ Backend ด้วย PHP",
          "ดูแลฐานข้อมูล MySQL และเขียนสคริปต์ฝั่งเซิร์ฟเวอร์",
          "ประสานงานกับทีมภายในเพื่อให้งานสำเร็จตามเป้าหมาย",
        ],
      },
    ],
    projects: [
      {
        no: "01",
        name: "Company Profile & Recruitment Platform",
        bullets: [
          "พัฒนาระบบครบวงจรด้วยตัวเอง ตั้งแต่ UX/UI ถึง Full-stack",
          "เว็บไซต์บริษัท 2 ภาษา (ไทย/อังกฤษ)",
          "ระบบสมัครงาน 5 ขั้นตอน พร้อมสร้าง PDF Resume อัตโนมัติ",
          "Recruitment Dashboard สำหรับฝ่าย HR",
          "Admin จัดการ Content, Event และประกาศรับสมัครงาน",
        ],
        tech: [
          { name: "Next.js", icon: "nextjs" },
          { name: "TypeScript", icon: "typescript" },
          { name: "MongoDB", icon: "mongodb" },
          { name: "Tailwind CSS", icon: "tailwind" },
        ],
        image: "/loh-dashboard.png",
      },
      {
        no: "02",
        name: "IoT Device Management Platform",
        bullets: [
          "ระบบติดตามและบริหารจัดการอุปกรณ์ IoT แบบ Real-time",
          "แสดงตำแหน่งอุปกรณ์บนแผนที่ด้วย Deck.gl",
          "ระบบสั่งงานอุปกรณ์และตรวจสอบสถานะแบบทันที",
          "กำหนดสิทธิ์ผู้ใช้งาน 3 ระดับ (RBAC)",
          "เชื่อมต่อและดึงข้อมูลกับ External API",
          "ออกแบบสถาปัตยกรรมรองรับประมาณ 20,000 Devices",
        ],
        tech: [
          { name: "Bun", icon: "bun" },
          { name: "Elysia", icon: "elysia" },
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "Docker", icon: "docker" },
          { name: "Deck.gl", icon: "deckgl" },
        ],
        image: "/iot-monitoring.png",
      },
      {
        no: "03",
        name: "Customer Satisfaction Survey Platform",
        bullets: [
          "ระบบประเมินความพึงพอใจลูกค้าใน Enterprise Portal",
          "แบบประเมิน 4 หมวด 28 เกณฑ์",
          "Dashboard สรุปผลการประเมิน แยกตามแผนก",
          "รายงานผลและส่งออกข้อมูลเพื่อนำไปสนับสนุนการตัดสินใจ",
        ],
        tech: [
          { name: "React", icon: "react" },
          { name: "TypeScript", icon: "typescript" },
          { name: "PostgreSQL", icon: "postgresql" },
        ],
      },
    ],
    stats: [
      { value: "20,000+", label: "Devices", desc: "รองรับอุปกรณ์ IoT ประมาณ 20,000+ เครื่อง", icon: "devices" },
      { value: "3", label: "Enterprise Platforms", desc: "พัฒนาแพลตฟอร์มสำหรับองค์กร 3 ระบบ", icon: "platforms" },
      { value: "2", label: "Languages", desc: "เว็บไซต์ 2 ภาษา ไทย / อังกฤษ", icon: "languages" },
      { value: "5", label: "Steps", desc: "ระบบสมัครงาน 5 ขั้นตอน", icon: "steps" },
      { value: "End-to-End", label: "", desc: "พัฒนาระบบครบวงจรตั้งแต่ต้นจน Deploy", icon: "endtoend" },
    ],
    softSkills: [
      { label: "การเก็บความต้องการ (Requirement Gathering)", icon: "requirement" },
      { label: "การทำงานเป็นทีม (Teamwork)", icon: "teamwork" },
      { label: "การออกแบบ User Flow และ Wireframe", icon: "userflow" },
      { label: "การสื่อสารกับผู้มีส่วนเกี่ยวข้อง", icon: "communication" },
      { label: "การคิดและกำหนดคุณค่าผลิตภัณฑ์", icon: "value" },
      { label: "ความรับผิดชอบและตรงต่อเวลา", icon: "responsibility" },
    ],
    careerGoal: {
      from: "FULL-STACK DEVELOPER",
      to: "PRODUCT OWNER",
      quote:
        "มุ่งเน้นการสร้างผลิตภัณฑ์ที่ตอบโจทย์ผู้ใช้และธุรกิจ ด้วยเทคโนโลยีที่เหมาะสม เพื่อสร้างคุณค่าและผลลัพธ์ที่ยั่งยืน",
    },
  },

  en: {
    labels: {
      about: "About Me",
      experience: "Work Experience",
      projects: "Key Projects",
      techStack: "Technical Skills (Tech Stack)",
      education: "Education",
      strengths: "My Strengths",
      stats: "Highlights & Key Numbers",
      softSkills: "Soft Skills",
      careerGoal: "Career Goal",
      contact: "Contact",
      technologies: "TECHNOLOGIES",
      present: "Present",
      download: "Download PDF",
      backHome: "← Back to home",
    },
    title: "FULL-STACK DEVELOPER | PRODUCT OWNER",
    about:
      "A full-stack developer experienced in building web applications end to end — from gathering requirements and designing UX/UI to developing the frontend and backend and deploying to production. Experienced in Recruitment, IoT and Enterprise Survey systems, and growing toward Product Ownership and Product Management.",
    education: [
      {
        degree: "B.Sc. in Computer Science",
        org: "Kasetsart University, Sriracha Campus",
        period: "2020 – 2024",
      },
    ],
    strengths: [
      "End-to-end system development",
      "Product thinking",
      "Strong communication with users & teams",
      "Agile / Scrum workflow",
      "System architecture design",
      "Systematic problem solving",
      "Continuous learning of new tech",
    ],
    techStack: [
      {
        group: "FRONTEND",
        items: [
          { name: "Next.js", icon: "nextjs" },
          { name: "React.js", icon: "react" },
          { name: "TypeScript", icon: "typescript" },
          { name: "Tailwind CSS", icon: "tailwind" },
        ],
      },
      {
        group: "BACKEND",
        items: [
          { name: "Node.js", icon: "nodejs" },
          { name: "Bun", icon: "bun" },
          { name: "Elysia", icon: "elysia" },
          { name: "Express.js", icon: "express" },
        ],
      },
      {
        group: "DATABASE",
        items: [
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "MongoDB", icon: "mongodb" },
          { name: "MySQL", icon: "mysql" },
        ],
      },
      {
        group: "INFRASTRUCTURE & TOOLS",
        items: [
          { name: "Docker", icon: "docker" },
          { name: "Git", icon: "git" },
          { name: "REST API", icon: "restapi" },
          { name: "JSON", icon: "json" },
        ],
      },
    ],
    experience: [
      {
        role: "FULL-STACK DEVELOPER",
        org: "LEDonhome Trading Co.,Ltd",
        period: "Jul 2025 – Present",
        bullets: [
          "Develop web applications for businesses and organizations, starting from gathering user requirements.",
          "Design UX/UI, build the frontend and backend, and deploy and operate live systems.",
          "Design workflows and system architecture to support future growth.",
          "Coordinate with users, internal teams and stakeholders to deliver valuable products.",
        ],
      },
      {
        role: "FULL-STACK DEVELOPER INTERN",
        org: "Charcoal Design Co.,Ltd.",
        period: "May 2023 – Nov 2023",
        bullets: [
          "Designed and developed the company website end to end, from start to production.",
          "Designed UX/UI in Figma and created branding in Adobe Illustrator.",
          "Built the frontend with HTML, CSS, JavaScript and the backend with PHP.",
          "Maintained the MySQL database and wrote server-side scripts.",
          "Coordinated with the internal team to deliver work on target.",
        ],
      },
    ],
    projects: [
      {
        no: "01",
        name: "Company Profile & Recruitment Platform",
        bullets: [
          "Built end to end myself — from UX/UI through full-stack.",
          "Bilingual company website (Thai / English).",
          "5-step application flow with automatic PDF resume generation.",
          "Recruitment dashboard for the HR team.",
          "Admin for managing content, events and job postings.",
        ],
        tech: [
          { name: "Next.js", icon: "nextjs" },
          { name: "TypeScript", icon: "typescript" },
          { name: "MongoDB", icon: "mongodb" },
          { name: "Tailwind CSS", icon: "tailwind" },
        ],
        image: "/loh-dashboard.png",
      },
      {
        no: "02",
        name: "IoT Device Management Platform",
        bullets: [
          "Real-time IoT device monitoring and management system.",
          "Device locations on a map with Deck.gl.",
          "Real-time device control and status checks.",
          "3-tier user permissions (RBAC).",
          "External API integration and data sync.",
          "Architected to support ~20,000 devices.",
        ],
        tech: [
          { name: "Bun", icon: "bun" },
          { name: "Elysia", icon: "elysia" },
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "Docker", icon: "docker" },
          { name: "Deck.gl", icon: "deckgl" },
        ],
        image: "/iot-monitoring.png",
      },
      {
        no: "03",
        name: "Customer Satisfaction Survey Platform",
        bullets: [
          "Customer satisfaction survey within an enterprise portal.",
          "4-section / 28-criteria evaluation form.",
          "Dashboard summarizing results by department.",
          "Reporting and data export to support decisions.",
        ],
        tech: [
          { name: "React", icon: "react" },
          { name: "TypeScript", icon: "typescript" },
          { name: "PostgreSQL", icon: "postgresql" },
        ],
      },
    ],
    stats: [
      { value: "20,000+", label: "Devices", desc: "Architected to support ~20,000+ IoT devices", icon: "devices" },
      { value: "3", label: "Enterprise Platforms", desc: "Built 3 platforms for organizations", icon: "platforms" },
      { value: "2", label: "Languages", desc: "Bilingual website, Thai / English", icon: "languages" },
      { value: "5", label: "Steps", desc: "5-step application system", icon: "steps" },
      { value: "End-to-End", label: "", desc: "Full-cycle development from start to deploy", icon: "endtoend" },
    ],
    softSkills: [
      { label: "Requirement gathering", icon: "requirement" },
      { label: "Teamwork", icon: "teamwork" },
      { label: "User flow & wireframe design", icon: "userflow" },
      { label: "Stakeholder communication", icon: "communication" },
      { label: "Defining product value", icon: "value" },
      { label: "Responsibility & punctuality", icon: "responsibility" },
    ],
    careerGoal: {
      from: "FULL-STACK DEVELOPER",
      to: "PRODUCT OWNER",
      quote:
        "Focused on building products that serve users and the business with the right technology — to create lasting value and results.",
    },
  },
};
