'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { label:'القصص',        href:'#catalog'  },
    { label:'الأسعار',     href:'#pricing'  },
    { label:'كيف نطلب؟',  href:'#how'      },
    { label:'آراء العملاء', href:'#reviews' },
  ]

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background:     scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom:   scrolled ? '1px solid rgba(255,45,122,0.12)' : 'none',
        boxShadow:      scrolled ? '0 2px 20px rgba(255,45,122,0.08)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* ── LOGO ── */}
        <a href="#" className="flex items-center gap-2" aria-label="بطل ستوريز">
          <div
            style={{
              width:'40px', height:'40px',
              background:'linear-gradient(135deg,#FF2D7A,#FF7A1A)',
              borderRadius:'12px',
              boxShadow:'0 4px 14px rgba(255,45,122,0.35)',
              display:'flex', alignItems:'center', justifyContent:'center',
              fontSize:'20px',
            }}
          >
            📖
          </div>
          <div>
            <div className="font-tajawal font-black text-lg leading-none" style={{ color:'var(--navy)' }}>
              بطل ستوريز
            </div>
            <div className="font-cairo text-xs leading-none font-bold mt-0.5" style={{ color:'var(--pink)' }}>
              طفلك بطل القصة
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 rounded-full text-sm font-bold transition-all duration-200"
              style={{ color:'var(--navy)', fontFamily:'var(--font-body)' }}
              onMouseEnter={e => {
                const el = e.target as HTMLElement
                el.style.color      = 'var(--pink)'
                el.style.background = 'var(--pink-soft)'
              }}
              onMouseLeave={e => {
                const el = e.target as HTMLElement
                el.style.color      = 'var(--navy)'
                el.style.background = 'transparent'
              }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a href="#order" className="hidden md:flex btn-primary text-sm px-5 py-2.5">
          اصنع قصة طفلك ✨
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-full"
          style={{ color:'var(--pink)', background:'var(--pink-soft)' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="القائمة"
        >
          {menuOpen
            ? <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/></svg>
            : <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round"/></svg>
          }
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden" style={{ background:'white', borderTop:'1px solid var(--gray-mid)' }}>
          <div className="px-4 py-4 flex flex-col gap-1">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 px-4 rounded-2xl text-sm font-bold"
                style={{ color:'var(--navy)', fontFamily:'var(--font-body)' }}
              >
                {l.label}
              </a>
            ))}
            <a href="#order" onClick={() => setMenuOpen(false)} className="btn-primary mt-2 justify-center">
              اصنع قصة طفلك ✨
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
