import React from "react";

import "./Styles/Preview.css";

import { buildBoard } from "../buisness/MakeBoard";
import { transferToBoard } from "../buisness/Tetrominoes";

import BoardCell from "./BoardCell";

const Preview = ({ tetromino, index }) => {
  const { shape, className } = tetromino;

  const board = buildBoard({ rows: 4, columns: 4 });

  const style = { top: `${index * 15}vw` };

  board.rows = transferToBoard({
    className,
    isOccupied: false,
    position: { row: 0, column: 0 },
    shape,
  });

  return (
    <div className="Preview" style={style}>
      <div className="Preview-board">
        {board.rows.map((row, y) =>
          row.map((cell, x) => (
            <BoardCell key={x * board.size.columns + x} cell={cell} />
          ))
        )}
      </div>
    </div>
  );
};

export default Preview;
