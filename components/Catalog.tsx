'use client'
import { useState } from 'react'
import Image from 'next/image'

type Category = 'قيم وأخلاق' | 'قصص إسلامية' | 'مغامرات واستكشاف' | 'أحلام وطموحات' | 'خيال وسحر'
type Gender   = 'all' | 'boy' | 'girl'

interface Story {
  id: number
  title: string
  gender: 'boy' | 'girl'
  category: Category
  emoji: string
  bg: string
  desc: string
  moral: string
}

const stories: Story[] = [
  // ══ قيم وأخلاق — ولد ══
  { id:1,  gender:'boy',  category:'قيم وأخلاق',           title:'الصدق ينجي',              emoji:'🤝', bg:'linear-gradient(135deg,#FF7A1A,#FFC72C)', desc:'طفلنا يتعلم إن الصدق حتى في أصعب المواقف هو الطريق الصح',           moral:'الصدق'          },
  { id:2,  gender:'boy',  category:'قيم وأخلاق',           title:'شجاعة المختلف',           emoji:'💪', bg:'linear-gradient(135deg,#FF2D7A,#FF7A1A)', desc:'لما يكون مختلف عن باقي أصحابه يكتشف إن اختلافه هو قوته',            moral:'الثقة بالنفس'   },
  { id:3,  gender:'boy',  category:'قيم وأخلاق',           title:'المشاركة تضاعف الفرح',   emoji:'🎁', bg:'linear-gradient(135deg,#27D3B6,#FFC72C)', desc:'يتعلم طفلنا إن مشاركة ما عنده بيضاعف السعادة لنفسه وللآخرين',      moral:'الكرم'          },
  { id:4,  gender:'boy',  category:'قيم وأخلاق',           title:'الصبر مفتاح الفرج',      emoji:'⏳', bg:'linear-gradient(135deg,#7B3FF2,#27D3B6)', desc:'رحلة طفلنا مع الصبر لحين تحقيق حلمه الكبير',                       moral:'الصبر'          },
  { id:5,  gender:'boy',  category:'قيم وأخلاق',           title:'الأمانة كنز',             emoji:'🔑', bg:'linear-gradient(135deg,#FF7A1A,#7B3FF2)', desc:'يجد طفلنا كنزاً ثميناً ويواجه اختبار الأمانة الكبير',               moral:'الأمانة'        },
  { id:6,  gender:'boy',  category:'قيم وأخلاق',           title:'احترام الكبير',           emoji:'👴', bg:'linear-gradient(135deg,#12284C,#27D3B6)', desc:'مغامرة مع جده تعلّمه قيمة التجربة وحكمة الكبار',                   moral:'الاحترام'       },
  // ══ قيم وأخلاق — بنت ══
  { id:7,  gender:'girl', category:'قيم وأخلاق',           title:'كلمة طيبة تزرع سعادة',  emoji:'🌸', bg:'linear-gradient(135deg,#FF2D7A,#FFC72C)', desc:'طفلتنا تكتشف كيف أن كلمة حلوة تغير يوم شخص بأكمله',               moral:'اللطف'          },
  { id:8,  gender:'girl', category:'قيم وأخلاق',           title:'مشاعري تهم',              emoji:'💛', bg:'linear-gradient(135deg,#FFC72C,#FF7A1A)', desc:'تتعلم طفلتنا التعبير عن مشاعرها والتعامل مع الآخرين بتعاطف',       moral:'التعاطف'        },
  { id:9,  gender:'girl', category:'قيم وأخلاق',           title:'الحق يُقال',              emoji:'⚖️', bg:'linear-gradient(135deg,#7B3FF2,#FF2D7A)', desc:'موقف صعب يختبر شجاعة طفلتنا في قول الحق أمام الجميع',              moral:'العدل'          },
  { id:10, gender:'girl', category:'قيم وأخلاق',           title:'صديقتي المختلفة',         emoji:'🤗', bg:'linear-gradient(135deg,#27D3B6,#7B3FF2)', desc:'تتعرف على صديقة جديدة مختلفة وتتعلم قبول الاختلاف وتقديره',        moral:'القبول'         },
  { id:11, gender:'girl', category:'قيم وأخلاق',           title:'الوعد أمانة',             emoji:'🌟', bg:'linear-gradient(135deg,#FF7A1A,#FFC72C)', desc:'طفلتنا تتعلم أن الوعد أمانة يجب الوفاء بها مهما كان الثمن',        moral:'الوفاء'         },
  { id:12, gender:'girl', category:'قيم وأخلاق',           title:'ترتيب الأولويات',         emoji:'📋', bg:'linear-gradient(135deg,#FF2D7A,#27D3B6)', desc:'تتعلم طفلتنا كيف تحدد أهم الأشياء وتنظم وقتها بشكل صحيح',          moral:'المسؤولية'      },
  // ══ قصص إسلامية — ولد ══
  { id:13, gender:'boy',  category:'قصص إسلامية',          title:'رفيق رمضان',              emoji:'🌙', bg:'linear-gradient(135deg,#12284C,#7B3FF2)', desc:'في رمضان المبارك يسافر طفلنا في رحلة روحانية مليئة بالتعلم',        moral:'الإيمان'        },
  { id:14, gender:'boy',  category:'قصص إسلامية',          title:'الدعاء يصل السماء',       emoji:'🤲', bg:'linear-gradient(135deg,#27D3B6,#12284C)', desc:'طفلنا يتعلم قوة الدعاء الصادق ويشهد معجزة الاستجابة',               moral:'التوكل على الله'},
  { id:15, gender:'boy',  category:'قصص إسلامية',          title:'صحابة صغار',              emoji:'📿', bg:'linear-gradient(135deg,#7B3FF2,#FF7A1A)', desc:'مغامرة خيالية مع أبطال من صحابة النبي ﷺ وتعلم قيمهم',              moral:'حب النبي ﷺ'    },
  { id:16, gender:'boy',  category:'قصص إسلامية',          title:'الجنة حلمي',              emoji:'🌿', bg:'linear-gradient(135deg,#27D3B6,#FFC72C)', desc:'يتخيل طفلنا الجنة ويتعلم الأعمال الصالحة التي تقربه منها',          moral:'العمل الصالح'  },
  { id:17, gender:'boy',  category:'قصص إسلامية',          title:'بر الوالدين',             emoji:'❤️', bg:'linear-gradient(135deg,#FF2D7A,#FF7A1A)', desc:'قصة جميلة عن بر الوالدين وكيف يفرح الله والملائكة بذلك',            moral:'بر الوالدين'   },
  { id:18, gender:'boy',  category:'قصص إسلامية',          title:'حافظ القرآن الصغير',     emoji:'📖', bg:'linear-gradient(135deg,#12284C,#27D3B6)', desc:'رحلة طفلنا مع حفظ القرآن الكريم وما يشعر به من نور وسعادة',         moral:'حفظ القرآن'    },
  // ══ قصص إسلامية — بنت ══
  { id:19, gender:'girl', category:'قصص إسلامية',          title:'فرحة العيد',              emoji:'🎊', bg:'linear-gradient(135deg,#FF2D7A,#FFC72C)', desc:'طفلتنا تستعد للعيد بفرح وتعلم معنى الشكر والعطاء',                 moral:'الشكر'          },
  { id:20, gender:'girl', category:'قصص إسلامية',          title:'أمي جنتي',                emoji:'🌺', bg:'linear-gradient(135deg,#FF7A1A,#FF2D7A)', desc:'قصة مؤثرة عن حب الأم وبركة رضاها في حياة طفلتنا',                  moral:'بر الوالدين'   },
  { id:21, gender:'girl', category:'قصص إسلامية',          title:'ملاك الصدقة',             emoji:'💝', bg:'linear-gradient(135deg,#27D3B6,#FF2D7A)', desc:'طفلتنا تكتشف كيف تتضاعف الصدقة وتعود بالخير على صاحبها',           moral:'الصدقة'         },
  { id:22, gender:'girl', category:'قصص إسلامية',          title:'حجابي تاجي',              emoji:'👑', bg:'linear-gradient(135deg,#7B3FF2,#FF2D7A)', desc:'قصة جميلة تجعل طفلتنا فخورة بحجابها ومعتزة بدينها',                moral:'العزة بالإيمان'},
  { id:23, gender:'girl', category:'قصص إسلامية',          title:'صلاتي نوري',              emoji:'✨', bg:'linear-gradient(135deg,#FFC72C,#27D3B6)', desc:'تتعلم طفلتنا أهمية الصلاة وكيف تنير حياتها وقلبها',                 moral:'الصلاة'         },
  { id:24, gender:'girl', category:'قصص إسلامية',          title:'مريم البطلة',             emoji:'🌙', bg:'linear-gradient(135deg,#12284C,#7B3FF2)', desc:'مستوحاة من سيدة نساء العالمين — قصة صبر وإيمان وقوة',               moral:'الإيمان والصبر'},
  // ══ مغامرات واستكشاف — ولد ══
  { id:25, gender:'boy',  category:'مغامرات واستكشاف',    title:'قبطان الغابة',            emoji:'🌿', bg:'linear-gradient(135deg,#27D3B6,#12284C)', desc:'طفلنا يقود مجموعته في غابة سحرية مليئة بالألغاز والمفاجآت',        moral:'القيادة'        },
  { id:26, gender:'boy',  category:'مغامرات واستكشاف',    title:'رحالة الصحراء',           emoji:'🏜️', bg:'linear-gradient(135deg,#FF7A1A,#FFC72C)', desc:'مغامرة ملحمية في الصحراء بحثاً عن كنز الأجداد المخفي',              moral:'الإصرار'        },
  { id:27, gender:'boy',  category:'مغامرات واستكشاف',    title:'بطل الأعماق',             emoji:'🌊', bg:'linear-gradient(135deg,#12284C,#27D3B6)', desc:'في أعماق البحر يكتشف طفلنا عالماً خفياً لم يره أحد من قبل',         moral:'الاستكشاف'      },
  { id:28, gender:'boy',  category:'مغامرات واستكشاف',    title:'رائد الجبال',             emoji:'🏔️', bg:'linear-gradient(135deg,#7B3FF2,#27D3B6)', desc:'يتسلق طفلنا أعلى جبل ويكتشف أن القمة تستحق كل التعب',              moral:'العزيمة'        },
  { id:29, gender:'boy',  category:'مغامرات واستكشاف',    title:'مستكشف الكواكب',          emoji:'🪐', bg:'linear-gradient(135deg,#12284C,#7B3FF2)', desc:'رحلة فضائية خيالية لاكتشاف كواكب جديدة وحضارات مجهولة',             moral:'الفضول العلمي' },
  { id:30, gender:'boy',  category:'مغامرات واستكشاف',    title:'محقق الأسرار',            emoji:'🔍', bg:'linear-gradient(135deg,#FF7A1A,#7B3FF2)', desc:'يحل طفلنا لغزاً غامضاً يحير الجميع بذكاء وملاحظة حادة',             moral:'الذكاء والمنطق'},
  // ══ مغامرات واستكشاف — بنت ══
  { id:31, gender:'girl', category:'مغامرات واستكشاف',    title:'مستكشفة الغابة السرية',  emoji:'🦋', bg:'linear-gradient(135deg,#27D3B6,#FF2D7A)', desc:'طفلتنا تدخل غابة سرية وتتوصل لاكتشاف علمي مذهل',                  moral:'حب العلم'       },
  { id:32, gender:'girl', category:'مغامرات واستكشاف',    title:'قائدة البحر',             emoji:'⚓', bg:'linear-gradient(135deg,#FF2D7A,#12284C)', desc:'تقود طفلتنا سفينة في بحر متلاطم وتنجح في إنقاذ الجميع',             moral:'القيادة والشجاعة'},
  { id:33, gender:'girl', category:'مغامرات واستكشاف',    title:'رحلة إلى المجهول',        emoji:'🗺️', bg:'linear-gradient(135deg,#FFC72C,#27D3B6)', desc:'خريطة غامضة تقود طفلتنا في مغامرة لم تتخيلها في حياتها',            moral:'الجرأة'         },
  { id:34, gender:'girl', category:'مغامرات واستكشاف',    title:'الفلكية الصغيرة',         emoji:'🔭', bg:'linear-gradient(135deg,#12284C,#FF2D7A)', desc:'طفلتنا تكتشف نجماً جديداً وتثبت للعالم موهبتها العلمية',             moral:'الطموح العلمي' },
  { id:35, gender:'girl', category:'مغامرات واستكشاف',    title:'محققة الأحياء',           emoji:'🦎', bg:'linear-gradient(135deg,#27D3B6,#FFC72C)', desc:'رحلة في عالم الحيوانات لإنقاذ مخلوق نادر مهدد بالانقراض',          moral:'المحافظة على البيئة'},
  { id:36, gender:'girl', category:'مغامرات واستكشاف',    title:'بطلة الجبال',             emoji:'🏕️', bg:'linear-gradient(135deg,#7B3FF2,#FF7A1A)', desc:'تتسلق طفلتنا أشق القمم لتثبت أن البنات يستطعن كل شيء',              moral:'الإصرار والثقة'},
  // ══ أحلام وطموحات — ولد ══
  { id:37, gender:'boy',  category:'أحلام وطموحات',       title:'الطبيب الصغير',           emoji:'👨‍⚕️', bg:'linear-gradient(135deg,#27D3B6,#12284C)', desc:'حلم طفلنا بأن يصبح طبيباً يداوي الناس يبدأ بخطوة صغيرة',           moral:'الطموح'         },
  { id:38, gender:'boy',  category:'أحلام وطموحات',       title:'المهندس الصغير',          emoji:'🏗️', bg:'linear-gradient(135deg,#FF7A1A,#12284C)', desc:'طفلنا يبني برجاً خيالياً يلمس السحاب في مدينة المستقبل',             moral:'الإبداع والبناء'},
  { id:39, gender:'boy',  category:'أحلام وطموحات',       title:'بطل الملعب',              emoji:'⚽', bg:'linear-gradient(135deg,#27D3B6,#FF7A1A)', desc:'يحقق طفلنا حلمه في الملعب بعد تدريب ومثابرة لا تتوقف',              moral:'المثابرة'       },
  { id:40, gender:'boy',  category:'أحلام وطموحات',       title:'المخترع العبقري',         emoji:'💡', bg:'linear-gradient(135deg,#FFC72C,#7B3FF2)', desc:'فكرة صغيرة في رأس طفلنا تتحول لاختراع يغير العالم',                 moral:'الإبداع'        },
  { id:41, gender:'boy',  category:'أحلام وطموحات',       title:'قائد الغد',               emoji:'🎖️', bg:'linear-gradient(135deg,#7B3FF2,#12284C)', desc:'طفلنا يحلم بقيادة بلده يوماً وينمو ليكون مستعداً لذلك',             moral:'القيادة'        },
  { id:42, gender:'boy',  category:'أحلام وطموحات',       title:'رسام الكون',              emoji:'🎨', bg:'linear-gradient(135deg,#FF2D7A,#7B3FF2)', desc:'موهبة الرسم عند طفلنا تحوّل أحلامه إلى لوحات تحكي قصصاً',          moral:'الموهبة'        },
  // ══ أحلام وطموحات — بنت ══
  { id:43, gender:'girl', category:'أحلام وطموحات',       title:'الطبيبة الصغيرة',         emoji:'👩‍⚕️', bg:'linear-gradient(135deg,#FF2D7A,#27D3B6)', desc:'طفلتنا تحلم بإنقاذ الأرواح وتبدأ رحلتها الطبية من الصغر',          moral:'التضحية'        },
  { id:44, gender:'girl', category:'أحلام وطموحات',       title:'المعلمة المحبوبة',        emoji:'📚', bg:'linear-gradient(135deg,#FFC72C,#FF2D7A)', desc:'طفلتنا تحلم بتعليم كل أطفال العالم وتبدأ بفصلها الخاص',             moral:'العلم والتعليم'},
  { id:45, gender:'girl', category:'أحلام وطموحات',       title:'مصممة الأزياء',           emoji:'👗', bg:'linear-gradient(135deg,#7B3FF2,#FF2D7A)', desc:'إبداع طفلتنا يتحول إلى أزياء تبهر العالم وتحكي قصصاً',              moral:'الإبداع'        },
  { id:46, gender:'girl', category:'أحلام وطموحات',       title:'صانعة السينما',           emoji:'🎬', bg:'linear-gradient(135deg,#FF7A1A,#7B3FF2)', desc:'طفلتنا تحكي قصتها للعالم عبر الصورة والموسيقى والفن',               moral:'التعبير الإبداعي'},
  { id:47, gender:'girl', category:'أحلام وطموحات',       title:'العالِمة الصغيرة',        emoji:'🔬', bg:'linear-gradient(135deg,#27D3B6,#7B3FF2)', desc:'طفلتنا تكتشف علاجاً لمرض يؤلم كثيراً من حولها',                    moral:'العلم للإنسان' },
  { id:48, gender:'girl', category:'أحلام وطموحات',       title:'موسيقية القلوب',          emoji:'🎵', bg:'linear-gradient(135deg,#FF2D7A,#FFC72C)', desc:'موسيقى طفلتنا تداوي القلوب الحزينة وتجمع الناس بعضهم ببعض',        moral:'فن التعبير'     },
  // ══ خيال وسحر — ولد ══
  { id:49, gender:'boy',  category:'خيال وسحر',           title:'ساحر الكلمات',            emoji:'📜', bg:'linear-gradient(135deg,#7B3FF2,#FF2D7A)', desc:'يكتشف طفلنا أن الكلمات لها قوة سحرية تغير الواقع',                  moral:'قوة الكلمة'    },
  { id:50, gender:'boy',  category:'خيال وسحر',           title:'حارس المملكة السحرية',    emoji:'🏰', bg:'linear-gradient(135deg,#12284C,#FF2D7A)', desc:'طفلنا يُختار ليكون حارساً لمملكة سحرية مهددة بالظلام',              moral:'الشجاعة'        },
  { id:51, gender:'boy',  category:'خيال وسحر',           title:'التنين الصديق',           emoji:'🐉', bg:'linear-gradient(135deg,#7B3FF2,#27D3B6)', desc:'يصادق طفلنا تنيناً خجولاً ليثبت أن المظهر لا يعبر عن الجوهر',      moral:'عدم الحكم بالمظهر'},
  { id:52, gender:'boy',  category:'خيال وسحر',           title:'مملكة تحت البحر',         emoji:'🧜', bg:'linear-gradient(135deg,#27D3B6,#7B3FF2)', desc:'طفلنا يغوص ليجد مملكة سحرية تحت الأمواج تنتظره',                   moral:'الاستكشاف'      },
  { id:53, gender:'boy',  category:'خيال وسحر',           title:'المدينة الطائرة',         emoji:'☁️', bg:'linear-gradient(135deg,#FFC72C,#7B3FF2)', desc:'طفلنا يكتشف مدينة فوق الغيوم بقواعدها ومدنيتها الخاصة',            moral:'الخيال'         },
  { id:54, gender:'boy',  category:'خيال وسحر',           title:'آلة الزمن',               emoji:'⏰', bg:'linear-gradient(135deg,#FF7A1A,#12284C)', desc:'يسافر طفلنا عبر الزمن ويتعلم من التاريخ ليبني مستقبلاً أفضل',      moral:'تعلم من الماضي'},
  // ══ خيال وسحر — بنت ══
  { id:55, gender:'girl', category:'خيال وسحر',           title:'ساحرة النور',             emoji:'🌟', bg:'linear-gradient(135deg,#FF2D7A,#FFC72C)', desc:'طفلتنا تمتلك قوة النور وتستخدمها لمحو الظلام من العالم',            moral:'الخير يغلب الشر'},
  { id:56, gender:'girl', category:'خيال وسحر',           title:'حديقة السحر',             emoji:'🌈', bg:'linear-gradient(135deg,#27D3B6,#FF2D7A)', desc:'طفلتنا تكتشف حديقة سحرية تنمو كلما نثرت فيها الكلمات الجميلة',    moral:'الإيجابية'      },
  { id:57, gender:'girl', category:'خيال وسحر',           title:'فراشة الأحلام',           emoji:'🦋', bg:'linear-gradient(135deg,#7B3FF2,#FFC72C)', desc:'في عالم الأحلام تلتقي طفلتنا بكل أصدقاء الخيال',                   moral:'الخيال نعمة'   },
  { id:58, gender:'girl', category:'خيال وسحر',           title:'ملكة الأمواج',            emoji:'🌊', bg:'linear-gradient(135deg,#27D3B6,#12284C)', desc:'طفلتنا ترث قدرة التحكم في البحر وتستخدمها لمساعدة الناس',           moral:'القوة بالخير'  },
  { id:59, gender:'girl', category:'خيال وسحر',           title:'بنت الغيوم',              emoji:'☁️', bg:'linear-gradient(135deg,#FFC72C,#FF2D7A)', desc:'طفلتنا ترسم على الغيوم لوحات تُفرح كل من ينظر إليها',               moral:'الجمال'         },
  { id:60, gender:'girl', category:'خيال وسحر',           title:'أميرة القصص',             emoji:'📖', bg:'linear-gradient(135deg,#FF2D7A,#7B3FF2)', desc:'كل قصة تقرأها طفلتنا تتحول إلى واقع سحري تعيشه بنفسها',            moral:'قوة القراءة'   },
]

