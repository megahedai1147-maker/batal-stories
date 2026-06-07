export default function HowItWorks() {
  const steps = [
    {
      num:'01', icon:'📸', color:'var(--pink)', bg:'var(--pink-soft)',
      title:'ابعتلنا المعلومات',
      desc:'اسم طفلك + صورة واضحة + عمره + اللي بيحبه (حيوانات، فضاء، رياضة...)',
    },
    {
      num:'02', icon:'✍️', color:'var(--purple)', bg:'var(--purple-soft)',
      title:'احنا بنعمل القصة',
      desc:'بنكتب قصة مخصوصة فيها طفلك هو البطل — صور  تشبهه وقصة بأسلوب جميل',
    },
    {
      num:'03', icon:'🎁', color:'var(--orange)', bg:'#FFF3EA',
      title:'بتستلم هديتك',
      desc:'PDF فوري خلال 48 ساعة أو كتاب مطبوع بيوصل على بابك خلال 3-5 أيام',
    },
  ]

  return (
    <section id="how" className="py-24" style={{ background:'white' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="section-eyebrow">⚡ العملية</div>
          <h2 className="section-title text-4xl mb-3">ازاي بنعمل قصة طفلك؟</h2>
          <div className="section-divider mx-auto"/>
          <p className="text-sm" style={{ color:'var(--gray-text)', fontFamily:'var(--font-body)' }}>
            3 خطوات بسيطة وطفلك يبقى بطل قصته الخاصة 🌟
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="reveal text-center"
              style={{ animationDelay:`${i*0.15}s` }}
            >
              {/* Number */}
              <div className="font-tajawal font-black text-5xl mb-3 opacity-10" style={{ color:step.color }}>
                {step.num}
              </div>
              {/* Icon */}
              <div
                className="w-20 h-20 rounded-3xl flex items-center justify-center text-3xl mx-auto mb-4"
                style={{ background:step.bg, border:`2px solid ${step.color}30` }}
              >
                {step.icon}
              </div>
              <h3 className="font-tajawal font-black text-xl mb-3" style={{ color:'var(--navy)' }}>
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color:'var(--gray-text)', fontFamily:'var(--font-body)' }}>
                {step.desc}
              </p>
              {/* Connector arrow */}
              {i < 2 && (
                <div className="hidden md:block absolute text-2xl" style={{ right:'-20px', top:'80px', position:'relative' }}>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Photo guidelines */}
        <div
          className="rounded-3xl p-6 md:p-8 reveal"
          style={{
            background:'linear-gradient(135deg, #FFF5F8, #FFF8EE)',
            border:'1.5px solid rgba(255,45,122,0.15)',
          }}
        >
          <h3 className="font-tajawal font-black text-lg mb-6 text-center" style={{ color:'var(--pink)' }}>
            📸 إرشادات الصورة — مهمة للنتيجة الأحسن
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="text-xs font-bold mb-3 flex items-center gap-2" style={{ color:'#E53E3E', fontFamily:'var(--font-body)' }}>
                ✗ تجنب هذه الصور
              </div>
              {['صورة مش واضحة أو ضبابية','وجه مغطى أو من الجانب','صور مع ناس كتير','إضاءة سيئة أو ظلام'].map(t => (
                <div key={t} className="flex items-center gap-2 py-2 border-b text-sm" style={{ borderColor:'rgba(229,62,62,0.1)', color:'var(--gray-text)', fontFamily:'var(--font-body)' }}>
                  <span style={{ color:'#E53E3E' }}>✗</span> {t}
                </div>
              ))}
            </div>
            <div>
              <div className="text-xs font-bold mb-3 flex items-center gap-2" style={{ color:'var(--teal)', fontFamily:'var(--font-body)' }}>
                ✓ الصورة المثالية
              </div>
              {['وجه واضح ومضيء','صورة من الأمام مباشرة','طفل لوحده في الصورة','إضاءة طبيعية وجميلة'].map(t => (
                <div key={t} className="flex items-center gap-2 py-2 border-b text-sm" style={{ borderColor:'rgba(39,211,182,0.15)', color:'var(--gray-text)', fontFamily:'var(--font-body)' }}>
                  <span style={{ color:'var(--teal)' }}>✓</span> {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
