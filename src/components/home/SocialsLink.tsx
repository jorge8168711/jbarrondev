import React from 'react';

export default function HomeSocialsLink({
  children,
  url,
  label,
}: {
  children: React.ReactNode;
  url: string;
  label: string;
}) {
  return (
    <a
      aria-label={label}
      className="transition-all link text-base-content/40 hover:text-accent"
      href={url}
      target="__blank"
      rel="nofollow noreferrer noopener">
      {children}
    </a>
  );
}
