import { FC, MouseEvent, useEffect, useState } from 'react'

import { Emoji } from '../../helpers/header/emoji'
import { useAppContext } from '../../hooks/Context'

import styles from './Header.module.scss'

const GameState: FC = () => {
  const { isPress, restartGame, gameState } = useAppContext()
  const [emoji, setEmoji] = useState(Emoji['playing'])

  useEffect(() => {
    if (isPress) {
      setEmoji(Emoji['waiter'])
    } else {
      switch (gameState) {
        case 'win':
          setEmoji(Emoji['win'])
          break
        case 'playing':
          setEmoji(Emoji['playing'])
          break
        case 'lose':
          setEmoji(Emoji['lose'])
          break
      }
    }
  }, [isPress, gameState])

  const onMouseDownHandler = (e: MouseEvent) => {
    if (e.button !== 0) return
    if (gameState === 'playing') {
      setEmoji(Emoji['pressed'])
    }
  }

  const onMouseUpHandler = (e: MouseEvent) => {
    if (e.button !== 0) return
    if (gameState === 'playing') {
      setEmoji(Emoji['playing'])
    }
  }

  return (
    <div
      className={styles.state}
      onClick={restartGame}
      onMouseDown={onMouseDownHandler}
      onMouseUp={onMouseUpHandler}
      onMouseLeave={onMouseUpHandler}
    >
      <img src={emoji} alt="start" draggable={false} />
    </div>
  )
}

export default GameState
