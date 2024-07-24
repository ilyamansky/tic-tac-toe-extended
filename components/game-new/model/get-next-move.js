import { GAME_SYMBOLS_ORDER } from "../consts";

export function getNextMove({ currentMove, playersCount, timers }) {
  const slicedMoveOrder = GAME_SYMBOLS_ORDER.slice(0, playersCount).filter(
    (symbol) => timers[symbol] > 0,
  );
  let nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1;
  return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0];
}
