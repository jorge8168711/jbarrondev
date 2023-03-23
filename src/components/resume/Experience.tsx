import { useLocale } from 'next-intl';
import { EXP } from './resume-experience';
import ResumeExperienceItem from './ExperienceItem';

export default function ResumeExperience() {
  const locale = useLocale();

  return (
    <>
      {EXP[locale as keyof typeof EXP].map((item) => (
        <ResumeExperienceItem key={item.id} experience={item} />
      ))}
    </>
  );
}
