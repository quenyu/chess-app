import { useEffect, useRef, useState } from "react";
import { Player } from "../../models/Player";
import { Colors } from "../../models/Colors";
import styles from './styles.module.css';

type Props = {
  restart: () => void;
  currentPlayer: null | Player;
};

export const Timer = ({ restart, currentPlayer }: Props) => {
  const [whiteTime, setWhiteTime] = useState<number>(300);
  const [blackTime, setBlackTime] = useState<number>(300);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);
  const winnerTeam = whiteTime <= 1 ? "Black" : "White";

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
    setWhiteTime(prev => {
      if (prev <= 1) {
        clearInterval(timer.current!);
        setModalOpen(true);
        return 0;
      }
      return prev - 1;
    });
  };

  const decrementBlackTime = () => {
    setBlackTime(prev => {
      if (prev <= 1) {
        clearInterval(timer.current!);
        setModalOpen(true);
        return 0;
      }
      return prev - 1;
    });
  };

  const startTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
    }

    const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTime : decrementBlackTime;
    timer.current = setInterval(callback, 1000);
  };

  const handleRestart = () => {
    setBlackTime(300);
    setWhiteTime(300);
    restart();
    setModalOpen(false);
  };

  const handleModalOverlay = () => {
    setModalOpen(false)
  }

  return (
    <>
      <div className={styles.timerWrapper}>
        <button onClick={handleRestart}>Restart Game</button>
        <div>
          <h4>White - {whiteTime}</h4>
          <h4>Black - {blackTime}</h4>
        </div>
      </div>
      {isModalOpen && (
        <>
          <div onClick={handleModalOverlay} className={styles.modalOverlay} />
          <div className={styles.modal}>
            <h2>Time's Up!</h2>
            <p>{winnerTeam} is won</p>
            <button onClick={handleRestart}>Try Again</button>
          </div>
        </>
      )}
    </>
  );
};
