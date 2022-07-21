import { GameLabyrinth } from '../../components'
import styles from './styles.module.css'

const Index = () => {
  return (
    <div>
      <h1 className={styles.title}>лабиринт</h1>
      <GameLabyrinth />
    </div>
  )
}

export default Index