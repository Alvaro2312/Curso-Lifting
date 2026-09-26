import { ModuleItem, TestimonialItem, FaqItem, ScheduleDay } from '../types';

export const COURSE_INFO = {
  title: "Curso Lifting de Pestañas de Cero a Pro",
  subtitle: "Técnica Tradicional & Técnica Coreana + Primeros Pasos en Publicidad en Redes Sociales",
  tagline: "Aprende el procedimiento más demandado del mundo de la belleza, cuida la salud de la mirada y crea un negocio rentable con agenda llena.",
  price: 120000,
  currency: "CLP",
  formattedPrice: "$120.000",
  reservationPercent: 50,
  reservationAmount: "$60.000",
  whatsappNumber: "56912345678", // standard international format
  nextEditionDate: "Próximo Fin de Semana",
  availableSpots: 6,
  totalSpots: 10,
};

export const EXCLUSIVE_BENEFITS = [
  {
    icon: "Award",
    title: "Doble Técnica Exclusiva",
    description: "Aprende tanto la técnica tradicional como la codiciada técnica coreana con acabado glossy y sin curvatura forzada.",
    tag: "El doble de conocimientos",
  },
  {
    icon: "FlaskConical",
    title: "Ciencia Química Real",
    description: "Comprende la acción de cada compuesto sobre los puentes de disulfuro para jamás quemar o debilitar una pestaña.",
    tag: "Aprendizaje Esencial",
  },
  {
    icon: "ShieldCheck",
    title: "Asesoría en Selección de Marcas",
    description: "Te guiamos para elegir insumos de alta gama y fórmulas certificadas, evitando invertir en marcas de baja calidad que puedan dañar las pestañas de tus clientas.",
    tag: "Te ayudamos a elegir",
  },
  {
    icon: "Video",
    title: "Demostración en Modelo Real",
    description: "Presencia el procedimiento completo paso a paso en una modelo real, aprendiendo la postura, aislamiento milimétrico y aplicación exacta.",
    tag: "Aprenderás paso a paso",
  },
  {
    icon: "TrendingUp",
    title: "Módulo Publicidad en Redes",
    description: "Estrategias de Meta Business Suite y anuncios en Instagram con Álvaro Petrillo para captar clientas desde la primera semana.",
    tag: "Ventaja Exclusiva",
  },
  {
    icon: "Headphones",
    title: "Asesoría Ilimitada Post-Curso",
    description: "Nunca estarás sola: tendrás canal directo para resolver dudas con tus futuras clientas en cualquier momento.",
    tag: "100% disponibles para ti",
  },
];

