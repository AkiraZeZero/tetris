import React from "react";
import "./Styles/Menu.css"

const Menu = ({ onClick }) => {
  return (
    <div className="Menu">
      <button className="Button" onClick={onClick}>
        Play Tetris!
      </button>
    </div>
  );
};

export default Menu;
