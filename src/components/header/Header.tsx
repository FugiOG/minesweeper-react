import { FC } from 'react'

import { useAppContext } from '../../hooks/Context'

import FlagsCounter from './FlagsCounter'
import GameState from './GameState'
import styles from './Header.module.scss'
import Timer from './Timer'

const Header: FC = () => {
  const { startClick, gameState, counter } = useAppContext()
  return (
    <div className={styles.header}>
      <FlagsCounter counter={counter} />
      <GameState />
      <Timer gameState={gameState} startClick={startClick} />
    </div>
  )
}

export default Header
