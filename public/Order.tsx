'use client'
import { useEffect, useRef } from 'react'

/**
 * جزء الطلب أسفل الموقع.
 * بيعرض فورم الأوردر الكامل (public/order.html) جوه الصفحة عن طريق iframe،
 * والفورم ده هو اللي بيكتب الطلب على Google Sheet ويحسب الشحن والدفع.
 * الـ iframe بيكبر أوتوماتيك حسب طول الفورم (عن طريق postMessage من order.html).
 */
export default function Order() {
  const ref = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      const d = e.data
      if (d && d.type === 'batal-order-height' && typeof d.height === 'number' && ref.current) {
        // +24 هامش أمان صغير عشان ما يحصلش قص
        ref.current.style.height = Math.max(700, d.height + 24) + 'px'
      }
    }
    window.addEventListener('message', onMsg)
    return () => window.removeEventListener('message', onMsg)
  }, [])

  return (
    <section id="order" className="py-20" style={{ background: '#F7F8FC' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-8 reveal">
          <div className="section-eyebrow">📝 الطلب</div>
          <h2 className="section-title text-4xl mb-3">اطلب قصة طفلك دلوقتي</h2>
          <div className="section-divider mx-auto" />
          <p className="text-sm" style={{ color: 'var(--gray-text)', fontFamily: 'var(--font-body)' }}>
            املأ البيانات، اختار الباقة، وادفع — والباقي علينا ✨
          </p>
        </div>

        {/* Embedded order form */}
        <div
          className="reveal"
          style={{
            background: 'white',
            borderRadius: '28px',
            border: '1.5px solid var(--gray-mid)',
            boxShadow: '0 8px 40px rgba(255,45,122,0.08)',
            overflow: 'hidden',
          }}
        >
          <iframe
            ref={ref}
            id="order-frame"
            src="/order.html"
            title="فورم طلب قصة طفلك"
            loading="lazy"
            style={{
              width: '100%',
              height: '1100px',
              minHeight: '700px',
              border: 'none',
              display: 'block',
              background: 'transparent',
            }}
          />
        </div>

      </div>
    </section>
  )
}
