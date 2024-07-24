import { clsx } from "clsx";
import { UiButton } from "../uikit/ui-button";
import { GameSymbol } from "./game-symbol";
import { useGameState } from "./use-game-state";

export function GameField({
  className,
  playersCount,
  cells,
  currentMove,
  nextMove,
  handleCellClick,
  winnerSequence,
  winnerSymbol,
}) {
  return (
    <GameLayout className={className}>
      <GameMoveInfo
        currentMove={currentMove}
        nextMove={nextMove}
        actions={
          <>
            <UiButton size="md" variant="primary">
              Ничья
            </UiButton>
            <UiButton size="md" variant="outline">
              Сдаться
            </UiButton>
          </>
        }
      ></GameMoveInfo>

      <GameGrid>
        {cells?.map((symbol, index) => (
          <GameCell
            onClick={() => handleCellClick(index)}
            key={index}
            isWinner={winnerSequence?.includes(index)}
            disabled={!!winnerSymbol}
          >
            {symbol && <GameSymbol symbol={symbol} className="w-3 h-3" />}
          </GameCell>
        ))}
      </GameGrid>
    </GameLayout>
  );

  function GameLayout({ className, children }) {
    return (
      <div
        className={clsx(
          className,
          "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7",
        )}
      >
        {children}
      </div>
    );
  }

  function GameMoveInfo({ actions }) {
    return (
      <div className="flex gap-3">
        <div className="mr-auto">
          <div className="flex gap-2 items-center">
            Ход: <GameSymbol symbol={currentMove} className="w-5 h-5" />
          </div>
          <div className="flex gap-2 items-center text-sm">
            Следующий: <GameSymbol symbol={nextMove} className="h-3 w-3" />
          </div>
        </div>
        {actions}
      </div>
    );
  }

  function GameCell({ children, onClick, isWinner, disabled }) {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={clsx(
          "flex items-center justify-center border border-slate-200 -ml-px -mt-px",
          isWinner && "bg-orange-600/10",
        )}
      >
        {children}
      </button>
    );
  }

  function GameGrid({ children }) {
    return (
      <div className="mt-6 pl-px pt-px grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)]">
        {children}
      </div>
    );
  }
}
