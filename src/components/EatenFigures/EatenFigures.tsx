import { Figure } from "../../models/figures/Figure"
import styles from './styles.module.css'

type Props = {
  title: string
  figures: Figure[]
}

export const EatenFigures = ({ title, figures }: Props) => {

  return (
    <div className={styles.eatenFiguresBox}>
      <h3>{title}</h3>
      <div className={styles.eatenFiguresList}>
        {figures.map(figure => (
          <div key={figure.id} className={styles.eatenFigures}>
            <span>{figure.name}</span> {figure.logo && <img width={20} height={20} src={figure.logo} />}
          </div>
        ))}
      </div>
    </div>
  )
}