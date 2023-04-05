import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { GITHUB_URL } from '../../lib/constants';
import { WORK_EXPERIENCE_SKILLS_ID } from '../resume/Experience';
import { TECHNICAL_SKILLS_ID } from '../resume/TechnicalSkills';

type FooterLinkItemProps = {
  url: string;
  children: React.ReactNode;
  external?: boolean;
};

function FooterLinksList({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div>
      <p className="text-accent mb-2">{title}</p>
      <ul className="text-base-content/80">{children}</ul>
    </div>
  );
}

function FooterLinkItem({ url, children, external = false }: FooterLinkItemProps) {
  const { locale: activeLocale } = useRouter();

  return (
    <li className="text-xs mb-1">
      {!external && (
        <Link
          href={url}
          locale={activeLocale}
          className="hover:text-base-content/100 hover:underline">
          {children}
        </Link>
      )}

      {external && (
        <a
          className="link no-underline hover:text-base-content/100 hover:underline"
          href={url}
          target="__blank"
          rel="nofollow noreferrer noopener">
          {children}
        </a>
      )}
    </li>
  );
}

export default function FooterLinks() {
  const t = useTranslations('layout');

  return (
    <div className="flex flex-wrap mt-8 gap-9">
      {/* resume sections */}
      <FooterLinksList title={t('resume')}>
        <>
          <FooterLinkItem url={`/resume#${WORK_EXPERIENCE_SKILLS_ID}`}>
            {t('relevant-experience')}
          </FooterLinkItem>

          <FooterLinkItem url={`/resume#${TECHNICAL_SKILLS_ID}`}>{t('skills')}</FooterLinkItem>
        </>
      </FooterLinksList>

      {/* other links section */}
      <FooterLinksList title={t('other')}>
        <FooterLinkItem url={`${GITHUB_URL}/jbarrondev`} external>
          {t('source-code')}
        </FooterLinkItem>
      </FooterLinksList>
    </div>
  );
}
