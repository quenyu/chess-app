import { Board } from "../../models/Board"
import { CellComponent } from "../CellComponent/CellComponent"
import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { Cell } from "../../models/Cell"

type Props = {
  board: Board
  setBoard: (board: Board) => void
}

export const BoardComponent = ({ board, setBoard }: Props) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

  useEffect(() => {
    highlightCells()
  }, [selectedCell])

  const handleClick = (cell: Cell) => {
    if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell)
      setSelectedCell(null)
    } else {
      setSelectedCell(cell)
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
  )
}