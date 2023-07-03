import React from "react";
import "../Components/Styles/GameStats.css"

const GameStats = ({ gameStats }) => {

    const {level, points, linesCompleted, linesPerLevel } = gameStats;
    const linesToLevel = linesPerLevel - linesCompleted;

  return (
    <ul className="GameStats GameStatsOnRight">
        <li>Level</li>
        <li className="value">{level}</li>
        <li>Lines to Level</li>
        <li className="value">{linesToLevel}</li>
        <li>Points</li>
        <li className="value">{points}</li>
    </ul>
  );
};

// .memo will update only if the game stats have updated which will stop this from being rendered everytime
export default React.memo(GameStats);