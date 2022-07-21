import styles from './styles.module.css'
import { ReactComponent as ThumbUp} from '../../../assets/icons/thumb_up.svg'

const Block = ({data}) => {
  switch(data.mode) {
    case 'fail': return (
      <div className={`${styles.block} ${styles[data.mode]} ${data.isStart ? styles['start-grey'] : ''}`} onClick={data.onClick}>
        <ThumbUp className={styles.thumb + ' ' + styles.dislike}/>
      </div>
    ) 
    case 'bingo': return (
      <div className={`${styles.block} ${styles[data.mode]} ${data.isStart ? styles['start-grey'] : ''}`} onClick={data.onClick}>
        <ThumbUp className={styles.thumb + ' ' + styles.like}/>
      </div>
    )
    case 'yellow': return (
      <div className={`${styles.block} ${styles[data.mode]} ${data.isStart ? styles['start-grey'] : ''}`} onClick={data.onClick}>
        <div className={styles.indicator}></div>
      </div>
    )
    default: return (
      <div className={`${styles.block} ${styles[data.mode]}`} onClick={data.onClick}>
        <div className={styles.indicator}></div>
      </div>
    )
  }
}

export default Block