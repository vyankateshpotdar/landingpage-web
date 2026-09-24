import { motion } from 'motion/react';
import { ArrowUpRight, Mail, Phone, MessageCircle } from 'lucide-react';

const CONTACT = {
  name: 'Vyankatesh Potdar',
  email: 'vyankateshpotdar411@gmail.com',
  phoneDisplay: '+91 86249 84049',
  phoneHref: 'tel:+918624984049',
  whatsapp: 'https://wa.me/918624984049',
};

const LINK_COLUMNS = [
  {
    heading: 'Services',
    links: ['Websites', 'Landing Pages', 'Redesigns', 'Frontend Build'],
  },
  {
    heading: 'Studio',
    links: ['About', 'Selected Work', 'Process', 'Testimonials'],
  },
];

export default function App() {
  return (
    <main className="relative w-full min-h-[115vh] overflow-x-hidden flex flex-col items-center font-sans selection:bg-white/20 selection:text-white">
      {/* Immersive background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-[0]"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_114316_1c7889ad-2885-410e-b493-98119fee0ddb.mp4"
      />

      {/* Content wrapper */}
      <div className="relative z-10 w-full max-w-7xl px-6 md:px-10 flex flex-col justify-between min-h-[115vh] pt-20 md:pt-28 pb-8">
        {/* Upper CTA */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="w-full flex flex-col items-center text-center"
        >
          <span className="text-[11px] uppercase tracking-[0.35em] text-white/60 mb-6">
            Web Developer &amp; Designer
          </span>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight">
            Websites that make an impression.
          </h1>
          <p className="mt-6 text-white/70 text-base leading-relaxed max-w-md">
            I design and build fast, refined digital experiences that turn visitors into customers. Let&apos;s create something worth remembering.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={`mailto:${CONTACT.email}`}
              className="shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-neutral-800/90 px-6 py-3 text-sm text-white transition-colors hover:bg-neutral-700"
            >
              Get in Touch
              <ArrowUpRight size={15} />
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass shrink-0 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm text-white transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
          </div>
        </motion.section>

        {/* Footer pushed to bottom */}
        <motion.footer
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="liquid-glass w-full rounded-3xl p-6 md:p-10 text-white/70 mt-32 md:mt-64"
        >
          {/* Top grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-10">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" fill="currentColor"><path d="M 4.688 136 C 68.373 136 120 187.627 120 251.312 C 120 252.883 119.967 254.445 119.905 256 L 0 256 L 0 136.096 C 1.555 136.034 3.117 136 4.688 136 Z M 251.312 136 C 252.883 136 254.445 136.034 256 136.096 L 256 256 L 136.095 256 C 136.032 254.438 136.001 252.875 136 251.312 C 136 187.627 187.627 136 251.312 136 Z M 119.905 0 C 119.967 1.555 120 3.117 120 4.688 C 120 68.373 68.373 120 4.687 120 C 3.117 120 1.555 119.967 0 119.905 L 0 0 Z M 256 119.905 C 254.445 119.967 252.883 120 251.312 120 C 187.627 120 136 68.373 136 4.687 C 136 3.117 136.033 1.555 136.095 0 L 256 0 Z" /></svg>
                <span className="text-xl font-medium">{CONTACT.name.toUpperCase()}</span>
              </div>
              <p className="text-sm leading-relaxed max-w-sm mt-5">
                Freelance web developer &amp; designer crafting high-performance websites and landing pages that help brands stand out and grow.
              </p>
            </div>

            {/* Links section */}
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {LINK_COLUMNS.map(col => (
                <div key={col.heading}>
                  <h3 className="text-sm uppercase tracking-wider text-white font-medium mb-4">{col.heading}</h3>
                  <ul className="text-xs space-y-2">
                    {col.links.map(link => (
                      <li key={link}>
                        <a href="#" className="hover:text-white transition-colors">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div>
                <h3 className="text-sm uppercase tracking-wider text-white font-medium mb-4">Contact</h3>
                <ul className="text-xs space-y-2">
                  <li>
                    <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 hover:text-white transition-colors">
                      <Mail size={13} /> {CONTACT.email}
                    </a>
                  </li>
                  <li>
                    <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 hover:text-white transition-colors">
                      <Phone size={13} /> {CONTACT.phoneDisplay}
                    </a>
                  </li>
                  <li>
                    <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                      <MessageCircle size={13} /> WhatsApp
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
            <p className="text-[10px] uppercase tracking-widest opacity-50">© {new Date().getFullYear()} {CONTACT.name}. All rights reserved.</p>
            <p className="text-[10px] uppercase tracking-widest opacity-50">Available for new projects</p>
          </div>
        </motion.footer>
      </div>
    </main>
  );
}
