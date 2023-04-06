import React from 'react';

export default function Logo({ small = false }) {
  const sizeClasses = small ? 'text-[16px]' : 'text-[16px] sm:text-[20px]';

  return (
    <p className={`font-mono flex items-center ${sizeClasses}`}>
      <span className="font-light text-primary">jorge</span>
      <span className="text-accent font-bold px-1">[</span>
      <span className="font-normal">barron</span>
      <span className="text-accent font-bold px-1">]</span>
    </p>
  );
}
