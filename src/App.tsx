import { useEffect, useState } from 'react'
import { BoardComponent } from './components/BoardComponent/BoardComponent'
import styles from './styles.module.css'
import { Board } from './models/Board'

export function App() {
  const [board, setBoard] = useState(new Board())

  useEffect(() => {
    restart()
  }, [])

  const restart = () => {
    const newBoard = new Board()
    newBoard.initCells()
    setBoard(newBoard)
  }

  return (
    <div className={styles.app_wrapper}>
      <BoardComponent
        board={board}
        setBoard={setBoard}
      />
    </div>
  )
}