const categories: Category[] = ['قيم وأخلاق','قصص إسلامية','مغامرات واستكشاف','أحلام وطموحات','خيال وسحر']

const catMeta: Record<Category,{icon:string;color:string;bg:string}> = {
  'قيم وأخلاق':        {icon:'🤝',color:'var(--orange)', bg:'#FFF3EA'},
  'قصص إسلامية':       {icon:'🌙',color:'var(--teal)',   bg:'var(--teal-soft)'},
  'مغامرات واستكشاف': {icon:'🗺️',color:'var(--purple)', bg:'var(--purple-soft)'},
  'أحلام وطموحات':     {icon:'⭐',color:'#D4A000',       bg:'var(--yellow-soft)'},
  'خيال وسحر':         {icon:'✨',color:'var(--pink)',   bg:'var(--pink-soft)'},
}

const genders = [{label:'الكل',value:'all'},{label:'👦 ولد',value:'boy'},{label:'👧 بنت',value:'girl'}]

/* ── Smart cover: shows real image if exists, falls back to gradient placeholder ── */
function StoryCover({ story, hasImage }: { story: Story; hasImage: boolean }) {
  if (hasImage) {
    return (
      <div
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio: '3 / 4',
          background: 'linear-gradient(135deg, #f5f5f5, #e8e8e8)',
        }}
      >
        <Image
          src={`/stories/story-${story.id}.png`}
          alt={story.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          style={{
            objectFit: 'contain',
            objectPosition: 'center center',
          }}
        />
        {/* strong gradient at bottom for text */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.05) 70%, transparent 100%)',
          }}
        />
        {/* gender badge — top right */}
        <div
          className="absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full"
          style={{
            background: 'rgba(0,0,0,0.45)',
            color: 'white',
            fontFamily: 'var(--font-body)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.2)',
          }}
        >
          {story.gender === 'boy' ? '👦 ولد' : '👧 بنت'}
        </div>
        {/* title + moral — bottom */}
        <div className="absolute bottom-0 right-0 left-0 p-4">
          <div
            className="font-tajawal font-black text-lg text-white leading-tight mb-2"
            style={{
              textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 1px 2px rgba(0,0,0,0.9)',
              letterSpacing: '0.3px',
            }}
          >
            {story.title}
          </div>
          <div
            className="text-xs px-3 py-1.5 rounded-full inline-block font-bold"
            style={{
              background: 'rgba(255,255,255,0.18)',
              color: 'rgba(255,255,255,0.95)',
              fontFamily: 'var(--font-body)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.3)',
              textShadow: '0 1px 3px rgba(0,0,0,0.5)',
            }}
          >
            {story.moral}
          </div>
        </div>
      </div>
    )
  }

  /* ── Placeholder cover ── */
  return (
    <div className="relative w-full flex flex-col items-center justify-center overflow-hidden"
      style={{ aspectRatio: '3 / 4', background: story.bg }}>
      {/* shine */}
      <div className="absolute inset-0 opacity-20"
        style={{background:'radial-gradient(circle at 25% 25%, white, transparent 55%)'}}/>

      {/* strong bottom gradient */}
      <div
        className="absolute inset-0"
        style={{ background:'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 50%, transparent 75%)' }}
      />

      {/* Book shape SVG */}
      <div className="relative z-10 mb-1">
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6"  y="14" width="28" height="44" rx="4" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
          <rect x="38" y="14" width="28" height="44" rx="4" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
          <rect x="33" y="14" width="6" height="44" rx="2" fill="rgba(255,255,255,0.35)"/>
          <rect x="12" y="26" width="16" height="2.5" rx="1.25" fill="rgba(255,255,255,0.5)"/>
          <rect x="12" y="32" width="12" height="2.5" rx="1.25" fill="rgba(255,255,255,0.35)"/>
          <rect x="12" y="38" width="14" height="2.5" rx="1.25" fill="rgba(255,255,255,0.35)"/>
          <rect x="12" y="44" width="10" height="2.5" rx="1.25" fill="rgba(255,255,255,0.25)"/>
          <circle cx="52" cy="36" r="14" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
          <text x="52" y="42" textAnchor="middle" fontSize="16">{story.emoji}</text>
        </svg>
      </div>

      {/* gender badge */}
      <div className="absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded-full"
        style={{background:'rgba(0,0,0,0.35)',color:'white',fontFamily:'var(--font-body)',backdropFilter:'blur(6px)',border:'1px solid rgba(255,255,255,0.2)'}}>
        {story.gender==='boy'?'👦 ولد':'👧 بنت'}
      </div>

      {/* title + moral at bottom */}
      <div className="absolute bottom-0 right-0 left-0 p-3 z-10">
        <div
          className="font-tajawal font-black text-base text-white leading-tight mb-1.5"
          style={{ textShadow:'0 2px 8px rgba(0,0,0,0.9), 0 1px 2px rgba(0,0,0,1)' }}
        >
          {story.title}
        </div>
        <div className="flex items-center gap-2">
          <span
            className="text-xs px-2.5 py-1 rounded-full font-bold inline-block"
            style={{background:'rgba(255,255,255,0.18)',color:'white',fontFamily:'var(--font-body)',backdropFilter:'blur(6px)',border:'1px solid rgba(255,255,255,0.3)'}}>
            {story.moral}
          </span>
          <span
            className="text-xs px-2 py-1 rounded-full"
            style={{background:'rgba(0,0,0,0.25)',color:'rgba(255,255,255,0.7)',fontFamily:'var(--font-body)'}}>
            🖼️ قريباً
          </span>
        </div>
      </div>
    </div>
  )
}

