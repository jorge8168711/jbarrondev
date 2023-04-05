import { useLocale } from 'next-intl';

export interface Position {
  id: string;
  name: string;
  start: Date;
  end: Date;
  duration: string;
  achievementsTasks: string[];
}

export interface Experience {
  id: string;
  company: string;
  url: string;
  location: string;
  duration: string;
  positions: Position[];
}

type ResumeExperienceItemProps = {
  experience: Experience;
};

export default function ResumeExperienceItem({ experience }: ResumeExperienceItemProps) {
  const locale = useLocale();

  return (
    <>
      {experience.positions.map((position) => (
        <article key={position.id} className="mb-4">
          <header>
            <p className="m-0 text-base-content">
              <strong className="font-bold">{position.name}</strong> <span>at </span>
              <a
                className="link link-hover text-base-content/80"
                href={experience.url}
                target="__blank"
                rel="nofollow noreferrer noopener">
                {experience.company}
              </a>
            </p>

            <p className="m-0 text-base-content/70 font-light">
              <span>
                {position.start.toLocaleDateString(locale, { year: 'numeric', month: 'long' })}
              </span>
              &nbsp; - &nbsp;
              <span>
                {position.end.toLocaleDateString(locale, { year: 'numeric', month: 'long' })}
              </span>
              &nbsp; · &nbsp;
              {position.duration}
              &nbsp; · &nbsp;
              {experience.location}
            </p>
          </header>

          <ul className="pl-10">
            {position.achievementsTasks.map((label) => (
              <li className="leading-normal" key={label}>
                {label}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}
