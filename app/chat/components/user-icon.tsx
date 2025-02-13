export default function UserIcon({ userName }: Readonly<{ userName: string }>) {
  const userIcon = userName?.substring(0, 2).toUpperCase();
  return (
    <span className="w-12 h-12 rounded-full grid place-content-center  border-2 bg-white text-vspurple border-vspurple">
      {userIcon}
    </span>
  );
}
