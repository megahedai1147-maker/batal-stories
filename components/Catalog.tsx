'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useCart } from './CartContext'

type Category = 'قيم وأخلاق' | 'قصص إسلامية' | 'مغامرات واستكشاف' | 'أحلام وطموحات' | 'خيال وسحر' | 'آداب عامة' | 'أبطال' | 'أميرات'
type Gender   = 'all' | 'boy' | 'girl'

export interface Story {
  id: number
  title: string
  gender: 'boy' | 'girl'
  category: Category
  emoji: string
  bg: string
  desc: string
  moral: string
  hasImage: boolean
}

export const stories: Story[] = [
  // ══ قيم وأخلاق — ولد ══
  { id:1,  gender:'boy',  category:'قيم وأخلاق',           title:'الصدق ينجي',              emoji:'🤝', bg:'linear-gradient(135deg,#FF7A1A,#FFC72C)', desc:'طفلنا يتعلم إن الصدق حتى في أصعب المواقف هو الطريق الصح',           moral:'الصدق'          , hasImage:true },
  { id:2,  gender:'boy',  category:'قيم وأخلاق',           title:'شجاعة المختلف',           emoji:'💪', bg:'linear-gradient(135deg,#FF2D7A,#FF7A1A)', desc:'لما يكون مختلف عن باقي أصحابه يكتشف إن اختلافه هو قوته',            moral:'الثقة بالنفس'   , hasImage:true },
  { id:3,  gender:'boy',  category:'قيم وأخلاق',           title:'المشاركة تضاعف الفرح',   emoji:'🎁', bg:'linear-gradient(135deg,#27D3B6,#FFC72C)', desc:'يتعلم طفلنا إن مشاركة ما عنده بيضاعف السعادة لنفسه وللآخرين',      moral:'الكرم'          , hasImage:true },
  { id:4,  gender:'boy',  category:'قيم وأخلاق',           title:'الصبر مفتاح الفرج',      emoji:'⏳', bg:'linear-gradient(135deg,#7B3FF2,#27D3B6)', desc:'رحلة طفلنا مع الصبر لحين تحقيق حلمه الكبير',                       moral:'الصبر'          , hasImage:true },
  { id:5,  gender:'boy',  category:'قيم وأخلاق',           title:'الأمانة كنز',             emoji:'🔑', bg:'linear-gradient(135deg,#FF7A1A,#7B3FF2)', desc:'يجد طفلنا كنزاً ثميناً ويواجه اختبار الأمانة الكبير',               moral:'الأمانة'        , hasImage:true },
  { id:6,  gender:'boy',  category:'قيم وأخلاق',           title:'احترام الكبير',           emoji:'👴', bg:'linear-gradient(135deg,#12284C,#27D3B6)', desc:'مغامرة مع جده تعلّمه قيمة التجربة وحكمة الكبار',                   moral:'الاحترام'       , hasImage:true },
  // ══ قيم وأخلاق — بنت ══
  { id:7,  gender:'girl', category:'قيم وأخلاق',           title:'كلمة طيبة تزرع سعادة',  emoji:'🌸', bg:'linear-gradient(135deg,#FF2D7A,#FFC72C)', desc:'طفلتنا تكتشف كيف أن كلمة حلوة تغير يوم شخص بأكمله',               moral:'اللطف'          , hasImage:true },
  { id:8,  gender:'girl', category:'قيم وأخلاق',           title:'مشاعري تهم',              emoji:'💛', bg:'linear-gradient(135deg,#FFC72C,#FF7A1A)', desc:'تتعلم طفلتنا التعبير عن مشاعرها والتعامل مع الآخرين بتعاطف',       moral:'التعاطف'        , hasImage:true },
  { id:9,  gender:'girl', category:'قيم وأخلاق',           title:'الحق يُقال',              emoji:'⚖️', bg:'linear-gradient(135deg,#7B3FF2,#FF2D7A)', desc:'موقف صعب يختبر شجاعة طفلتنا في قول الحق أمام الجميع',              moral:'العدل'          , hasImage:true },
  { id:10, gender:'girl', category:'قيم وأخلاق',           title:'صديقتي المختلفة',         emoji:'🤗', bg:'linear-gradient(135deg,#27D3B6,#7B3FF2)', desc:'تتعرف على صديقة جديدة مختلفة وتتعلم قبول الاختلاف وتقديره',        moral:'القبول'         , hasImage:true },
  { id:11, gender:'girl', category:'قيم وأخلاق',           title:'الوعد أمانة',             emoji:'🌟', bg:'linear-gradient(135deg,#FF7A1A,#FFC72C)', desc:'طفلتنا تتعلم أن الوعد أمانة يجب الوفاء بها مهما كان الثمن',        moral:'الوفاء'         , hasImage:true },
  { id:12, gender:'girl', category:'قيم وأخلاق',           title:'ترتيب الأولويات',         emoji:'📋', bg:'linear-gradient(135deg,#FF2D7A,#27D3B6)', desc:'تتعلم طفلتنا كيف تحدد أهم الأشياء وتنظم وقتها بشكل صحيح',          moral:'المسؤولية'      , hasImage:true },
  // ══ قصص إسلامية — ولد ══
  { id:13, gender:'boy',  category:'قصص إسلامية',          title:'رفيق رمضان',              emoji:'🌙', bg:'linear-gradient(135deg,#12284C,#7B3FF2)', desc:'في رمضان المبارك يسافر طفلنا في رحلة روحانية مليئة بالتعلم',        moral:'الإيمان'        , hasImage:true },
  { id:14, gender:'boy',  category:'قصص إسلامية',          title:'الدعاء يصل السماء',       emoji:'🤲', bg:'linear-gradient(135deg,#27D3B6,#12284C)', desc:'طفلنا يتعلم قوة الدعاء الصادق ويشهد معجزة الاستجابة',               moral:'التوكل على الله', hasImage:true },
  { id:15, gender:'boy',  category:'قصص إسلامية',          title:'صحابة صغار',              emoji:'📿', bg:'linear-gradient(135deg,#7B3FF2,#FF7A1A)', desc:'مغامرة خيالية مع أبطال من صحابة النبي ﷺ وتعلم قيمهم',              moral:'حب النبي ﷺ'    , hasImage:true },
  { id:16, gender:'boy',  category:'قصص إسلامية',          title:'الجنة حلمي',              emoji:'🌿', bg:'linear-gradient(135deg,#27D3B6,#FFC72C)', desc:'يتخيل طفلنا الجنة ويتعلم الأعمال الصالحة التي تقربه منها',          moral:'العمل الصالح'  , hasImage:true },
  { id:17, gender:'boy',  category:'قصص إسلامية',          title:'بر الوالدين',             emoji:'❤️', bg:'linear-gradient(135deg,#FF2D7A,#FF7A1A)', desc:'قصة جميلة عن بر الوالدين وكيف يفرح الله والملائكة بذلك',            moral:'بر الوالدين'   , hasImage:true },
  { id:18, gender:'boy',  category:'قصص إسلامية',          title:'حافظ القرآن الصغير',     emoji:'📖', bg:'linear-gradient(135deg,#12284C,#27D3B6)', desc:'رحلة طفلنا مع حفظ القرآن الكريم وما يشعر به من نور وسعادة',         moral:'حفظ القرآن'    , hasImage:true },
  // ══ قصص إسلامية — بنت ══
  { id:19, gender:'girl', category:'قصص إسلامية',          title:'فرحة العيد',              emoji:'🎊', bg:'linear-gradient(135deg,#FF2D7A,#FFC72C)', desc:'طفلتنا تستعد للعيد بفرح وتعلم معنى الشكر والعطاء',                 moral:'الشكر'          , hasImage:true },
  { id:20, gender:'girl', category:'قصص إسلامية',          title:'أمي جنتي',                emoji:'🌺', bg:'linear-gradient(135deg,#FF7A1A,#FF2D7A)', desc:'قصة مؤثرة عن حب الأم وبركة رضاها في حياة طفلتنا',                  moral:'بر الوالدين'   , hasImage:true },
  { id:21, gender:'girl', category:'قصص إسلامية',          title:'ملاك الصدقة',             emoji:'💝', bg:'linear-gradient(135deg,#27D3B6,#FF2D7A)', desc:'طفلتنا تكتشف كيف تتضاعف الصدقة وتعود بالخير على صاحبها',           moral:'الصدقة'         , hasImage:true },
  { id:22, gender:'girl', category:'قصص إسلامية',          title:'حجابي تاجي',              emoji:'👑', bg:'linear-gradient(135deg,#7B3FF2,#FF2D7A)', desc:'قصة جميلة تجعل طفلتنا فخورة بحجابها ومعتزة بدينها',                moral:'العزة بالإيمان', hasImage:true },
  { id:23, gender:'girl', category:'قصص إسلامية',          title:'صلاتي نوري',              emoji:'✨', bg:'linear-gradient(135deg,#FFC72C,#27D3B6)', desc:'تتعلم طفلتنا أهمية الصلاة وكيف تنير حياتها وقلبها',                 moral:'الصلاة'         , hasImage:true },
  { id:24, gender:'girl', category:'قصص إسلامية',          title:'مريم البطلة',             emoji:'🌙', bg:'linear-gradient(135deg,#12284C,#7B3FF2)', desc:'مستوحاة من سيدة نساء العالمين — قصة صبر وإيمان وقوة',               moral:'الإيمان والصبر', hasImage:true },
  // ══ مغامرات واستكشاف — ولد ══
  { id:25, gender:'boy',  category:'مغامرات واستكشاف',    title:'قبطان الغابة',            emoji:'🌿', bg:'linear-gradient(135deg,#27D3B6,#12284C)', desc:'طفلنا يقود مجموعته في غابة سحرية مليئة بالألغاز والمفاجآت',        moral:'القيادة'        , hasImage:true },
  { id:26, gender:'boy',  category:'مغامرات واستكشاف',    title:'رحالة الصحراء',           emoji:'🏜️', bg:'linear-gradient(135deg,#FF7A1A,#FFC72C)', desc:'مغامرة ملحمية في الصحراء بحثاً عن كنز الأجداد المخفي',              moral:'الإصرار'        , hasImage:true },
  { id:27, gender:'boy',  category:'مغامرات واستكشاف',    title:'بطل الأعماق',             emoji:'🌊', bg:'linear-gradient(135deg,#12284C,#27D3B6)', desc:'في أعماق البحر يكتشف طفلنا عالماً خفياً لم يره أحد من قبل',         moral:'الاستكشاف'      , hasImage:true },
  { id:28, gender:'boy',  category:'مغامرات واستكشاف',    title:'رائد الجبال',             emoji:'🏔️', bg:'linear-gradient(135deg,#7B3FF2,#27D3B6)', desc:'يتسلق طفلنا أعلى جبل ويكتشف أن القمة تستحق كل التعب',              moral:'العزيمة'        , hasImage:true },
  { id:29, gender:'boy',  category:'مغامرات واستكشاف',    title:'مستكشف الكواكب',          emoji:'🪐', bg:'linear-gradient(135deg,#12284C,#7B3FF2)', desc:'رحلة فضائية خيالية لاكتشاف كواكب جديدة وحضارات مجهولة',             moral:'الفضول العلمي' , hasImage:true },
  { id:30, gender:'boy',  category:'مغامرات واستكشاف',    title:'محقق الأسرار',            emoji:'🔍', bg:'linear-gradient(135deg,#FF7A1A,#7B3FF2)', desc:'يحل طفلنا لغزاً غامضاً يحير الجميع بذكاء وملاحظة حادة',             moral:'الذكاء والمنطق', hasImage:true },
  // ══ مغامرات واستكشاف — بنت ══
  { id:31, gender:'girl', category:'مغامرات واستكشاف',    title:'مستكشفة الغابة السرية',  emoji:'🦋', bg:'linear-gradient(135deg,#27D3B6,#FF2D7A)', desc:'طفلتنا تدخل غابة سرية وتتوصل لاكتشاف علمي مذهل',                  moral:'حب العلم'       , hasImage:true },
  { id:32, gender:'girl', category:'مغامرات واستكشاف',    title:'قائدة البحر',             emoji:'⚓', bg:'linear-gradient(135deg,#FF2D7A,#12284C)', desc:'تقود طفلتنا سفينة في بحر متلاطم وتنجح في إنقاذ الجميع',             moral:'القيادة والشجاعة', hasImage:true },
  { id:33, gender:'girl', category:'مغامرات واستكشاف',    title:'رحلة إلى المجهول',        emoji:'🗺️', bg:'linear-gradient(135deg,#FFC72C,#27D3B6)', desc:'خريطة غامضة تقود طفلتنا في مغامرة لم تتخيلها في حياتها',            moral:'الجرأة'         , hasImage:true },
  { id:34, gender:'girl', category:'مغامرات واستكشاف',    title:'الفلكية الصغيرة',         emoji:'🔭', bg:'linear-gradient(135deg,#12284C,#FF2D7A)', desc:'طفلتنا تكتشف نجماً جديداً وتثبت للعالم موهبتها العلمية',             moral:'الطموح العلمي' , hasImage:true },
  { id:35, gender:'girl', category:'مغامرات واستكشاف',    title:'محققة الأحياء',           emoji:'🦎', bg:'linear-gradient(135deg,#27D3B6,#FFC72C)', desc:'رحلة في عالم الحيوانات لإنقاذ مخلوق نادر مهدد بالانقراض',          moral:'المحافظة على البيئة', hasImage:true },
  { id:36, gender:'girl', category:'مغامرات واستكشاف',    title:'بطلة الجبال',             emoji:'🏕️', bg:'linear-gradient(135deg,#7B3FF2,#FF7A1A)', desc:'تتسلق طفلتنا أشق القمم لتثبت أن البنات يستطعن كل شيء',              moral:'الإصرار والثقة', hasImage:true },
  // ══ أحلام وطموحات — ولد ══
  { id:37, gender:'boy',  category:'أحلام وطموحات',       title:'الطبيب الصغير',           emoji:'👨‍⚕️', bg:'linear-gradient(135deg,#27D3B6,#12284C)', desc:'حلم طفلنا بأن يصبح طبيباً يداوي الناس يبدأ بخطوة صغيرة',           moral:'الطموح'         , hasImage:true },
  { id:38, gender:'boy',  category:'أحلام وطموحات',       title:'المهندس الصغير',          emoji:'🏗️', bg:'linear-gradient(135deg,#FF7A1A,#12284C)', desc:'طفلنا يبني برجاً خيالياً يلمس السحاب في مدينة المستقبل',             moral:'الإبداع والبناء', hasImage:true },
  { id:39, gender:'boy',  category:'أحلام وطموحات',       title:'بطل الملعب',              emoji:'⚽', bg:'linear-gradient(135deg,#27D3B6,#FF7A1A)', desc:'يحقق طفلنا حلمه في الملعب بعد تدريب ومثابرة لا تتوقف',              moral:'المثابرة'       , hasImage:true },
  { id:40, gender:'boy',  category:'أحلام وطموحات',       title:'المخترع العبقري',         emoji:'💡', bg:'linear-gradient(135deg,#FFC72C,#7B3FF2)', desc:'فكرة صغيرة في رأس طفلنا تتحول لاختراع يغير العالم',                 moral:'الإبداع'        , hasImage:true },
  { id:41, gender:'boy',  category:'أحلام وطموحات',       title:'قائد الغد',               emoji:'🎖️', bg:'linear-gradient(135deg,#7B3FF2,#12284C)', desc:'طفلنا يحلم بقيادة بلده يوماً وينمو ليكون مستعداً لذلك',             moral:'القيادة'        , hasImage:true },
  { id:42, gender:'boy',  category:'أحلام وطموحات',       title:'رسام الكون',              emoji:'🎨', bg:'linear-gradient(135deg,#FF2D7A,#7B3FF2)', desc:'موهبة الرسم عند طفلنا تحوّل أحلامه إلى لوحات تحكي قصصاً',          moral:'الموهبة'        , hasImage:true },
  // ══ أحلام وطموحات — بنت ══
  { id:43, gender:'girl', category:'أحلام وطموحات',       title:'الطبيبة الصغيرة',         emoji:'👩‍⚕️', bg:'linear-gradient(135deg,#FF2D7A,#27D3B6)', desc:'طفلتنا تحلم بإنقاذ الأرواح وتبدأ رحلتها الطبية من الصغر',          moral:'التضحية'        , hasImage:true },
  { id:44, gender:'girl', category:'أحلام وطموحات',       title:'المعلمة المحبوبة',        emoji:'📚', bg:'linear-gradient(135deg,#FFC72C,#FF2D7A)', desc:'طفلتنا تحلم بتعليم كل أطفال العالم وتبدأ بفصلها الخاص',             moral:'العلم والتعليم', hasImage:true },
  { id:45, gender:'girl', category:'أحلام وطموحات',       title:'مصممة الأزياء',           emoji:'👗', bg:'linear-gradient(135deg,#7B3FF2,#FF2D7A)', desc:'إبداع طفلتنا يتحول إلى أزياء تبهر العالم وتحكي قصصاً',              moral:'الإبداع'        , hasImage:true },
  { id:46, gender:'girl', category:'أحلام وطموحات',       title:'صانعة السينما',           emoji:'🎬', bg:'linear-gradient(135deg,#FF7A1A,#7B3FF2)', desc:'طفلتنا تحكي قصتها للعالم عبر الصورة والموسيقى والفن',               moral:'التعبير الإبداعي', hasImage:true },
  { id:47, gender:'girl', category:'أحلام وطموحات',       title:'العالِمة الصغيرة',        emoji:'🔬', bg:'linear-gradient(135deg,#27D3B6,#7B3FF2)', desc:'طفلتنا تكتشف علاجاً لمرض يؤلم كثيراً من حولها',                    moral:'العلم للإنسان' , hasImage:true },
  { id:48, gender:'girl', category:'أحلام وطموحات',       title:'موسيقية القلوب',          emoji:'🎵', bg:'linear-gradient(135deg,#FF2D7A,#FFC72C)', desc:'موسيقى طفلتنا تداوي القلوب الحزينة وتجمع الناس بعضهم ببعض',        moral:'فن التعبير'     , hasImage:true },
  // ══ خيال وسحر — ولد ══
  { id:49, gender:'boy',  category:'خيال وسحر',           title:'ساحر الكلمات',            emoji:'📜', bg:'linear-gradient(135deg,#7B3FF2,#FF2D7A)', desc:'يكتشف طفلنا أن الكلمات لها قوة سحرية تغير الواقع',                  moral:'قوة الكلمة'    , hasImage:true },
  { id:50, gender:'boy',  category:'خيال وسحر',           title:'حارس المملكة السحرية',    emoji:'🏰', bg:'linear-gradient(135deg,#12284C,#FF2D7A)', desc:'طفلنا يُختار ليكون حارساً لمملكة سحرية مهددة بالظلام',              moral:'الشجاعة'        , hasImage:true },
  { id:51, gender:'boy',  category:'خيال وسحر',           title:'التنين الصديق',           emoji:'🐉', bg:'linear-gradient(135deg,#7B3FF2,#27D3B6)', desc:'يصادق طفلنا تنيناً خجولاً ليثبت أن المظهر لا يعبر عن الجوهر',      moral:'عدم الحكم بالمظهر', hasImage:true },
  { id:52, gender:'boy',  category:'خيال وسحر',           title:'مملكة تحت البحر',         emoji:'🧜', bg:'linear-gradient(135deg,#27D3B6,#7B3FF2)', desc:'طفلنا يغوص ليجد مملكة سحرية تحت الأمواج تنتظره',                   moral:'الاستكشاف'      , hasImage:true },
  { id:53, gender:'boy',  category:'خيال وسحر',           title:'المدينة الطائرة',         emoji:'☁️', bg:'linear-gradient(135deg,#FFC72C,#7B3FF2)', desc:'طفلنا يكتشف مدينة فوق الغيوم بقواعدها ومدنيتها الخاصة',            moral:'الخيال'         , hasImage:true },
  { id:54, gender:'boy',  category:'خيال وسحر',           title:'آلة الزمن',               emoji:'⏰', bg:'linear-gradient(135deg,#FF7A1A,#12284C)', desc:'يسافر طفلنا عبر الزمن ويتعلم من التاريخ ليبني مستقبلاً أفضل',      moral:'تعلم من الماضي', hasImage:true },
  // ══ خيال وسحر — بنت ══
  { id:55, gender:'girl', category:'خيال وسحر',           title:'ساحرة النور',             emoji:'🌟', bg:'linear-gradient(135deg,#FF2D7A,#FFC72C)', desc:'طفلتنا تمتلك قوة النور وتستخدمها لمحو الظلام من العالم',            moral:'الخير يغلب الشر', hasImage:true },
  { id:56, gender:'girl', category:'خيال وسحر',           title:'حديقة السحر',             emoji:'🌈', bg:'linear-gradient(135deg,#27D3B6,#FF2D7A)', desc:'طفلتنا تكتشف حديقة سحرية تنمو كلما نثرت فيها الكلمات الجميلة',    moral:'الإيجابية'      , hasImage:true },
  { id:57, gender:'girl', category:'خيال وسحر',           title:'فراشة الأحلام',           emoji:'🦋', bg:'linear-gradient(135deg,#7B3FF2,#FFC72C)', desc:'في عالم الأحلام تلتقي طفلتنا بكل أصدقاء الخيال',                   moral:'الخيال نعمة'   , hasImage:true },
  { id:58, gender:'girl', category:'خيال وسحر',           title:'ملكة الأمواج',            emoji:'🌊', bg:'linear-gradient(135deg,#27D3B6,#12284C)', desc:'طفلتنا ترث قدرة التحكم في البحر وتستخدمها لمساعدة الناس',           moral:'القوة بالخير'  , hasImage:true },
  { id:59, gender:'girl', category:'خيال وسحر',           title:'بنت الغيوم',              emoji:'☁️', bg:'linear-gradient(135deg,#FFC72C,#FF2D7A)', desc:'طفلتنا ترسم على الغيوم لوحات تُفرح كل من ينظر إليها',               moral:'الجمال'         , hasImage:true },
  { id:60, gender:'girl', category:'خيال وسحر',           title:'أميرة القصص',             emoji:'📖', bg:'linear-gradient(135deg,#FF2D7A,#7B3FF2)', desc:'كل قصة تقرأها طفلتنا تتحول إلى واقع سحري تعيشه بنفسها',            moral:'قوة القراءة'   , hasImage:true },
  // ══ آداب عامة ══
  { id:61, gender:'boy', category:'آداب عامة', title:'بطل الطابور', emoji:'🚶', bg:'linear-gradient(135deg,#12284C,#1E3A6E)', desc:'طفلنا يتعلم قيمة الانتظار في الطابور باحترام وصبر مع أصدقائه', moral:'النظام والصبر', hasImage:true },
  { id:62, gender:'girl', category:'آداب عامة', title:'الكلمة الطيبة', emoji:'💬', bg:'linear-gradient(135deg,#1E3A6E,#27D3B6)', desc:'طفلتنا تكتشف كيف كلمة طيبة واحدة ممكن تغير يوم حد كامل', moral:'اللطف', hasImage:true },
  { id:63, gender:'boy', category:'آداب عامة', title:'شكرًا... تصنع السعادة', emoji:'🙏', bg:'linear-gradient(135deg,#12284C,#FFC72C)', desc:'طفلنا يتعلم إن كلمة شكرًا الصغيرة بتنشر سعادة كبيرة حواليه', moral:'الامتنان', hasImage:true },
  { id:64, gender:'girl', category:'آداب عامة', title:'أستأذن أولًا', emoji:'🤲', bg:'linear-gradient(135deg,#1E3A6E,#7B3FF2)', desc:'طفلتنا تتعلم أدب الاستئذان قبل أخذ أي حاجة من حد', moral:'الاحترام', hasImage:true },
  { id:65, gender:'boy', category:'آداب عامة', title:'البطل الذي يساعد الجميع', emoji:'🤝', bg:'linear-gradient(135deg,#12284C,#27D3B6)', desc:'طفلنا يكتشف إن مساعدة الآخرين بتخليه بطل حقيقي في عيون الجميع', moral:'التعاون', hasImage:true },
  { id:66, gender:'boy', category:'آداب عامة', title:'بطل الحديقة النظيفة', emoji:'🌳', bg:'linear-gradient(135deg,#27D3B6,#12284C)', desc:'طفلنا يقود حملة للحفاظ على نظافة الحديقة ويصبح قدوة لأصحابه', moral:'حب البيئة', hasImage:true },
  { id:67, gender:'girl', category:'آداب عامة', title:'الفصل النظيف', emoji:'🧹', bg:'linear-gradient(135deg,#1E3A6E,#FFC72C)', desc:'طفلتنا تتعلم أهمية النظام والنظافة في فصلها مع زميلاتها', moral:'النظام', hasImage:true },
  { id:68, gender:'girl', category:'آداب عامة', title:'لا للتنمر... نعم للصداقة', emoji:'🚫', bg:'linear-gradient(135deg,#12284C,#FF2D7A)', desc:'طفلتنا تقف في وجه التنمر وتنشر روح الصداقة بين زميلاتها', moral:'رفض التنمر', hasImage:true },
  { id:69, gender:'boy', category:'آداب عامة', title:'آداب تناول الطعام', emoji:'🍽️', bg:'linear-gradient(135deg,#1E3A6E,#FF7A1A)', desc:'طفلنا يتعلم آداب المائدة الصحيحة ويطبقها بفخر أمام أسرته', moral:'آداب الطعام', hasImage:true },
  { id:70, gender:'boy', category:'آداب عامة', title:'السلام بداية الصداقة', emoji:'👋', bg:'linear-gradient(135deg,#12284C,#27D3B6)', desc:'طفلنا يكتشف إن كلمة السلام هي أول خطوة لصداقة جميلة', moral:'حسن الاستقبال', hasImage:true },
  { id:71, gender:'girl', category:'آداب عامة', title:'غرفتي مسؤوليتي', emoji:'🛏️', bg:'linear-gradient(135deg,#1E3A6E,#FF2D7A)', desc:'طفلتنا تتحمل مسؤولية ترتيب غرفتها وتفخر بنظامها الجديد', moral:'المسؤولية', hasImage:true },
  { id:72, gender:'boy', category:'آداب عامة', title:'الاستئذان قبل الدخول', emoji:'🚪', bg:'linear-gradient(135deg,#12284C,#7B3FF2)', desc:'طفلنا يتعلم أدب طرق الباب والاستئذان قبل دخول أي غرفة', moral:'الاحترام', hasImage:true },
  { id:73, gender:'girl', category:'آداب عامة', title:'أحافظ على أدواتي', emoji:'🎒', bg:'linear-gradient(135deg,#1E3A6E,#FFC72C)', desc:'طفلتنا تتعلم قيمة المحافظة على أدواتها وألعابها بحرص', moral:'المحافظة على الممتلكات', hasImage:true },
  { id:74, gender:'boy', category:'آداب عامة', title:'أساعد زملائي', emoji:'🧑‍🤝‍🧑', bg:'linear-gradient(135deg,#12284C,#27D3B6)', desc:'طفلنا يمد يد العون لزميله في الفصل ويكتشف فرحة العطاء', moral:'التعاون', hasImage:true },
  { id:75, gender:'girl', category:'آداب عامة', title:'كلمة سحرية اسمها من فضلك', emoji:'✨', bg:'linear-gradient(135deg,#1E3A6E,#FF2D7A)', desc:'طفلتنا تكتشف السحر الحقيقي في كلمة من فضلك مع كل طلب', moral:'حسن الطلب', hasImage:true },
  // ══ أبطال ══
  { id:76, gender:'boy', category:'أبطال', title:'البطل الخارق الشجاع', emoji:'🦸', bg:'linear-gradient(135deg,#E4572E,#FF7A1A)', desc:'طفلنا يكتشف بطولته الحقيقية في موقف يحتاج شجاعة نادرة', moral:'الشجاعة', hasImage:true },
  { id:77, gender:'boy', category:'أبطال', title:'قوة القلب الطيب', emoji:'💖', bg:'linear-gradient(135deg,#E4572E,#FF2D7A)', desc:'طفلنا يتعلم إن أقوى سلاح هو القلب الطيب مش القوة', moral:'الطيبة قوة', hasImage:true },
  { id:78, gender:'boy', category:'أبطال', title:'بطل لا يستسلم', emoji:'🏆', bg:'linear-gradient(135deg,#E4572E,#FFC72C)', desc:'طفلنا يواجه تحدي صعب ويتعلم إن الأبطال الحقيقيين ما بيستسلموش', moral:'المثابرة', hasImage:true },
  { id:79, gender:'boy', category:'أبطال', title:'درع الشجاعة', emoji:'🛡️', bg:'linear-gradient(135deg,#E4572E,#12284C)', desc:'طفلنا يحمل درع الشجاعة ليحمي من حوله في مغامرة مثيرة', moral:'الشجاعة', hasImage:true },
  { id:80, gender:'boy', category:'أبطال', title:'مهمة إنقاذ المدينة', emoji:'🏙️', bg:'linear-gradient(135deg,#E4572E,#7B3FF2)', desc:'طفلنا في مهمة خطيرة لإنقاذ مدينته بالذكاء والشجاعة', moral:'التضحية', hasImage:true },
  { id:81, gender:'boy', category:'أبطال', title:'البطل الذي هزم الخوف', emoji:'😤', bg:'linear-gradient(135deg,#E4572E,#27D3B6)', desc:'طفلنا يواجه أكبر مخاوفه ويكتشف إنه أقوى مما يتخيل', moral:'مواجهة الخوف', hasImage:true },
  { id:82, gender:'boy', category:'أبطال', title:'قوة الإرادة الخارقة', emoji:'⚡', bg:'linear-gradient(135deg,#E4572E,#FFC72C)', desc:'طفلنا يحقق المستحيل بإرادته القوية وإصراره على النجاح', moral:'قوة الإرادة', hasImage:true },
  { id:83, gender:'boy', category:'أبطال', title:'البطل الصغير في مواجهة التنمر', emoji:'🦸‍♂️', bg:'linear-gradient(135deg,#E4572E,#FF2D7A)', desc:'طفلنا يقف بشجاعة في وجه التنمر ويدافع عن نفسه وأصحابه', moral:'الشجاعة في الدفاع عن النفس', hasImage:true },
  // ══ أميرات ══
  { id:84, gender:'girl', category:'أميرات', title:'أميرة الأحلام', emoji:'👑', bg:'linear-gradient(135deg,#D6336C,#7B3FF2)', desc:'طفلتنا أميرة تسافر في عالم الأحلام لتحقق أمنيتها الغالية', moral:'تحقيق الأحلام', hasImage:true },
  { id:85, gender:'girl', category:'أميرات', title:'أميرة اليونيكورن', emoji:'🦄', bg:'linear-gradient(135deg,#D6336C,#27D3B6)', desc:'طفلتنا تصادق يونيكورن سحري في مغامرة مليئة بالألوان والسحر', moral:'الخيال', hasImage:true },
  { id:86, gender:'girl', category:'أميرات', title:'أميرة الفراشات', emoji:'🦋', bg:'linear-gradient(135deg,#D6336C,#FFC72C)', desc:'طفلتنا أميرة تحكم مملكة الفراشات الملونة بقلب طيب وحنون', moral:'الجمال الداخلي', hasImage:true },
  { id:87, gender:'girl', category:'أميرات', title:'أميرة الزهور', emoji:'🌸', bg:'linear-gradient(135deg,#D6336C,#FF7A1A)', desc:'طفلتنا أميرة تنشر الجمال في مملكتها بحديقة ورد سحرية', moral:'العطاء', hasImage:true },
  { id:88, gender:'girl', category:'أميرات', title:'أميرة القمر', emoji:'🌙', bg:'linear-gradient(135deg,#D6336C,#12284C)', desc:'طفلتنا أميرة تحرس نور القمر وتضيء الليل لكل الأطفال', moral:'الحلم', hasImage:true },
  { id:89, gender:'girl', category:'أميرات', title:'أميرة النجوم', emoji:'⭐', bg:'linear-gradient(135deg,#D6336C,#FFC72C)', desc:'طفلتنا أميرة تجمع النجوم المتناثرة وتعيدها لسماء مملكتها', moral:'الطموح', hasImage:true },
  { id:90, gender:'girl', category:'أميرات', title:'أميرة الكريستال', emoji:'💎', bg:'linear-gradient(135deg,#D6336C,#27D3B6)', desc:'طفلتنا أميرة تحمي قصر الكريستال الساحر من قوى الظلام', moral:'النقاء', hasImage:true },
  { id:91, gender:'girl', category:'أميرات', title:'الأميرة والقلعة السرية', emoji:'🏰', bg:'linear-gradient(135deg,#D6336C,#12284C)', desc:'طفلتنا أميرة تكتشف قلعة سرية مخبأة تحمل أسرار مملكتها', moral:'الشجاعة والاكتشاف', hasImage:true },
  { id:92, gender:'girl', category:'أميرات', title:'أميرة البحر', emoji:'🧜‍♀️', bg:'linear-gradient(135deg,#D6336C,#27D3B6)', desc:'طفلتنا أميرة تحكم مملكة تحت الأمواج وتنقذ أصدقاءها البحريين', moral:'الشجاعة', hasImage:true },
  { id:93, gender:'girl', category:'أميرات', title:'أميرة مدينة الأحلام', emoji:'🌆', bg:'linear-gradient(135deg,#D6336C,#FF7A1A)', desc:'طفلتنا أميرة تبني مدينة أحلامها بالخيال والإبداع والحب', moral:'الأمل والإبداع', hasImage:true },
  { id:94, gender:'girl', category:'أميرات', title:'مدينة الأحلام الوردية', emoji:'🌷', bg:'linear-gradient(135deg,#D6336C,#FF2D7A)', desc:'طفلتنا أميرة تنشر الفرح والتفاؤل في مدينتها الوردية الساحرة', moral:'التفاؤل', hasImage:true },
]

