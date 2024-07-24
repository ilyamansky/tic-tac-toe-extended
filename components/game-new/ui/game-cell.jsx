import { GameSymbol } from "./game-symbol";
import { clsx } from "clsx";

export function GameCell({ onClick, isWinner, disabled, symbol }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "flex items-center justify-center border border-slate-200 -ml-px -mt-px",
        isWinner && "bg-orange-600/10",
      )}
    >
      {symbol && <GameSymbol symbol={symbol} className="w-3 h-3" />}
    </button>
  );
}
