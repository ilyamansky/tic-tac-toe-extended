import { HistoryIcon } from "./icons/history-icon";
import { PlayerIcon } from "./icons/player-icon";
import { StarIcon } from "./icons/star-icon";

export function GameInfo({ playersCount, timeMode, isRatingGame }) {
  return (
    <div className="flex items-center gap-3 text-xs pt-3 text-slate-500">
      {isRatingGame && <StarIcon />}
      <div className="flex items-center gap-1">
        <PlayerIcon /> {playersCount}
      </div>
      <div className="flex items-center gap-1">
        <HistoryIcon />
        {timeMode}
      </div>
    </div>
  );
}