export const MODULES_DATA: ModuleItem[] = [
  {
    id: "m1",
    number: "01",
    title: "Biología y Anatomía de la Pestaña",
    subtitle: "La base médica y estética de un trabajo seguro",
    description: "Conocer la estructura capilar, anatomía ocular y ciclos biológicos te permite trabajar con total seguridad, respetando la salud e integridad de la pestaña natural de cada persona.",
    iconName: "Eye",
    highlight: "Cero daño capilar garantizado",
    topics: [
      "Estructura de la fibra capilar: cutícula, corteza y médula",
      "Fases del crecimiento: anágena, catágena y telógena",
      "Factores que alteran el ciclo biológico y contraindicaciones",
      "Protocolos de bioseguridad, higiene y esterilización de instrumental",
      "Consentimiento informado y ficha clínica profesional para clientas"
    ],
  },
  {
    id: "m2",
    number: "02",
    title: "Ciencia y Química del Procedimiento",
    subtitle: "El lifting es un proceso químico: domínalo como experta",
    description: "El lifting de pestañas es una modificación química de los puentes de disulfuro. Comprenderás qué hace cada producto, cómo actúan los agentes reductores y fijadores, y cómo calcular tiempos exactos.",
    iconName: "FlaskConical",
    highlight: "Control absoluto de tiempos de exposición",
    topics: [
      "Química de los puentes de disulfuro y reestructuración",
      "Paso 1 (reductores químicos) vs. Paso 2 (fijación y neutralización)",
      "Cómo reconocer reacciones químicas en la fibra en tiempo real",
      "Tiempos exactos según porosidad y grosor (sin tablas genéricas que queman)",
      "Tratamientos nutritivos post-químico: Botox de pestañas y queratina"
    ],
  },
  {
    id: "m3",
    number: "03",
    title: "Tipos de Moldes, Curvas y Tallas",
    subtitle: "La arquitectura de la mirada perfecta",
    description: "Los moldes son la herramienta fundamental en el lifting. Determinan la dirección, curvatura y elevación que tendrá la pestaña. Aprenderás a elegir el molde ideal para cada anatomía de párpado.",
    iconName: "Layers",
    highlight: "Elección precisa según anatomía del ojo",
    topics: [
      "Diferencias entre curvaturas: L, C, U, J y moldes anatómicos planos",
      "Tallas S, M, L, XL y cómo medir la longitud de la pestaña de la clienta",
      "Solución para ojos encapotados, párpados caídos y pestañas rebeldes hacia abajo",
      "Posicionamiento y adhesión milimétrica sin despegar las raíces",
      "Aislamiento y paralelismo perfecto sin pestañas cruzadas"
    ],
  },
  {
    id: "m4",
    number: "04",
    title: "Diagnóstico Profesional y Marcas Alta Gama",
    subtitle: "Evaluar antes de tocar para garantizar resultados top",
    description: "Aprenderás a identificar la porosidad de la pestaña, analizar la fibra antes de comenzar, seleccionar correctamente los productos según cada caso y conocerás las marcas de alta gama más destacadas del mercado internacional.",
    iconName: "Search",
    highlight: "Marcas premium y formulaciones seguras",
    topics: [
      "Prueba de porosidad y elasticidad de la fibra capilar",
      "Clasificación de pestañas: finas, medias, gruesas y resistentes",
      "Catálogo de marcas de alta gama recomendadas y dónde comprarlas",
      "Qué productos evitar para no manchar ni generar alergias en clientas",
      "Preparación de la zona periocular y desengrase correcto"
    ],
  },
  {
    id: "m5",
    number: "05",
    title: "Técnica Tradicional + Técnica Coreana",
    subtitle: "El secreto del efecto K-Beauty más cotizado",
    description: "Protocolos comparativos paso a paso para dominar ambas tendencias. La técnica tradicional para curvaturas estándar y la técnica coreana para máxima elevación desde la raíz con efecto laminado espejo.",
    iconName: "Sparkles",
    highlight: "Doble certificación práctica",
    topics: [
      "Paso a paso minucioso de la Técnica Tradicional",
      "Protocolo exclusivo de la Técnica Coreana (Lash Lamination K-Style)",
      "Tinturado profesional intenso: negro profundo y azul noche",
      "Tratamiento hidronutritivo sellador de cutícula",
      "Cuidados posteriores que debes entregar por escrito a tu clienta"
    ],
  },
  {
    id: "m6",
    number: "06",
    title: "Redes Sociales & Publicidad Digital",
    subtitle: "Por Álvaro Petrillo: Convierte tu talento en un negocio rentable",
    description: "No basta con ser excelente lashista; necesitas que las clientas te encuentren y te elijan. Aprenderás estrategia en Instagram, Meta Business Suite, anuncios pagados y cómo transformar tus redes en tu principal canal de ingresos.",
    iconName: "TrendingUp",
    highlight: "Estrategia comercial de captación continua",
    topics: [
      "Estrategia de perfil magnético en Instagram para servicios de belleza",
      "Administración y configuración de Meta Business Suite",
      "Creación de campañas de anuncios efectivas en Instagram y Facebook",
      "Segmentación geográfica local para clientas cerca de tu estudio o domicilio",
      "Cálculo de precios, rentabilidad, fidelización y métricas clave de desempeño"
    ],
  },
];

