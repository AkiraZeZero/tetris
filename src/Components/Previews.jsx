import React from "react";

import Preview from "./Preview"

const Previews = ({ tetrominoes }) => {
  const previewTetrominos = tetrominoes.slice(1 - tetrominoes.length).reverse();

  return (
    <>
      {previewTetrominos.map((tetrominoes, index) => (
        <Preview tetrominoes={tetrominoes} index={index} key={index} />
      ))}
    </>
  );
};

export default React.memo(Previews);
