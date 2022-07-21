import { GameField } from "../../components"
import styles from './styles.module.css'

const Index = () => {
  return (
    <div>
      <h1 className={styles.title}>лабиринт</h1>
      <GameField />
    </div>
  )
}

export default Index