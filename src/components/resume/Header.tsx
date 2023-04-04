import { useTranslations } from 'next-intl';
import { MY_NAME, WORK_POSITION } from '../../lib/constants';

export default function ResumeHeader() {
  const t = useTranslations('resume');

  return (
    <>
      <header>
        <h1 className="mb-1 uppercase font-semibold">{MY_NAME}</h1>
        <h2 className="m-0 text-base text-accent/80 font-mono uppercase">{WORK_POSITION}</h2>
      </header>

      <article>
        <p className="mb-0">{t('introduction')}</p>
      </article>
    </>
  );
}
