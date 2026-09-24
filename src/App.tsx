import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowDown, ArrowUpRight, ChevronRight, Mail, Menu, MessageCircle, Plus, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export const SITE = {
  name: 'YOUR NAME',
  role: 'Web Developer & Designer',
  email: 'YOUR_EMAIL@example.com',
  whatsapp: 'YOUR_WHATSAPP_NUMBER',
  whatsappMessage: 'Hi, I found your website and would like to discuss a project.',
  location: 'India',
}

const SERVICES = [
  ['01', 'Websites', 'Distinctive, responsive sites with a strong point of view.'],
  ['02', 'Landing Pages', 'Focused digital launches built to make an impression.'],
  ['03', 'Redesigns', 'A sharper digital presence for what you have already built.'],
  ['04', 'Frontend Build', 'Thoughtful interfaces, made real with precise implementation.'],
]

const PROJECTS = ['YOUR PROJECT', 'YOUR PROJECT', 'YOUR PROJECT']
const ease = [0.22, 1, 0.36, 1] as const

function useEscape(onEscape: () => void, isOpen: boolean) {
  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && onEscape()
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen, onEscape])
}

function ContactLinks({ compact = false }: { compact?: boolean }) {
  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`
  return (
    <div className={compact ? 'flex gap-2' : 'flex flex-wrap items-center gap-3'}>
      <a className={compact ? 'icon-link' : 'contact-link'} href={`mailto:${SITE.email}`} aria-label="Email me">
        <Mail size={compact ? 16 : 17} /><span>{compact ? 'Email' : 'Email Me'}</span>
      </a>
      <a className={compact ? 'icon-link' : 'contact-link'} href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Message me on WhatsApp">
        <MessageCircle size={compact ? 16 : 17} /><span>{compact ? 'WhatsApp' : 'WhatsApp Me'}</span>
      </a>
    </div>
  )
}

function ContactOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const trigger = useRef<HTMLButtonElement | null>(null)
  const panel = useRef<HTMLDivElement | null>(null)
  useEscape(onClose, open)
  useEffect(() => {
    if (!open) return
    const previous = document.activeElement as HTMLElement | null
    panel.current?.focus()
    return () => previous?.focus()
  }, [open])
  return <AnimatePresence>
    {open && <motion.div className="fixed inset-0 z-50 grid place-items-center bg-black/72 px-5 backdrop-blur-md" onMouseDown={(e) => e.target === e.currentTarget && onClose()} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div ref={panel} tabIndex={-1} role="dialog" aria-modal="true" aria-labelledby="contact-title" className="liquid-glass contact-panel" initial={{ opacity: 0, y: 22, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.98 }} transition={{ duration: 0.35, ease }}>
        <button ref={trigger} onClick={onClose} className="close-button" aria-label="Close contact dialog"><X size={18} /></button>
        <p className="eyebrow">DIRECT CONTACT</p>
        <h2 id="contact-title">LET&apos;S BUILD<br />SOMETHING.</h2>
        <p className="modal-copy">Tell me what you&apos;re working on. I&apos;d love to hear the shape of the idea.</p>
        <ContactLinks />
        <div className="availability-list"><span>Available for</span><p>Websites · Landing Pages · Redesigns<br />Frontend Development · Custom Experiences</p></div>
      </motion.div>
    </motion.div>}
  </AnimatePresence>
}

function Header({ onContact }: { onContact: () => void }) {
  const [open, setOpen] = useState(false)
  const menuPanel = useRef<HTMLDivElement>(null)
  useEscape(() => setOpen(false), open)
  const nav = (className = '') => <nav className={className} aria-label="Primary navigation">
    {['Work', 'Services', 'About'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>{item}</a>)}
    <button onClick={() => { setOpen(false); onContact() }}>Contact</button>
  </nav>
  return <>
    <header className="header-wrap"><a className="brand" href="#top" aria-label={`${SITE.name} home`}><span className="brand-mark">Y</span><span>{SITE.name}</span></a>{nav('desktop-nav')}<button className="menu-button" aria-label="Open navigation menu" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(true)}><Menu size={21} /></button></header>
    <AnimatePresence>{open && <motion.div className="mobile-menu-backdrop" onMouseDown={(e) => e.target === e.currentTarget && setOpen(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div ref={menuPanel} id="mobile-menu" className="liquid-glass mobile-menu" initial={{ y: 26, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 18, opacity: 0 }} transition={{ duration: 0.3, ease }}>
        <button className="close-button" onClick={() => setOpen(false)} aria-label="Close navigation menu"><X size={19} /></button>
        {nav('mobile-nav')}
        <button className="mobile-project" onClick={() => { setOpen(false); onContact() }}>Start a Project <ArrowUpRight size={18} /></button>
      </motion.div>
    </motion.div>}</AnimatePresence>
  </>
}

function App() {
  const [contactOpen, setContactOpen] = useState(false)
  const reduceMotion = useReducedMotion()
  return <main id="top" className="relative flex min-h-screen w-full flex-col items-center overflow-x-hidden bg-black font-sans text-white selection:bg-white/20 selection:text-white">
    <video autoPlay loop muted playsInline className="fixed inset-0 z-0 h-full w-full object-cover pointer-events-none" aria-hidden="true"><source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_114316_1c7889ad-2885-410e-b493-98119fee0ddb.mp4" type="video/mp4" /></video>
    <div className="video-scrim" aria-hidden="true" />
    <div className="relative z-10 w-full max-w-[1680px] px-5 sm:px-8 lg:px-12"><Header onContact={() => setContactOpen(true)} />
      <section className="hero" aria-label="Introduction">
        <motion.div className="availability" initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7, ease }}><i /> Available for new projects</motion.div>
        <motion.h1 initial={{ opacity: 0, y: reduceMotion ? 0 : 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22, duration: 0.85, ease }}>I BUILD<br /><span>DIGITAL EXPERIENCES</span><br />THAT FEEL DIFFERENT.</motion.h1>
        <motion.div className="hero-bottom" initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.75, ease }}>
          <div><p className="intro">I design and build modern websites for brands, startups and ambitious ideas.</p><p className="process">Strategy <b>→</b> Design <b>→</b> Development <b>→</b> Launch</p></div>
          <div className="hero-actions"><motion.button type="button" className="primary-button" onClick={() => setContactOpen(true)} whileHover={reduceMotion ? undefined : { y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>Start a Project <ArrowUpRight size={18} /></motion.button><ContactLinks /></div>
        </motion.div>
        <a className="scroll-cue" href="#services" aria-label="Scroll to services"><ArrowDown size={17} /><span>Scroll to explore</span></a>
      </section>
    </div>
    <section id="services" className="content-section relative z-10"><div className="section-head"><p className="eyebrow">WHAT I BUILD</p><h2>Clear thinking.<br />Carefully made.</h2><p>I help ideas make their best first impression online.</p></div><div className="service-list">{SERVICES.map(([number, title, detail]) => <motion.div className="service-row" key={number} whileHover={reduceMotion ? undefined : { x: 7 }}><span>{number}</span><h3>{title}</h3><p>{detail}</p><ArrowUpRight size={18} /></motion.div>)}</div></section>
    <section id="work" className="work-section relative z-10"><div className="work-top"><div><p className="eyebrow">SELECTED WORK</p><h2>Future-facing,<br />by design.</h2></div><p>A home for considered digital work.<br />Projects coming soon.</p></div><div className="project-grid">{PROJECTS.map((project, index) => <article className="project" key={index}><div className="project-visual"><span>0{index + 1}</span><Plus size={20} /></div><div className="project-label"><span>Project 0{index + 1}</span><h3>{project}</h3></div></article>)}</div></section>
    <footer id="about" className="liquid-glass footer relative z-10"><motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 1, delay: 0.1, ease }} className="footer-grid"><div className="footer-intro"><a className="brand" href="#top"><span className="brand-mark">Y</span><span>{SITE.name}</span></a><p className="footer-role">{SITE.role}</p><p>I design and build modern websites for people and businesses that care about how they show up online.</p></div><div><p className="eyebrow">NAVIGATION</p><div className="footer-links"><a href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a><button onClick={() => setContactOpen(true)}>Contact</button></div></div><div><p className="eyebrow">LET&apos;S TALK</p><ContactLinks compact /><p className="footer-location">Based in {SITE.location}<br />Working globally</p></div></motion.div><div className="footer-bottom"><span>© {new Date().getFullYear()} {SITE.name}</span><span>Independent digital studio</span></div></footer>
    <ContactOverlay open={contactOpen} onClose={() => setContactOpen(false)} />
  </main>
}

export default App
