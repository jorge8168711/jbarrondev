import { MY_NAME } from '../../lib/constants';
import HomeSocials from '../home/Socials';

export default function FooterBottomSection() {
  const year = new Date().getFullYear();

  return (
    <section className="content-box pb-10 pt-8">
      <div className="flex gap-4 items-center justify-center">
        <HomeSocials isVertical={false} />
      </div>

      <p className="text-xs mt-8 text-center text-base-content/70">
        &copy; {year} {MY_NAME}
      </p>
    </section>
  );
}
