import styles from './styles.module.css'

const Block = ({data}) => (
  <div className={`${styles.block} ${styles[data.mode]}`} onClick={data.onClick}>
    <div className={styles.indicator}></div>
  </div>
)


export default Block