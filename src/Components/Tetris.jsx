import React from "react";

import "./Styles/Tetris.css";

import Board from "./Board";
import GameStats from "./GameStats";
import Previews from "./Previews";
import GameController from "./GameController";

import { useBoard } from "../Hooks/useBoard";
import { useGameStats } from "../Hooks/useGameStats";
import { usePlayer } from "../Hooks/usePlayer";

const Tetris = ({ rows, columns, setGameOver }) => {
  const [gameStats, addLinesCleared] = useGameStats();
  const [player, setPlayer, resetPlayer] = usePlayer();
  const [board, setBoard] = useBoard({
    rows,
    columns,
    player,
    resetPlayer,
    addLinesCleared,
  });

  return (
    <div className="Tetris">
      <Board board={board} />
      <GameStats gameStats={gameStats} />
      <Previews tetrominos={player.tetrominos} />
      <GameController
        board={board}
        setBoard={setBoard}
        gameStats={gameStats}
        player={player}
        setGameOver={setGameOver}
        setPlayer={setPlayer}
      />
    </div>
  );
};

export default Tetris;