const categories: Category[] = ['قيم وأخلاق','قصص إسلامية','مغامرات واستكشاف','أحلام وطموحات','خيال وسحر','آداب عامة','أبطال','أميرات']

const catMeta: Record<Category,{icon:string;color:string;bg:string}> = {
  'قيم وأخلاق':        {icon:'🤝',color:'var(--orange)', bg:'#FFF3EA'},
  'قصص إسلامية':       {icon:'🌙',color:'var(--teal)',   bg:'var(--teal-soft)'},
  'مغامرات واستكشاف': {icon:'🗺️',color:'var(--purple)', bg:'var(--purple-soft)'},
  'أحلام وطموحات':     {icon:'⭐',color:'#D4A000',       bg:'var(--yellow-soft)'},
  'خيال وسحر':         {icon:'✨',color:'var(--pink)',   bg:'var(--pink-soft)'},
  'آداب عامة':          {icon:'🎓',color:'#12284C',       bg:'#EAF0F7'},
  'أبطال':              {icon:'🦸',color:'#E4572E',       bg:'#FDEEE9'},
  'أميرات':             {icon:'👑',color:'#D6336C',       bg:'#FDEEF3'},
}

const genders = [{label:'الكل',value:'all'},{label:'👦 ولد',value:'boy'},{label:'👧 بنت',value:'girl'}]

