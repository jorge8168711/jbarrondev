import { useTranslations } from 'next-intl';
import { GITHUB_URL, MY_NAME } from '../../lib/constants';
import Logo from '../Logo';
import FooterBottomSection from './BottomSection';
import FooterLinks from './FooterLinks';

export default function Footer() {
  const t = useTranslations('layout');

  return (
    <footer className="bg-base-300 border-t border-base-content/30">
      <section className="content-box pt-10 text-base-content">
        <Logo small />

        <p className="text-sm mt-2 text-base-content/80">
          {t('footer-caption')}{' '}
          <a
            className="link no-underline font-bold hover:text-base-content/100"
            href={GITHUB_URL}
            target="__blank"
            rel="nofollow noreferrer noopener">
            {MY_NAME}
          </a>
        </p>

        <FooterLinks />
      </section>

      <FooterBottomSection />
    </footer>
  );
}
