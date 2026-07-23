'use client'
import { stories, StoryBuyCard } from './Catalog'

/* قسم "الأكثر مبيعاً" — مجموعة قصص مختارة بكروت فيها زرار "أضف للسلة" */
const FEATURED = [4, 13, 25, 37, 51, 76, 84, 92]

export default function BestSellers() {
  const feat = FEATURED
    .map(id => stories.find(s => s.id === id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))

  return (
    <section className="py-20" style={{ background: 'linear-gradient(180deg,#FFF8EE,#F7F8FC)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 reveal">
          <div className="section-eyebrow">⭐ الأكثر مبيعاً</div>
          <h2 className="section-title text-4xl mb-3">اختار من أكتر قصصنا طلباً</h2>
          <div className="section-divider mx-auto" />
          <p className="text-sm" style={{ color: 'var(--gray-text)', fontFamily: 'var(--font-body)' }}>
            خصّصها بصورة طفلك واسمه — وأضفها للسلة ✨
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {feat.map(s => <StoryBuyCard key={s.id} story={s} />)}
        </div>

        <div className="text-center mt-10">
          <a href="#catalog" className="btn-outline">عرض جميع القصص ←</a>
        </div>
      </div>
    </section>
  )
}
