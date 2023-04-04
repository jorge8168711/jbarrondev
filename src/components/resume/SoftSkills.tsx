import { useTranslations } from 'next-intl';
import ResumeHeading from './ResumeHeading';

const SOFT_SKILLS_ID = 'soft-skills';

export default function SoftSkills() {
  const t = useTranslations('resume');

  return (
    <section className="w-full lg:w-6/12" id={SOFT_SKILLS_ID}>
      <ResumeHeading href={`#${SOFT_SKILLS_ID}`}>
        <span>{t(SOFT_SKILLS_ID)}</span>
      </ResumeHeading>

      <p className="mb-0">{t('soft-skills-list')}</p>
    </section>
  );
}
