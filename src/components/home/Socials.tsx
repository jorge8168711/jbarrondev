import React from 'react';
import GithubIcon from '../icons/GithubIcon';
import LinkedinIcon from '../icons/LinkedinIcon';
import TwitterIcon from '../icons/TwitterIcon';
import HomeSocialsLink from './SocialsLink';
import { GITHUB_URL, LINKEDIN_URL, TWITTER_URL } from '../../lib/constants';

const iconSize = { width: 15, height: 15 };

export default function HomeSocials({ isVertical }: { isVertical?: boolean }) {
  return (
    <>
      {isVertical && <div className="bg-base-content/40 h-12 w-[1px]" />}
      {!isVertical && <div className="bg-base-content/40 w-12 h-[1px]" />}

      <HomeSocialsLink url={TWITTER_URL} label="Jorge Barrón Twitter">
        <TwitterIcon {...iconSize} />
      </HomeSocialsLink>

      <HomeSocialsLink url={LINKEDIN_URL} label="Jorge Barrón LinkedIn">
        <LinkedinIcon {...iconSize} />
      </HomeSocialsLink>

      <HomeSocialsLink url={GITHUB_URL} label="Jorge Barrón GitHub">
        <GithubIcon {...iconSize} />
      </HomeSocialsLink>

      {!isVertical && <div className="bg-base-content/40 w-12 h-[1px]" />}
      {isVertical && <div className="bg-base-content/40 h-12 w-[1px]" />}
    </>
  );
}

HomeSocials.defaultProps = {
  isVertical: true,
};
