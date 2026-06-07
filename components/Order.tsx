'use client'
import { useState } from 'react'

export default function Order() {
  const [form, setForm] = useState({ childName:'', age:'', interests:'', package:'pdf3', language:'ar', notes:'' })

  const packages = [
    { id:'pdf1',    label:'📱 PDF — قصة واحدة',  price:'80 ج'  },
    { id:'pdf3',    label:'📱 PDF — 3 قصص',       price:'199 ج', popular:true },
    { id:'pdf6',    label:'📱 PDF — 6 قصص',       price:'349 ج' },
    { id:'print',   label:'📚 مطبوع + توصيل',     price:'450 ج',  newPrice:'300 ج' },
    { id:'premium', label:'👑 Premium هدية',       price:'650 ج' },
  ]
  const pkgLabels: Record<string,string> = {
    pdf1:'PDF — قصة واحدة — 80 جنيه', pdf3:'PDF — 3 قصص — 199 جنيه',
    pdf6:'PDF — 6 قصص — 349 جنيه', print:'مطبوع + توصيل — 300 جنيه', premium:'Premium هدية — 650 جنيه',
  }
  const langLabels: Record<string,string> = { ar:'عربي', en:'إنجليزي', both:'عربي + إنجليزي' }

  const buildMessage = () => [
    '✨ طلب جديد من بطل ستوريز', '',
    `👦 اسم الطفل: ${form.childName || '—'}`,
    `🎂 العمر: ${form.age || '—'}`,
    `❤️ الاهتمامات: ${form.interests || '—'}`,
    `📦 الباقة: ${pkgLabels[form.package]}`,
    `🌐 اللغة: ${langLabels[form.language]}`,
    form.notes ? `📝 ملاحظات: ${form.notes}` : '',
  ].filter(Boolean).join('\n')

  const handleSubmit = () => {
    if (!form.childName.trim()) { alert('من فضلك اكتب اسم طفلك'); return }
    window.open(`https://wa.me/201034502000?text=${encodeURIComponent(buildMessage())}`, '_blank')
  }

  const inputBase = {
    background:'#F7F8FC', border:'1.5px solid var(--gray-mid)',
    color:'var(--navy)', fontFamily:'var(--font-body)', borderRadius:'16px',
    width:'100%', padding:'12px 16px', fontSize:'14px', outline:'none',
    transition:'all 0.2s',
  }
  const focusStyle = { borderColor:'var(--pink)', background:'white', boxShadow:'0 0 0 3px rgba(255,45,122,0.1)' }

  return (
    <section id="order" className="py-24" style={{ background:'white' }}>
      <div className="max-w-xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-10 reveal">
          <div className="section-eyebrow">📩 الطلب</div>
          <h2 className="section-title text-4xl mb-3">اطلب قصة طفلك دلوقتي</h2>
          <div className="section-divider mx-auto"/>
          <p className="text-sm" style={{ color:'var(--gray-text)', fontFamily:'var(--font-body)' }}>
            املأ البيانات وهنتواصل معك على WhatsApp فوراً ✨
          </p>
        </div>

        {/* Form card */}
        <div
          className="reveal rounded-3xl p-6 sm:p-8"
          style={{
            background:'linear-gradient(135deg,#FFF5F8,#FFF8EE)',
            border:'1.5px solid rgba(255,45,122,0.15)',
            boxShadow:'0 8px 40px rgba(255,45,122,0.1)',
          }}
        >
          <div className="flex flex-col gap-5">

            {/* Name */}
            <div>
              <label className="block text-xs font-bold mb-2" style={{ color:'var(--navy)', fontFamily:'var(--font-body)', letterSpacing:'1px' }}>اسم طفلك *</label>
              <input
                type="text" placeholder="مثال: أحمد / ياسمين / كريم"
                value={form.childName} onChange={e => setForm({...form, childName:e.target.value})}
                style={inputBase}
                onFocus={e => Object.assign(e.target.style, {...inputBase,...focusStyle})}
                onBlur={e => Object.assign(e.target.style, inputBase)}
              />
            </div>

            {/* Age */}
            <div>
              <label className="block text-xs font-bold mb-2" style={{ color:'var(--navy)', fontFamily:'var(--font-body)', letterSpacing:'1px' }}>العمر</label>
              <input
                type="text" placeholder="مثال: 5 سنين"
                value={form.age} onChange={e => setForm({...form, age:e.target.value})}
                style={inputBase}
                onFocus={e => Object.assign(e.target.style, {...inputBase,...focusStyle})}
                onBlur={e => Object.assign(e.target.style, inputBase)}
              />
            </div>

            {/* Interests */}
            <div>
              <label className="block text-xs font-bold mb-2" style={{ color:'var(--navy)', fontFamily:'var(--font-body)', letterSpacing:'1px' }}>اللي بيحبه طفلك</label>
              <input
                type="text" placeholder="مثال: حيوانات، فضاء، ديناصورات، كورة..."
                value={form.interests} onChange={e => setForm({...form, interests:e.target.value})}
                style={inputBase}
                onFocus={e => Object.assign(e.target.style, {...inputBase,...focusStyle})}
                onBlur={e => Object.assign(e.target.style, inputBase)}
              />
            </div>

            {/* Package */}
            <div>
              <label className="block text-xs font-bold mb-3" style={{ color:'var(--navy)', fontFamily:'var(--font-body)', letterSpacing:'1px' }}>الباقة</label>
              <div className="flex flex-col gap-2">
                {packages.map(p => (
                  <button
                    key={p.id} type="button"
                    onClick={() => setForm({...form, package:p.id})}
                    className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-bold transition-all duration-200"
                    style={{
                      background: form.package === p.id ? 'white' : 'rgba(255,255,255,0.6)',
                      border: form.package === p.id ? '2px solid var(--pink)' : '1.5px solid var(--gray-mid)',
                      color: form.package === p.id ? 'var(--navy)' : 'var(--gray-text)',
                      fontFamily:'var(--font-body)',
                      boxShadow: form.package === p.id ? '0 2px 12px rgba(255,45,122,0.15)' : 'none',
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center text-xs border-2 transition-all"
                        style={{
                          borderColor: form.package === p.id ? 'var(--pink)' : 'var(--gray-mid)',
                          background:  form.package === p.id ? 'var(--pink)' : 'transparent',
                          color: 'white',
                        }}
                      >
                        {form.package === p.id && '✓'}
                      </div>
                      {p.label}
                      {p.popular && (
                        <span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{ background:'var(--yellow)', color:'var(--navy)' }}>الأكتر</span>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5">
                      {(p as any).newPrice && (
                        <span style={{ color:'var(--gray-text)', fontFamily:'var(--font-body)', fontSize:'12px', textDecoration:'line-through', opacity:0.5 }}>{p.price}</span>
                      )}
                      <span style={{ color:'var(--pink)', fontFamily:'var(--font-display)', fontWeight:800 }}>
                        {(p as any).newPrice ?? p.price}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Language */}
            <div>
              <label className="block text-xs font-bold mb-3" style={{ color:'var(--navy)', fontFamily:'var(--font-body)', letterSpacing:'1px' }}>لغة القصة</label>
              <div className="flex gap-2">
                {[{id:'ar',label:'عربي 🇪🇬'},{id:'en',label:'إنجليزي 🇬🇧'},{id:'both',label:'الاتنين ⭐'}].map(l => (
                  <button
                    key={l.id} type="button"
                    onClick={() => setForm({...form, language:l.id})}
                    className="flex-1 py-3 rounded-2xl text-xs font-bold transition-all duration-200"
                    style={{
                      background: form.language === l.id ? 'var(--grad-btn)' : 'rgba(255,255,255,0.8)',
                      color:      form.language === l.id ? 'white' : 'var(--gray-text)',
                      border:     form.language === l.id ? 'none' : '1.5px solid var(--gray-mid)',
                      fontFamily: 'var(--font-body)',
                      boxShadow:  form.language === l.id ? '0 4px 14px rgba(255,45,122,0.25)' : 'none',
                    }}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-bold mb-2" style={{ color:'var(--navy)', fontFamily:'var(--font-body)', letterSpacing:'1px' }}>ملاحظات إضافية (اختياري)</label>
              <textarea
                rows={3} placeholder="أي تفاصيل إضافية — لون شعر، ملامح، موضوع مفضل..."
                value={form.notes} onChange={e => setForm({...form, notes:e.target.value})}
                style={{...inputBase, resize:'none'}}
                onFocus={e => Object.assign(e.target.style, {...inputBase,...focusStyle, resize:'none'})}
                onBlur={e => Object.assign(e.target.style, {...inputBase, resize:'none'})}
              />
            </div>

            {/* Submit */}
            <button
              type="button" onClick={handleSubmit}
              className="btn-primary w-full justify-center py-4 text-base mt-1"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM11.999 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.948-1.413A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
              </svg>
              أرسل الطلب على WhatsApp
            </button>

            <p className="text-center text-xs" style={{ color:'var(--gray-text)', fontFamily:'var(--font-body)' }}>
              هنرد عليك في أقرب وقت ونتفق على كل التفاصيل ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
