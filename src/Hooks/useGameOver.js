import { useCallback, useState } from "react";
// use state is hook, use game over is a CUSTOM hook

export const useGameOver = () => {
  const [gameOver, setGameOver] = useState(true);
  //   game isnt being played right away so we set this ^^^ useState to true
  const resetGameOver = useCallback(() => {
    setGameOver(false);
  }, []);

  return [gameOver, setGameOver, resetGameOver];
};
