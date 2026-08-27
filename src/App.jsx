import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Award, Check, ChevronDown, FlaskConical, LineChart, Mail, Menu, Moon,
  Sun, X, Cpu, Mic2, GraduationCap, PenTool, Languages
} from 'lucide-react'
import { evidence as youtubeEvidence } from './data/youtube-content'
import { LangProvider, useLang } from './i18n'

const ease = [0.16, 1, 0.3, 1]
const navKeys = ['home', 'about', 'experience', 'skills', 'contact']
const revealText = { hidden: { opacity: 0, y: 44 }, show: { opacity: 1, y: 0 } }
const revealCard = { hidden: { opacity: 0, y: 46, scale: 0.96 }, show: { opacity: 1, y: 0, scale: 1 } }
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }

function Reveal({ children, className = '', delay = 0, amount = 0.24, card = false }) {
  const reduce = useReducedMotion()
  return <motion.div className={className} initial="hidden" whileInView="show" viewport={{ once: true, amount }} variants={card ? revealCard : revealText} transition={{ duration: reduce ? 0.01 : 0.72, ease, delay: reduce ? 0 : delay }}>{children}</motion.div>
}

function RevealTitle({ children, className = '' }) {
  const reduce = useReducedMotion()
  return <motion.h2 className={`section-title ${className}`} initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.26, margin: '-8% 0px -8% 0px' }} transition={{ duration: reduce ? 0.01 : 0.68, ease }}>{children}</motion.h2>
}

