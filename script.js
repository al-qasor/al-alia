const translations = {
    en: {
      title: "Al-Qusoor Al-Alya Company",
      brand: "Al-Qusoor Al-Alya",
      home: "Home",
      about: "About Us",
      properties: "Properties",
      contact: "Contact",
      hero_title: "Welcome to Al-Qusoor Al-Alya Company",
      hero_subtitle: "We offer top-notch Company services with professionalism and trust",
      browse: "Browse Properties",
      about_title: "About Us",
      founder_title: "Founder",
      founder_desc: "Long experience in Company, delivering the best solutions to our clients.",
      props_title: "Featured Properties",
      villa_title: "Luxury Apartment",
      villa_desc: "In the heart of the news where the beauty of the design met with the beauty of the site",
      more: "More",
      contact_title: "Get in Touch",
      label_name: "Full Name",
      ph_name: "Enter your name",
      label_email: "Email Address",
      ph_email: "name@example.com",
      label_message: "Your Message",
      ph_message: "How can we help you?",
      send: "Send",
      footer_copy: "© 2025 Al-Qusoor Al-Alya Company. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      contact_email: "E-mail:",
      contact_phone: "Phone number:",
      founder_name: "Sultan Saad Al-Daqan",
      page_title: "Property Details",
      back_button: "Back",
      specs_title: "Specifications",
      spec_bedrooms: "Bedrooms:",
      spec_bathrooms: "Bathrooms:",
      spec_area: "Area:",
      spec_price: "Price:",
      booking_contact: "For booking and inquiries contact",
      spec_livingrooms: "Living rooms:",
      spec_property: "Property age:",
      spec_units: "Available units:",
      spec_name: "Project name:",
      spec_area1: "Region:",
      spec_city: "City:",
      spec_tn: "District:",
      spec_company: "Company name:",
      spec_payment: "Payment method",
      answer_livingrooms: "2",
      answer_new: "New",
      answer_units: "2",
      answer_project: "Deem Residence 11",
      answer_region_east: "Eastern region",
      answer_city_khobar: "Khobar",
      answer_district_hamra: "Al Hamra",
      answer_company: "Al-Saedan Real Estate",
      answer_pay: "Cash , Finance",
    },
    ar: {
      title: "شركة القصور العالية",
      brand: "شركة القصور العالية",
      home: "الرئيسية",
      about: "من نحن",
      properties: "العقارات",
      contact: "تواصل معنا",
      hero_title: "مرحباً بكم في شركة القصور العالية",
      hero_subtitle: "نقدم أفضل الخدمات العقارية لعملائنا بكل احترافية وثقة",
      browse: "تصفح العقارات",
      about_title: "من نحن",
      founder_title: "المؤسس",
      founder_desc: "خبرة طويلة في مجال العقارات وتقديم أفضل الحلول لعملائنا.",
      props_title: "عقاراتنا المميزة",
      villa_title: "شقة فاخرة",
      villa_desc: "في قلب الخبر حيث اجتمع جمال التصميم مع جمال الموقع",
      more: "المزيد",
      contact_title: "تواصل معنا",
      label_name: "الاسم الكامل",
      ph_name: "أدخل اسمك",
      label_email: "البريد الإلكتروني",
      ph_email: "name@example.com",
      label_message: "رسالتك",
      ph_message: "كيف يمكننا مساعدتك؟",
      send: "إرسال",
      footer_copy: "© 2025 شركة القصور العالية. جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية",
      terms: "شروط الاستخدام",
      contact_email: "البريد الإلكتروني:",
      contact_phone: "هاتف:",
      founder_name: "سلطان سعد ال دعكن",
      page_title: "تفاصيل العقار",
      back_button: "عودة",
      specs_title: "المواصفات",
      spec_bedrooms: "عدد الغرف:",
      spec_bathrooms: "عدد الحمامات:",
      spec_area: "المساحة:",
      spec_price: "السعر:",
      booking_contact: "للحجز والاستفسار تواصل مع",
      spec_livingrooms: "عدد غرف المعيشة:",
      spec_property: "عمر العقار:",
      spec_units: "الوحدات المتوفرة:",
      spec_name: "اسم المشروع:",
      spec_area1: "المنطقة:",
      spec_city: "المدينة:",
      spec_tn: "الحي:",
      spec_company: "اسم الشركة:",
      spec_payment: "طريقة الدفع",
      answer_livingrooms: "2",
      answer_new: "جديد",
      answer_units: "2",
      answer_project: "ديم ريزدنس 11",
      answer_region_east: "الشرقية",
      answer_city_khobar: "الخبر",
      answer_district_hamra: "الحمراء",
      answer_company: "شركة ال سعيدان للعقارات",
      answer_pay: "كاش ، تمويل",
    }
  };

  
  const elements = document.querySelectorAll("[data-i18n]");
  const placeholders = document.querySelectorAll("[data-i18n-placeholder]");
  let currentLang = "ar";
  
  function setLanguage(lang) {
    currentLang = lang;
    elements.forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
    placeholders.forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (translations[lang][key]) {
        el.setAttribute("placeholder", translations[lang][key]);
      }
    });
    document.getElementById("btn-ar").classList.toggle("active", lang === "ar");
    document.getElementById("btn-en").classList.toggle("active", lang === "en");
    document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }
  
  document.getElementById("btn-ar").addEventListener("click", () => setLanguage("ar"));
  document.getElementById("btn-en").addEventListener("click", () => setLanguage("en"));
  document.addEventListener("DOMContentLoaded", () => setLanguage(currentLang));
  // ترجمة عنوان صندوق التواصل
  document.querySelector('[data-i18n="contact_email"]').textContent = translations[lang].contact_email;
  document.querySelector('[data-i18n="contact_phone"]').textContent = translations[lang].contact_phone;

  window.addEventListener('load', () => {
    // بعد مدة Splash (3s delay + 1s fade) نظهر المحتوى الرئيسي
    setTimeout(() => {
      document.getElementById('main-content').style.display = 'block';
    }, 4000); // 3000ms delay + 1000ms fade = 4000ms
  });