'use client'

const plans = [
  {
    id:'p1', icon:'📖', name:'قصة واحدة', tagline:'كتاب مطبوع فاخر لطفلك',
    popular:false, accentColor:'var(--purple)', price:179, oldPrice:249,
    features:['قصة مخصصة باسم وصورة طفلك','طباعة ألوان فاخرة','14 صفحة A5','توصيل لكل مصر'],
  },
  {
    id:'p2', icon:'📚', name:'قصتين', tagline:'وفّر أكتر مع قصتين',
    popular:false, accentColor:'var(--teal)', price:339, oldPrice:479,
    features:['كتابين مخصصين','قصتين مختلفتين','خصم على الاتنين','توصيل لكل مصر'],
  },
  {
    id:'p3', icon:'🎁', name:'3 قصص', tagline:'الأكتر مبيعاً — أوفر باقة',
    popular:true, accentColor:'var(--pink)', price:479, oldPrice:679,
    features:['3 كتب مخصصة','3 قصص مختلفة','أعلى نسبة توفير','توصيل لكل مصر'],
  },
  {
    id:'premium', icon:'👑', name:'بريميوم', tagline:'هدية مناسبات لا تُنسى',
    popular:false, accentColor:'var(--orange)', price:1279, oldPrice:1799,
    features:['3 قصص + تغليف هدية فاخر','هارد كافر','غلاف مقوّى ومميز','مثالي لأعياد الميلاد','توصيل أولوية'],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24" style={{ background:'#F7F8FC' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="section-eyebrow">💰 الأسعار</div>
          <h2 className="section-title text-4xl mb-3">اختار الباقة المناسبة</h2>
          <div className="section-divider mx-auto"/>
          <p className="text-sm" style={{ color:'var(--gray-text)', fontFamily:'var(--font-body)' }}>
            كل الأسعار للكتاب المطبوع — الشحن يُحسب حسب المحافظة ✨
          </p>
        </div>

        {/* Plans */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <div
              key={plan.id}
              className="reveal relative rounded-3xl overflow-hidden"
              style={{
                animationDelay:`${i*0.1}s`,
                background:'white',
                border: plan.popular ? `2px solid var(--pink)` : '1.5px solid var(--gray-mid)',
                boxShadow: plan.popular ? '0 8px 40px rgba(255,45,122,0.18)' : '0 4px 20px rgba(0,0,0,0.05)',
              }}
            >
              {plan.popular && (
                <div className="text-center text-xs font-bold py-2 text-white" style={{ background:'var(--grad-btn)', fontFamily:'var(--font-body)' }}>
                  ⭐ الأكتر مبيعاً
                </div>
              )}

              <div className="p-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4" style={{ background:`${plan.accentColor}15`, border:`1.5px solid ${plan.accentColor}25` }}>
                  {plan.icon}
                </div>
                <h3 className="font-tajawal font-black text-xl mb-1" style={{ color:'var(--navy)' }}>{plan.name}</h3>
                <p className="text-xs mb-5" style={{ color:'var(--gray-text)', fontFamily:'var(--font-body)' }}>{plan.tagline}</p>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-5">
                  <span className="font-tajawal font-black text-3xl" style={{ color:plan.accentColor }}>{plan.price}</span>
                  <span className="text-sm font-bold" style={{ color:plan.accentColor }}>ج</span>
                  <span className="text-sm line-through" style={{ color:'var(--gray-text)', opacity:0.5, fontFamily:'var(--font-body)' }}>{plan.oldPrice} ج</span>
                </div>

                {/* Features */}
                <div className="flex flex-col gap-2 mb-5">
                  {plan.features.map(f => (
                    <div key={f} className="flex items-center gap-2 text-sm" style={{ color:'var(--gray-text)', fontFamily:'var(--font-body)' }}>
                      <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0" style={{ background:`${plan.accentColor}15`, color:plan.accentColor }}>✓</span>
                      {f}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#catalog"
                  className={plan.popular ? 'btn-primary w-full justify-center py-3' : ''}
                  style={!plan.popular ? {
                    display:'flex', alignItems:'center', justifyContent:'center',
                    background:`${plan.accentColor}15`, color:plan.accentColor,
                    fontFamily:'var(--font-body)', fontWeight:700, fontSize:'14px',
                    borderRadius:'50px', padding:'12px', border:`1.5px solid ${plan.accentColor}30`,
                    textDecoration:'none', transition:'all 0.2s',
                  } : { display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-body)' }}
                >
                  اختار قصصك ✨
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
