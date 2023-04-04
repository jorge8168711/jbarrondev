import ResumeHeading from './ResumeHeading';
import { useTranslations } from 'next-intl';

const TECHNICAL_SKILLS_ID = 'technical-skills';
const SKILLS = [
  {
    id: 'programming-tech',
    options: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'CSS', 'HTML5', 'SASS'],
  },
  {
    id: 'web-development',
    options: ['SVG', 'Git', 'Testing/Debugging', 'Responsive design', 'Cypress', 'Storybook'],
  },
  {
    id: 'css-libs',
    options: ['Bulma', 'Foundation', 'Bootstrap', 'Tailwind CSS', 'daisyUI'],
  },
  {
    id: 'js-libs',
    options: [
      'React.js',
      'Next.js',
      'React Native',
      'Preact',
      'Redux',
      'Node.js/Express',
      'Jest',
      'Testing Library',
    ],
  },
  {
    id: 'component-libs',
    options: ['Material-UI', 'Chakra UI', 'React Bootstrap', 'Headless UI'],
  },
];

export default function TechnicalSkills() {
  const t = useTranslations('resume');

  return (
    <section id={TECHNICAL_SKILLS_ID}>
      <ResumeHeading href={`#${TECHNICAL_SKILLS_ID}`}>
        <span>{t(TECHNICAL_SKILLS_ID)}</span>
      </ResumeHeading>

      <div className="flex flex-wrap">
        {SKILLS.map((skill, i) => (
          <div key={skill.id} className="w-full lg:w-6/12">
            <h4 className="mb-1 mt-0">{t(skill.id)}</h4>
            <p className={i + 1 === SKILLS.length ? 'mb-0' : ''}>{skill.options.join(', ')}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
