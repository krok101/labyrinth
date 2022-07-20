import styles from './styles.module.css'

const Block = ({mode}) => (
  <div className={`${styles.block} ${styles[mode]}`}></div>
)

export default Block