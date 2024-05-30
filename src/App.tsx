import { useEffect, useState } from 'react'
import { BoardComponent } from './components/BoardComponent/BoardComponent'
import styles from './styles.module.css'
import { Board } from './models/Board'
import { Player } from './models/Player'
import { Colors } from './models/Colors'
import { EatenFigures } from './components/EatenFigures/EatenFigures'

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
      <div className={styles.app}>
        <EatenFigures
          title="Black"
          figures={board.eatenBlackFigures}
          // className={styles.leftEatenBlock}
        />
        <BoardComponent
          board={board}
          setBoard={setBoard}
          currPlayer={currPlayer}
          swapPlayer={swapPlayer}
        />
        <EatenFigures
          title="White"
          figures={board.eatenWhiteFigures}
          // className={styles.rightEatenBlock}
        />
      </div>
    </div>
  )
}

