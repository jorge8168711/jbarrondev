import ContactItem from './ContactItem';
import LinkedinIcon from '../icons/LinkedinIcon';
import GithubIcon from '../icons/GithubIcon';

import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  MapPinIcon,
} from '@heroicons/react/24/solid';
import { useTranslations } from 'next-intl';
import {
  GITHUB_URL,
  LINKEDIN_URL,
  LOCATION,
  MAIN_EMAIL,
  PHONE,
  PHONE_COUNTRY_CODE,
} from '../../lib/constants';

const iconSize = { width: 12, height: 12 };

export default function ResumeContacts() {
  const t = useTranslations('resume');

  return (
    <div className="font-medium text-xs flex flex-wrap gap-6 bg-base-200 p-4">
      <ContactItem label={t('email')} url={`mailto:${MAIN_EMAIL}?subject=${t('mail-subject')}`}>
        <EnvelopeIcon className="mr-2" width={14} /> {MAIN_EMAIL}
      </ContactItem>

      <ContactItem label={t('phone')} url={`tel:${PHONE_COUNTRY_CODE}${PHONE}`}>
        <DevicePhoneMobileIcon className="mr-2" width={14} /> {PHONE_COUNTRY_CODE} {PHONE}
      </ContactItem>

      <ContactItem label={t('location')}>
        <MapPinIcon className="mr-2" width={14} /> {LOCATION}
      </ContactItem>

      <ContactItem label="Jorge Barrón LinkedIn" url={LINKEDIN_URL}>
        <LinkedinIcon {...iconSize} />
        <span className="ml-2">linkedin.com/in/jorgebarrondev</span>
      </ContactItem>

      <ContactItem label="Jorge Barrón GitHub" url={GITHUB_URL}>
        <GithubIcon {...iconSize} />
        <span className="ml-2">github.com/jorge8168711</span>
      </ContactItem>

      <ContactItem showOnPrint label="jbarron.dev" url="https://jbarron.dev">
        <GlobeAltIcon className="mr-2" width={14} />
        jbarron.dev
      </ContactItem>
    </div>
  );
}
