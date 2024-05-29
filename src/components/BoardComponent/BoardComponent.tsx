import { Board } from "../../models/Board"
import { CellComponent } from "../CellComponent/CellComponent"
import React from 'react'
import styles from './styles.module.css'
import { Cell } from "../../models/Cell"

type Props = {
  board: Board
  setBoard: (board: Board) => void
}

export const BoardComponent = ({ board, setBoard }: Props) => {
  return (
    <div className={styles.board}>
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell) => (
            <CellComponent
              key={cell.id}
              cell={cell}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  )
}