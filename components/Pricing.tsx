'use client'

const plans = [
  {
    id:'pdf', icon:'📱', name:'نسخة PDF', tagline:'أسرع وأوفر — تستلمها فوراً',
    popular:false, accentColor:'var(--purple)',
    tiers:[
      { label:'قصة واحدة',   price:80,  note:'' },
      { label:'3 قصص',       price:199, note:'⭐ الأكتر مبيعاً', highlight:true },
      { label:'6 قصص',       price:349, note:'وفّر 32%' },
    ],
    features:['تسليم خلال 48 ساعة','PDF عالي الجودة','قابل للطباعة في أي مكان','بالعربي أو الإنجليزي'],
  },
  {
    id:'print', icon:'📚', name:'كتاب مطبوع', tagline:'كتاب حقيقي يوصلك على بابك',
    popular:true, accentColor:'var(--pink)',
    tiers:[
      { label:'كتاب مطبوع فاخر', price:300, oldPrice:450, note:'شامل التوصيل', highlight:true },
    ],
    features:['طباعة ألوان فاخرة','توصيل لكل مصر','12 صفحة ','التسليم 3-5 أيام','هدية للاحتفاظ بيها'],
  },
  {
    id:'premium', icon:'👑', name:'باقة Premium', tagline:'هدية مناسبات لا تُنسى',
    popular:false, accentColor:'var(--orange)',
    tiers:[
      { label:'كتاب + تغليف هدية', price:650, note:'الأعلى قيمة وشامل التوصيل', highlight:true },
    ],
    features:['كل مميزات المطبوع','تغليف هدية فاخر','هارد كافر','3 قصص (60 صفحة)','مثالي للمناسبات (هدايا واعياد ميلاد)','توصيل أولوية'],
  },
]

export default function Pricing() {


  return (
    <section id="pricing" className="py-24" style={{ background:'#F7F8FC' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="section-eyebrow">💰 الأسعار</div>
          <h2 className="section-title text-4xl mb-3">اختار الباقة المناسبة</h2>
          <div className="section-divider mx-auto"/>
          <p className="text-sm" style={{ color:'var(--gray-text)', fontFamily:'var(--font-body)' }}>
            3 باقات تناسب كل ميزانية — والجودة واحدة في الكل ✨
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
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
              {/* Popular ribbon */}
              {plan.popular && (
                <div className="text-center text-xs font-bold py-2 text-white" style={{ background:'var(--grad-btn)', fontFamily:'var(--font-body)' }}>
                  ⭐ الأكتر قيمة
                </div>
              )}

              <div className={`p-6 ${plan.popular ? '' : ''}`}>
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4"
                  style={{ background:`${plan.accentColor}15`, border:`1.5px solid ${plan.accentColor}25` }}
                >
                  {plan.icon}
                </div>
                <h3 className="font-tajawal font-black text-xl mb-1" style={{ color:'var(--navy)' }}>{plan.name}</h3>
                <p className="text-xs mb-5" style={{ color:'var(--gray-text)', fontFamily:'var(--font-body)' }}>{plan.tagline}</p>

                {/* Tiers */}
                <div className="flex flex-col gap-2 mb-5">
                  {plan.tiers.map(t => (
                    <div
                      key={t.label}
                      className="flex items-center justify-between rounded-2xl px-3 py-3"
                      style={{
                        background: t.highlight ? `${plan.accentColor}10` : '#F7F8FC',
                        border:     t.highlight ? `1.5px solid ${plan.accentColor}30` : '1.5px solid transparent',
                      }}
                    >
                      <div>
                        <div className="text-sm font-bold" style={{ color:'var(--navy)', fontFamily:'var(--font-body)' }}>{t.label}</div>
                        {t.note && <div className="text-xs" style={{ color:plan.accentColor, fontFamily:'var(--font-body)' }}>{t.note}</div>}
                      </div>
                      <div className="flex items-center gap-2">
                        {(t as any).oldPrice && (
                          <div
                            className="text-sm line-through"
                            style={{ color:'var(--gray-text)', fontFamily:'var(--font-body)', opacity:0.5 }}
                          >
                            {(t as any).oldPrice} ج
                          </div>
                        )}
                        <div className="font-tajawal font-black text-xl" style={{ color:plan.accentColor }}>{t.price} ج</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="flex flex-col gap-2 mb-5">
                  {plan.features.map(f => (
                    <div key={f} className="flex items-center gap-2 text-sm" style={{ color:'var(--gray-text)', fontFamily:'var(--font-body)' }}>
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0"
                        style={{ background:`${plan.accentColor}15`, color:plan.accentColor }}
                      >✓</span>
                      {f}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={`https://wa.me/201034502000?text=${encodeURIComponent(`أريد الاستفسار عن ${plan.name}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={plan.popular ? 'btn-primary w-full justify-center py-3' : ''}
                  style={!plan.popular ? {
                    display:'flex', alignItems:'center', justifyContent:'center',
                    background:`${plan.accentColor}15`, color:plan.accentColor,
                    fontFamily:'var(--font-body)', fontWeight:700, fontSize:'14px',
                    borderRadius:'50px', padding:'12px', border:`1.5px solid ${plan.accentColor}30`,
                    textDecoration:'none', transition:'all 0.2s',
                  } : { display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-body)' }}
                >
                  اطلب دلوقتي ✨
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
