import Link from "next/link";
import { LeftArrowIcon } from "../game-new/ui/icons/left-arrow-icon";
import { StarIcon } from "../game-new/ui/icons/star-icon";
import { PlayerIcon } from "../game-new/ui/icons/player-icon";
import { HistoryIcon } from "../game-new/ui/icons/history-icon";

export function GameTitle({ playersCount }) {
  return (
    <div className="pl-2">
      <Link href="#" className="flex items-center gap-2 text-xs text-teal-600">
        <LeftArrowIcon />
        На Главную
      </Link>
      <h1 className="text-4xl">Крестики Нолики</h1>
      <div className="flex items-center gap-3 text-xs pt-3 text-slate-500">
        <StarIcon />
        <div className="flex items-center gap-1">
          <PlayerIcon /> {playersCount}
        </div>
        <div className="flex items-center gap-1">
          <HistoryIcon />1 мин на ход
        </div>
      </div>
    </div>
  );
}
