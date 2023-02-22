import React from 'react';

export default function Logo() {
  return (
    <p className={`font-mono text-[18px] lg:text-[24px] flex items-center`}>
      <span className="font-light text-primary">jorge</span>
      <span className="text-accent font-bold px-1">[</span>
      <span className="font-normal">barron</span>
      <span className="text-accent font-bold px-1">]</span>
    </p>
  );
}
