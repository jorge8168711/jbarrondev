import { useTranslations } from 'next-intl';
import { WORK_POSITION } from '../../lib/constants';

export default function ResumeHeader() {
  const t = useTranslations('resume');

  return (
    <div className="bg-base-100 print:py-8 print:px-10">
      <header className="mb-4 print:mb-3">
        <h1 className="font-light mb-1 text-4xl print:text-2xl print:mb-0">Jorge Barrón</h1>
        <h2 className="font-medium mb-0 text-base font-mono text-accent print:text-[12px] print:mb-0">
          {WORK_POSITION}
        </h2>
      </header>

      <article>
        <p className="leading-relaxed print:text-xs print:leading-normal print:m-0 print:font-medium">
          {t('introduction')}
        </p>
      </article>
    </div>
  );
}
