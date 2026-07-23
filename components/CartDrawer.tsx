'use client'
import { useCart } from './CartContext'

/* السلة المنسدلة — بتظهر من الشمال. فيها القصص المختارة، التوفير، الإجمالي،
   وزرار "أكمل الطلب" اللي بيوديك لصفحة الطلب (order.html) بالقصص متختارة. */
export default function CartDrawer() {
  const { items, remove, isOpen, close, price, savings } = useCart()

  const checkout = () => {
    if (items.length === 0) return
    const q = items.map(i => encodeURIComponent(i.title)).join(',')
    window.location.href = '/order.html?stories=' + q
  }
  return (
    <>
      {/* overlay */}
      <div
        onClick={close}
        style={{
          position: 'fixed', inset: 0, background: 'rgba(18,40,76,0.45)',
          opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity .3s', zIndex: 60, backdropFilter: 'blur(2px)',
        }}
      />
      {/* panel */}
      <aside
        style={{
          position: 'fixed', top: 0, bottom: 0, left: 0, width: 'min(420px,92vw)',
          background: '#FFFDF9', boxShadow: '0 0 60px rgba(0,0,0,.25)',
          transform: isOpen ? 'translateX(0)' : 'translateX(-105%)',
          transition: 'transform .35s cubic-bezier(.4,0,.2,1)', zIndex: 61,
          display: 'flex', flexDirection: 'column', fontFamily: 'var(--font-body)',
        }}
        aria-hidden={!isOpen}
      >
        {/* header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 20px', borderBottom: '1.5px solid var(--gray-mid)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="font-tajawal font-black text-lg" style={{ color: 'var(--navy)' }}>🛒 سلة الطلبات</span>
            <span style={{ background: 'var(--pink)', color: 'white', borderRadius: '99px', fontSize: '12px', fontWeight: 800, padding: '2px 9px' }}>{items.length}</span>
          </div>
          <button onClick={close} aria-label="إغلاق" style={{ border: 'none', background: 'transparent', fontSize: '22px', cursor: 'pointer', color: 'var(--gray-text)' }}>✕</button>
        </div>

        {/* items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {items.length === 0 && (
            <div style={{ textAlign: 'center', color: 'var(--gray-text)', marginTop: '48px' }}>
              <div style={{ fontSize: '42px', marginBottom: '10px' }}>🛒</div>
              السلة فاضية — اختار قصص من الكتالوج وضيفها هنا
            </div>
          )}
          {items.map(it => (
            <div key={it.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'white', borderRadius: '16px', padding: '10px', boxShadow: '0 2px 10px rgba(0,0,0,.05)' }}>
              <img src={`/stories/story-${it.id}.png`} alt={it.title} style={{ width: '54px', height: '54px', objectFit: 'cover', borderRadius: '12px', background: '#eee', flex: 'none' }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="font-tajawal font-bold" style={{ color: 'var(--navy)', fontSize: '14px' }}>{it.title}</div>
                <div style={{ color: 'var(--pink)', fontWeight: 800, fontSize: '13px' }}>179 ج</div>
              </div>
              <button onClick={() => remove(it.id)} aria-label="حذف" style={{ border: 'none', background: 'transparent', cursor: 'pointer', fontSize: '18px' }}>🗑️</button>
            </div>
          ))}
        </div>

        {/* footer */}
        {items.length > 0 && (
          <div style={{ borderTop: '1.5px solid var(--gray-mid)', padding: '16px 18px', background: 'white' }}>
            {savings > 0 && (
              <div style={{ background: 'var(--teal-soft)', color: '#0a8f78', fontWeight: 700, fontSize: '12.5px', borderRadius: '12px', padding: '8px 12px', marginBottom: '10px', textAlign: 'center' }}>
                🎉 عرض التوفير مفعّل — وفّرت {savings} ج
              </div>
            )}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span style={{ color: 'var(--gray-text)', fontSize: '13px' }}>الإجمالي ({items.length} {items.length === 1 ? 'قصة' : 'قصص'})</span>
              <span className="font-tajawal font-black text-xl" style={{ color: 'var(--navy)' }}>{price} ج</span>
            </div>
            <div style={{ color: 'var(--gray-text)', fontSize: '11px', marginBottom: '12px' }}>+ الشحن يُحسب عند إتمام الطلب حسب المحافظة</div>
            <button onClick={checkout} className="btn-primary w-full justify-center" style={{ padding: '14px', fontSize: '15px' }}>أكمل الطلب ✨</button>
          </div>
        )}
      </aside>
    </>
  )
}
