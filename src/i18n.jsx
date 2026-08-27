import { createContext, useContext, useState, useEffect } from 'react'

export const translations = {
  en: {
    nav: { home: 'Home', about: 'About', experience: 'Experience', skills: 'Skills', contact: 'Contact', skip: 'Skip to content' },
    hero: {
      eyebrow: 'BACHELOR OF FISHERIES · AQUACULTURE · RESEARCH · DATA · TECHNOLOGY',
      titleA: 'Analytical by nature.',
      titleB: 'Practical by design.',
      sub: "I'm Muhammad Filah Isya' Nofatari. I work across aquaculture research, data analysis, IoT prototyping, practical teaching, and digital content.",
      workingAreas: 'WORKING AREAS',
      snapshot: [
        ['01', 'Research', 'Aquaculture & scientific workflow'],
        ['02', 'Data', 'Analysis, statistics & interpretation'],
        ['03', 'Technology', 'IoT, sensors & prototyping'],
        ['04', 'Teaching', 'Practical instruction & communication'],
      ],
      snapshotFoot: 'Evidence first. Then execution.',
      nameTag: {
        org: 'FILAH PORTFOLIO', label: 'NAME', name: "Muhammad Filah Isya' Nofatari", degree: 'Bachelor of Fisheries', university: 'Universitas Padjadjaran', focus: 'Research · Data · Technology', status: 'AVAILABLE'
      },
    },
    about: {
      eyebrow: 'ABOUT',
      title: 'From knowledge to practical work.',
      lead1: 'My work sits between scientific thinking and practical technology. I enjoy turning complex information into something structured, measurable, and useful.',
      lead2: "I'm a Bachelor of Fisheries graduate from Universitas Padjadjaran, with hands on experience in aquaculture research, practical teaching, statistical data analysis, IoT prototyping, and digital content production.",
      education: 'EDUCATION',
      educationValue: 'Bachelor of Fisheries',
      educationMeta: 'Universitas Padjadjaran · 2022–2026 · GPA 3.79/4.00',
      cvDownload: 'DOWNLOAD CV',
      cvView: 'VIEW CV',
      approach: 'APPROACH',
      approachValue: 'Measure. Interpret. Improve.',
      interests: 'INTERESTS',
      interestsValue: 'Aquaculture · data · IoT · teaching · content.',
    },
    experience: {
      eyebrow: 'EXPERIENCE',
      title: "Where I've applied it.",
      workHeading: 'WORK EXPERIENCE',
      content: {
        label: 'CONTENT CREATION · 2026 to PRESENT',
        title: 'Digital Content Creator',
        desc: 'Create short form videos that combine educational storytelling with entertainment. I handle research, scriptwriting, editing, and publishing across two YouTube channels.',
      },
      research: {
        label: 'RESEARCH PROJECT · 2025',
      },
      teaching: {
        label: 'Faculty of Fisheries and Marine Sciences · Universitas Padjadjaran · 2024–2026',
        title: 'Practical Teaching Assistant',
        desc: 'Facilitated practical classes and mentored students across four fisheries courses. The work included demonstrations, scientific reporting, practical guidance, and feedback.',
        assignmentsLabel: 'TEACHING ASSIGNMENTS',
        showAssignments: 'Show practical teaching assignments',
        areas: ['Aquaculture Engineering', 'Aquatic Animal Physiology', 'Fisheries Biology', 'Feed Technology'],
        chips: ['Teaching', 'Mentoring', 'Public Speaking', 'Facilitation', 'Technical Explanation'],
      },
      orgHeading: 'ORGANIZATIONAL EXPERIENCE',
      org: {
        karambaName: 'KARAMBA FPIK UNPAD',
        karambaDesc: 'Student community focused on aquaculture activities and development.',
        karambaRoles: ['Technical Implementation Unit Staff · 2023–2025'],
        karambaYears: '2023–2025',
        fortifikasiName: 'FORTIFIKASI FPIK UNPAD',
        fortifikasiDesc: 'Forum Teknologi Pengolahan Hasil Perikanan dan Kajian Sains focused on fishery product processing and product development.',
        fortifikasiRoles: ['Production Staff · 2023–2024', 'Vice Head, Media & Information Division · 2024–2025'],
        fortifikasiYears: '2023–2025',
        achievement: 'Best Social Media Award, Faculty Level 2024 · earned during the Media & Information Division leadership period',
        proofNote: 'Leadership progression and award are shown together to connect the role with the result.',
      },
    },
    youtube: {
      eyebrow: 'YOUTUBE',
      title: 'Content work with measurable results.',
      lead: 'Two channel projects with measurable audience growth, backed by anonymized YouTube Studio evidence.',
      subscribers: 'subscribers · since',
      totalViews: 'total views',
      anonymous: 'ANONYMIZED',
      privateBadge: 'STUDIO EVIDENCE',
      studioEvidence: 'YOUTUBE STUDIO',
      metricsHidden: 'Titles intentionally hidden',
      proofNote: 'Performance figures come from YouTube Studio. Public identifiers and content titles are intentionally hidden.',
    },
    skills: {
      eyebrow: 'SKILLS',
      title: 'Skills that support the work.',
      technicalHeading: 'TECHNICAL & HARD SKILLS',
      toolsLabel: 'TOOLS',
      technical: [
        { title: 'Aquaculture & Research', summary: 'Applied fisheries methods used across practical research work.', items: ['Experimental Design', 'Growth & Feed Assessment', 'Fish Hematology', 'Water Quality Monitoring'], tools: ['Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint', 'RStudio'] },
        { title: 'Data & Statistical Analysis', summary: 'From raw datasets to interpretation and reporting.', items: ['Data Cleaning', 'Statistical Analysis', 'Data Visualization', 'Result Interpretation'], tools: ['Microsoft Excel', 'RStudio', 'Google Sheets'] },
        { title: 'IoT & Prototyping', summary: 'Build and test simple sensor based systems and workflows.', items: ['Sensor Integration', 'Microcontroller Programming', 'Sensor Testing', 'Embedded System Prototyping'], tools: ['Arduino', 'ESP', 'Wokwi', 'Tinkercad'] },
        { title: 'Digital Content', summary: 'Turn research and ideas into clear content for a defined audience.', items: ['Scriptwriting', 'Content Analysis', 'Content Strategy', 'Video Editing'], tools: ['CapCut', 'Canva', 'YouTube Studio', 'Google Workspace'] },
      ],
      softHeading: 'PROFESSIONAL & SOFT SKILLS',
      soft: [
        { title: 'Communication', summary: 'Explain technical information clearly across different audiences.', items: ['Public Speaking', 'Presentation', 'Technical Explanation', 'Scientific Communication'] },
        { title: 'Teaching & Mentoring', summary: 'Facilitate practical learning and give structured guidance.', items: ['Practical Instruction', 'Class Facilitation', 'Demonstration & Mentoring', 'Feedback'] },
        { title: 'Collaboration', summary: 'Work effectively in academic, project, and team environments.', items: ['Team Collaboration', 'Knowledge Transfer', 'Cross functional Coordination', 'Stakeholder Communication'] },
        { title: 'Adaptability', summary: 'Learn new tools quickly and adjust workflows when priorities change.', items: ['Problem Solving', 'Learning Agility', 'Independent Working', 'Time Management'] },
      ],
    },
    tools: {
      eyebrow: 'SKILLS / TOOLS',
      title: 'TOOLS I USE',
      hint: '',
      hoverKicker: 'TOOL',
      idleHint: 'Hover a key or press any keyboard key.',
    },
    contact: {
      eyebrow: 'CONTACT',
      title: "Let's talk about useful work.",
      lead: "Interested in research, data, aquaculture technology, teaching, or digital content? I'm open to thoughtful conversations and practical collaborations.",
      email: 'EMAIL ME',
      linkedin: 'LINKEDIN',
      footerTag: 'Research · Data · Technology · Teaching',
      footerMotto: 'Stay curious. Keep building.',
    },
  },
  id: {
    nav: { home: 'Beranda', about: 'Tentang', experience: 'Pengalaman', skills: 'Keahlian', contact: 'Kontak', skip: 'Lompat ke konten' },
    hero: {
      eyebrow: 'SARJANA PERIKANAN (S.PI.) · AKUAKULTUR · RISET · DATA · TEKNOLOGI',
      titleA: 'Berpikir analitis.',
      titleB: 'Praktis dalam menerapkan.',
      sub: 'Saya Muhammad Filah Isya\' Nofatari. Saya berkecimpung di riset akuakultur, analisis data, prototyping IoT, pengajaran praktikum, dan produksi konten digital.',
      workingAreas: 'BIDANG KERJA',
      snapshot: [
        ['01', 'Riset', 'Akuakultur & alur kerja ilmiah'],
        ['02', 'Data', 'Analisis, statistik & interpretasi'],
        ['03', 'Teknologi', 'IoT, sensor & prototyping'],
        ['04', 'Pengajaran', 'Instruksi praktikum & komunikasi'],
      ],
      snapshotFoot: 'Bukti dulu. Baru eksekusi.',
      nameTag: {
        org: 'PORTOFOLIO FILAH', label: 'NAMA', name: "Muhammad Filah Isya' Nofatari", degree: 'Bachelor of Fisheries', university: 'Universitas Padjadjaran', focus: 'Riset · Data · Teknologi', status: 'TERSEDIA'
      },
    },
    about: {
      eyebrow: 'TENTANG',
      title: 'Mengubah pengetahuan menjadi kerja nyata.',
      lead1: 'Pekerjaan saya berada di antara pemikiran ilmiah dan teknologi terapan. Saya senang mengubah informasi yang kompleks menjadi sesuatu yang terstruktur, terukur, dan berguna.',
      lead2: "Saya lulusan Perikanan (S.Pi.) dari Universitas Padjadjaran pada 2026, dengan pengalaman di riset akuakultur, pengajaran praktikum, analisis data statistik, prototyping IoT, dan produksi konten digital.",
      education: 'PENDIDIKAN',
      educationValue: 'Sarjana Perikanan',
      educationMeta: 'Universitas Padjadjaran · 2022–2026 · IPK 3.79/4.00',
      cvDownload: 'UNDUH CV',
      cvView: 'LIHAT CV',
      approach: 'PENDEKATAN',
      approachValue: 'Ukur. Pahami. Tingkatkan.',
      interests: 'MINAT',
      interestsValue: 'Akuakultur · data · IoT · pengajaran · konten.',
    },
    experience: {
      eyebrow: 'PENGALAMAN',
      title: 'Di mana saya menerapkannya.',
      workHeading: 'PENGALAMAN KERJA',
      content: {
        label: 'PRODUKSI KONTEN · 2026 hingga SEKARANG',
        title: 'Kreator Konten Digital',
        desc: 'Membuat video pendek yang memadukan storytelling edukatif dengan hiburan. Pekerjaan mencakup riset, penulisan naskah, penyuntingan, dan publikasi untuk dua kanal YouTube.',
      },
      teaching: {
        label: 'Fakultas Perikanan dan Ilmu Kelautan · Universitas Padjadjaran · 2024–2026',
        title: 'Asisten Praktikum',
        desc: 'Memfasilitasi praktikum dan membimbing mahasiswa di empat mata kuliah perikanan. Pekerjaan mencakup demonstrasi, pelaporan ilmiah, bimbingan praktis, dan umpan balik.',
        assignmentsLabel: 'MATA KULIAH YANG DIAMPU',
        showAssignments: 'Tampilkan mata kuliah praktikum',
        areas: ['Rekayasa Akuakultur', 'Fisiologi Hewan Air', 'Biologi Perikanan', 'Teknologi Pakan'],
        chips: ['Pengajaran', 'Bimbingan', 'Berbicara di Depan Umum', 'Fasilitasi', 'Penjelasan Teknis'],
      },
      orgHeading: 'PENGALAMAN ORGANISASI',
      org: {
        karambaName: 'KARAMBA FPIK UNPAD',
        karambaDesc: 'Komunitas mahasiswa yang berfokus pada kegiatan dan pengembangan budidaya perikanan.',
        karambaRoles: ['Staf Technical Implementation Unit · 2023–2025'],
        karambaYears: '2023–2025',
        fortifikasiName: 'FORTIFIKASI FPIK UNPAD',
        fortifikasiDesc: 'Forum Teknologi Pengolahan Hasil Perikanan dan Kajian Sains yang berfokus pada pengolahan dan pengembangan produk hasil perikanan.',
        fortifikasiRoles: ['Production Staff · 2023–2024', 'Wakil Kepala Divisi Media & Informasi · 2024–2025'],
        fortifikasiYears: '2023–2025',
        achievement: 'Best Social Media Award, Tingkat Fakultas 2024 · diraih saat menjabat Wakil Kepala Divisi Media & Informasi',
        proofNote: 'Perkembangan jabatan dan penghargaan ditampilkan bersama agar hubungan antara peran dan hasil kerjanya terlihat jelas.',
      },
    },
    youtube: {
      eyebrow: 'YOUTUBE',
      title: 'Konten dengan hasil yang terukur.',
      lead: 'Dua proyek kanal dengan pertumbuhan audiens yang didukung bukti YouTube Studio yang sudah dianonimkan.',
      subscribers: 'subscriber · sejak',
      totalViews: 'total views',
      anonymous: 'ANONIM',
      privateBadge: 'BUKTI STUDIO',
      studioEvidence: 'YOUTUBE STUDIO',
      metricsHidden: 'Judul sengaja disembunyikan',
      proofNote: 'Angka performa diambil dari YouTube Studio. Identitas publik dan judul konten sengaja disembunyikan.',
    },
    skills: {
      eyebrow: 'KEAHLIAN',
      title: 'Keahlian yang mendukung pekerjaan.',
      technicalHeading: 'KEAHLIAN TEKNIS & HARD SKILLS',
      toolsLabel: 'TOOLS',
      technical: [
        { title: 'Akuakultur & Riset', summary: 'Metode perikanan terapan yang digunakan dalam riset dan praktikum.', items: ['Desain Eksperimen', 'Evaluasi Pertumbuhan & Pakan', 'Hematologi Ikan', 'Pemantauan Kualitas Air'], tools: ['Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint', 'RStudio'] },
        { title: 'Data & Analisis Statistik', summary: 'Mengolah data mentah menjadi analisis, visualisasi, dan interpretasi.', items: ['Data Cleaning', 'Analisis Statistik', 'Visualisasi Data', 'Interpretasi Hasil'], tools: ['Microsoft Excel', 'RStudio', 'Google Sheets'] },
        { title: 'IoT & Prototyping', summary: 'Membangun dan menguji sistem sederhana berbasis sensor serta alur kerja perangkat.', items: ['Integrasi Sensor', 'Pemrograman Mikrokontroler', 'Pengujian Sensor', 'Prototyping Sistem Tertanam'], tools: ['Arduino', 'ESP', 'Wokwi', 'Tinkercad'] },
        { title: 'Konten Digital', summary: 'Mengubah ide menjadi konten yang jelas dan berorientasi audiens.', items: ['Scriptwriting', 'Analisis Konten', 'Strategi Konten', 'Video Editing'], tools: ['CapCut', 'Canva', 'YouTube Studio', 'Google Workspace'] },
      ],
      softHeading: 'KEAHLIAN PROFESIONAL & SOFT SKILLS',
      soft: [
        { title: 'Komunikasi', summary: 'Menjelaskan informasi teknis secara jelas untuk audiens yang berbeda.', items: ['Public Speaking', 'Presentasi', 'Penjelasan Teknis', 'Komunikasi Ilmiah'] },
        { title: 'Pengajaran & Mentoring', summary: 'Memfasilitasi pembelajaran praktis dan memberikan bimbingan terstruktur.', items: ['Instruksi Praktikum', 'Fasilitasi Kelas', 'Demonstrasi & Mentoring', 'Umpan Balik'] },
        { title: 'Kolaborasi', summary: 'Bekerja efektif dalam lingkungan akademik, proyek, dan tim.', items: ['Kolaborasi Tim', 'Transfer Pengetahuan', 'Koordinasi Lintas Fungsi', 'Komunikasi Stakeholder'] },
        { title: 'Adaptabilitas', summary: 'Cepat mempelajari tools baru dan menyesuaikan alur kerja saat kebutuhan berubah.', items: ['Problem Solving', 'Learning Agility', 'Kemandirian Kerja', 'Manajemen Waktu'] },
      ],
    },
    tools: {
      eyebrow: 'KEAHLIAN / TOOLS',
      title: 'TOOLS YANG SAYA GUNAKAN',
      hint: '',
      hoverKicker: 'TOOLS',
      idleHint: 'Arahkan kursor ke tombol atau tekan tombol keyboard apa pun.',
    },
    contact: {
      eyebrow: 'KONTAK',
      title: 'Mari bicarakan pekerjaan yang bermanfaat.',
      lead: 'Tertarik membahas riset, data, teknologi akuakultur, pengajaran, atau konten digital? Saya terbuka untuk diskusi dan kolaborasi yang praktis.',
      email: 'EMAIL SAYA',
      linkedin: 'LINKEDIN',
      footerTag: 'Riset · Data · Teknologi · Pengajaran',
      footerMotto: 'Tetap ingin tahu. Terus membangun.',
    },
  },
}

const LangContext = createContext(null)
const LANG_KEY = 'filah-portfolio-lang'

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem(LANG_KEY)
    return saved === 'en' || saved === 'id' ? saved : 'en'
  })

  useEffect(() => {
    localStorage.setItem(LANG_KEY, lang)
    document.documentElement.lang = lang
  }, [lang])

  const value = { lang, setLang, t: translations[lang] }
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}
