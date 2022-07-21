import { useSelector } from 'react-redux/es/exports'
import Block from './block/Block'
import styles from './styles.module.css'
import { useMemo, useState } from 'react'
import { generateLevel } from './halpers'
import { ReactComponent as Restart } from '../../assets/icons/restart.svg'
import { ReactComponent as Arrow} from '../../assets/icons/arrow.svg'
import Settings from './settings/Settings'

const GameLabyrinth = () => {
  const fieldSize = useSelector((state) => state.fieldSize)
  const countSteps = useSelector((state) => state.countSteps)
  const [levelInfo, setLevelInfo] = useState(generateLevel(fieldSize, countSteps));
  const [clickPosition, setClickPosition] = useState([]); // progress, end

  const onClickByBlock = (pos) => setClickPosition(pos)
  const getField = () => {
    const x = fieldSize[0]
    const y = fieldSize[1]
    const { start, finish } = levelInfo
    const arrOfBlock = []
    const GameLabyrinthResult = (finish[0] === clickPosition[0] && clickPosition[1] === finish[1])

    
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
          mode = GameLabyrinthResult ? 'bingo' : 'fail';
        }

        if (!GameLabyrinthResult && pos[0] === finish[0] && pos[1] === finish[1]) {
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
        arrOfBlock.push(<Block data={getDataForBlock([j, i])} />)
      // Добавляем перенос строки
      arrOfBlock.push(<div className={styles.space}/>)
    }

    return arrOfBlock
  }

  const restart = () => {
    setLevelInfo(generateLevel(fieldSize, countSteps));
    setClickPosition([]);
  }

  useMemo(() => {
    restart();
  }, [countSteps, fieldSize]);

  return (
    <>
      <Settings />
      <div>
        <div className={`${styles.container} ${clickPosition.length ? styles.overlay : ''}`}>
          {getField()}
        </div>
        <div className={styles.path}>
          {levelInfo.path.map(arrow => <Arrow className={styles.arrow + ' ' + styles[`arrow_${arrow}`]}/>)}
        </div>
        <button onClick={restart} className={styles.button}>Обновить<Restart className={styles.updateIcon}/></button>
      </div>
    </>
  )
}

export default GameLabyrinth