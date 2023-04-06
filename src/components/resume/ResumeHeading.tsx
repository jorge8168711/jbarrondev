type ResumeHeadingProps = {
  children: React.ReactNode;
  href?: string;
};

export default function ResumeHeading({ children, href }: ResumeHeadingProps) {
  return (
    <h3 className="text-primary font-mono uppercase font-medium mb-3">
      {Boolean(href) && (
        <a className="opacity-20 hover:opacity-60 mr-2 no-underline" href={href}>
          #
        </a>
      )}

      {children}
    </h3>
  );
}

ResumeHeading.defaultProps = {
  href: '',
};
