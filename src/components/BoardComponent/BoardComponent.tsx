import { Board } from "../../models/Board"
import { CellComponent } from "../CellComponent/CellComponent"
import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { Cell } from "../../models/Cell"
import { Player } from "../../models/Player"

type Props = {
  board: Board
  setBoard: (board: Board) => void
  currPlayer: Player | null
  swapPlayer: () => void
}

export const BoardComponent = ({ board, setBoard, currPlayer, swapPlayer }: Props) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

  useEffect(() => {
    highlightCells()
  }, [selectedCell])

  const handleClick = (cell: Cell) => {
    if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell)
      swapPlayer()
      setSelectedCell(null)
    } else {
      if (cell.figure?.color === currPlayer?.color) {
        setSelectedCell(cell)
      }
    }
  }

  const highlightCells = () => {
    board.highlightCells(selectedCell)
    updateBoard()
  }

  const updateBoard = () => {
    const newBoard = board.getCopyBoard()
    setBoard(newBoard)
  }

  return (
    <div className={styles.gameContainer}>
      <h1 className={styles.appTitle}>
        Current step by <span className={styles.currentPlayerTitle}>
          {currPlayer?.color.match(/White|Black/g)}
        </span>
      </h1>
      <div className={styles.board}>
        {board.cells.map((row, index) => (
          <React.Fragment key={index}>
            {row.map((cell) => (
              <CellComponent
                key={cell.id}
                cell={cell}
                selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                handleClick={handleClick}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}