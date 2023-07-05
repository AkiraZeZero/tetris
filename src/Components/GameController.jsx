import React from "react";
import "./Styles/GameController.css";

import { Action, actionForKey } from "../buisness/Input.js"

const GameController = ({
  board,
  gameStats,
  player,
  setGameOver,
  setPlayer,
}) => {
    const onKeyDown = ({code}) => {
        const action = actionForKey(code);

        if (action === Action.Quit) {
            setGameOver(true)
        }
        console.log(`onKeyDown ${code}`)
    };

    const onKeyUp = ({code}) => {
        console.log(`onKeyUp ${code}`)
    };
    
  return (
  <input
  className="GameController"
  type="text"
  onKeyDown={onKeyDown}
  onKeyUp={onKeyUp}
  autoFocus
   />
   );
};

export default GameController;
