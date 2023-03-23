type ContactItemProps = {
  url?: string;
  label: string;
  children: React.ReactNode;
  showOnPrint?: boolean;
};

export default function ContactItem({ children, url, label, showOnPrint }: ContactItemProps) {
  const printClass = showOnPrint ? 'hidden print:inline-flex' : 'inline-flex';

  if (!url) {
    return (
      <p
        className={`${printClass} max-w-[250px] text-sm items-center m-0 text-base-content print:text-gray-600`}>
        {children}
      </p>
    );
  }

  return (
    <a
      aria-label={label}
      href={url}
      target="__blank"
      rel="nofollow noreferrer noopener"
      className={`${printClass} max-w-[250px] text-sm items-center link link-hover print:text-gray-600`}>
      {children}
    </a>
  );
}

ContactItem.defaultProps = {
  url: '',
  showOnPrint: false,
};