export const MENTORS = [
  {
    name: "Tiare Ávalos",
    title: "Especialista en Belleza & Master Lash Artist",
    experience: "+6 años de experiencia en el área de la belleza",
    image: "/images/tiare-avalos.png",
    candidateImages: [
      "/images/tiare-avalos.png",
      "/images/Diseño sin título (97).png",
      "/Diseño sin título (97).png",
      "/images/tiare.png",
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
    ],
    bio: "Profesional apasionada con más de 6 años transformando miradas y formando a nuevas artistas. En este curso compartirá sin reservas todo su conocimiento técnico, trucos químicos de alta gama y secretos de precisión para que realices procedimientos seguros e impecables desde tu primer día.",
    badges: [],
    quote: "Mi meta es que no solo aprendas la técnica, sino que adquieras la seguridad y la confianza de una profesional de alto nivel.",
  },
  {
    name: "Álvaro Petrillo",
    title: "Ingeniero Comercial & Especialista en Marketing Digital",
    experience: "8 años corriendo campañas de publicidad digital",
    image: "/images/alvaro-petrillo.png",
    candidateImages: [
      "/images/alvaro-petrillo.png",
      "/images/Diseño sin título (96).png",
      "/Diseño sin título (96).png",
      "/images/alvaro.png",
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
    ],
    bio: "Ingeniero Comercial con vasta trayectoria en marketing digital y escalabilidad de marcas. Combina una visión estratégica y comercial con el conocimiento práctico de las herramientas de Meta (Instagram y Facebook Ads) para transformar tus redes sociales en verdaderas máquinas de atracción de clientas.",
    badges: [],
    quote: "La mejor técnica del mundo no sirve si nadie sabe que existes. Te enseñaré a crear campañas de publicidad en Facebook e Instagram para captar tus primeras clientas.",
  },
];

