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
    <div className="pt-4">
      <a
        className="link link-hover link-primary text-xl font-medium"
        href={experience.url}
        target="__blank"
        rel="nofollow noreferrer noopener">
        {experience.company}
      </a>

      {experience.positions.map((position) => (
        <div key={position.id} className="prose pl-6 mb-4 max-w-none">
          <p className="text-base-content font-semibold text-md m-0 leading-normal">
            {position.name}
          </p>

          <p className="flex items-center m-0 text-sm leading-normal">
            <span>
              {position.start.toLocaleDateString(locale, { year: 'numeric', month: 'long' })}
            </span>
            &nbsp; - &nbsp;
            <span>
              {position.end.toLocaleDateString(locale, { year: 'numeric', month: 'long' })}
            </span>
            &nbsp; | &nbsp;
            {position.duration}
          </p>

          <p className="m-0 text-sm leading-normal">{experience.location}</p>

          <ul className="leading-relaxed text-base-content font-light">
            {position.achievementsTasks.map((label) => (
              <li key={label}>{label}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
