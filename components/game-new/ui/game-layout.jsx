import clsx from "clsx";

export function GameLayout({
  backLink,
  title,
  gameInfo,
  playersList,
  className,
  gameMoveInfo,
  actions,
  gameCells,
}) {
  return (
    <div className="mb-10">
      <div className="pl-2">
        {backLink}
        {title}
        {gameInfo}
      </div>
      <div
        className={clsx(
          className,
          "bg-white mt-4 grid grid-cols-2 gap-5 rounded-2xl shadow-md py-4 px-8",
        )}
      >
        {playersList}
      </div>
      <div className="mt-6 bg-white rounded-2xl shadow-md px-8 pt-5 pb-7">
        <div className="flex gap-3">
          <div className="mr-auto">{gameMoveInfo}</div>
          {actions}
        </div>
        <div className="mt-6 pl-px pt-px grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)]">
          {gameCells}
        </div>
      </div>
    </div>
  );
}
