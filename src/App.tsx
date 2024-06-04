import { useEffect, useState } from 'react'
import { BoardComponent } from './components/BoardComponent/BoardComponent'
import styles from './styles.module.css'
import { Board } from './models/Board'
import { Player } from './models/Player'
import { Colors } from './models/Colors'
import { EatenFigures } from './components/EatenFigures/EatenFigures'
import { Timer } from './components/Timer/Timer'

export function App() {
  const [board, setBoard] = useState<Board>(new Board())
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE))
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
  const [currPlayer, setCurrPlayer] = useState<Player | null>(null)

  useEffect(() => {
    restart()
    setCurrPlayer(whitePlayer)
  }, [])

  const restart = () => {
    const newBoard = new Board()
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)
  }

  const swapPlayer = () => {
    setCurrPlayer(currPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
  }

  return (
    <div className={styles.appWrapper}>
      <h1 className={styles.appTitle}>
        Current step by <span className={styles.currentPlayerTitle}>
          {currPlayer?.color.match(/White|Black/g)}
        </span>
      </h1>
      <div className={styles.mainContainer}>
        <BoardComponent
          board={board}
          setBoard={setBoard}
          currPlayer={currPlayer}
          swapPlayer={swapPlayer}
        />

        <div className={styles.subItemsBoard}>
          <Timer
            restart={restart}
            currentPlayer={currPlayer}
          />
          <EatenFigures
            title="White"
            figures={board.eatenWhiteFigures}
          />
          <EatenFigures
            title="Black"
            figures={board.eatenBlackFigures}
          />
        </div>
      </div>
    </div>
  )
}

