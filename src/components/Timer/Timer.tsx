import { useEffect, useRef, useState } from "react";
import { Player } from "../../models/Player";
import { Colors } from "../../models/Colors";
import styles from './styles.module.css'

type Props = {
  restart: () => void;
  currentPlayer: null | Player;
};

export const Timer = ({ restart, currentPlayer }: Props) => {
  const [whiteTime, setWhiteTime] = useState<number>(300);
  const [blackTime, setBlackTime] = useState<number>(300);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    if (currentPlayer) {
      startTimer();
    }

    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, [currentPlayer]);

  const decrementWhiteTime = () => {
    setWhiteTime(prev => prev - 1);
  };

  const decrementBlackTime = () => {
    setBlackTime(prev => prev - 1);
  };

  const startTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
    }

    const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTime : decrementBlackTime;
    timer.current = setInterval(callback, 1000);
  };

  const handleBtnClick = () => {
    setBlackTime(300);
    setWhiteTime(300);
    restart();
  };

  return (
    <div className={styles.timerWrapper}>
      <button onClick={handleBtnClick}>Restart Game</button>
      <div>
        <h4>White - {whiteTime}</h4>
        <h4>Black - {blackTime}</h4>
      </div>
    </div>
  );
};