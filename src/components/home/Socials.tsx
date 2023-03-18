import React from 'react';
import GithubIcon from '../icons/GithubIcon';
import LinkedinIcon from '../icons/LinkedinIcon';
import TwitterIcon from '../icons/TwitterIcon';
import HomeSocialsLink from './SocialsLink';

const iconSize = { width: 15, height: 15 };

export default function HomeSocials({ isVertical }: { isVertical?: boolean }) {
  return (
    <>
      {isVertical && <div className="bg-base-content/40 h-12 w-[1px]" />}
      {!isVertical && <div className="bg-base-content/40 w-12 h-[1px]" />}

      <HomeSocialsLink url={'https://twitter.com/_JorgeBarron/'} label="Jorge Barrón Twitter">
        <TwitterIcon {...iconSize} />
      </HomeSocialsLink>

      <HomeSocialsLink
        url={'https://www.linkedin.com/in/jorgebarrondev/'}
        label="Jorge Barrón linkedin">
        <LinkedinIcon {...iconSize} />
      </HomeSocialsLink>

      <HomeSocialsLink url={'https://github.com/jorge8168711'} label="Jorge Barrón GitHub">
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
