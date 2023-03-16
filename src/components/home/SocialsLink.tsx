import React from 'react';

export default function HomeSocialsLink({
  children,
  url,
}: {
  children: React.ReactNode;
  url: string;
}) {
  return (
    <a
      className="transition-all link text-base-content/40 hover:text-base-content"
      href={url}
      target="__blank"
      rel="nofollow noreferrer noopener">
      {children}
    </a>
  );
}
