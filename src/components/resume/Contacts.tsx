import ContactItem from './ContactItem';
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
      <ContactItem label={t('email')} url={`mailto:${MAIN_EMAIL}?subject=${t('mail-subject')}`}>
        {MAIN_EMAIL}
      </ContactItem>

      <span>●</span>

      <ContactItem label={t('phone')} url={`tel:${PHONE_COUNTRY_CODE}${PHONE}`}>
        <span className="inline-block min-w-[93px]">
          {PHONE_COUNTRY_CODE} {PHONE}
        </span>
      </ContactItem>

      <span>●</span>

      <ContactItem label={`${MY_NAME} LinkedIn`} url={LINKEDIN_URL}>
        /in/jorgebarrondev
      </ContactItem>

      <span>●</span>

      <ContactItem label={`${MY_NAME} GitHub`} url={GITHUB_URL}>
        github.com/jorge8168711
      </ContactItem>

      <span>●</span>

      <ContactItem label={t('location')}>{LOCATION}</ContactItem>
    </section>
  );
}
