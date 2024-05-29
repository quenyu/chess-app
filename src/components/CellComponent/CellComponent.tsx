import { Cell } from '../../models/Cell'
import styles from './styles.module.css'

type Props = {
  cell: Cell
}

export const CellComponent = ({ cell }: Props) => {
  return (
    <div className={`${styles.cell} ${cell.color}`}>
      {cell.figure?.logo && <img src={cell.figure.logo} alt="logo" />}
    </div>
  )
}