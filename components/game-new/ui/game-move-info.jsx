import { GameSymbol } from "./game-symbol";

export function GameMoveInfo({ currentMove, nextMove }) {
  return (
    <>
      <div className="flex gap-2 items-center">
        Ход: <GameSymbol symbol={currentMove} className="w-5 h-5" />
      </div>
      <div className="flex gap-2 items-center text-sm">
        Следующий: <GameSymbol symbol={nextMove} className="h-3 w-3" />
      </div>
    </>
  );
}
