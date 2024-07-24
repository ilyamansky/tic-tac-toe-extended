import { GAME_SYMBOLS_ORDER } from "./consts";

export function getNextMove(currentMove, playersCount, playersTimeOver) {
  const slicedMoveOrder = GAME_SYMBOLS_ORDER.slice(0, playersCount).filter(
    (player) => !playersTimeOver.includes(player),
  );
  let nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1;
  return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0];
}

export function computeWinner(cells, fieldSize = 19, sequnceSize = 5) {
  const gap = Math.floor(sequnceSize / 2);

  function compareElements(indexes) {
    let result = true;
    for (let i = 1; i < indexes.length; i++) {
      result &&= !!cells[indexes[i]];
      result &&= cells[indexes[i]] === cells[indexes[i - 1]];
    }
    return result;
  }

  function getSequenceIndexes(i) {
    const res = [
      [], // -
      [], // \
      [], // /
      [], // |
    ];
    for (let j = 0; j < sequnceSize; j++) {
      res[0].push(j - gap + i);
      res[1].push(fieldSize * (j - gap) + (j - gap) + i);
      res[2].push(-fieldSize * (j - gap) + (j - gap) + i);
      res[3].push(fieldSize * (j - gap) + i);
    }

    const x = i % fieldSize;
    if (x < gap || x >= fieldSize - gap) {
      res.shift();
      res.shift();
      res.shift();
    }
    return res;
  }

  for (let i = 0; i < cells.length; i++) {
    if (cells[i]) {
      const indexRows = getSequenceIndexes(i);
      const winnerIndexes = indexRows.find((row) => compareElements(row));
      if (winnerIndexes) {
        return winnerIndexes;
      }
    }
  }
  return undefined;
}