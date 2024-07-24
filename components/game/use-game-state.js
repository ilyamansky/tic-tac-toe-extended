import { useState } from "react";
import { GAME_SYMBOLS } from "./consts";
import { computeWinner, getNextMove } from "./model";

export function useGameState(playersCount) {
  const [{ currentMove, cells, playersTimeOver }, setGameState] = useState(
    () => ({
      currentMove: GAME_SYMBOLS.CROSS,
      cells: new Array(19 * 19).fill(null),
      playersTimeOver: [],
    }),
  );

  const nextMove = getNextMove(currentMove, playersCount, playersTimeOver);
  const winnerSequence = computeWinner(cells);

  const winnerSymbol =
    nextMove === currentMove ? currentMove : winnerSequence?.[0];

  const handleCellClick = (index) => {
    setGameState((prevGameState) => {
      if (prevGameState.cells[index]) {
        return prevGameState;
      }
      return {
        ...prevGameState,
        currentMove: getNextMove(
          prevGameState.currentMove,
          playersCount,
          prevGameState.playersTimeOver,
        ),
        cells: prevGameState.cells.map((cell, i) =>
          i === index ? prevGameState.currentMove : cell,
        ),
      };
    });
  };

  const handlePlayersTimeOver = (symbol) => {
    setGameState((prevGameState) => {
      return {
        ...prevGameState,
        playersTimeOver: [...prevGameState.playersTimeOver, symbol],
        currentMove: getNextMove(
          prevGameState.currentMove,
          playersCount,
          prevGameState.playersTimeOver,
        ),
      };
    });
  };

  return {
    currentMove,
    cells,
    handleCellClick,
    handlePlayersTimeOver,
    nextMove,
    winnerSequence,
    winnerSymbol,
  };
}
