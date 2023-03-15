import React from 'react';
import GithubIcon from '../icons/GithubIcon';
import LinkedinIcon from '../icons/LinkedinIcon';
import TwitterIcon from '../icons/TwitterIcon';
import HomeSocialsLink from './SocialsLink';

const iconSize = { width: 15, height: 15 };

export default function HomeSocials() {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-base-content/40 h-12 w-[1px]" />

      <HomeSocialsLink url={'https://twitter.com/_JorgeBarron/'}>
        <TwitterIcon {...iconSize} />
      </HomeSocialsLink>

      <HomeSocialsLink url={'https://www.linkedin.com/in/jorgebarrondev/'}>
        <LinkedinIcon {...iconSize} />
      </HomeSocialsLink>

      <HomeSocialsLink url={'https://github.com/jorge8168711'}>
        <GithubIcon {...iconSize} />
      </HomeSocialsLink>

      <div className="bg-base-content/40 h-12 w-[1px]" />
    </div>
  );
}
