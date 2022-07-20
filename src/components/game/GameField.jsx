import config from "./config"
import Block from "./block/Block"
import styles from './styles.module.css'
import { useState } from "react"
import { generateLevel } from "./halpers"

const GameField = () => {
  const [levelInfo, setLevelInfo] = useState(generateLevel());

  const getField = () => {
    const x = config.fieldSize[0]
    const y = config.fieldSize[1]

    const getMode = (position) => {
      const { start, finish } = levelInfo
      console.log(position, start, finish);
      if (start[0] === position[0] && start[1] === position[1]) return 'start'
      if (finish[0] === position[0] && finish[1] === position[1]) return 'finish'
      return 'block'
    }

    const arrOfBlock = []
    for (let i = 0; i < y; i ++) {
      for (let j = 0; j < x; j++)
        arrOfBlock.push(<Block key={y * i + j} mode={getMode([j, i])}/>)
      arrOfBlock.push(<div className={styles.space}/>)
    }

    return arrOfBlock
  }

  return (
    <div>
      <div className={styles.container}>
        {getField()}
      </div>
      <div>{levelInfo.path.join(', ')}</div>
    </div>
  )
}

export default GameField