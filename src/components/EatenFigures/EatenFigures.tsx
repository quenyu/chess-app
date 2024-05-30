import { Figure } from "../../models/figures/Figure"
import styles from './styles.module.css'

type Props = {
  title: string
  figures: Figure[]
  // className: string
}

export const EatenFigures = ({ title, figures }: Props) => {
  // const [isOnLeftSide, setIsOnLeftSide] = useState(true);

  return (
    <div>
      <h3>{title}</h3>
      {figures.map(figure => (
        <div key={figure.id} className={styles.eatenFigures}>
          {figure.name} {figure.logo && <img width={20} height={20} src={figure.logo} />}
        </div>
      ))}
    </div>
  )
}