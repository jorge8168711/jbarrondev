import { company1, company2, company3 } from './resume-companies';

const ES_EXPERIENCE = [
  {
    ...company1,
    duration: '1 año 8 meses',
    positions: [
      {
        id: 'pronto_lead_javaScript_engineer',
        name: 'Lead JavaScript Engineer',
        start: new Date(2022, 3),
        end: new Date(2023, 1),
        duration: '11 meses',
        achievementsTasks: [
          'Desarrollé features esenciales que permitieron a la empresa atraer inversores y aumentar el número de clientes interesados en el producto.',
          'Gestioné con éxito un equipo de desarrolladores Front-end responsables del mantenimiento y desarrollo de nuevas funcionalidades.',
          'Reingeniería de módulos críticos para optimizar el rendimiento y la usabilidad de diferentes características del software de la empresa.',
          'Solucioné con éxito problemas técnicos simples y complejos logrando un alto índice de satisfacción.',
        ],
      },

      {
        id: 'pronto_javaScript_engineer',
        name: 'JavaScript Engineer',
        start: new Date(2021, 6),
        end: new Date(2022, 2),
        duration: '9 meses',
        achievementsTasks: [
          'Lideré la implementación de la API PDFTRON para crear varias de las funciones principales de la empresa.',
          'Aumenté la eficiencia del código en hasta un 50% de varios de los features de la empresa.',
          'Integré herramientas y componentes de terceros en la aplicación web.',
        ],
      },
    ],
  },

  {
    ...company2,
    duration: '9 meses',
    positions: [
      {
        id: 'narrative_javaScript_engineer',
        name: 'JavaScript Engineer',
        start: new Date(2020, 9),
        end: new Date(2021, 5),
        duration: '9 meses',
        achievementsTasks: [
          'Contribuí al desarrollo de una de las características más críticas del software de la empresa.',
          'Desarrollé conjuntos de gráficos personalizados para clientes utilizando Angular para plataformas móviles y de escritorio, con un 99% de satisfacción del cliente.',
          'Diseñé y desarrollé componentes de software reutilizables, lo que permitió al equipo de desarrollo reducir el esfuerzo de desarrollo en un 30%.',
        ],
      },
    ],
  },

  {
    ...company3,
    duration: '4 años 10 meses',
    positions: [
      {
        id: 'amplemind_frontend_developer',
        name: 'Front End Developer',
        start: new Date(2016, 0),
        end: new Date(2020, 9),
        duration: '4 años 10 meses',
        achievementsTasks: [
          'Desarrollé más de 30 proyectos web con tecnologías como HTML5, JavaScript, React.js, Next.js, Node.js y Angular. Mis contribuciones ayudaron a la empresa a aumentar sus ingresos de manera significativa.',
          'Contribuí como desarrollador CSS en más de 10 proyectos para empresas internacionales como Puma, Michael Kors y Lous Vuitton, lo que me permitió desarrollar sólidas habilidades en la creación de interfaces de usuario.',
          'Convertí exitosamente un gran proyecto de Adobe Flash a React.js.',
        ],
      },
    ],
  },
];

export default ES_EXPERIENCE;
