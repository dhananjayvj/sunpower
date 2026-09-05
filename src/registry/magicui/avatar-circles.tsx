export type AvatarCircle = {
  imageUrl: string;
  name: string;
};

export function AvatarCircles({
  numPeople,
  avatarUrls,
}: {
  numPeople?: number;
  avatarUrls: AvatarCircle[];
}) {
  return (
    <div className="flex items-center" aria-label={`${numPeople ?? avatarUrls.length} SUNPOWER customers`}>
      <div className="flex -space-x-3">
        {avatarUrls.map((avatar) => (
          <div
            key={avatar.name}
            className="rounded-full border-2 border-white bg-slate-100 transition-transform hover:z-10 hover:-translate-y-1"
          >
            <img
              src={avatar.imageUrl}
              alt={avatar.name}
              width={40}
              height={40}
              loading="lazy"
              decoding="async"
              className="h-10 w-10 rounded-full object-cover"
            />
          </div>
        ))}
      </div>
      <span className="ml-4 text-sm font-semibold text-slate-700">
        {avatarUrls.slice(0, 2).map((avatar) => avatar.name).join(", ")}
        {numPeople && numPeople > avatarUrls.length ? ` +${numPeople - avatarUrls.length} more customers` : ""}
      </span>
    </div>
  );
}
