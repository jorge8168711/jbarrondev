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
          'Built core features that allowed the company to attract investors and increase the number of customers interested in the product.',
          'Successfully managed a team of Front-end Developers responsible for maintaining and developing new features.',
          'Re-engineered critical modules to optimize the performance and usability of different features of the company’s software.',
          'Successfully fixed simple and complex technical issues achieving a high satisfaction rate.',
        ],
      },

      {
        id: 'pronto_javaScript_engineer',
        name: 'JavaScript Engineer',
        start: new Date(2021, 6),
        end: new Date(2022, 2),
        duration: '9 months',
        achievementsTasks: [
          'Led the implementation of PDFTRON API to build several of the company’s core features.',
          'Increase coding efficiency by up to 50% of several of the company’s features.',
          'Integrated third-party tools and components into the web app.',
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
          'Contributed to developing one of the most critical features of the company software.',
          'Created custom graphics sets for clients using Angular for mobile and desktop platforms, with 99% client satisfaction scores.',
          'Designed and developed reusable software components, which allowed the development team to reduce the development effort by 30%.',
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
          'Developed 30+ web projects with technologies like HTML5, JavaScript, React.js, Next.js, Node.js and Angular. My contributions helped the company increase its revenues significantly.',
          'Contributed as a CSS developer in +10 projects for international companies such as Puma, Michael Kors, and Lous Vuitton, which allowed me to develop solid skills in creating user interfaces.',
          'Successfully converted a big project from Adobe Flash to React.js.',
        ],
      },
    ],
  },
];

export default EN_EXPERIENCE;
