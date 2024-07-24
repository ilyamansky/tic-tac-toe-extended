import { GAME_SYMBOLS } from "../consts";
import { getNextMove } from "./get-next-move";
import { GAME_SYMBOLS_ORDER } from "../consts";

export const GAME_STATE_ACTIONS = {
  CELL_CLICK: "cell-click",
  TICK: "tick",
};

export const initGameState = ({
  playersCount,
  defaultTimer,
  currentMoveStart,
}) => ({
  currentMove: GAME_SYMBOLS.CROSS,
  cells: new Array(19 * 19).fill(null),
  playersCount,
  currentMoveStart,
  timers: GAME_SYMBOLS_ORDER.reduce((timers, symbol, index) => {
    if (index < playersCount) {
      timers[symbol] = defaultTimer;
    }
    return timers;
  }, {}),
});

export const gameReducer = (state, action) => {
  switch (action.type) {
    case GAME_STATE_ACTIONS.CELL_CLICK: {
      const { index, now } = action;
      if (state.cells[index]) {
        return state;
      }
      return {
        ...state,
        currentMove: getNextMove(state),
        timers: updateTimers(state, now),
        cells: updateCell(state, index),
        currentMoveStart: now,
      };
    }
    case GAME_STATE_ACTIONS.TICK: {
      const { now } = action;
      if (!isTimeOver(state, now)) {
        return state;
      }
      return {
        ...state,
        currentMove: getNextMove(state),
        timers: updateTimers(state, now),
        currentMoveStart: now,
      };
    }
    default: {
      return state;
    }
  }
};

function updateTimers(gameState, now) {
  const diff = now - gameState.currentMoveStart;
  const timer = gameState.timers[gameState.currentMove];

  return {
    ...gameState.timers,
    [gameState.currentMove]: timer - diff,
  };
}

function updateCell(gameState, index) {
  return gameState.cells.map((cell, i) =>
    i === index ? gameState.currentMove : cell,
  );
}

function isTimeOver(gameState, now) {
  const timer = updateTimers(gameState, now)[gameState.currentMove];
  return timer <= 0;
}