function Typewriter({ text }) {
  const reduce = useReducedMotion()
  if (reduce) return <span>{text}</span>
  return <span className="typewriter-wrap">{Array.from(text).map((ch, i) => <motion.span key={`${ch}-${i}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.045, duration: 0.02 }}>{ch === ' ' ? '\u00a0' : ch}</motion.span>)}<motion.i className="typewriter-cursor" animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 0.9 }} aria-hidden="true" /></span>
}


const skillIcons = [FlaskConical, LineChart, Cpu, PenTool, GraduationCap, Mic2]

function formatNumber(value) {
  if (value === null || value === undefined || value === '') return null
  return new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(Number(value))
}

const THEME_KEY = 'filah-portfolio-theme'
function getInitialTheme() {
  const saved = localStorage.getItem(THEME_KEY)
  if (saved === 'dark' || saved === 'light') return saved === 'dark'
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? true
}

function GlowCard({ children, className = '', interactive = true }) {
  return (
    <motion.div
      whileHover={interactive ? { y: -4 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className={`glow-card ${className}`}
    >
      <div className="glow-card-edge" aria-hidden="true" />
      <div className="glow-card-inner">{children}</div>
    </motion.div>
  )
}

function YouTubeSection() {
  const { t } = useLang()
  const channelFacts = [
    { key: 'channel-01', label: 'Channel 01', subscribers: '308', started: 'Jun 2026', totalViews: '387.5K' },
    { key: 'channel-02', label: 'Channel 02', subscribers: '193', started: 'Jul 2026', totalViews: '275.1K' },
  ]
  return (
    <section id="youtube" className="youtube-section section-youtube">
      <Reveal className="youtube-heading-row lang-lock">
        <div>
          <p className="mono-label accent-text">{t.youtube.eyebrow}</p>
          <h3>{t.youtube.title}</h3>
          <p className="lead youtube-lead">{t.youtube.lead}</p>
        </div>
        <div className="youtube-proof-lock"><span className="proof-dot" />{t.youtube.privateBadge}</div>
      </Reveal>

      <Reveal className="yt-evidence-grid" amount={0.16}>
        {youtubeEvidence.map((item, index) => {
          const fact = channelFacts[index]
          return (
            <figure key={item.key} className="yt-evidence-card">
              <div className="yt-evidence-image-wrap">
                <img src={item.src} alt={item.alt} loading="lazy" draggable="false" />
              </div>
              <figcaption className="yt-proof-meta">
                <span>{fact.subscribers} {t.youtube.subscribers.split('·')[0].trim()} · {fact.started}</span>
                <b>{fact.totalViews} {t.youtube.totalViews}</b>
              </figcaption>
            </figure>
          )
        })}
      </Reveal>
      <Reveal className="yt-proof-note">{t.youtube.proofNote}</Reveal>
    </section>
  )
}


const toolItems = [
  { key:'w', name:'Microsoft Word', color:'#2B579A', type:'word', desc:{en:'documents, reports, and research formatting',id:'dokumen, laporan, dan formatting riset'}},
  { key:'e', name:'Microsoft Excel', color:'#217346', type:'excel', desc:{en:'data cleaning, formulas, tables, and analysis',id:'data cleaning, rumus, tabel, dan analisis'}},
  { key:'p', name:'Microsoft PowerPoint', color:'#D24726', type:'powerpoint', desc:{en:'presentation design, structure, and visual storytelling',id:'desain presentasi, struktur, dan visual storytelling'}},
  { key:'r', name:'RStudio', color:'#75AADB', type:'rstudio', desc:{en:'statistics, visualization, and reproducible analysis',id:'statistik, visualisasi, dan analisis reproducible'}},
  { key:'v', name:'Visual Studio Code', color:'#007ACC', type:'vscode', desc:{en:'coding, prototyping, and project development',id:'coding, prototyping, dan pengembangan project'}},
  { key:'o', name:'ChatGPT', color:'#10A37F', type:'chatgpt', desc:{en:'AI-assisted research, ideation, and coding support',id:'bantuan AI untuk riset, ideasi, dan coding'}},
  { key:'g', name:'Gemini AI', color:'#4285F4', type:'gemini', desc:{en:'AI-assisted exploration, writing, and research',id:'AI untuk eksplorasi, penulisan, dan riset'}},
  { key:'c', name:'Claude AI', color:'#D97757', type:'claude', desc:{en:'AI-assisted writing, reasoning, and workflow support',id:'AI untuk penulisan, reasoning, dan workflow'}},
  { key:'h', name:'GitHub', color:'#181717', type:'github', desc:{en:'version control, repositories, and project workflow',id:'version control, repository, dan workflow project'}},
  { key:'u', name:'CapCut', color:'#111111', type:'capcut', desc:{en:'short-form editing, captions, and content finishing',id:'editing short-form, caption, dan finishing konten'}},
  { key:'a', name:'Canva', color:'#00C4CC', type:'canva', desc:{en:'visual design for content and presentations',id:'desain visual untuk konten dan presentasi'}},
  { key:'y', name:'YouTube', color:'#FF0000', type:'youtube', desc:{en:'content publishing, research, and performance tracking',id:'publikasi konten, riset, dan pemantauan performa'}},
]

function ToolLogo({ type }) {
  const logoMap = {
    word: ['https://raw.githubusercontent.com/muhammadfilah14/PORTO/main/public/Word.svg', '#2B579A', 'W'],
    excel: ['https://raw.githubusercontent.com/muhammadfilah14/PORTO/main/public/Excel.svg', '#217346', 'X'],
    powerpoint: ['https://raw.githubusercontent.com/muhammadfilah14/PORTO/main/public/Powerpoint.svg', '#B7472A', 'P'],
    rstudio: ['https://raw.githubusercontent.com/muhammadfilah14/PORTO/main/public/RStudio.svg', '#75AADB', 'R'],
    vscode: ['https://raw.githubusercontent.com/muhammadfilah14/PORTO/main/public/VSCode.svg', '#007ACC', 'VS'],
    chatgpt: ['https://raw.githubusercontent.com/muhammadfilah14/PORTO/main/public/ChatGPT.svg', '#10A37F', 'AI'],
    gemini: ['https://raw.githubusercontent.com/muhammadfilah14/PORTO/main/public/Gemini.svg', '#8E75FF', 'G'],
    claude: ['https://raw.githubusercontent.com/muhammadfilah14/PORTO/main/public/Claude.svg', '#D97757', 'C'],
    github: ['/Github.svg', '#181717', 'GH'],
    capcut: ['https://raw.githubusercontent.com/muhammadfilah14/PORTO/main/public/Capcut.svg', '#111111', 'CC'],
    canva: ['https://raw.githubusercontent.com/muhammadfilah14/PORTO/main/public/Canva.svg', '#00C4CC', 'Ca'],
    youtube: ['https://raw.githubusercontent.com/muhammadfilah14/PORTO/main/public/YouTube.svg', '#FF0000', 'YT'],
  }
  const [src, color, fallback] = logoMap[type] || ['/favicon.svg', '#FFFFFF', '</>']
  return (
    <span className="tool-logo-shell" style={{ '--logo-color': color }}>
      <img
        className="tool-svg-logo tool-brand-logo"
        src={src}
        alt=""
        aria-hidden="true"
        draggable="false"
        loading="eager"
        onError={(e) => {
          e.currentTarget.classList.add('is-missing')
        }}
      />
      {type === 'github' ? (
        <svg className="tool-logo-github-fallback" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M12 .7a11.3 11.3 0 0 0-3.58 22.02c.57.1.78-.25.78-.55v-2.03c-3.18.69-3.85-1.35-3.85-1.35-.52-1.32-1.27-1.68-1.27-1.68-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.74 2.65 1.24 3.3.95.1-.73.4-1.24.72-1.53-2.54-.29-5.2-1.27-5.2-5.66 0-1.25.45-2.27 1.17-3.07-.12-.29-.51-1.46.11-3.04 0 0 .95-.31 3.11 1.17A10.8 10.8 0 0 1 12 6.16c.97 0 1.94.13 2.85.38 2.16-1.48 3.11-1.17 3.11-1.17.62 1.58.23 2.75.11 3.04.73.8 1.17 1.82 1.17 3.07 0 4.4-2.67 5.36-5.22 5.65.41.36.77 1.07.77 2.15v3.19c0 .3.2.66.79.55A11.3 11.3 0 0 0 12 .7"/>
        </svg>
      ) : <span className="tool-logo-fallback" aria-hidden="true">{fallback}</span>}
    </span>
  )
}

function ToolsKeycapSection() {
  const { t, lang } = useLang()
  const shouldReduce = useReducedMotion()
  const [hovered, setHovered] = useState(null)
  const [pressed, setPressed] = useState(null)
  const [pointer, setPointer] = useState({ x: 0, y: 0 })
  const sectionRef = useRef(null)
  const keyRefs = useRef({})

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const item = toolItems.find(x => x.key === e.key.toLowerCase()) || toolItems[Math.floor(Math.random() * toolItems.length)]
      setPressed(item.key)
      setHovered(item)
      clearTimeout(window.__filahToolKeyTimer)
      window.__filahToolKeyTimer = window.setTimeout(() => setPressed(null), 360)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => { window.removeEventListener('keydown', onKeyDown); clearTimeout(window.__filahToolKeyTimer) }
  }, [])

  const activate = (tool) => { setHovered(tool); setPressed(tool.key) }
  const clearHover = () => { setHovered(null); setPressed(null) }
  const rows = [toolItems.slice(0,4), toolItems.slice(4,9), toolItems.slice(9,12)]

  return (
    <section ref={sectionRef} id="skills-tools" className="tools-keycap-section">
      <div className="tools-orbit-glow" style={{ '--x': `${pointer.x}px`, '--y': `${pointer.y}px` }} aria-hidden="true" />
      <div className="tools-particles" aria-hidden="true">{Array.from({ length: 14 }, (_, i) => <span key={i} style={{ '--i': i }} />)}</div>
      <div className="container-page tools-content">
        <Reveal className="tools-header lang-lock">
          <div className="tools-title-block">
            <p className="mono-label accent-text">{t.tools.eyebrow}</p>
            <h2>{t.tools.title}</h2>
          </div>
          <div className="tools-tooltip-slot" aria-live="polite">
            <div className={`tools-tooltip ${hovered ? 'is-active' : 'is-idle'}`} aria-hidden={!hovered}><span className="tools-tooltip-kicker">{t.tools.hoverKicker}</span><strong>{hovered?.name || ''}</strong><span>{hovered?.desc?.[lang] || ''}</span></div>
          </div>
        </Reveal>

        <div className="keyboard-wrap" onPointerMove={e => { const r = e.currentTarget.getBoundingClientRect(); setPointer({ x: e.clientX - r.left, y: e.clientY - r.top }) }}>
          <div className="keyboard-deck" aria-label={t.tools.idleHint}>
            <div className="keyboard-cable" aria-hidden="true" />
            <div className="keyboard-gloss" aria-hidden="true" />
            <div className="keyboard-rows">
              {rows.map((row, rowIndex) => (
                <div className="keyboard-row" key={rowIndex}>
                  {row.map((tool, i) => <motion.button
                    key={tool.key}
                    ref={node => { if (node) keyRefs.current[tool.key] = node }}
                    type="button"
                    className={`tool-keycap ${pressed === tool.key ? 'is-pressed' : ''} ${hovered?.key === tool.key ? 'is-hovered' : ''}`}
                    style={{ '--brand': tool.color, '--order': rows.slice(0, rowIndex).reduce((n, row) => n + row.length, 0) + i }}
                    initial={shouldReduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: .25 }}
                    transition={{ duration: shouldReduce ? 0.01 : 0.32, ease, delay: shouldReduce ? 0 : (rowIndex * 4 + i) * .055 }}
                    onPointerEnter={() => activate(tool)}
                    onPointerLeave={clearHover}
                    onFocus={() => activate(tool)}
                    onBlur={clearHover}
                    onPointerDown={() => activate(tool)}
                    onPointerUp={() => { if (hovered?.key !== tool.key) setPressed(null) }}
                    aria-label={`${tool.name}. ${tool.desc[lang]}`}
                  >
                    <span className="keycap-top"><ToolLogo type={tool.type} /></span>
                    <span className="keycap-stack" aria-hidden="true" />
                    <span className="keycap-shine" aria-hidden="true" />
                  </motion.button>)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



function LinkedInMark() {
  return <svg className="contact-icon brand-linkedin" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.4 9h3.6v11.5H3.4V9Zm5.8 0h3.4v1.6h.1c.5-.9 1.7-2 3.6-2 3.8 0 4.5 2.5 4.5 5.8v6.1h-3.6v-5.4c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.5H9.2V9Z"/></svg>
}

function AppShell() {
  const { t, lang, setLang } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(getInitialTheme)
  const [assistantOpen, setAssistantOpen] = useState(false)
  const shouldReduce = useReducedMotion()
  const transition = { duration: shouldReduce ? 0.01 : 0.55, ease }
  const appRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('home')

  const handleNavClick = (event) => {
    const href = event.currentTarget.getAttribute('href')
    if (!href?.startsWith('#')) return
    const target = document.querySelector(href)
    if (!target) return
    event.preventDefault()
    target.scrollIntoView({ behavior: shouldReduce ? 'auto' : 'smooth', block: 'start' })
    window.history.replaceState(null, '', href)
    setMenuOpen(false)
  }

  useEffect(() => {
    const ids = ['home', 'about', 'experience', 'skills', 'contact']
    const getSections = () => ids.map((id) => document.getElementById(id)).filter(Boolean)
    let raf = 0
    const updateActive = () => {
      const sections = getSections()
      if (!sections.length) return
      const anchor = Math.min(window.innerHeight * 0.38, 360)
      let current = sections[0].id
      let bestDistance = Infinity
      for (const section of sections) {
        const rect = section.getBoundingClientRect()
        if (rect.top <= anchor && rect.bottom >= anchor) { current = section.id; bestDistance = 0; break }
        const distance = Math.abs(rect.top - anchor)
        if (distance < bestDistance) { bestDistance = distance; current = section.id }
      }
      setActiveSection(current)
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(updateActive)
    }
    updateActive()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])


  useEffect(() => {
    const root = appRef.current
    if (!root) return undefined
    const onMove = (event) => {
      const rect = root.getBoundingClientRect()
      root.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`)
      root.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`)
    }
    root.addEventListener('pointermove', onMove)
    return () => root.removeEventListener('pointermove', onMove)
  }, [])

  useEffect(() => {
    let raf = 0
    const updateScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? window.scrollY / max : 0
      setScrollProgress(progress)
      if (appRef.current) appRef.current.style.setProperty('--scroll-y', `${window.scrollY}px`)
    }
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(updateScroll) }
    updateScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { cancelAnimationFrame(raf); window.removeEventListener('scroll', onScroll) }
  }, [])


  useEffect(() => {
    localStorage.setItem(THEME_KEY, dark ? 'dark' : 'light')
  }, [dark])

  return (
    <div ref={appRef} className={dark ? 'app dark' : 'app light'}>
      <a href="#main" className="skip-link">{t.nav.skip}</a>
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }} aria-hidden="true" />

      <nav className="nav" aria-label="Primary navigation">
        <div className="container-page nav-inner">
          <a href="#home" className="brand">FILAH<span>.</span></a>
          <div className="desktop-nav">
            {navKeys.map(item => (
              <a key={item} href={`#${item}`} className={activeSection === item ? 'is-active' : ''} onClick={handleNavClick}>
                {t.nav[item].toUpperCase()}
                {activeSection === item && <motion.span layoutId="nav-active" className="nav-active-indicator" transition={{ type: 'spring', stiffness: 520, damping: 38 }} />}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <button className="lang-toggle" onClick={() => setLang(lang === 'en' ? 'id' : 'en')} aria-label="Switch language">
              <Languages size={15} /><span>{lang.toUpperCase()}</span>
            </button>
            <button className="theme-toggle" onClick={() => setDark(v => !v)} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}>
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button className="menu-btn" onClick={() => setMenuOpen(v => !v)} aria-expanded={menuOpen} aria-label="Toggle navigation menu">
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {menuOpen && <div className="mobile-menu">{navKeys.map(item => <a key={item} href={`#${item}`} onClick={handleNavClick}>{t.nav[item].toUpperCase()}</a>)}</div>}
      </nav>

      <main id="main">
        <header id="home" className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-spotlight" aria-hidden="true" />
          <div className="container-page hero-content">
            <motion.div initial="hidden" animate="show" variants={stagger} className="hero-copy">
              <motion.p variants={revealText} transition={transition} className="mono-label accent-text">{t.hero.eyebrow}</motion.p>
              <motion.h1 variants={revealText} transition={transition} className="display lang-lock"><Typewriter text={`${t.hero.titleA} ${t.hero.titleB}`} /></motion.h1>
              <motion.p variants={revealText} transition={transition} className="hero-sub lang-lock">{t.hero.sub}</motion.p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ ...transition, duration: .8, delay: .12 }} className="hero-visual">
            </motion.div>
          </div>
        </header>

        <section id="about" className="section-pad section-about">
          <div className="container-page two-col">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: .3 }} variants={revealText} transition={transition}>
              <p className="mono-label accent-text">{t.about.eyebrow}</p>
              <RevealTitle className="lang-lock">{t.about.title}</RevealTitle>
              <a className="about-cv-button button-secondary" href="/Muhammad_Filah_Isya_Nofatari_CV.pdf" target="_blank" rel="noreferrer">{t.about.cvView}</a>
            </motion.div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: .2 }} variants={revealText} transition={transition}>
              <div className="about-copy-lock lang-lock"><p className="lead">{t.about.lead1}</p>
              <p className="lead">{t.about.lead2}</p>
              </div>
              <motion.div className="mini-grid" initial="hidden" whileInView="show" viewport={{ once: true, amount: .2 }} variants={stagger}>
                <motion.div variants={revealCard}><GlowCard><div className="mini-card"><small>{t.about.education}</small><b>{t.about.educationValue}</b>{t.about.educationMeta ? <span>{t.about.educationMeta}</span> : null}</div></GlowCard></motion.div>
                <motion.div variants={revealCard}><GlowCard><div className="mini-card"><small>{t.about.approach}</small><b>{t.about.approachValue}</b></div></GlowCard></motion.div>
                <motion.div variants={revealCard}><GlowCard><div className="mini-card"><small>{t.about.interests}</small><b>{t.about.interestsValue}</b></div></GlowCard></motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="experience" className="section-pad section-experience">
          <div className="container-page">
            <p className="mono-label accent-text">{t.experience.eyebrow}</p>
            <RevealTitle className="lang-lock">{t.experience.title}</RevealTitle>

            <div className="experience-section-label">{t.experience.workHeading}</div>
            <div className="timeline"><motion.span className="timeline-draw-line" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, amount: .2 }} transition={{ duration: shouldReduce ? .01 : 1.2, ease }} aria-hidden="true" />
              <motion.article initial="hidden" whileInView="show" viewport={{ once: true, amount: .2 }} variants={revealText} transition={transition} className="timeline-item">
                <span />
                <GlowCard>
                  <div className="experience-card">
                    <small>{t.experience.content.label}</small>
                    <h3>{t.experience.content.title}</h3>
                    <p>{t.experience.content.desc}</p>
                  </div>
                </GlowCard>
              </motion.article>

              <YouTubeSection />

              <motion.article initial="hidden" whileInView="show" viewport={{ once: true, amount: .2 }} variants={revealText} transition={{ ...transition, delay: .1 }} className="timeline-item timeline-item-right">
                <span />
                <GlowCard>
                  <div className="experience-card assistant-card">
                    <div className="assistant-title-row">
                      <div><small>{t.experience.teaching.label}</small><h3>{t.experience.teaching.title}</h3></div>
                      <button className="assistant-trigger" onClick={() => setAssistantOpen(v => !v)} aria-expanded={assistantOpen} aria-label={t.experience.teaching.showAssignments}><ChevronDown size={18} /></button>
                    </div>
                    <p>{t.experience.teaching.desc}</p>
                    <motion.div className="assistant-popover" initial={false} animate={{ opacity: assistantOpen ? 1 : 0, height: assistantOpen ? 'auto' : 0, marginTop: assistantOpen ? 18 : 0 }} transition={{ duration: .2 }}>
                      <small>{t.experience.teaching.assignmentsLabel}</small>
                      <div className="assistant-list">{t.experience.teaching.areas.map((item, i) => <div key={item}><Check size={14} /><span>{item}</span><em>{String(i + 1).padStart(2, '0')}</em></div>)}</div>
                    </motion.div>
                    <div className="skill-chips">{t.experience.teaching.chips.map(item => <span key={item}>{item}</span>)}</div>
                  </div>
                </GlowCard>
              </motion.article>
            </div>

            <div className="organization-section">
              <div className="experience-section-label">{t.experience.orgHeading}</div>
              <motion.div className="org-list" initial="hidden" whileInView="show" viewport={{ once: true, amount: .15 }} variants={stagger}>
                <motion.div variants={revealCard}><GlowCard>
                  <div className="org-item fortifikasi-item">
                    <div className="org-item-copy">
                      <strong>{t.experience.org.karambaName}</strong>
                      <span>{t.experience.org.karambaDesc}</span>
                      <div className="org-role-list">{t.experience.org.karambaRoles.map(role => <em key={role}>{role}</em>)}</div>
                    </div>
                    <small>{t.experience.org.karambaYears}</small>
                  </div>
                </GlowCard></motion.div>
                <motion.div variants={revealCard}><GlowCard>
                  <div className="org-item fortifikasi-item">
                    <div className="org-item-copy">
                      <strong>{t.experience.org.fortifikasiName}</strong>
                      <span>{t.experience.org.fortifikasiDesc}</span>
                      <div className="org-role-list">{t.experience.org.fortifikasiRoles.map(role => <em key={role}>{role}</em>)}</div>
                      <em className="org-award"><Award size={13} /> {t.experience.org.achievement}</em>
                    </div>
                    <small>{t.experience.org.fortifikasiYears}</small>
                  </div>
                </GlowCard></motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="skills" className="section-pad section-skills">
          <div className="container-page">
            <p className="mono-label accent-text">{t.skills.eyebrow}</p>
            <RevealTitle className="lang-lock">{t.skills.title}</RevealTitle>

            <div className="skills-subheading">{t.skills.technicalHeading}</div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: .12 }} variants={stagger} className="skills-grid technical-skills">
              {t.skills.technical.map((skill, i) => {
                const Icon = skillIcons[i]
                return <motion.div key={skill.title} variants={revealText} transition={{ ...transition, delay: i * .025 }}><GlowCard><div className="skill-card"><div className="icon-box"><Icon size={20} /></div><h3>{skill.title}</h3><p className="skill-summary">{skill.summary}</p><div className="skill-item-grid">{skill.items.map(item => <span key={item}>{item}</span>)}</div>{skill.tools?.length ? <div className="skill-tools"><small>{t.skills.toolsLabel}</small><div>{skill.tools.map(tool => <b key={tool}>{tool}</b>)}</div></div> : null}</div></GlowCard></motion.div>
              })}
            </motion.div>

            <div className="skills-subheading soft-heading">{t.skills.softHeading}</div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: .12 }} variants={stagger} className="soft-skills-grid">
              {t.skills.soft.map((skill, i) => (
                <motion.div key={skill.title} variants={revealText} transition={{ ...transition, delay: i * .025 }}>
                  <GlowCard><div className="soft-skill-card"><h3>{skill.title}</h3><p>{skill.summary}</p><div className="soft-tags">{skill.items.map(item => <span key={item}>{item}</span>)}</div></div></GlowCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>


        <ToolsKeycapSection />
        <section id="contact" className="section-pad section-contact">
          <div className="container-page">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: .3 }} variants={revealText} transition={transition} className="contact glow-card">
              <div className="glow-card-edge" aria-hidden="true" />
              <div className="glow-card-inner contact-inner">
                <motion.div className="contact-copy-lock lang-lock" initial="hidden" whileInView="show" viewport={{ once: true, amount: .25 }} variants={stagger}><motion.p variants={revealText} className="mono-label accent-text">{t.contact.eyebrow}</motion.p><motion.h2 variants={revealText}>{t.contact.title}</motion.h2><motion.p variants={revealText} className="lead">{t.contact.lead}</motion.p></motion.div>
                <motion.div className="contact-actions" initial="hidden" whileInView="show" viewport={{ once: true, amount: .2 }} variants={stagger}>
                  <motion.a variants={revealText} href="mailto:muhammadfilah02@gmail.com" className="button-primary"><Mail className="contact-icon" /> {t.contact.email}</motion.a>
                  <motion.a variants={revealText} href="https://linkedin.com/in/muhammadfilah02" target="_blank" rel="noreferrer" className="button-secondary"><LinkedInMark /> {t.contact.linkedin}</motion.a>
                </motion.div>
              </div>
            </motion.div>
            <footer><span>© 2026 Muhammad Filah Isya' Nofatari</span><em className="footer-motivation">{t.contact.footerMotto}</em><strong className="footer-tag">{t.contact.footerTag}</strong></footer>
          </div>
        </section>
      </main>
    </div>
  )
}

function App() {
  return (
    <LangProvider>
      <AppShell />
    </LangProvider>
  )
}

export default App
