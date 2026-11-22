/* ===== عدّلي هنا فقط: كل بيانات الموقع ===== */
window.SITE = {
  whatsapp: "201000000000",          // رقم الواتساب بصيغة دولية بدون + (مثال مصر: 20100...)
  phone: "+20 100 000 0000",
  doctorPhoto: "",                   // مسار الصورة مثل: assets/doctor.jpg (اتركيه فارغاً لعرض مكان الصورة)
  mapUrl: "https://www.google.com/maps?q=Cairo&output=embed", // استبدليه برابط التضمين الخاص بالعيادة
  social: { facebook: "#", instagram: "#", youtube: "#" },
  ar: {
    title: "د. [الاسم الكامل] | استشارية السكري والغدد الصماء",
    desc: "عيادة متخصصة في السكري والغدد الصماء: تشخيص دقيق، متابعة متخصصة، وخطط علاجية تناسب كل مريض.",
    brand: "د. [الاسم الكامل]", spec: "السكري والغدد الصماء",
    nav: [["about","عن الدكتورة"],["services","الخدمات"],["why","لماذا نحن"],["blog","التوعية"],["faq","الأسئلة"],["contact","احجزي"]],
    book: "احجزي موعدك الآن", waMsg: "مرحباً، أود حجز موعد في العيادة.",
    h1: "رعاية متخصصة لمرضى السكري والغدد الصماء",
    sub: "تشخيص دقيق، متابعة متخصصة، وخطط علاجية تناسب احتياجات كل مريض.",
    explore: "اكتشفي خدماتنا", photoNote: "مكان صورة الدكتورة",
    aboutT: "عن الدكتورة",
    aboutP: "نؤمن بأن العلاقة القائمة على الثقة والتواصل الواضح هي أساس نجاح العلاج. [اكتبي هنا نبذة شخصية قصيرة عنك].",
    facts: [["الاسم الكامل","[الاسم الكامل للدكتورة]"],["المؤهلات العلمية","[الدرجات العلمية والجامعات]"],["سنوات الخبرة","[عدد سنوات الخبرة]"],["العضويات والشهادات","[العضويات المهنية والشهادات]"],["مجالات الخبرة السريرية","[مجالات الخبرة]"]],
    servT: "التخصصات والخدمات", servS: "رعاية شاملة لاضطرابات الهرمونات والأيض",
    services: [
      ["drop","السكري",["السكري من النوع الأول","السكري من النوع الثاني","سكري الحمل","إدارة السكري والمتابعة","العلاج بالإنسولين ومراقبة السكر"]],
      ["butterfly","اضطرابات الغدة الدرقية",["قصور الغدة الدرقية","فرط نشاط الغدة الدرقية","عقيدات الغدة الدرقية","تقييم وظائف الغدة الدرقية"]],
      ["shield","اضطرابات الغدة الكظرية",["قصور الغدة الكظرية","متلازمة كوشينج","اضطرابات هرمونية كظرية أخرى"]],
      ["brain","اضطرابات الغدة النخامية",["اضطرابات هرمونات النخامية","اضطرابات البرولاكتين","اضطرابات هرمون النمو","حالات نخامية أخرى"]],
      ["pulse","اضطرابات الأيض",["ارتفاع سكر الدم","ارتفاع الكوليسترول","اضطرابات الدهون","تقييم الصحة الأيضية"]]],
    whyT: "لماذا تختارين عيادتنا؟",
    why: ["خطط علاجية فردية","رعاية طبية قائمة على الأدلة","تقييم هرموني شامل","متابعة منتظمة","تثقيف المريض","رعاية ودودة وداعمة"],
    blogT: "التوعية الصحية", blogS: "مقالات مبسطة لمساعدتك على فهم حالتك", read: "اقرأي المزيد",
    blog: [["التوعية بالسكري","[ملخص المقال: اكتبي هنا مقدمة قصيرة]"],["صحة الغدة الدرقية","[ملخص المقال: اكتبي هنا مقدمة قصيرة]"],["التغذية الصحية","[ملخص المقال: اكتبي هنا مقدمة قصيرة]"],["التحكم في الكوليسترول","[ملخص المقال: اكتبي هنا مقدمة قصيرة]"],["الصحة الهرمونية","[ملخص المقال: اكتبي هنا مقدمة قصيرة]"]],
    contT: "احجزي موعدك", contS: "تواصلي معنا عبر واتساب وسنرد عليكِ لتأكيد الموعد",
    info: [["الهاتف","phone"],["العنوان","[عنوان العيادة بالتفصيل، المدينة]"],["مواعيد العمل","[الأيام والساعات]"]],
    faqT: "الأسئلة الشائعة",
    faq: [
      ["ما الفرق بين السكري من النوع الأول والثاني؟","في النوع الأول يتوقف الجسم عن إنتاج الإنسولين بصورة كبيرة، أما في النوع الثاني فتقل استجابة الجسم للإنسولين وقد يقل إفرازه مع الوقت. يحدد الطبيب النوع والعلاج المناسب بعد التقييم."],
      ["متى يجب فحص هرمونات الغدة الدرقية؟","عند ظهور أعراض مثل تغيّر غير مفسّر في الوزن أو الإرهاق أو خفقان القلب أو تورم في الرقبة، أو بناءً على توجيه الطبيب."],
      ["هل يرتبط ارتفاع الكوليسترول بالسكري؟","نعم، قد يصاحب السكري اضطراب في الدهون، لذلك يُنصح بمتابعتها بانتظام مع الطبيب."],
      ["ما أعراض اضطرابات الهرمونات؟","تتنوع الأعراض حسب الغدة المصابة، وقد تشمل الإرهاق وتغيّر الوزن واضطراب الدورة أو تغيّرات في المزاج. الأعراض وحدها لا تكفي للتشخيص ويلزم تقييم طبي."],
      ["كم مرة يجب أن يتابع مريض السكري؟","يختلف ذلك من مريض لآخر حسب نوع السكري ومدى انتظام السكر، ويحدده الطبيب بما يناسب حالتك."]],
    disc: "المحتوى المعروض لأغراض التوعية فقط ولا يغني عن الاستشارة الطبية. استشيري طبيبك قبل اتخاذ أي قرار علاجي. في الحالات الطارئة توجهي لأقرب مستشفى.",
    rights: "جميع الحقوق محفوظة", links: "روابط سريعة", lang: "English"
  },
  en: {
    title: "Dr. [Full Name] | Diabetes & Endocrinology Specialist",
    desc: "Specialist diabetes and endocrinology clinic: accurate diagnosis, specialist follow-up, and treatment plans tailored to every patient.",
    brand: "Dr. [Full Name]", spec: "Diabetes & Endocrinology",
    nav: [["about","About"],["services","Services"],["why","Why Us"],["blog","Education"],["faq","FAQ"],["contact","Book"]],
    book: "Book your appointment", waMsg: "Hello, I would like to book an appointment.",
    h1: "Specialist care for diabetes and endocrine disorders",
    sub: "Accurate diagnosis, specialist follow-up, and treatment plans tailored to each patient's needs.",
    explore: "Explore our services", photoNote: "Doctor's portrait placeholder",
    aboutT: "About the Doctor",
    aboutP: "We believe trust and clear communication are the foundation of successful treatment. [Write a short personal introduction here].",
    facts: [["Full name","[Doctor's full name]"],["Qualifications","[Degrees and universities]"],["Years of experience","[Years of experience]"],["Memberships & certifications","[Professional memberships and certificates]"],["Clinical expertise","[Areas of clinical expertise]"]],
    servT: "Specialties & Services", servS: "Comprehensive care for hormonal and metabolic disorders",
    services: [
      ["drop","Diabetes Mellitus",["Type 1 diabetes","Type 2 diabetes","Gestational diabetes","Diabetes management & follow-up","Insulin therapy & glucose monitoring"]],
      ["butterfly","Thyroid Disorders",["Hypothyroidism","Hyperthyroidism","Thyroid nodules","Thyroid dysfunction assessment"]],
      ["shield","Adrenal Gland Disorders",["Adrenal insufficiency","Cushing's syndrome","Other adrenal hormonal disorders"]],
      ["brain","Pituitary Gland Disorders",["Pituitary hormonal disorders","Prolactin disorders","Growth hormone disorders","Other pituitary conditions"]],
      ["pulse","Metabolic Disorders",["High blood glucose","High cholesterol","Lipid disorders","Metabolic health assessment"]]],
    whyT: "Why choose our clinic?",
    why: ["Individualized treatment plans","Evidence-based medical care","Comprehensive hormonal assessment","Regular follow-up","Patient education","Friendly, supportive care"],
    blogT: "Patient Education", blogS: "Simple articles to help you understand your condition", read: "Read more",
    blog: [["Diabetes awareness","[Article summary: write a short intro here]"],["Thyroid health","[Article summary: write a short intro here]"],["Healthy nutrition","[Article summary: write a short intro here]"],["Cholesterol management","[Article summary: write a short intro here]"],["Hormonal health","[Article summary: write a short intro here]"]],
    contT: "Book your appointment", contS: "Message us on WhatsApp and we will confirm your appointment",
    info: [["Phone","phone"],["Address","[Clinic address, city]"],["Working hours","[Days and hours]"]],
    faqT: "Frequently Asked Questions",
    faq: [
      ["What is the difference between Type 1 and Type 2 diabetes?","In Type 1 the body largely stops producing insulin; in Type 2 the body responds less to insulin and production may decline over time. Your doctor determines the type and suitable treatment after assessment."],
      ["When should I check my thyroid hormones?","When symptoms appear, such as unexplained weight change, fatigue, palpitations or neck swelling, or as advised by your doctor."],
      ["Can high cholesterol be related to diabetes?","Yes, lipid abnormalities often accompany diabetes, so regular monitoring with your doctor is advised."],
      ["What are the symptoms of hormonal disorders?","Symptoms vary by gland and may include fatigue, weight changes, menstrual irregularity or mood changes. Symptoms alone cannot confirm a diagnosis; a medical evaluation is needed."],
      ["How often should diabetic patients follow up?","It varies by diabetes type and glucose control, and your doctor will set the schedule that suits you."]],
    disc: "Content is for educational purposes only and is not a substitute for medical consultation. Consult your doctor before any treatment decision. In emergencies, go to the nearest hospital.",
    rights: "All rights reserved", links: "Quick links", lang: "العربية"
  }
};
