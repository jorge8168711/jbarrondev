import { useTranslations } from 'next-intl';
import ResumeHeading from './ResumeHeading';

const LANGUAGES_ID = 'languages';

export default function ResumeLanguages() {
  const t = useTranslations('resume');

  return (
    <section className="w-full lg:w-6/12" id={LANGUAGES_ID}>
      <ResumeHeading href={`#${LANGUAGES_ID}`}>
        <span>{t(LANGUAGES_ID)}</span>
      </ResumeHeading>

      <p className="m-0">
        <strong>{t('languages-english')}</strong> - {t('languages-english-desc')}
      </p>

      <p className="m-0">
        <strong>{t('languages-spanish')}</strong> - {t('languages-spanish-desc')}
      </p>
    </section>
  );
}
