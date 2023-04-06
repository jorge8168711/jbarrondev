import React from 'react';
import GithubIcon from '../icons/GithubIcon';
import LinkedinIcon from '../icons/LinkedinIcon';
import TwitterIcon from '../icons/TwitterIcon';
import HomeSocialsLink from './SocialsLink';
import { GITHUB_URL, LINKEDIN_URL, MY_NAME, TWITTER_URL } from '../../lib/constants';

const iconSize = { width: 15, height: 15 };

export default function HomeSocials({ isVertical }: { isVertical?: boolean }) {
  return (
    <>
      {isVertical && <div className="bg-base-content/30 h-12 w-[1px]" />}
      {!isVertical && <div className="bg-base-content/30 w-12 h-[1px]" />}

      <HomeSocialsLink url={TWITTER_URL} label={`${MY_NAME} Twitter`}>
        <TwitterIcon {...iconSize} />
      </HomeSocialsLink>

      <HomeSocialsLink url={LINKEDIN_URL} label={`${MY_NAME} LinkedIn`}>
        <LinkedinIcon {...iconSize} />
      </HomeSocialsLink>

      <HomeSocialsLink url={GITHUB_URL} label={`${MY_NAME} GitHub`}>
        <GithubIcon {...iconSize} />
      </HomeSocialsLink>

      {!isVertical && <div className="bg-base-content/30 w-12 h-[1px]" />}
      {isVertical && <div className="bg-base-content/30 h-12 w-[1px]" />}
    </>
  );
}

HomeSocials.defaultProps = {
  isVertical: true,
};
