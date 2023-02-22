import React from 'react'

export default function Logo({ size }: { size: string }) {
  return (
    <p className={`font-mono text-[${size}px] flex items-center`}>
      <span className="text-accent font-bold px-1">~/</span>
      <span className="font-normal opacity-90">j</span>
      <span className="text-accent font-bold px-1">/</span>
      <span className="font-normal">barron</span>
    </p>
  )
}

Logo.defaultProps = {
  size: 24,
}
