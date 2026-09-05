export type AvatarCircle = {
  imageUrl: string;
  profileUrl: string;
};

export function AvatarCircles({
  numPeople,
  avatarUrls,
}: {
  numPeople?: number;
  avatarUrls: AvatarCircle[];
}) {
  return (
    <div className="flex items-center" aria-label={`${numPeople ?? avatarUrls.length} people in the Sun Power community`}>
      <div className="flex -space-x-3">
        {avatarUrls.map((avatar) => (
          <a
            key={avatar.profileUrl}
            href={avatar.profileUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border-2 border-white bg-slate-100 transition-transform hover:z-10 hover:-translate-y-1"
          >
            <img
              src={avatar.imageUrl}
              alt=""
              width={40}
              height={40}
              loading="lazy"
              decoding="async"
              className="h-10 w-10 rounded-full object-cover"
            />
          </a>
        ))}
      </div>
      {numPeople ? <span className="ml-4 text-sm font-semibold text-slate-700">+{numPeople} customer conversations</span> : null}
    </div>
  );
}
