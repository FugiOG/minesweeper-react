import { FC, MouseEvent, useEffect, useState } from 'react'

import clickedMineImage from '../../assets/board-states/clicked_mine.png'
import notMineImage from '../../assets/board-states/not_mine.png'
import { Mask } from '../../helpers/mask'
import { useAppContext } from '../../hooks/Context'
import { IFieldItem } from '../../types/field.interface'

import styles from './Board.module.scss'

interface IPorps {
  item: IFieldItem
  xCord: number
  yCord: number
}

const BoardItem: FC<IPorps> = ({ item, xCord, yCord }) => {
  const [srcMask, setSrcMask] = useState<string>(Mask.tile)
  const {
    leftMouseClick,
    rightMouseClick,
    gameState,
    clickedMine,
    setIsPress,
  } = useAppContext()
  const { value, condition } = item

  useEffect(() => {
    let tempMask = Mask.tile
    if (condition === 'opened') {
      if (value === -1 && clickedMine.x === xCord && clickedMine.y === yCord) {
        tempMask = clickedMineImage
      } else {
        tempMask =
          Mask.numbersOfMine[
            value as unknown as keyof typeof Mask.numbersOfMine
          ]
      }
    } else if (condition === 'fill') {
      tempMask = Mask.tile
    } else if (condition === 'flag') {
      if (gameState === 'lose' && value !== -1) {
        tempMask = notMineImage
      } else {
        tempMask = Mask.flag
      }
    } else if (condition === 'question') {
      tempMask = Mask.question
    }

    setSrcMask(tempMask)
  }, [condition, value, xCord, yCord, gameState])

  let mask = (
    <img
      src={value === -1 ? Mask.numbersOfMine['-1'] : srcMask}
      alt=""
      draggable={false}
    />
  )

  const onMouseDownHandler = (e: MouseEvent) => {
    if (e.button !== 0) return
    if (condition === 'fill' && gameState === 'playing') {
      setSrcMask(Mask.numbersOfMine['0'])
      setIsPress(true)
    }
  }

  const onMouseUpHandler = (e: MouseEvent) => {
    if (e.button !== 0) return
    if (condition === 'fill' && gameState === 'playing') {
      setIsPress(false)
    }
  }
  const onMouseLeaveHandler = (e: MouseEvent) => {
    if (e.button !== 0) return
    if (condition === 'fill' && gameState === 'playing') {
      setSrcMask(Mask.tile)
      setIsPress(false)
    }
  }

  return (
    <div
      className={styles.item}
      onClick={() => leftMouseClick(xCord, yCord)}
      onContextMenu={(e) => {
        e.preventDefault()
        e.stopPropagation()
        rightMouseClick(xCord, yCord)
      }}
      onMouseDown={onMouseDownHandler}
      onMouseUp={onMouseUpHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      {mask}
    </div>
  )
}

export default BoardItem
