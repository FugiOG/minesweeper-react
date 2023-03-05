import { FC, memo, useEffect, useState } from 'react'

import { getDividedNumber } from '../../helpers/header/statNumbers'
import { GameState } from '../../types/context.interface'

const Timer: FC<{ startClick: boolean; gameState: GameState }> = memo(
  ({ gameState, startClick }) => {
    const [playTime, setPlayTime] = useState(0)
    useEffect(() => {
      if (!startClick || gameState !== 'playing' || playTime >= 999) return

      const timer = setInterval(() => {
        setPlayTime((prev) => prev + 1)
      }, 1000)

      return () => clearInterval(timer)
    })

    useEffect(() => {
      setPlayTime(0)
    }, [startClick])

    const { hundreds, dozens, units } = getDividedNumber(playTime)

    return (
      <div>
        <img src={hundreds} alt="hundreds" draggable={false} />
        <img src={dozens} alt="dozens" draggable={false} />
        <img src={units} alt="units" draggable={false} />
      </div>
    )
  }
)

export default Timer
