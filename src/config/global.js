export default {
  global: {
    Name: 'Diagnóstico y oportunidades solidarias',
    Description:
      'El componente formativo desarrolla las competencias necesarias para realizar diagnósticos organizacionales en contextos de economía solidaria, analizando el entorno territorial e identificando necesidades, recursos y oportunidades. A través del uso de herramientas como el análisis DOFA, el mapa de actores y el trabajo colaborativo, se fortalece la capacidad de los aprendices para formular iniciativas solidarias viables y sostenibles que respondan a las realidades de su territorio.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.svg',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
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
        titulo: 'Diagnóstico en organizaciones solidarias',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Fundamentos de diagnóstico organizacional',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Importancia del análisis en contextos comunitarios',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Enfoques para comprender la organización',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Fases del proceso de diagnóstico',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Herramientas para el diagnóstico organizacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Análisis DOFA aplicado al sector solidario',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas para recolectar información',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Reconocimiento de factores del entorno',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Priorización de problemáticas',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Contexto territorial y necesidades comunitarias',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Caracterización del territorio',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Identificación de necesidades comunitarias',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Reconocimiento de recursos disponibles',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Relación entre necesidades y recursos',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Recursos para el desarrollo territorial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto y clasificación de recursos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos de recursos del territorio',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Gestión y aprovechamiento de recursos',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Limitaciones y potencialidades del territorio ',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Trabajo colaborativo comunitario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto de trabajo colaborativo',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Estrategias de articulación comunitaria',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Técnicas de trabajo en equipo',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Construcción de redes y alianzas ',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Oportunidades para iniciativas solidarias',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Concepto de oportunidad en contextos territoriales',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Análisis de oportunidades a partir del diagnóstico',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Formulación de iniciativas',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Viabilidad de iniciativas solidarias',
            hash: 't_6_4',
          },
        ],
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
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'Análisis DOFA',
      significado:
        'herramienta que identifica debilidades, oportunidades, fortalezas y amenazas de una organización.',
    },
    {
      termino: 'Caracterización territorial',
      significado:
        'proceso que describe las condiciones sociales, económicas, culturales y productivas de un territorio.',
    },
    {
      termino: 'Desarrollo territorial',
      significado:
        'proceso que mejora las condiciones de vida mediante recursos, capacidades y participación local.',
    },
    {
      termino: 'Diagnóstico organizacional',
      significado:
        'proceso sistemático y participativo que analiza la situación de una organización.',
    },
    {
      termino: 'Iniciativa solidaria',
      significado:
        'propuesta colectiva orientada al bienestar común mediante cooperación y participación.',
    },
    {
      termino: 'Oportunidad',
      significado:
        'condición favorable del entorno que puede aprovecharse para mejorar una organización o comunidad.',
    },
    {
      termino: 'Priorización',
      significado:
        'selección de necesidades o problemas según su importancia, urgencia e impacto.',
    },
    {
      termino: 'Redes y alianzas',
      significado:
        'acuerdos de cooperación entre actores para lograr objetivos comunes.',
    },
    {
      termino: 'Trabajo colaborativo',
      significado:
        'forma de trabajo basada en la participación, la coordinación y la responsabilidad compartida.',
    },
    {
      termino: 'Viabilidad',
      significado:
        'condición que permite desarrollar una iniciativa con los recursos y capacidades disponibles.',
    },
  ],
  referencias: [
    {
      referencia:
        'Boisier, S. (2005). ¿Hay espacio para el desarrollo local en la globalización? Revista de la CEPAL, 86, 47-62.',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1988). Ley 79 de 1988: por la cual se actualiza la legislación cooperativa.',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1998). Ley 454 de 1998: por la cual se determina el marco conceptual que regula la economía solidaria.',
    },
    {
      referencia:
        'Coraggio, J. L. (2011). Economía social y solidaria: el trabajo antes que el capital. Abya-Yala.',
    },
    {
      referencia:
        'Departamento Administrativo Nacional de la Economía Solidaria (DANSOCIAL). (2010). Manual para la promoción, creación y fortalecimiento de organizaciones de economía solidaria.',
    },
    {
      referencia:
        'Kliksberg, B. (2003). Hacia una economía con rostro humano. Fondo de Cultura Económica.',
    },
    {
      referencia:
        'Max-Neef, M., Elizalde, A., & Hopenhayn, M. (1994). Desarrollo a escala humana: conceptos, aplicaciones y algunas reflexiones. Icaria Editorial.',
    },
    {
      referencia:
        'Razeto, L. (1997). Los caminos de la economía de solidaridad. Vivarium.',
    },
    {
      referencia:
        'Robbins, S. P., & Judge, T. A. (2017). Comportamiento organizacional (17.ª ed.). Pearson.',
    },
    {
      referencia:
        'Schejtman, A., & Berdegué, J. A. (2004). Desarrollo territorial rural. RIMISP.',
    },
    {
      referencia:
        'Superintendencia de la Economía Solidaria. (2023). Informe del sector solidario en Colombia. ',
      link: 'https://www.supersolidaria.gov.co',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gustavo Ernesto Mariño Puentes',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gloria Lida Alzate Suárez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
