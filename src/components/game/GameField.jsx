import config from "./config"
import Block from "./block/Block"
import styles from './styles.module.css'
import { useState } from "react"
import { generateLevel } from "./halpers"

const GameField = () => {
  const [levelInfo, setLevelInfo] = useState(generateLevel());
  const [clickPosition, setClickPosition] = useState([]); // progress, end

  const onClickByBlock = (pos) => setClickPosition(pos)

  const getField = () => {
    const x = config.fieldSize[0]
    const y = config.fieldSize[1]
    const { start, finish } = levelInfo
    const arrOfBlock = []

    const gameResult = (finish[0] === clickPosition[0] && clickPosition[1] === finish[1])

    const getDataForBlock = (pos) => {
      let mode = 'orange'
      if (!clickPosition.length) {
        // устанавливаем стартовый блок
        if (start[0] === pos[0] && start[1] === pos[1])
          mode = 'start'
      } else {
        mode = 'yellow'

        // показываем индикатор на блоке который кликнули в зависимости верного/неверного клика
        if (pos[0] === clickPosition[0] && pos[1] === clickPosition[1]) {
          mode = gameResult ? 'bingo' : 'fail';
        }

        if (!gameResult && pos[0] === finish[0] && pos [1] === finish[1]) {
          mode = 'bingo'
        }
      }

      return {
        mode,
        isFinish:(start[0] === pos[0] && start[1] === pos[1]),
        isStart:(start[0] === pos[0] && start[1] === pos[1]),
        onClick: () => onClickByBlock(pos)
      }
    }

    for (let i = 0; i < y; i ++) {
      for (let j = 0; j < x; j++)
        arrOfBlock.push(<Block key={y * i + j} data={getDataForBlock([j, i])} />)
      // Добавляем перенос строки
      arrOfBlock.push(<div className={styles.space}/>)
    }

    return arrOfBlock
  }

  const restart = () => {
    setLevelInfo(generateLevel());
    setClickPosition([]);
  }

  return (
    <div>
      <div className={styles.container}>
        {getField()}
      </div>
      <div>{levelInfo.path.join(', ')}</div>
      <button onClick={restart}>Generate level</button>
    </div>
  )
}

export default GameField