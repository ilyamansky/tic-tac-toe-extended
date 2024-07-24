import avatarSrc1 from "./ui/images/avatarSrc1.png";
import avatarSrc2 from "./ui/images/avatarSrc2.png";
import avatarSrc3 from "./ui/images/avatarSrc3.png";
import avatarSrc4 from "./ui/images/avatarSrc4.png";

export const GAME_SYMBOLS = {
  ZERO: "zero",
  CROSS: "cross",
  TRIANGLE: "triangle",
  SQUARE: "square",
};

export const GAME_SYMBOLS_ORDER = [
  GAME_SYMBOLS.CROSS,
  GAME_SYMBOLS.ZERO,
  GAME_SYMBOLS.TRIANGLE,
  GAME_SYMBOLS.SQUARE,
];

export const PLAYERS = [
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
