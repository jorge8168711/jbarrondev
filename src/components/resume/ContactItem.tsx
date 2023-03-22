type ContactItemProps = {
  url?: string;
  label: string;
  children: React.ReactNode;
  showOnPrint?: boolean;
};

export default function ContactItem({ children, url, label, showOnPrint }: ContactItemProps) {
  const printClass = showOnPrint ? 'hidden print:inline-flex' : 'inline-flex';

  if (!url) {
    return <p className={`${printClass} items-center m-0 text-base-content`}>{children}</p>;
  }

  return (
    <a
      aria-label={label}
      href={url}
      target="__blank"
      rel="nofollow noreferrer noopener"
      className={`${printClass} items-center link link-hover`}>
      {children}
    </a>
  );
}

ContactItem.defaultProps = {
  url: '',
  showOnPrint: false,
};
