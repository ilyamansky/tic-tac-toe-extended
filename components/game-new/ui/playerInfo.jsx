import Image from "next/image";
import { GameSymbol } from "./game-symbol";
import clsx from "clsx";
import { useNow } from "../lib/timers";

export function PlayerInfo({
  isRight,
  name,
  avatar,
  rating,
  timerStartAt,
  timer,
  symbol,
}) {
  const now = useNow(1000, timerStartAt);
  const mils = now ? timer - (now - timerStartAt) : timer;

  const seconds = Math.ceil(Math.max(mils / 1000, 0));
  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(seconds % 60).padStart(2, "0");
  const isDanger = seconds < 10;
  function getTimerColor() {
    if (timerStartAt) {
      return isDanger ? "text-orange-600" : "text-slate-900";
    }
    return "text-slate-200";
  }
  return (
    <div className="flex gap-3 items-center">
      <div className={clsx("relative", isRight && "order-3")}>
        <div className="flex flex-row text-teal-600 gap-2 w-44 text-start">
          <Image src={avatar} alt="avatar" unoptimized />
          <div>
            <div className="text-lg leading-tight">{name}</div>
            <div className="text-slate-400 text-sm leading-tight">
              Рейтинг: {rating}
            </div>
          </div>
        </div>
        <div className="absolute flex items-center justify-center -left-1 -top-1 w-5 h-5 rounded-full bg-white">
          <GameSymbol symbol={symbol} />
        </div>
      </div>
      <div
        className={clsx("w-px bg-slate-400 mx-4 h-12", isRight && "order-2")}
      ></div>
      <div
        className={clsx(
          "flex items-center font-semibold w-[60px]",
          isRight && "order-1",
          getTimerColor(),
        )}
      >
        {minutesString}:{secondsString}
      </div>
    </div>
  );
}
