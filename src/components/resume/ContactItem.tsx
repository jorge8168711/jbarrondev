type ContactItemProps = {
  url?: string;
  label: string;
  children: React.ReactNode;
};

export default function ResumeContactItem({ children, url, label }: ContactItemProps) {
  if (!url) {
    return <p className="text-base-content/70 m-0">{children}</p>;
  }

  return (
    <a
      aria-label={label}
      href={url}
      target="__blank"
      rel="nofollow noreferrer noopener"
      className="text-base-content/70 link link-hover">
      {children}
    </a>
  );
}

ResumeContactItem.defaultProps = {
  url: '',
};
