import styles from './styles.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { setFieldSize, setCountSteps } from '../../../store/actionCreators';

const Settings = () => {
  const fieldSize = useSelector((state) => state.fieldSize)
  const countSteps = useSelector(state => state.countSteps)
  const dispatch = useDispatch()

  const changeInput = (e, input) => {
    let newValue = +e.target.value
    if (input === 2 && countSteps > 0) {
      dispatch(setCountSteps(newValue))
      return
    }
    // размеры полня
    if (newValue < 2) return
    const copyFieldSize = [...fieldSize]
    copyFieldSize[input] = newValue
    dispatch(setFieldSize(copyFieldSize))
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Настройки</h2>

      <div className={styles.row}>
        <p>поле:</p>
        <input className={styles.input} value={fieldSize[0]} onChange={(e) => changeInput(e, 0)} type="number" />
        <p>X</p> 
        <input className={styles.input} value={fieldSize[1]} onChange={(e) => changeInput(e, 1)} type="number" />
      </div>
      <div className={styles.row}>
        <p>количество ходов:</p>
        <input className={styles.input + ' ' + styles.inputSteps} value={countSteps} onChange={(e) => changeInput(e, 2)} type="number" />
      </div>
    </div>
  )
}

export default Settings