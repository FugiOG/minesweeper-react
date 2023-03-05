import { FC } from 'react'

import { useAppContext } from '../../hooks/Context'

import styles from './Board.module.scss'
import BoardItem from './BoardItem'

const Board: FC = () => {
  const { field, gameState } = useAppContext()

  return (
    <div className={styles.board}>
      {field.map((x, x_i) => {
        return (
          <div key={x_i} className={styles.row}>
            {x.map((y, y_i) => (
              <BoardItem key={y.id} item={y} xCord={x_i} yCord={y_i} />
            ))}
          </div>
        )
      })}
    </div>
  )
}

export default Board
