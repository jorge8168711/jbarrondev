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
          'Desarrollé core features que atrajeron inversores y aumentaron la atracción de clientes para la empresa, lo que se tradujo en un crecimiento significativo de los ingresos.',
          'Gestionó eficazmente un equipo de desarrolladores front-end responsables del mantenimiento y la implementación de nuevas funciones, lo que mejoró la colaboración y la productividad.',
          'Rediseño de módulos críticos para optimizar el rendimiento y la usabilidad, lo que se tradujo en un software más rápido y una mejor experiencia de usuario.',
          'Resolví problemas técnicos simples y complejos para lograr un alto índice de satisfacción, demostrando excelentes habilidades de resolución de problemas y conocimientos técnicos.',
        ],
      },

      {
        id: 'pronto_javaScript_engineer',
        name: 'JavaScript Engineer',
        start: new Date(2021, 6),
        end: new Date(2022, 2),
        duration: '9 meses',
        achievementsTasks: [
          'Dirigí la implementación exitosa de la API de PDFTRON para crear varias funciones básicas para la empresa, lo que mejoró la funcionalidad y la satisfacción del cliente.',
          'Logré un aumento de hasta el 50% en la eficiencia del código para varias de las features de la empresa, lo que se tradujo en plazos de entrega más rápidos y una mayor productividad.',
          'Integración eficaz de herramientas y componentes de terceros en la aplicación web, mejorando la funcionalidad y la experiencia del usuario.',
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
          'Desempeñé un papel crucial en el desarrollo de una de las características más críticas del software de la empresa, lo que resultó en una funcionalidad mejorada y una mayor satisfacción del cliente.',
          'Diseñé conjuntos de gráficos personalizados para plataformas móviles y de escritorio utilizando Angular, logrando una tasa de satisfacción del cliente del 99% y contribuyendo a la reputación de la empresa por la calidad del trabajo de diseño.',
          'Actualización de bases de código legacy a estándares de desarrollo modernos, mejorando la funcionalidad y facilitando futuros esfuerzos de desarrollo.',
          'Diseñé y desarrollé componentes de software reutilizables que redujeron el tiempo de desarrollo en un 30%, aumentando la productividad y permitiendo al equipo centrarse en otras tareas críticas.',
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
          'Desarrollé más de 30 proyectos web utilizando HTML5, JavaScript, React.js, Next.js, Node.js y Angular, contribuyendo a un crecimiento significativo de los ingresos de la empresa.',
          'Colaboré como desarrollador CSS en más de 10 proyectos para marcas internacionales como Puma, Michael Kors y Lous Vuitton, entregando constantemente un trabajo de alta calidad que cumplió o superó las expectativas del cliente.',
          'Creación de plantillas de correo electrónico en más de 20 proyectos para organizaciones de diversas industrias, lo que resultó en mejores campañas de marketing por correo electrónico y customer engagement.',
          'Migré con éxito un proyecto a gran escala de Adobe Flash a React.js, mejorando la funcionalidad y usabilidad del usuario final y proporcionando beneficios a largo plazo para la empresa.',
        ],
      },
    ],
  },
];

export default ES_EXPERIENCE;
