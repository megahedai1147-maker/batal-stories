'use client'
import { useState, useEffect } from 'react'
import { useCart } from './CartContext'

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const { count, open } = useCart()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { label:'القصص',        href:'#catalog'  },
    { label:'الأسعار',     href:'#pricing'  },
    { label:'كيف نعمل؟',   href:'#how'      },
    { label:'آراء العملاء', href:'#reviews' },
  ]

  const CartBtn = ({ className = '' }: { className?: string }) => (
    <button
      onClick={open}
      className={className}
      aria-label="السلة"
      style={{
        position: 'relative', display: 'flex', alignItems: 'center', gap: '6px',
        padding: '9px 14px', borderRadius: '99px', border: '1.5px solid var(--pink)',
        background: 'white', color: 'var(--pink)', fontWeight: 800, fontSize: '13.5px',
        fontFamily: 'var(--font-body)', cursor: 'pointer',
      }}
    >
      🛒 <span>السلة</span>
      {count > 0 && (
        <span style={{ position: 'absolute', top: '-7px', insetInlineStart: '-7px', background: 'var(--grad-btn)', color: 'white', borderRadius: '99px', minWidth: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 800, padding: '0 5px' }}>
          {count}
        </span>
      )}
    </button>
  )

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background:     scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom:   scrolled ? '1px solid rgba(255,45,122,0.12)' : 'none',
        boxShadow:      scrolled ? '0 2px 20px rgba(255,45,122,0.08)' : 'none',
        top: '0px',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* ── LOGO ── */}
        <a href="#" className="flex items-center" aria-label="بطل ستوريز">
          <img src="/logo.png" alt="Batal Stories" style={{ height:'44px', width:'auto', objectFit:'contain' }} />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 rounded-full text-sm font-bold transition-all duration-200"
              style={{ color:'var(--navy)', fontFamily:'var(--font-body)' }}
              onMouseEnter={e => { const el = e.target as HTMLElement; el.style.color='var(--pink)'; el.style.background='var(--pink-soft)' }}
              onMouseLeave={e => { const el = e.target as HTMLElement; el.style.color='var(--navy)'; el.style.background='transparent' }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/201034502000?text=أهلاً، عايز أعرف أكتر عن بطل ستوريز"
            target="_blank" rel="noopener noreferrer"
            className="hidden sm:flex"
            aria-label="واتساب"
            style={{ display:'flex', alignItems:'center', gap:'6px', padding:'9px 14px', borderRadius:'99px', background:'#25D366', color:'white', fontWeight:800, fontSize:'13.5px', fontFamily:'var(--font-body)' }}
          >
            💬 <span className="hidden lg:inline">واتساب</span>
          </a>

          <CartBtn />

          <a href="#catalog" className="hidden md:flex btn-primary text-sm px-5 py-2.5">
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
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden" style={{ background:'white', borderTop:'1px solid var(--gray-mid)' }}>
          <div className="px-4 py-4 flex flex-col gap-1">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="py-3 px-4 rounded-2xl text-sm font-bold" style={{ color:'var(--navy)', fontFamily:'var(--font-body)' }}>
                {l.label}
              </a>
            ))}
            <a href="#catalog" onClick={() => setMenuOpen(false)} className="btn-primary mt-2 justify-center">
              اصنع قصة طفلك ✨
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
