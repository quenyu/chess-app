import { Cell } from '../../models/Cell'
import { Colors } from '../../models/Colors'
import styles from './styles.module.css'

type Props = {
  cell: Cell
  selected: boolean
  handleClick: (cell: Cell) => void
}

export const CellComponent = ({ cell, selected, handleClick }: Props) => {
  const cellColorClass = cell.color === Colors.WHITE ? styles.cellWhite : styles.cellBlack;
  const selectedClass = selected ? (cell.color === Colors.WHITE ? styles.selectedWhite : styles.selectedBlack) : '';

  return (
    <div
      onClick={() => handleClick(cell)}
      className={`${styles.cell} ${cellColorClass} ${selectedClass}`}
      style={{ background: cell.available && cell.figure ? "green" : "" }}
    >
      {cell.available && !cell.figure && <div className={styles.available} />}
      {cell.figure?.logo && <img src={cell.figure.logo} alt="logo" />}
    </div>
  )
}