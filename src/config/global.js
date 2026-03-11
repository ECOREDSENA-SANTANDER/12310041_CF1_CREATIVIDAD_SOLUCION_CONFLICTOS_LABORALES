export default {
  global: {
    Name: 'Pensamiento creativo y resolución de conflictos laborales',
    Description:
      'El componente Pensamiento creativo y resolución de conflictos laborales desarrolla habilidades para analizar, comprender y gestionar conflictos en el entorno organizacional desde una perspectiva creativa. Promueve el pensamiento flexible, la toma de decisiones responsables y la construcción de soluciones alineadas con los objetivos de la organización y las responsabilidades del rol laboral.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de la resolución de conflictos laborales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'La creatividad como habilidad para la solución de problemas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Factores que afectan la creatividad en la solución de conflictos',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Creatividad: obstáculos y bloqueos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Técnicas para desarrollar la creatividad',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'El pensamiento como base del comportamiento creativo',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Actitudes mentales que fortalecen el pensamiento creativo',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Identificación y definición de los problemas en el trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Tipos de problemas en el trabajo',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Conflicto personal o individual',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Aspectos para tener en cuenta sobre el estrés laboral',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Síndrome de desgaste personal o <em>burnout</em>',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Acoso laboral',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Clima organizacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Instrumentos para medir el clima organizacional',
            hash: 't_5_1',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Técnicas de identificación de problemas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Técnicas de definición de problemas en el entorno laboral',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF1_12310041_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  /* complementario: [
    {
      tema: 'Tema 1',
      referencia: 'Texto',
      tipo: 'Sitio web',
      link: 'Link',
    },
  ], */
  glosario: [
    {
      termino: 'Acoso laboral',
      significado:
        'conductas reiteradas de hostigamiento que afectan la dignidad, salud y permanencia del trabajador.',
    },
    {
      termino: 'Bloqueos creativos',
      significado:
        'barreras mentales, emocionales u organizacionales que limitan la generación de ideas innovadoras.',
    },
    {
      termino: '<em>Burnout</em>',
      significado:
        'síndrome de agotamiento físico y mental causado por estrés laboral crónico y prolongado.',
    },
    {
      termino: 'Clima organizacional',
      significado:
        'percepción compartida sobre el ambiente laboral, relaciones, condiciones y prácticas de la organización.',
    },
    {
      termino: 'Conflicto laboral',
      significado:
        'situación de desacuerdo derivada de normas, procesos, intereses o condiciones de trabajo.',
    },
    {
      termino: 'Conflicto personal',
      significado:
        'desacuerdo interpersonal originado por emociones, actitudes, valores o relaciones individuales.',
    },
    {
      termino: 'Creatividad',
      significado:
        'capacidad de generar ideas nuevas y útiles para resolver problemas o mejorar situaciones.',
    },
    {
      termino: 'Estrés laboral',
      significado:
        'respuesta física y emocional ante demandas laborales percibidas como excesivas o amenazantes.',
    },
    {
      termino: 'Pensamiento creativo',
      significado:
        'forma flexible y reflexiva de analizar situaciones para proponer soluciones innovadoras.',
    },
    {
      termino: 'Pensamiento crítico',
      significado:
        'capacidad de analizar información, cuestionar supuestos y tomar decisiones fundamentadas.',
    },
    {
      termino: 'Resolución de conflictos',
      significado:
        'proceso orientado a analizar, gestionar y solucionar desacuerdos de manera constructiva.',
    },
    {
      termino: 'Solución de problemas',
      significado:
        'proceso sistemático para identificar causas, evaluar alternativas y aplicar respuestas efectivas.',
    },
    {
      termino: 'Toma de decisiones',
      significado:
        'elección consciente de alternativas basada en análisis, responsabilidad y objetivos organizacionales.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bertoldo, G., & Tagliavini, A. R. (2023). Nuevas herramientas para el diálogo, negociación colectiva y resolución de conflictos en el ámbito de las relaciones laborales. Relaciones Laborales y Derecho del Empleo.',
      link: '',
    },
    {
      referencia:
        'Cely-Fuentes, D. Z. (2021). Teoría de resolución de conflictos de Johan Galtung para la implementación de la Cátedra de la Paz. Revista Docentes 2.0.',
      link: '',
    },
    {
      referencia:
        'Guilera, L. (2020). Anatomía de la creatividad. Marge Books.',
      link: '',
    },
    {
      referencia:
        'Redorta, J. (2020). Manual de gestión y resolución de conflictos: Principios, consejos y herramientas para mediadores y negociadores. Editorial Almuzara.',
      link: '',
    },
    {
      referencia:
        'Rodríguez, M. D. P. (2023). Resolución de conflictos en la empresa. ICB Editores.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Alexandra Romero López',
          cargo: 'Instructora virtual',
          centro:
            'Centro de Tecnologías para la Construcción y la Madera - Regional Distrito Capital',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Johann Sebastián Teran Carvajal',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Liliana Cristancho Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
