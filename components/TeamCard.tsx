import type { TeamMember } from '@/content/team';

type Props = {
  member: TeamMember;
};

export default function TeamCard({ member }: Props) {
  return (
    <article className="flex flex-col">
      <div
        className="h-16 w-16 rounded-full bg-silphium-cream"
        aria-hidden="true"
      />
      <h3 className="font-display mt-4 text-lg font-semibold text-silphium-charcoal">
        {member.name}
      </h3>
      {member.role && (
        <p className="mt-0.5 text-sm font-medium text-silphium-red">
          {member.role}
        </p>
      )}
      {member.affiliation && (
        <p className="text-sm text-silphium-muted">{member.affiliation}</p>
      )}
      {member.bio && (
        <p className="mt-3 text-sm leading-6 text-silphium-charcoal">
          {member.bio}
        </p>
      )}
      {member.links && member.links.length > 0 && (
        <ul className="mt-3 flex gap-3">
          {member.links.map((link) => (
            <li key={link.url}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-silphium-muted underline-offset-2 hover:text-silphium-charcoal hover:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