/* ── Story Card ── */
function StoryCard({ story, isActive, onToggle }: {
  story: Story
  isActive: boolean
  onToggle: () => void
}) {
  // Try to detect if image exists — always false on first render,
  // real images override placeholder automatically via Image component
  // We use a simple naming convention: /stories/story-{id}.png
  // If image 404s, Next.js Image will show nothing — so we default to placeholder
  // and let users add images to public/stories/ to override
  // true = يعرض الصورة من public/stories/story-{id}.png
  // false = يعرض الـ placeholder الملون
  const hasImage = true

  return (
    <div
      className="card cursor-pointer"
      onClick={onToggle}
    >
      <StoryCover story={story} hasImage={hasImage} />

      <div className="p-4">
        <p className="text-xs leading-relaxed" style={{color:'var(--gray-text)',fontFamily:'var(--font-body)'}}>
          {story.desc}
        </p>

        {isActive && (
          <div className="mt-3 pt-3 border-t" style={{borderColor:'var(--gray-mid)'}}>
            <p className="text-xs mb-3" style={{color:'var(--gray-text)',fontFamily:'var(--font-body)'}}>
              البطل في هذه القصة سيكون{' '}
              <strong style={{color:'var(--pink)'}}>طفلك</strong> هو! 🌟
            </p>
            <a
              href={`https://wa.me/201034502000?text=${encodeURIComponent(`أريد طلب قصة "${story.title}" من قسم "${story.category}" لطفلي`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs px-4 py-2 w-full justify-center"
              onClick={e => e.stopPropagation()}
            >
              اطلب هذه القصة ✨
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

/* ══════════════════════════════
   MAIN CATALOG COMPONENT
══════════════════════════════ */
export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState<Category>('قيم وأخلاق')
  const [gender, setGender]                 = useState<Gender>('all')
  const [activeStory,   setActiveStory]     = useState<number|null>(null)

  const filtered = stories.filter(s =>
    s.category === activeCategory &&
    (gender === 'all' || s.gender === gender)
  )

  const meta = catMeta[activeCategory]

  return (
    <section id="catalog" className="py-24" style={{background:'#F7F8FC'}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-eyebrow">📚 كتالوج القصص</div>
          <h2 className="section-title text-4xl mb-3">اختار قصة طفلك</h2>
          <div className="section-divider mx-auto"/>
          <p className="text-sm max-w-md mx-auto" style={{color:'var(--gray-text)',fontFamily:'var(--font-body)'}}>
            60 قصة مخصصة في 5 أقسام — كل قصة فيها طفلك هو البطل بالاسم 🌟
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map(cat => {
            const m = catMeta[cat]
            const active = activeCategory === cat
            return (
              <button key={cat}
                onClick={() => { setActiveCategory(cat); setActiveStory(null) }}
                className="flex items-center gap-2 px-4 py-3 rounded-2xl text-sm font-bold transition-all duration-200"
                style={{
                  background: active ? m.color    : 'white',
                  color:      active ? 'white'    : m.color,
                  border:     active ? 'none'     : `2px solid ${m.color}30`,
                  boxShadow:  active ? `0 6px 20px ${m.color}40` : '0 2px 8px rgba(0,0,0,0.05)',
                  transform:  active ? 'translateY(-2px)' : 'none',
                  fontFamily: 'var(--font-body)',
                }}>
                <span>{m.icon}</span>
                <span>{cat}</span>
              </button>
            )
          })}
        </div>

        {/* Gender filter */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-1 p-1.5 rounded-2xl"
            style={{background:'white',border:'1.5px solid var(--gray-mid)',boxShadow:'0 2px 10px rgba(0,0,0,0.05)'}}>
            {genders.map(f => (
              <button key={f.value}
                onClick={() => { setGender(f.value as Gender); setActiveStory(null) }}
                className="px-5 py-2 rounded-xl text-sm font-bold transition-all duration-200"
                style={{
                  background: gender===f.value ? 'var(--grad-btn)' : 'transparent',
                  color:      gender===f.value ? 'white'           : 'var(--gray-text)',
                  fontFamily: 'var(--font-body)',
                  boxShadow:  gender===f.value ? '0 4px 12px rgba(255,45,122,0.25)' : 'none',
                }}>
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category strip */}
        <div className="flex items-center gap-3 mb-6 px-5 py-4 rounded-2xl"
          style={{background:meta.bg, border:`1.5px solid ${meta.color}25`}}>
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
            style={{background:`${meta.color}20`}}>
            {meta.icon}
          </div>
          <div>
            <div className="font-tajawal font-black text-lg" style={{color:'var(--navy)'}}>{activeCategory}</div>
            <div className="text-xs" style={{color:meta.color,fontFamily:'var(--font-body)'}}>
              {filtered.length} قصة{gender!=='all'?(gender==='boy'?' — للأولاد':' — للبنات'):' — للجميع'}
            </div>
          </div>
          <div className="mr-auto flex gap-2">
            {(['boy','girl'] as const).map(g => {
              const cnt = stories.filter(s => s.category===activeCategory && s.gender===g).length
              return (
                <div key={g} className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold"
                  style={{background:'white',color:'var(--navy)',fontFamily:'var(--font-body)'}}>
                  {g==='boy'?'👦':'👧'} {cnt}
                </div>
              )
            })}
          </div>

        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((story) => (
            <div key={story.id}>
              <StoryCard
                story={story}
                isActive={activeStory===story.id}
                onToggle={() => setActiveStory(activeStory===story.id ? null : story.id)}
              />
            </div>
          ))}
        </div>

        {filtered.length===0 && (
          <div className="text-center py-16">
            <div className="text-4xl mb-3">🔍</div>
            <p style={{color:'var(--gray-text)',fontFamily:'var(--font-body)'}}>جرّب فلتر تاني</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-sm mb-4" style={{color:'var(--gray-text)',fontFamily:'var(--font-body)'}}>
            مش لاقي القصة المناسبة؟ نكتبلك واحدة من الصفر!
          </p>
          <a href="https://wa.me/201034502000?text=عايز قصة مخصصة بالكامل لطفلي"
            target="_blank" rel="noopener noreferrer" className="btn-primary">
            اطلب قصة مخصصة من الصفر ✨
          </a>
        </div>

      </div>
    </section>
  )
}
