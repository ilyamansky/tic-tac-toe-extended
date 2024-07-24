import { clsx } from "clsx";
import { Profile } from "../../profile";
import avatarSrc1 from "../../../images/avatarSrc1.png";
import avatarSrc2 from "../../../images/avatarSrc2.png";
import avatarSrc3 from "../../../images/avatarSrc3.png";
import avatarSrc4 from "../../../images/avatarSrc4.png";
import { GameSymbol } from "../../game-new/ui/game-symbol";
import { GAME_SYMBOLS } from "../../game-new/consts";
import { useState, useEffect } from "react";

const players = [
  {
    name: "Alex",
    rating: 1345,
    avatar: avatarSrc1,
    id: 1,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    name: "Mary",
    rating: 1346,
    avatar: avatarSrc2,
    id: 2,
    symbol: GAME_SYMBOLS.ZERO,
  },
  {
    name: "Kate",
    rating: 1395,
    avatar: avatarSrc3,
    id: 3,
    symbol: GAME_SYMBOLS.TRIANGLE,
  },
  {
    name: "Pete",
    rating: 3345,
    avatar: avatarSrc4,
    id: 4,
    symbol: GAME_SYMBOLS.SQUARE,
  },
];
export function GameInfo({
  className,
  playersCount,
  currentMove,
  isWinner,
  onPlayerTimeOver,
}) {
  return (
    <div
      className={clsx(
        className,
        "bg-white grid grid-cols-2 gap-5 rounded-2xl shadow-md py-4 px-8",
      )}
    >
      {players.slice(0, playersCount).map((player, index) => (
        <PlayerInfo
          key={player.id}
          playerInfo={player}
          isRight={index % 2 === 1}
          isTimerRunning={currentMove === player.symbol && !isWinner}
          onTimeOver={() => onPlayerTimeOver(player.symbol)}
        />
      ))}
    </div>
  );
}

function PlayerInfo({ playerInfo, isRight, isTimerRunning, onTimeOver }) {
  const [seconds, setSeconds] = useState(6);
  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(seconds % 60).padStart(2, "0");
  const isDanger = seconds < 10;

  useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(() => {
        setSeconds((s) => Math.max(s - 1, 0));
      }, 1000);
      return () => {
        clearInterval(interval);
        setSeconds(6);
      };
    }
  }, [isTimerRunning]);

  useEffect(() => {
    if (seconds === 0) {
      onTimeOver();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);

  function getTimerColor() {
    if (isTimerRunning) {
      return isDanger ? "text-orange-600" : "text-slate-900";
    }
    return "text-slate-200";
  }

  return (
    <div className="flex gap-3 items-center">
      <div className={clsx("relative", isRight && "order-3")}>
        <Profile
          className="w-44"
          key={playerInfo.id}
          name={playerInfo.name}
          rating={playerInfo.rating}
          avatar={playerInfo.avatar}
        />
        <div className="absolute flex items-center justify-center -left-1 -top-1 w-5 h-5 rounded-full bg-white">
          <GameSymbol symbol={playerInfo.symbol} />
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