export const SCHEDULE_DAYS: ScheduleDay[] = [
  {
    day: "Sábado",
    dateTag: "Jornada Teórica, Química & Estrategia Digital",
    focus: "Fundamentos científicos, diagnóstico de pestaña, moldes y marketing para atraer clientas.",
    blocks: [
      {
        time: "10:00 AM - 12:00 PM",
        title: "Biología, Anatomía & Higiene",
        description: "Estructura de la pestaña, ciclos foliculares, contraindicaciones médicas y protocolos de esterilización.",
        badge: "Teoría Médica",
      },
      {
        time: "12:00 PM - 14:00 PM",
        title: "Ciencia Química, Puentes de Disulfuro & Tiempos",
        description: "Composición de cada paso, pH, cómo actúan los químicos y determinación exacta de tiempos según porosidad.",
        badge: "Química Aplicada",
      },
      {
        time: "14:00 PM - 16:00 PM",
        title: "Pausa / Almuerzo",
        description: "Espacio libre para descanso y repaso de conceptos.",
      },
      {
        time: "16:00 PM - En adelante",
        title: "Moldes, Diagnóstico & Módulo Marketing con Álvaro Petrillo",
        description: "Selección de curvaturas, marcas de alta gama y Masterclass de Meta Business Suite, Instagram Ads y precios de servicios.",
        badge: "Marketing & Negocio",
      },
    ],
  },
  {
    day: "Domingo",
    dateTag: "Jornada Práctica & Demostraciones en Vivo",
    focus: "Observación de ambas técnicas en tiempo real y preparación de tu práctica en modelo real.",
    blocks: [
      {
        time: "10:00 AM - 13:30 PM",
        title: "Demostración en Vivo: Lifting Tradicional",
        description: "Procedimiento completo transmitido en vivo con cámara macro HD. Aislamiento, aplicación de producto, neutralización, tinte y botox.",
        badge: "Técnica Tradicional",
      },
      {
        time: "13:30 PM - 16:00 PM",
        title: "Pausa & Resolución de Dudas de la Técnica Clásica",
        description: "Análisis de casos particulares de clientas y preparación para la técnica coreana.",
      },
      {
        time: "16:00 PM - 19:30 PM",
        title: "Demostración en Vivo: Técnica Coreana (K-Lash Lift)",
        description: "Procedimiento exclusivo coreano transmitido en vivo. Efecto lamination, máxima elevación de raíz, alineación milimétrica y sellado glossy.",
        badge: "Técnica Coreana",
      },
      {
        time: "Cierre & Evaluación",
        title: "Instrucciones de Práctica en Modelo Real & Aprobación",
        description: "Guía detallada para grabar y fotografiar tu práctica en modelo real para recibir la retroalimentación y tu certificación oficial.",
        badge: "Certificación",
      },
    ],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    name: "Camila Henríquez",
    role: "Lash Artist",
    city: "Santiago",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    rating: 5,
    quote: "Tenía terror de quemar las pestañas de mis clientas porque en otro curso solo me dijeron 'déjalo 10 minutos'. Con Tiare entendí la química exacta y la técnica coreana es lo que más me piden. Además, la publicidad de Álvaro me trajo 14 clientas en mi primera semana.",
    achievement: "Recuperó su inversión en solo 4 días",
    beforeAfterImage: {
      before: "https://images.unsplash.com/photo-1583001809873-a128495da465?q=80&w=600&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=600&auto=format&fit=crop",
      description: "Pestaña recta y descendente transformada con Técnica Coreana Talla M",
    },
  },
  {
    id: "t2",
    name: "Valentina Morales",
    role: "Lash Artist",
    city: "Viña del Mar",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    rating: 5,
    quote: "La asesoría ilimitada es real. Tuve una clienta con párpado muy encapotado y pestañas cortitas, le escribí a Tiare por WhatsApp y me guió con el molde ideal. El resultado fue perfecto y la clienta volvió al mes siguiente.",
    achievement: "Factura más de $650.000 mensuales solo en lifting",
    beforeAfterImage: {
      before: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=600&auto=format&fit=crop",
      description: "Lifting tradicional con tinte negro profundo y nutrición con botox",
    },
  },
  {
    id: "t3",
    name: "Sofía Aránguiz",
    role: "Lash Artist",
    city: "Concepción",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop",
    rating: 5,
    quote: "Partí desde cero absoluto sin saber nada de pestañas. La clase de Meta Ads con Álvaro fue una revelación: aprendí a invertir $3.000 diarios en Instagram y hoy tengo lista de espera para los fines de semana. 100% recomendado.",
    achievement: "Agenda completa para los próximos 2 meses",
    beforeAfterImage: {
      before: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=600&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop",
      description: "Elevación extrema en ángulo de 90° sin quiebres ni puntas rizadas",
    },
  },
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    category: "general",
    question: "¿Necesito tener experiencia previa en estética o pestañas?",
    answer: "No, en absoluto. El curso está diseñado pedagógicamente para llevarte de cero a pro. Explicamos desde la anatomía más elemental y el uso correcto de las herramientas hasta las técnicas más avanzadas y cómo montar tus campañas de marketing digital.",
  },
  {
    id: "faq-2",
    category: "tecnica",
    question: "¿Cuál es la diferencia entre el lifting tradicional y el lifting coreano?",
    answer: "El lifting tradicional crea una curvatura curva uniforme a lo largo del molde. La técnica coreana (K-Lash Lift) utiliza moldes anatómicos especiales y técnicas de tensión milimétricas para lograr una máxima proyección desde la base sin rizar la punta hacia atrás, dejando un efecto visual de pestañas infinitas, abiertas y brillantes tipo máscara permanente.",
  },
  {
    id: "faq-3",
    category: "practica",
    question: "¿Cómo funciona la práctica en modelo real y la certificación?",
    answer: "Para asegurar la máxima calidad en los resultados cada alumna debe realizar una práctica en modelo real. Deberás grabar fragmentos clave del procedimiento, tomar fotografías de frente, perfil y ojos cerrados, y enviarla a la profesora. Tras su retroalimentación y aprobación, recibirás tu Certificado Oficial de Aprobación.",
  },
  {
    id: "faq-4",
    category: "general",
    question: "¿Qué significa que la asesoría post-curso sea ilimitada?",
    answer: "Significa que una vez finalizado el fin de semana intensivo, no te dejamos sola. Tendrás contacto directo para hacer consultas sobre tipos de moldes ante una clienta difícil, tiempos de exposición o dudas con la publicidad digital de Álvaro.",
  },
  {
    id: "faq-5",
    category: "tecnica",
    question: "¿Qué aprenderé en la sección de publicidad con Álvaro Petrillo?",
    answer: "Aprenderás a crear y configurar tu cuenta en Meta Business Suite, vincular Instagram, Facebook y Whatsapp, segmentar geográficamente para que tus anuncios se muestren a mujeres que viven cerca de tu local o domicilio y crear anuncios que conviertan visitas en reservas por WhatsApp.",
  },
  {
    id: "faq-6",
    category: "pago",
    question: "¿Cómo se reserva el cupo y cuáles son los medios de pago?",
    answer: "El valor total del curso es de $120.000. Para asegurar tu cupo (son cupos limitados por edición) reservas con el 50% ($60.000). El 50% restante se cancela hasta un día antes de iniciar las clases. Los pagos son mediante transferencia electrónica bancaria.",
  },
  {
    id: "faq-7",
    category: "practica",
    question: "¿Qué pasa si no puedo ver alguna sesión en vivo o quiero repasar?",
    answer: "Todas las transmisiones en vivo y demostraciones quedan grabadas en alta resolución dentro de tu portal de alumna para que puedas repasar los pasos las veces que necesites mientras atiendes a tus primeras clientas.",
  },
];
