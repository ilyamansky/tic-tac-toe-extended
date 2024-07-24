import { PLAYERS } from "./consts";
import { BackLink } from "./ui/back-link";
import { GameInfo } from "./ui/game-info";
import { GameLayout } from "./ui/game-layout";
import { GameMoveInfo } from "./ui/game-move-info";
import { GameTitle } from "./ui/game-title";
import { PlayerInfo } from "./ui/playerInfo";
import { GameCell } from "./ui/game-cell";
import { GameOverModal } from "./ui/game-over-modal";
import { useReducer, useMemo, useCallback } from "react";
import {
  initGameState,
  gameReducer,
  GAME_STATE_ACTIONS,
} from "./model/game-reducer";
import { computeWinner } from "./model/compute-winner";
import { getNextMove } from "./model/get-next-move";
import { computeWinnerSymbol } from "./model/compute-winner-symbol";
import { computePlayerTimer } from "./model/compute-player-timer";
import { useInterval } from "./lib/timers";

const PLAYERS_COUNT = 4;

export function Game() {
  const [gameState, dispatch] = useReducer(
    gameReducer,
    {
      playersCount: PLAYERS_COUNT,
      defaultTimer: 60000,
      currentMoveStart: Date.now(),
    },
    initGameState,
  );

  const { currentMove, cells } = gameState;
  const nextMove = getNextMove(gameState);
  const winnerSequence = useMemo(() => computeWinner(gameState), [gameState]);
  const winnerSymbol = computeWinnerSymbol(gameState, {
    nextMove,
    winnerSequence,
  });

  useInterval(
    1000,
    !!gameState.currentMoveStart,
    useCallback(() => {
      dispatch({
        type: GAME_STATE_ACTIONS.TICK,
        now: Date.now(),
      });
    }, []),
  );

  const winnerPlayer = PLAYERS.find((player) => player.symbol === winnerSymbol);
  console.log(gameState);
  return (
    <>
      <GameLayout
        backLink={<BackLink />}
        title={<GameTitle />}
        gameInfo={
          <GameInfo isRatingGame timeMode="1 мин на ход" playersCount="4" />
        }
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => {
          const { timer, timerStartAt } = computePlayerTimer(
            gameState,
            player.symbol,
          );
          return (
            <PlayerInfo
              key={player.id}
              rating={player.rating}
              name={player.name}
              timer={timer}
              timerStartAt={timerStartAt}
              isRight={index % 2 == 1}
              symbol={player.symbol}
              avatar={player.avatar}
            />
          );
        })}
        gameMoveInfo={
          <GameMoveInfo currentMove={currentMove} nextMove={nextMove} />
        }
        gameCells={cells.map((cell, index) => (
          <GameCell
            onClick={() =>
              dispatch({
                type: GAME_STATE_ACTIONS.CELL_CLICK,
                index,
                now: Date.now(),
              })
            }
            key={index}
            symbol={cell}
            isWinner={winnerSequence?.includes(index)}
            disabled={!!winnerSymbol}
          />
        ))}
      />
      <GameOverModal
        winnerSymbol={winnerSymbol}
        players={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
          <PlayerInfo
            key={player.id}
            rating={player.rating}
            name={player.name}
            timer={gameState.timers[player.symbol]}
            isRight={index % 2 == 1}
            symbol={player.symbol}
            avatar={player.avatar}
          />
        ))}
        winnerName={winnerPlayer?.name}
      />
    </>
  );
}
