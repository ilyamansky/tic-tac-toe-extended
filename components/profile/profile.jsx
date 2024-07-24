import Image from "next/image";
import avatarSrc1 from "../game-new/ui/images/avatarSrc1.png";
export function Profile({ name, rating, avatar = avatarSrc1 }) {
  return (
    <div className="flex flex-row text-teal-600 gap-2 text-start">
      <Image src={avatar} alt="avatar" unoptimized />
      <div>
        <div className="text-lg leading-tight">{name}</div>
        <div className="text-slate-400 text-sm leading-tight">
          Рейтинг: {rating}
        </div>
      </div>
    </div>
  );
}