/* ── Smart cover: shows real image if exists, falls back to gradient placeholder ── */
function StoryCover({ story, hasImage }: { story: Story; hasImage: boolean }) {
  if (hasImage) {
    return (
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '3 / 4', background: 'linear-gradient(135deg, #f5f5f5, #e8e8e8)' }}>
        <Image
          src={`/stories/story-${story.id}.png`}
          alt={story.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          style={{ objectFit: 'contain', objectPosition: 'center center' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.05) 70%, transparent 100%)' }} />
        <div className="absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full"
          style={{ background: 'rgba(0,0,0,0.45)', color: 'white', fontFamily: 'var(--font-body)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)' }}>
          {story.gender === 'boy' ? '👦 ولد' : '👧 بنت'}
        </div>
        <div className="absolute bottom-0 right-0 left-0 p-4">
          <div className="font-tajawal font-black text-lg text-white leading-tight mb-2" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 1px 2px rgba(0,0,0,0.9)', letterSpacing: '0.3px' }}>
            {story.title}
          </div>
          <div className="text-xs px-3 py-1.5 rounded-full inline-block font-bold"
            style={{ background: 'rgba(255,255,255,0.18)', color: 'rgba(255,255,255,0.95)', fontFamily: 'var(--font-body)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.3)', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
            {story.moral}
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="relative w-full flex flex-col items-center justify-center overflow-hidden" style={{ aspectRatio: '3 / 4', background: story.bg }}>
      <div className="absolute inset-0 opacity-20" style={{background:'radial-gradient(circle at 25% 25%, white, transparent 55%)'}}/>
      <div className="absolute inset-0" style={{ background:'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 50%, transparent 75%)' }} />
      <div className="relative z-10 mb-1 text-5xl">{story.emoji}</div>
      <div className="absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded-full"
        style={{background:'rgba(0,0,0,0.35)',color:'white',fontFamily:'var(--font-body)',backdropFilter:'blur(6px)',border:'1px solid rgba(255,255,255,0.2)'}}>
        {story.gender==='boy'?'👦 ولد':'👧 بنت'}
      </div>
      <div className="absolute bottom-0 right-0 left-0 p-3 z-10">
        <div className="font-tajawal font-black text-base text-white leading-tight mb-1.5" style={{ textShadow:'0 2px 8px rgba(0,0,0,0.9), 0 1px 2px rgba(0,0,0,1)' }}>
          {story.title}
        </div>
        <span className="text-xs px-2.5 py-1 rounded-full font-bold inline-block"
          style={{background:'rgba(255,255,255,0.18)',color:'white',fontFamily:'var(--font-body)',backdropFilter:'blur(6px)',border:'1px solid rgba(255,255,255,0.3)'}}>
          {story.moral}
        </span>
      </div>
    </div>
  )
}

/* ── كارت القصة مع زرار "أضف للسلة" ── */
export function StoryBuyCard({ story }: { story: Story }) {
  const { add, remove, has } = useCart()
  const inCart = has(story.id)
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
      <StoryCover story={story} hasImage={story.hasImage} />
      <div className="p-4" style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
        <p className="text-xs leading-relaxed" style={{ color: 'var(--gray-text)', fontFamily: 'var(--font-body)', flex: 1 }}>
          {story.desc}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-tajawal font-black text-lg" style={{ color: 'var(--pink)' }}>179 <span style={{ fontSize: '11px' }}>ج</span></span>
            <span style={{ fontSize: '12px', textDecoration: 'line-through', color: 'var(--gray-text)', opacity: 0.5, fontFamily: 'var(--font-body)' }}>229 ج</span>
          </div>
          <span style={{ fontSize: '10px', fontWeight: 800, padding: '2px 8px', borderRadius: '99px', background: 'var(--pink-soft)', color: 'var(--pink)', fontFamily: 'var(--font-body)' }}>خصم 22%</span>
        </div>
        <button
          onClick={() => (inCart ? remove(story.id) : add({ id: story.id, title: story.title, gender: story.gender, category: story.category }))}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
            padding: '11px', borderRadius: '14px', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '14px',
            border: 'none', cursor: 'pointer', transition: 'all .2s', color: 'white',
            background: inCart ? 'var(--teal)' : 'var(--grad-btn)',
          }}
        >
          {inCart ? '✓ في السلة' : '➕ أضف للسلة'}
        </button>
      </div>
    </div>
  )
}

