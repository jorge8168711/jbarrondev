import { useLocale, useTranslations } from 'next-intl';
import ResumeExperienceItem from './ExperienceItem';
import ResumeHeading from './ResumeHeading';
import { EXP } from './resume-experience';

const WORK_EXPERIENCE_SKILLS_ID = 'work-experience';

export default function ResumeExperience() {
  const locale = useLocale();
  const t = useTranslations('resume');

  return (
    <section id={WORK_EXPERIENCE_SKILLS_ID}>
      <ResumeHeading href={`#${WORK_EXPERIENCE_SKILLS_ID}`}>
        <span>{t(WORK_EXPERIENCE_SKILLS_ID)}</span>
      </ResumeHeading>

      {EXP[locale as keyof typeof EXP].map((item) => (
        <ResumeExperienceItem key={item.id} experience={item} />
      ))}
    </section>
  );
}
