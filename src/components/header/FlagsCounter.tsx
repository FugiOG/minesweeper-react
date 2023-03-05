import { FC, memo } from 'react'

import { getDividedNumber } from '../../helpers/header/statNumbers'

import styles from './Header.module.scss'

const FlagsCounter: FC<{ counter: number }> = memo(({ counter }) => {
  const { hundreds, dozens, units } = getDividedNumber(counter)

  return (
    <div className={styles.counter}>
      <img src={hundreds} alt="hundreds" draggable={false} />
      <img src={dozens} alt="dozens" draggable={false} />
      <img src={units} alt="units" draggable={false} />
    </div>
  )
})

export default FlagsCounter
