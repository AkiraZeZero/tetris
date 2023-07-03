import React from "react";
import Menu from "./Menu"
import { useGameOver } from "../Hooks/useGameOver"
import Tetris from "./Tetris"

const Game = ({ rows, columns }) => {
    const [gameOver, setGameOver, resetGameOver] = useGameOver()

    const start = () => { 
        resetGameOver();
        console.log(`Start game over is ${gameOver}`) }
  return (
    <div className="Game">
        {gameOver ? (
        <Menu onClick={start}/>
        ) : (
            <Tetris rows={rows} columns={columns} setGameOver={setGameOver}/>
        )}
    </div>
  );
};

export default Game;
