import ResumeContactItem from './ContactItem';
import { useTranslations } from 'next-intl';
import {
  GITHUB_URL,
  LINKEDIN_URL,
  LOCATION,
  MAIN_EMAIL,
  MY_NAME,
  PHONE,
  PHONE_COUNTRY_CODE,
} from '../../lib/constants';

export default function ResumeContacts() {
  const t = useTranslations('resume');

  return (
    <section className="flex flex-wrap items-center gap-4 text-xs py-6">
      <ResumeContactItem
        label={t('email')}
        url={`mailto:${MAIN_EMAIL}?subject=${t('mail-subject')}`}>
        {MAIN_EMAIL}
      </ResumeContactItem>

      <span>●</span>

      <ResumeContactItem label={t('phone')} url={`tel:${PHONE_COUNTRY_CODE}${PHONE}`}>
        <span className="inline-block min-w-[93px]">
          {PHONE_COUNTRY_CODE} {PHONE}
        </span>
      </ResumeContactItem>

      <span>●</span>

      <ResumeContactItem label={`${MY_NAME} LinkedIn`} url={LINKEDIN_URL}>
        /in/jorgebarrondev
      </ResumeContactItem>

      <span>●</span>

      <ResumeContactItem label={`${MY_NAME} GitHub`} url={GITHUB_URL}>
        github.com/jorge8168711
      </ResumeContactItem>

      <span>●</span>

      <ResumeContactItem label={t('location')}>{LOCATION}</ResumeContactItem>
    </section>
  );
}
