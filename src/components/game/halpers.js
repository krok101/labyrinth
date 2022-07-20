import config from "./config"

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const generateLevel = () => {
  const startPoint = [random(0, config.fieldSize[0] - 1), random(0, config.fieldSize[1] - 1)]
  const path = []
  const finish = [...startPoint]

  // получене массива в каких направлениях можем двигаться
  const getNextStep = () => {
    // проверяем куда можем двигаться
    const rightDirection = []
    if (finish[0] > 0)
      rightDirection.push('left')
    if (finish[0] < config.fieldSize[0] - 1)
      rightDirection.push('right')
    if (finish[1] > 0)
      rightDirection.push('top')
    if (finish[1] < config.fieldSize[1] - 1)
      rightDirection.push('bottom')

    // случайно выбираем направление
    const dirrection = rightDirection[random(0, rightDirection.length - 1)]
    path.push(dirrection)
    // сохраняем финиш
    if (dirrection === 'left')
      finish[0]  -= 1;
    if (dirrection === 'right')
      finish[0]  += 1;
    if (dirrection === 'top')
      finish[1]  -= 1;
    if (dirrection === 'bottom')
      finish[1]  += 1;
  }

  for (let i = 0; i < config.countSteps; i++)
    getNextStep();

  return {
    start: startPoint,
    finish,
    path
  }
}