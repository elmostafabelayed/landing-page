/**
 * ACADÉMIE AL-ANDALOUS FÈS - CONFIGURATION FILE
 * 
 * Fichier de configuration principal / ملف الإعدادات الرئيسي
 * Easily edit contact numbers, addresses, courses, schedules, and text
 * without modifying UI components.
 */

export const academyConfig = {
  // General Info
  academy: {
    name: {
      fr: "Académie Al-Andalous Fès",
      ar: "أكاديمية الأندلس فاس"
    },
    shortName: {
      fr: "Al-Andalous Fès",
      ar: "الأندلس فاس"
    },
    tagline: {
      fr: "Langues Vivantes & Soutien Scolaire d'Excellence",
      ar: "مركز التميز للغات الحية والدعم المدرسي والجامعي"
    },
    subtagline: {
      fr: "Votre centre pédagogique au cœur de Fès (Ville Nouvelle). Groupes réduits, méthodologie active et accompagnement rigoureux.",
      ar: "مركزكم التربوي النموذجي في قلب مدينة فاس (المدينة الجديدة). أفواج مصغرة، مناهج حديثة وتتبع دقيق للنتائج."
    },
    establishedYear: "2020",
    city: {
      fr: "Fès, Maroc",
      ar: "فاس، المغرب"
    },
    neighborhood: {
      fr: "Ville Nouvelle - Avenue Hassan II",
      ar: "المدينة الجديدة - شارع الحسن الثاني"
    },
    fullAddress: {
      fr: "Avenue Hassan II, Immeuble Al-Andalous, 3ème Étage (en face de l'Hôtel Atlas Volubilis / à 150m de la Place Florence), Ville Nouvelle, Fès 30000",
      ar: "شارع الحسن الثاني، عمارة الأندلس، الطابق الثالث (قبالة فندق أطلس وليلي / على بعد 150 متراً من ساحة فلورنسا)، المدينة الجديدة، فاس 30000"
    },
    landmark: {
      fr: "À 2 minutes à pied de la Place Florence et à 7 minutes de la Gare Fès-Ville",
      ar: "على بعد دقيقتين سيراً من ساحة فلورنسا و7 دقائق من محطة القطار فاس المدينة"
    },
    transportGuide: {
      fr: "Accès facile en Petit Taxi (dépose Avenue Hassan II ou Place Florence). Lignes de bus 10, 16 et 19. Parking surveillé disponible dans la rue adjacente.",
      ar: "ولوج سهل عبر سيارات الأجرة الصغيرة (النزول بشارع الحسن الثاني أو ساحة فلورنسا). خطوط الحافلات 10 و 16 و 19. مرأب سيارات محروس في الشارع الموازي."
    },
    coordinates: {
      lat: 34.03388,
      lng: -5.00167
    },
    googleMapsUrl: "https://maps.google.com/?q=Avenue+Hassan+II+Fes+Morocco",
  },

  // Contact & WhatsApp settings
  contact: {
    whatsappNumber: "212661234567", // Format international sans '+' pour le lien wa.me
    phoneDisplay: "+212 661-234567",
    landlineDisplay: "+212 535-620000",
    email: "contact@academie-alandalous-fes.ma",
    openingHours: {
      fr: "Lundi au Samedi : 09:00 - 20:30 | Dimanche : 10:00 - 15:00",
      ar: "من الإثنين إلى السبت: 09:00 - 20:30 | الأحد: 10:00 - 15:00"
    },
    responseEstimate: {
      fr: "Réponse WhatsApp sous 15 à 30 minutes",
      ar: "إجابة سريعة عبر واتساب خلال 15 إلى 30 دقيقة"
    }
  },

  // Default WhatsApp Inquiries
  whatsappMessages: {
    general: {
      fr: "Bonjour Académie Al-Andalous Fès. Je souhaite avoir des informations sur vos formations et les modalités d'inscription.",
      ar: "السلام عليكم أكاديمية الأندلس فاس. أود الاستفسار عن برامجكم التكوينية وشروط التسجيل."
    },
    diagnosticTest: {
      fr: "Bonjour. Je souhaite planifier un test d'évaluation de niveau gratuit pour orienter mon inscription.",
      ar: "السلام عليكم. أرغب في حجز موعد لاختبار تحديد المستوى المجاني لتحديد الدورة المناسبة."
    },
    visitSchedule: {
      fr: "Bonjour. Je souhaite convenir d'une visite de vos locaux à l'Avenue Hassan II à Fès cette semaine.",
      ar: "السلام عليكم. أود تحديد موعد لزيارة مركزكم بشارع الحسن الثاني بفاس للتعرف على القاعات والبرامج."
    }
  },

  // Key Academic Metrics (Realistic, purely institutional — no fake awards or fake reviews)
  metrics: [
    {
      value: "8 - 12",
      label: { fr: "Apprenants max par groupe", ar: "طالباً كأقصى حد في الفوج" },
      sub: { fr: "Participation active garantie", ar: "مشاركة تفاعلية مضمونة" }
    },
    {
      value: "100%",
      label: { fr: "Aligné CECRL & Prog. National", ar: "مطابق للإطار الأوروبي والمقرر الوطني" },
      sub: { fr: "Pédagogie rigoureuse et structurée", ar: "مناهج مدروسة وتتبع فردي" }
    },
    {
      value: "Gratuit",
      label: { fr: "Test diagnostique d'entrée", ar: "اختبار تشخيصي مجاني" },
      sub: { fr: "Orientation personnalisée", ar: "توجيه تربوي مضبوط" }
    },
    {
      value: "6 j / 7",
      label: { fr: "Séances flexibles", ar: "توقيت مرن 6 أيام / 7" },
      sub: { fr: "Soirées et week-ends inclus", ar: "حصص مسائية وحصص نهاية الأسبوع" }
    }
  ],

  // Course Categories
  categories: [
    { id: "all", name: { fr: "Tous les programmes", ar: "جميع البرامج" } },
    { id: "languages", name: { fr: "Langues Vivantes", ar: "اللغات الحية" } },
    { id: "tutoring", name: { fr: "Soutien Scolaire (Lycée & Collège)", ar: "الدعم المدرسي (ثانوي وإعدادي)" } },
    { id: "concours", name: { fr: "Prépa Concours d'Excellence", ar: "التحضير للمباريات الوطنية" } },
    { id: "young", name: { fr: "Ateliers Juniors (Enfants & Ados)", ar: "ورشات الناشئة واليافعين" } },
  ],

  // Detailed Courses List
  courses: [
    {
      id: "fr-delf",
      category: "languages",
      title: {
        fr: "Français Général & Préparation DELF / DALF",
        ar: "اللغة الفرنسية العامة والتحضير لامتحانات DELF / DALF"
      },
      level: { fr: "Niveaux A1, A2, B1, B2, C1", ar: "المستويات من A1 إلى C1" },
      target: {
        fr: "Étudiants, professionnels, candidats Campus France et immigration",
        ar: "الطلبة، المهنيون، والراغبون في متابعة الدراسة بالخارج"
      },
      schedule: {
        fr: "Créneaux en semaine (18h30-20h30) ou samedi/dimanche",
        ar: "أفواج مسائية (18h30-20h30) أو في نهاية الأسبوع"
      },
      groupSize: { fr: "8 à 10 personnes max", ar: "8 إلى 10 أفراد كحد أقصى" },
      duration: { fr: "Sessions de 30 heures par sous-niveau", ar: "دورات من 30 ساعة لكل مستوى فرعي" },
      description: {
        fr: "Développez votre fluidité à l'oral et à l'écrit avec des formateurs certifiés. Préparation intensive aux épreuves officielles de compréhension et production.",
        ar: "تطوير الطلاقة الشفوية والكتابية مع أساتذة متخصصين، والتدرب المكثف على نماذج الاختبارات المعتمدة دولياً."
      },
      features: [
        { fr: "Simulation d'examen blanc en conditions réelles", ar: "امتحانات تجريبية في ظروف الاختبار الحقيقي" },
        { fr: "Supports pédagogiques et annales d'examens offerts", ar: "توفير جميع المراجع ونماذج الامتحانات السابقة" },
        { fr: "Pratique intensive de la prise de parole", ar: "تركيز خاص على المحادثة والتعبير الشفوي" }
      ],
      badge: { fr: "Très demandé", ar: "إقبال كبير" },
      whatsappText: {
        fr: "Bonjour Académie Al-Andalous. Je souhaite me renseigner sur les cours de Français et la préparation aux examens DELF/DALF.",
        ar: "السلام عليكم أكاديمية الأندلس. أود الاستفسار عن دورات اللغة الفرنسية والتحضير لاختبارات DELF/DALF."
      }
    },
    {
      id: "en-general",
      category: "languages",
      title: {
        fr: "Anglais Communicatif & Préparation TOEFL / IELTS",
        ar: "الإنجليزية التواصلية والتحضير لاختباري TOEFL / IELTS"
      },
      level: { fr: "Niveaux Débutant à Avancé (A1 à C1)", ar: "من المبتدئ إلى المتقدم (A1 إلى C1)" },
      target: {
        fr: "Lycéens, universitaires et cadres d'entreprises",
        ar: "تلاميذ الثانوي، طلبة الجامعات والأطر المهنية"
      },
      schedule: {
        fr: "Mardi & Jeudi soir ou formule intensive Samedi",
        ar: "الثلاثاء والخميس مساءً أو الفوج المكثف ليوم السبت"
      },
      groupSize: { fr: "8 à 12 personnes max", ar: "8 إلى 12 فرداً كحد أقصى" },
      duration: { fr: "Modules de 36 heures avec suivi continu", ar: "وحدات تكوينية من 36 ساعة مع تقييم مستمر" },
      description: {
        fr: "Pratiquez l'anglais à l'oral dès la première séance. Méthodologie immersive axée sur la prononciation, le vocabulaire académique et les techniques d'examen.",
        ar: "ممارسة المحادثة الإنجليزية منذ الحصة الأولى بنهج تفاعلي يعزز النطق السليم والمصطلحات الأكاديمية والمهنية."
      },
      features: [
        { fr: "Laboratoire audio et ateliers de conversation hebdomadaires", ar: "ورشات محادثة أسبوعية وتدريبات استماع مكثفة" },
        { fr: "Préparation ciblée aux formats TOEFL iBT et IELTS Academic", ar: "إعداد موجه لمعايير اختباري TOEFL و IELTS" },
        { fr: "Accès à la bibliothèque de ressources pédagogiques", ar: "ولوج لمكتبة المركز الرقمية والمراجع الدراسية" }
      ],
      badge: { fr: "International", ar: "معايير دولية" },
      whatsappText: {
        fr: "Bonjour Académie Al-Andalous. Je suis intéressé(e) par la formation en Anglais (général / TOEFL / IELTS). Pouvez-vous m'envoyer le planning ?",
        ar: "السلام عليكم أكاديمية الأندلس. أهتم بالتسجيل في دورة اللغة الإنجليزية (العامة أو التحضير لـ IELTS/TOEFL). هل يمكنكم إرسال برنامج الحصص؟"
      }
    },
    {
      id: "de-goethe",
      category: "languages",
      title: {
        fr: "Allemand Intensif (Niveaux A1 - B2 Goethe-Zertifikat)",
        ar: "اللغة الألمانية المكثفة (المستويات A1 إلى B2 معهد غوته)"
      },
      level: { fr: "A1, A2, B1 et B2", ar: "المستويات A1, A2, B1, B2" },
      target: {
        fr: "Candidats aux études universitaires, formation professionnelle (Ausbildung) ou visa travail en Allemagne",
        ar: "الراغبون في متابعة الدراسة الجامعية أو التكوين المهني (Ausbildung) بألمانيا"
      },
      schedule: {
        fr: "Formule standard (3x par semaine) ou Formule accélérée",
        ar: "الصيغة العادية (3 مرات أسبوعياً) أو الصيغة السريعة المكثفة"
      },
      groupSize: { fr: "6 à 10 personnes max", ar: "6 إلى 10 أفراد كحد أقصى" },
      duration: { fr: "60 heures par palier d'apprentissage", ar: "60 ساعة تدريبية لكل مستوى" },
      description: {
        fr: "Programme rigoureux conforme aux exigences du Goethe-Institut et de l'ÖSD. Maîtrise de la grammaire, des structures idiomatiques et entraînement aux 4 épreuves.",
        ar: "برنامج منهجي دقيق يوافق متطلبات معهد غوته. ضبط قواعد اللغة وهيكلة التعبير الكتابي والشفوي للنجاح في الامتحانات الرسمية."
      },
      features: [
        { fr: "Focus strict sur les épreuves d'expression orale et écrite", ar: "تدريب مكثف على الشق الشفوي والتعبير الكتابي" },
        { fr: "Manuels officiels de référence fournis", ar: "كتب ومقررات بيداغوجية معتمدة رسمياً" },
        { fr: "Conseils méthodologiques pour les démarches de certification", ar: "توجيهات منهجية لاجتياز الاختبارات الرسمية" }
      ],
      badge: { fr: "Visa & Études", ar: "تأشيرة ودراسة" },
      whatsappText: {
        fr: "Bonjour Académie Al-Andalous. Je souhaite m'inscrire aux cours d'Allemand pour préparer l'examen du Goethe-Institut.",
        ar: "السلام عليكم أكاديمية الأندلس. أود التسجيل في دروس اللغة الألمانية تحضيراً لامتحانات معهد غوته."
      }
    },
    {
      id: "es-dele",
      category: "languages",
      title: {
        fr: "Espagnol Général & Préparation DELE (A1 à B2)",
        ar: "اللغة الإسبانية العامة والإعداد لاختبار DELE (A1 إلى B2)"
      },
      level: { fr: "A1 à B2", ar: "المستويات من A1 إلى B2" },
      target: {
        fr: "Étudiants en filières hispaniques, commerce international et passionnés",
        ar: "طلبة الدراسات الإسبانية، التجارة الدولية ومحبو اللغة الإسبانية"
      },
      schedule: {
        fr: "Mercredi après-midi & Samedi",
        ar: "الأربعاء بعد الزوال والسبت"
      },
      groupSize: { fr: "8 à 10 personnes max", ar: "8 إلى 10 أفراد" },
      duration: { fr: "Sessions de 30 heures", ar: "دورات من 30 ساعة" },
      description: {
        fr: "Apprentissage convivial et dynamique de la langue espagnole. Mise en situation réelle, compréhension audiovisuelle et aisance conversationnelle.",
        ar: "تعلم تفاعلي وديناميكي للغة الإسبانية من خلال وضعيات تواصلية حقيقية وتطوير القدرة على الفهم والتعبير بسلاسة."
      },
      features: [
        { fr: "Méthode communicative par mises en situation", ar: "منهج تواصلي معتمد على الحوار والمواقف الواقعية" },
        { fr: "Préparation ciblée aux diplômes officiels DELE", ar: "إعداد منظم لنيل شهادات DELE المعتمدة" },
        { fr: "Petits groupes favorisant la prise de confiance", ar: "أفواج صغرى تمنح الثقة التامة في التحدث" }
      ],
      badge: { fr: "Communication", ar: "تواصل عملي" },
      whatsappText: {
        fr: "Bonjour. Je souhaite avoir des détails sur les cours d'Espagnol dispensés à l'Académie Al-Andalous de Fès.",
        ar: "السلام عليكم. أود معرفة تفاصيل مواعيد وأسعار دورات اللغة الإسبانية بأكاديميتكم في فاس."
      }
    },
    {
      id: "bac-sciences",
      category: "tutoring",
      title: {
        fr: "Soutien Baccalauréat Scientifique (SM, PC, SVT)",
        ar: "الدعم المدرسي للباكالوريا العلمية (علوم رياضية، فيزيائية، وحياة وأرض)"
      },
      level: { fr: "1ère et 2ème Année du Baccalauréat (Biof & Arabe)", ar: "الأولى والثانية باكالوريا (مسلك دولي وعام)" },
      target: {
        fr: "Élèves préparant les épreuves régionales et nationales du Bac",
        ar: "التلاميذ المقبلون على الامتحانات الجهوية والوطنية"
      },
      schedule: {
        fr: "Mercredi après-midi, Samedi après-midi, Dimanche matin",
        ar: "الأربعاء مساءً، السبت مساءً، وصباح الأحد"
      },
      groupSize: { fr: "10 à 12 élèves max par salle", ar: "10 إلى 12 تلميذاً في القاعة كحد أقصى" },
      duration: { fr: "Accompagnement annuel ou modules intensifs semestriels", ar: "مواكبة سنوية مستمرة أو وحدات مكثفة خلال العطل" },
      description: {
        fr: "Matières clés : Mathématiques, Physique-Chimie, SVT et Philosophie. Synthèse méthodique des cours, entraînement rigoureux sur les annales d'examens nationaux et astuces de rédaction.",
        ar: "المواد الأساسية: الرياضيات، الفيزياء والكيمياء، علوم الحياة والأرض والفلسفة. تبسيط المناهج وحل نماذج الامتحانات الوطنية السابقة وتقنيات التحرير الدقيق."
      },
      features: [
        { fr: "Devoirs surveillés réguliers et examens blancs trimestriels", ar: "فروض محروسة منتظمة وامتحانات تجريبية دورية" },
        { fr: "Fiches de synthèse méthodologiques exclusives", ar: "ملخصات مركزة وشاملة لكل درس وفق الإطار المرجعي" },
        { fr: "Rapports de suivi mensuels remis aux parents", ar: "تقارير شهرية مفصلة تطلع أولياء الأمور على التطور والغياب" }
      ],
      badge: { fr: "Objectif Mention", ar: "هدف ميزة مشرفة" },
      whatsappText: {
        fr: "Bonjour Académie Al-Andalous. Je souhaite inscrire un élève en soutien 2ème Bac (Sciences). Merci de m'indiquer les groupes disponibles.",
        ar: "السلام عليكم أكاديمية الأندلس. أود تسجيل تلميذ في دروس دعم الباكالوريا العلمية. المرجو إفادتي بالأفواج المتاحة."
      }
    },
    {
      id: "bac-eco",
      category: "tutoring",
      title: {
        fr: "Soutien Baccalauréat Économie & Gestion",
        ar: "الدعم المدرسي لباكالوريا العلوم الاقتصادية والتدبير"
      },
      level: { fr: "1ère et 2ème Année du Baccalauréat", ar: "الأولى والثانية باكالوريا علوم اقتصادية" },
      target: {
        fr: "Élèves visant l'accès aux grandes écoles de management (ENCG, ISCAE, Universités)",
        ar: "التلاميذ الطامحون لولوج مدارس التسيير والتجارة الوطنية والدولية"
      },
      schedule: {
        fr: "Séances en fin de semaine adaptées aux emplois du temps",
        ar: "حصص نهاية الأسبوع متوافقة مع توقيت المؤسسات التعليمية"
      },
      groupSize: { fr: "8 à 10 élèves max", ar: "8 إلى 10 تلاميذ كحد أقصى" },
      duration: { fr: "Suivi continu tout au long de l'année scolaire", ar: "متابعة شاملة تمتد طيلة الموسم الدراسي" },
      description: {
        fr: "Encadrement spécialisé en Économie Générale, Comptabilité, Mathématiques Financières et Droit. Méthodologie rigoureuse pour exceller à l'examen national.",
        ar: "تأطير تخصصي في الاقتصاد العام، المحاسبة، الرياضيات المالية والقانون، بهدف تحقيق أعلى المعدلات في الامتحان الوطني."
      },
      features: [
        { fr: "Études de cas réelles et applications comptables concrètes", ar: "دراسة حالات تطبيقية وتمارين محاسبية معمقة" },
        { fr: "Entraînement sur les cadres de référence officiels", ar: "ملاءمة تامة مع الأطر المرجعية الصادرة عن الوزارة" },
        { fr: "Accompagnement à la gestion du temps pendant l'épreuve", ar: "تدريب على تنظيم الوقت وتفادي الأخطاء الشائعة في الامتحان" }
      ],
      badge: { fr: "Gestion & Éco", ar: "اقتصاد وتسيير" },
      whatsappText: {
        fr: "Bonjour. Je cherche des séances de soutien pour un élève en Bac Économie à Fès. Quelles sont les formules proposées ?",
        ar: "السلام عليكم. أبحث عن حصص دعم لتلميذ في شعبة العلوم الاقتصادية بفاس. ما هي الصيغ المتوفرة لديكم؟"
      }
    },
    {
      id: "college-renfort",
      category: "tutoring",
      title: {
        fr: "Renforcement Collège & Préparation Examen 3ème AC",
        ar: "تقوية المستوى الإعدادي والإعداد للامتحان الموحد للسنة الثالثة"
      },
      level: { fr: "1ère, 2ème et 3ème Année Collège (Option Internationale)", ar: "الأولى والثانية والثالثة إعدادي مسار دولي" },
      target: {
        fr: "Collégiens ayant besoin de consolider leurs bases scientifiques et linguistiques",
        ar: "تلاميذ الإعدادي الراغبون في ترسيخ الأساسيات العلمية واللغوية"
      },
      schedule: {
        fr: "Mercredi après-midi et Samedi matin",
        ar: "الأربعاء بعد الزوال وصباح السبت"
      },
      groupSize: { fr: "8 à 12 élèves", ar: "8 إلى 12 تلميذاً" },
      duration: { fr: "Modules d'accompagnement continu", ar: "وحدات مرافقة دورية طوال السنة" },
      description: {
        fr: "Accompagnement en Mathématiques, Physique et Français. Consolidation des méthodes de travail, aide aux devoirs et préparation ciblée au Brevet régional.",
        ar: "مواكبة مركزة في الرياضيات، العلوم الفيزيائية والفرنسية لترسيخ المنهجية وحل التمارين والاستعداد للامتحان الموحد الإقليمي."
      },
      features: [
        { fr: "Remise à niveau personnalisée sur les prérequis essentiels", ar: "استدراك التعثرات السابقة وضبط المكتسبات الأساسية" },
        { fr: "Encadrement bienveillant et développement de l'autonomie", ar: "تأطير محفز يساعد التلميذ على الاعتماد على النفس" },
        { fr: "Communication directe avec les parents", ar: "تواصل مباشر ومنتظم مع أولياء الأمور" }
      ],
      badge: { fr: "Bases Solides", ar: "تأسيس متين" },
      whatsappText: {
        fr: "Bonjour Académie Al-Andalous. Je souhaite me renseigner sur le programme de soutien pour élève au collège (3ème année).",
        ar: "السلام عليكم أكاديمية الأندلس. أود الاستفسار عن دروس التقوية لتلميذ بالسلك الإعدادي (السنة الثالثة إعدادي)."
      }
    },
    {
      id: "prepa-concours",
      category: "concours",
      title: {
        fr: "Entraînement Concours d'Excellence (ENSA, ENCG, Médecine FMP)",
        ar: "الإعداد لمباريات المدارس العليا (ENSA، ENCG، كليات الطب والصيدلة)"
      },
      level: { fr: "Candidats 2ème Bac et Titulaires du Baccalauréat", ar: "تلاميذ الثانية باكالوريا وحاملو شهادة الباكالوريا" },
      target: {
        fr: "Candidats aux concours post-bac des grandes écoles d'ingénieurs, de commerce et de santé au Maroc",
        ar: "المترشحون لمباريات المعاهد والمدارس الوطنية العليا والكليات ذات الاستقطاب المحدود"
      },
      schedule: {
        fr: "Sessions intensives de fin d'année et stages de vacances",
        ar: "دورات مكثفة خلال العطل ومباشرة بعد الامتحانات الوطنية"
      },
      groupSize: { fr: "10 à 12 étudiants", ar: "10 إلى 12 طالباً" },
      duration: { fr: "Packs intensifs de 40 heures d'exercices type concours", ar: "حزم تدريبية مكثفة من 40 ساعة من نماذج المباريات" },
      description: {
        fr: "Entraînement chronométré aux questionnaires à choix multiples (QCM), astuces de calcul mental rapide, logique mathématique et élimination des pièges classiques des concours nationaux.",
        ar: "تدريب دقيق على صيغ الأسئلة متعددة الاختيارات (QCM)، تقنيات الحساب السريع، التحليل المنطقي وتفادي الفخاخ الشائعة في المباريات."
      },
      features: [
        { fr: "Banque d'épreuves réelles des 10 dernières années analysées", ar: "بنك شامل لمباريات السنوات العشر الماضية مع التصحيح المفصل" },
        { fr: "Techniques de gestion du stress et du temps imparti", ar: "إرشادات عملية لتدبير وقت الاختبار والتعامل مع الضغط" },
        { fr: "Séances de simulation chronométrées", ar: "محاكاة واقعية محددة بالزمن لاختبار السرعة والدقة" }
      ],
      badge: { fr: "Excellence", ar: "تفوق وتوجيه" },
      whatsappText: {
        fr: "Bonjour. Je souhaite avoir des informations sur la session de préparation aux concours post-bac (ENSA, Médecine, ENCG) à Fès.",
        ar: "السلام عليكم. أود الاستعلام حول الدورة التحضيرية لمباريات ما بعد الباكالوريا (الطب، الهندسة، والتسيير) بمدينة فاس."
      }
    },
    {
      id: "young-learners",
      category: "young",
      title: {
        fr: "Ateliers d'Éveil Linguistique & Expression Orale (Juniors)",
        ar: "ورشات اللغات والتعبير والتواصل للناشئة والأطفال"
      },
      level: { fr: "Enfants (7-11 ans) et Adolescents (12-15 ans)", ar: "الأطفال (7-11 سنة) واليافعون (12-15 سنة)" },
      target: {
        fr: "Jeunes souhaitant vaincre leur timidité et s'exprimer naturellement en Français ou en Anglais",
        ar: "الأطفال واليافعون الراغبون في اكتساب الثقة والتحدث بطلاقة دون تردد"
      },
      schedule: {
        fr: "Le samedi matin ou mercredi après-midi",
        ar: "صباح السبت أو مساء الأربعاء"
      },
      groupSize: { fr: "8 à 10 enfants max", ar: "8 إلى 10 أطفال كحد أقصى" },
      duration: { fr: "Ateliers hebdomadaires de 2 heures", ar: "ورشات أسبوعية مدتها ساعتان" },
      description: {
        fr: "Apprentissage ludique sans la pression des notes scolaires : jeux de rôle, débats d'actualité adaptés, prise de parole en public et projets créatifs en immersion linguistique.",
        ar: "تعلم ممتع ومحفز بعيداً عن ضغط النقط: مسرحيات تربوية، مناقشات هادفة، وإلقاء في جو آمن يبني شخصية الطفل وطلاقته اللغوية."
      },
      features: [
        { fr: "Activités interactives et prises de parole spontanées", ar: "أنشطة تفاعلية ومواقف محادثة عفوية تكسر حاجز الخجل" },
        { fr: "Effectifs très réduits pour une participation de chaque enfant", ar: "أفواج صغرى تمنح كل طفل فرصة التحدث باستمرار" },
        { fr: "Cadre sécurisé, stimulant et climatisé au centre de Fès", ar: "فضاء تربوي آمن، مريح ومكيف بوسط مدينة فاس" }
      ],
      badge: { fr: "Pédagogie Active", ar: "تعليم تفاعلي ممتع" },
      whatsappText: {
        fr: "Bonjour Académie Al-Andalous. Je souhaite inscrire mon enfant aux ateliers du week-end pour développer son expression orale.",
        ar: "السلام عليكم أكاديمية الأندلس. أرغب في تسجيل طفلي في ورشات نهاية الأسبوع لتطوير مهارات التعبير الشفوي."
      }
    }
  ],

  // Real, institutional pedagogical benefits (no fake awards or certificates)
  benefits: [
    {
      id: "small-groups",
      iconName: "Users",
      title: {
        fr: "Effectifs Réduits (8 à 12 Max)",
        ar: "أفواج مصغرة (8 إلى 12 كحد أقصى)"
      },
      description: {
        fr: "Chaque apprenant dispose d'un temps de parole réel et bénéficie d'une attention personnalisée continue.",
        ar: "نضمن لكل طالب فرصة حقيقية للمشاركة الفعالة والتحدث، مع متابعة دقيقة لكل متعثر وتصحيح فوري."
      }
    },
    {
      id: "diagnostic-test",
      iconName: "ClipboardCheck",
      title: {
        fr: "Diagnostic Préalable Offert",
        ar: "اختبار تشخيصي وتوجيه مجاني"
      },
      description: {
        fr: "Avant toute inscription, un bilan écrit et oral permet de vous intégrer dans le groupe qui correspond précisément à votre niveau.",
        ar: "قبل بدء أي دورة، يخضع المتعلم لاختبار شفوي وكتابي دقيق لضمان انضمامه إلى الفوج الملائم تماماً لمستواه."
      }
    },
    {
      id: "rigorous-framework",
      iconName: "BookOpenCheck",
      title: {
        fr: "Alignement CECRL & Programmes Officiels",
        ar: "مطابقة تامة للإطار الأوروبي والمقررات الرسمية"
      },
      description: {
        fr: "Nos cursus de langues respectent les standards européens (A1 à C2) et nos cours de soutien suivent fidèlement les cadres ministériels marocains.",
        ar: "تتبع مناهجنا اللغوية معايير الإطار الأوروبي المشترك (CEFR)، وتلتزم دروس الدعم بالأطر المرجعية لوزارة التربية الوطنية."
      }
    },
    {
      id: "flexible-schedules",
      iconName: "Clock",
      title: {
        fr: "Horaires Flexibles 6 Jours / 7",
        ar: "مرونة في المواعيد طيلة 6 أيام أسبوعياً"
      },
      description: {
        fr: "Créneaux en fin d'après-midi, en soirée pour les étudiants et actifs, ainsi que des formules concentrées le samedi et dimanche.",
        ar: "حصص مسائية مريحة للطلبة والمهنيين بعد أوقات العمل والدراسة، بالإضافة إلى أفواج منظمة خلال نهاية الأسبوع."
      }
    },
    {
      id: "modern-environment",
      iconName: "Building2",
      title: {
        fr: "Cadre Confortable en Plein Centre de Fès",
        ar: "فضاء عصري ومكيف بقلب مدينة فاس"
      },
      description: {
        fr: "Locaux lumineux, calmes et climatisés sur l'Avenue Hassan II, équipés d'écrans de projection et d'un espace de travail propice à la concentration.",
        ar: "مقر مجهز، هادئ ومكيف بشارع الحسن الثاني، مزود بوسائل عرض سمعية بصرية حديثة وفضاء هادئ للمطالعة."
      }
    },
    {
      id: "parental-followup",
      iconName: "ShieldCheck",
      title: {
        fr: "Suivi Régulier & Transparence",
        ar: "تواصل دوري وشفافية مع الأولياء"
      },
      description: {
        fr: "Pour le soutien scolaire : pointages d'assiduité transmis aux parents, devoirs surveillés réguliers et bilans d'étape trimestriels.",
        ar: "بالنسبة للدعم المدرسي: تتبع صارم للمواظبة والغياب، فروض محروسة دورية وتقارير منتظمة تطلع أولياء الأمور على النتائج."
      }
    }
  ],

  // 4 Steps Registration Process
  registrationSteps: [
    {
      step: 1,
      number: "01",
      title: {
        fr: "Premier Contact via WhatsApp ou Visite",
        ar: "التواصل الأولي عبر واتساب أو زيارة المقر"
      },
      description: {
        fr: "Échangez rapidement avec notre équipe sur WhatsApp ou passez à nos locaux situés Avenue Hassan II à Fès pour découvrir nos programmes.",
        ar: "تواصل معنا مباشرة عبر رسالة واتساب سريعة أو تفضل بزيارة مركزنا بشارع الحسن الثاني لاكتشاف البرامج وقاعات الدراسة."
      },
      actionText: {
        fr: "Écrire sur WhatsApp",
        ar: "مراسلتنا عبر واتساب"
      }
    },
    {
      step: 2,
      number: "02",
      title: {
        fr: "Évaluation Diagnostique Gratuite",
        ar: "تقييم المستوى والمقابلة التوجيهية"
      },
      description: {
        fr: "Passez un test écrit et un entretien oral court sans engagement afin de déterminer avec certitude vos points forts et axes d'amélioration.",
        ar: "اجتياز اختبار كتابي وشفوي قصير مجاني بدون أي التزام مالي، لتشخيص مستواك وتحديد أهدافك التعليمية بوضوح."
      },
      actionText: {
        fr: "Réserver un test gratuit",
        ar: "حجز موعد التقييم"
      }
    },
    {
      step: 3,
      number: "03",
      title: {
        fr: "Choix du Groupe & du Planning",
        ar: "اختيار الفوج والتوقيت الملائم"
      },
      description: {
        fr: "Sélectionnez le groupe correspondant à votre niveau et le créneau horaire qui s'intègre harmonieusement dans votre semaine.",
        ar: "اختيار الفوج الذي يناسب مستواك الفعلي والتوقيت الزمني الذي يتماشى مع التزاماتك الدراسية أو المهنية."
      },
      actionText: {
        fr: "Consulter les créneaux",
        ar: "الاطلاع على المواعيد"
      }
    },
    {
      step: 4,
      number: "04",
      title: {
        fr: "Finalisation & Début des Cours",
        ar: "تأكيد التسجيل وانطلاق الحصص"
      },
      description: {
        fr: "Validation simple de votre inscription, remise du dossier d'accueil et des supports de cours, puis début immédiat de votre apprentissage.",
        ar: "إتمام إجراءات التسجيل بكل بساطة، استلام الملف التربوي والكتب والمراجع، والانضمام مباشرة لأولى الحصص التفاعلية."
      },
      actionText: {
        fr: "Démarrer l'inscription",
        ar: "بدء إجراءات التسجيل"
      }
    }
  ],

  // Frequently Asked Questions (Authentic, realistic academic queries)
  faqs: [
    {
      question: {
        fr: "Quel est le nombre maximal d'élèves par groupe ?",
        ar: "كم يبلغ الحد الأقصى لعدد التلاميذ في الفوج الواحد؟"
      },
      answer: {
        fr: "Pour garantir une progression effective et une prise de parole systématique, nos groupes de langues ne dépassent jamais 10 à 12 personnes (souvent 8 apprenants). Pour le soutien scolaire, l'effectif est strictement plafonné à 12 élèves par salle.",
        ar: "لضمان استفادة حقيقية وفرصة دائمة للتحدث والمشاركة، لا تتجاوز أفواج اللغات لدينا 8 إلى 12 فرداً كحد أقصى. وفي حصص الدعم المدرسي، لا يزيد عدد التلاميذ عن 12 تلميذاً في القاعة."
      }
    },
    {
      question: {
        fr: "Le test de niveau d'entrée est-il payant ou engageant ?",
        ar: "هل اختبار تحديد المستوى مؤدى عنه أو يترتب عليه التزام بالتسجيل؟"
      },
      answer: {
        fr: "Absolument pas. Le test d'évaluation diagnostique est 100% gratuit et sans aucun engagement. Il permet à l'équipe pédagogique d'évaluer vos acquis et de vous conseiller honnêtement la formation la plus adaptée.",
        ar: "لا، اختبار تحديد المستوى مجاني 100% وبدون أي التزام مسبق. هدفه الأساسي هو تشخيص مكتسباتك وتوجيهك بنزاهة نحو المسار الذي يخدم مصلحتك التعليمية."
      }
    },
    {
      question: {
        fr: "Peut-on rejoindre une formation en cours d'année scolaire ?",
        ar: "هل يمكن الالتحاق بالدورات التكوينية خلال فترات السنة الدراسية؟"
      },
      answer: {
        fr: "Oui. En langues, de nouvelles sessions démarrent chaque mois en fonction des inscriptions. En soutien scolaire, un élève peut intégrer un groupe après évaluation pour s'assurer qu'il est en phase avec la progression du programme.",
        ar: "نعم بالتأكيد. بالنسبة للغات، نفتتح أفواجاً جديدة بصفة دورية كل شهر. أما بالنسبة للدعم المدرسي، فيمكن الالتحاق بالفوج بعد مراجعة مستواه للتأكد من مواكبته للمقرر الدراسي الحالي."
      }
    },
    {
      question: {
        fr: "Préparez-vous aux examens officiels internationaux (DELF, TOEFL, Goethe) ?",
        ar: "هل توفرون التحضير للاختبارات الدولية الرسمية (DELF، TOEFL، معهد غوته)؟"
      },
      answer: {
        fr: "Oui, c'est l'une de nos spécialités majeures. Nos programmes ciblent précisément les épreuves officielles : entraînement aux QCM, exercices d'écoute, rédaction académique et simulations d'entretiens oraux.",
        ar: "نعم، هذا أحد مجالات تخصصنا الأساسية. تركز دوراتنا التدريبية على المعايير المعتمدة في هذه الاختبارات: تمارين الاستماع، التعبير الكتابي الأكاديمي، والمحاكاة الشفوية الدقيقة."
      }
    },
    {
      question: {
        fr: "Proposez-vous des cours particuliers individuels (one-to-one) ?",
        ar: "هل تقدمون حصصاً خاصة فردية (دروس خاصة وجه لوجه)؟"
      },
      answer: {
        fr: "Oui, sur demande et selon la disponibilité des enseignants. La formule individuelle est idéale pour les personnes ayant des contraintes horaires très spécifiques ou un objectif d'examen à court terme.",
        ar: "نعم، نوفر صيغة الحصص الفردية حسب رغبة المتعلم وجدول المواعيد، وهي صيغة مناسبة جداً للراغبين في تكوين مكثف وسريع أو لمن لديهم التزامات مهنية خاصة."
      }
    },
    {
      question: {
        fr: "Où se situent exactement vos locaux à Fès et comment venir ?",
        ar: "أين يوجد مقر المركز بالتحديد في فاس وكيف يمكن الوصول إليه؟"
      },
      answer: {
        fr: "Nous sommes idéalement situés sur l'Avenue Hassan II (Immeuble Al-Andalous, 3ème étage), en face de l'Hôtel Atlas Volubilis et à 2 minutes à pied de la Place Florence. Très facile d'accès en Petit Taxi ou bus urbain, avec stationnement à proximité.",
        ar: "يقع المركز في موقع استراتيجي بشارع الحسن الثاني (عمارة الأندلس، الطابق الثالث)، قبالة فندق أطلس وليلي وعلى بعد دقيقتين سيراً من ساحة فلورنسا. يسهل الوصول إليه عبر التاكسي الصغير أو الحافلات، مع توفر أماكن لركن السيارات."
      }
    },
    {
      question: {
        fr: "Quelles sont les facilités de paiement acceptées ?",
        ar: "ما هي طرق وتسهيلات الأداء المعتمدة لديكم؟"
      },
      answer: {
        fr: "Nous proposons des règlements mensuels, trimestriels ou par module avec des tarifs transparents. Des facilités d'échelonnement et des réductions pour fratries sont également applicables.",
        ar: "نعتمد صيغ دفع شهرية أو دورية حسب الوحدات المختارة، مع تعريفة واضحة ومحددة مسبقاً، وإمكانية الاستفادة من تخفيضات خاصة بالإخوة وأفراد العائلة الواحدة."
      }
    }
  ]
};
