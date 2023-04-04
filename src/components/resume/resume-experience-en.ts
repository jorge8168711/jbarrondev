import { company1, company2, company3 } from './resume-companies';

const EN_EXPERIENCE = [
  {
    ...company1,
    duration: '1 year 8 months',
    positions: [
      {
        id: 'pronto_lead_javaScript_engineer',
        name: 'Lead JavaScript Engineer',
        start: new Date(2022, 3),
        end: new Date(2023, 1),
        duration: '11 months',
        achievementsTasks: [
          'Developed core features that attracted investors and increased customer acquisition for the company, resulting in significant revenue growth.',
          'Efficiently managed a team of front-end developers responsible for maintaining and implementing new features, resulting in improved collaboration and productivity.',
          'Redesigned critical modules to optimize performance and usability, resulting in faster software and a better user experience.',
          'Resolved simple and complex technical issues to achieve a high satisfaction rate, demonstrating excellent problem-solving skills and technical knowledge.',
        ],
      },

      {
        id: 'pronto_javaScript_engineer',
        name: 'JavaScript Engineer',
        start: new Date(2021, 6),
        end: new Date(2022, 2),
        duration: '9 months',
        achievementsTasks: [
          'Led the successful implementation of PDFTRON API to build multiple core features for the company, resulting in improved functionality and customer satisfaction.',
          'Achieved up to a 50% increase in coding efficiency for several of the company’s features, resulting in faster delivery times and increased productivity.',
          'Efficiently integrated third-party tools and components into the web application, enhancing functionality and a better user experience.',
        ],
      },
    ],
  },

  {
    ...company2,
    duration: '9 months',
    positions: [
      {
        id: 'narrative_javaScript_engineer',
        name: 'JavaScript Engineer',
        start: new Date(2020, 9),
        end: new Date(2021, 5),
        duration: '9 months',
        achievementsTasks: [
          'Played a crucial role in developing one of the most critical features of the company’s software, resulting in improved functionality and increased customer satisfaction.',
          'Designed custom graphics sets for mobile and desktop platforms using Angular, achieving a 99% client satisfaction rate and contributing to the company’s reputation for quality design work.',
          'Updated legacy code bases to modern development standards, improving the functionality and facilitating future development efforts.',
          'Designed and developed reusable software components that reduced development time by 30%, increasing productivity and enabling the team to focus on other critical tasks.',
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
          'Developed 30+ web projects utilizing HTML5, JavaScript, React.js, Next.js, Node.js, and Angular, contributing to significant revenue growth for the company.',
          'Collaborated as a CSS developer in 10+ projects for top international brands such as Puma, Michael Kors, and Lous Vuitton, consistently delivering high-quality work that met or exceeded client expectations.',
          'Created email templates in 20+ projects for organizations in diverse industries, resulting in improved email marketing campaigns and customer engagement.',
          'Successfully converted a large-scale project from Adobe Flash to React.js, enhancing end-user functionality and usability and providing long-term benefits for the company.',
        ],
      },
    ],
  },
];

export default EN_EXPERIENCE;