/* ══════════════════════════════ MAIN CATALOG ══════════════════════════════ */
export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState<Category>('قيم وأخلاق')
  const [gender, setGender]                 = useState<Gender>('all')

  const filtered = stories.filter(s =>
    s.category === activeCategory && (gender === 'all' || s.gender === gender)
  )
  const meta = catMeta[activeCategory]

  return (
    <section id="catalog" className="py-24" style={{background:'#F7F8FC'}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-eyebrow">📚 كتالوج القصص</div>
          <h2 className="section-title text-4xl mb-3">اختار قصص طفلك</h2>
          <div className="section-divider mx-auto"/>
          <p className="text-sm max-w-md mx-auto" style={{color:'var(--gray-text)',fontFamily:'var(--font-body)'}}>
            94 قصة مخصصة في 8 أقسام — اختار اللي يعجبك وضيفه للسلة 🌟
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map(cat => {
            const m = catMeta[cat]
            const active = activeCategory === cat
            return (
              <button key={cat}
                onClick={() => setActiveCategory(cat)}
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
          <div className="flex gap-1 p-1.5 rounded-2xl" style={{background:'white',border:'1.5px solid var(--gray-mid)',boxShadow:'0 2px 10px rgba(0,0,0,0.05)'}}>
            {genders.map(f => (
              <button key={f.value}
                onClick={() => setGender(f.value as Gender)}
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
        <div className="flex items-center gap-3 mb-6 px-5 py-4 rounded-2xl" style={{background:meta.bg, border:`1.5px solid ${meta.color}25`}}>
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{background:`${meta.color}20`}}>{meta.icon}</div>
          <div>
            <div className="font-tajawal font-black text-lg" style={{color:'var(--navy)'}}>{activeCategory}</div>
            <div className="text-xs" style={{color:meta.color,fontFamily:'var(--font-body)'}}>
              {filtered.length} قصة{gender!=='all'?(gender==='boy'?' — للأولاد':' — للبنات'):' — للجميع'}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((story) => <StoryBuyCard key={story.id} story={story} />)}
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
          <a href="https://wa.me/201034502000?text=عايز قصة مخصصة بالكامل لطفلي" target="_blank" rel="noopener noreferrer" className="btn-primary">
            اطلب قصة مخصصة من الصفر ✨
          </a>
        </div>

      </div>
    </section>
  )
}
