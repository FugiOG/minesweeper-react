import { useState } from 'react'

import { createField } from '../helpers/createField'
import { GameState } from '../types/context.interface'
import { IFieldItem } from '../types/field.interface'

export const useGame = () => {
  const size = 16
  const mineQuantity = 40

  const [notOpened, setNotOpened] = useState(size * size - mineQuantity)
  const [field, setField] = useState<IFieldItem[][]>(
    createField(size, mineQuantity)
  )
  const [gameState, setGameState] = useState<GameState>('playing')
  const [counter, setCounter] = useState<number>(mineQuantity)
  const [isPress, setIsPress] = useState(false)
  const [startClick, setStartClick] = useState(false)
  const [clickedMine, setClickedMine] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  })

  const restartGame = () => {
    setGameState('playing')
    setCounter(mineQuantity)
    setClickedMine({ x: 0, y: 0 })
    setNotOpened(size * size - mineQuantity)
    setIsPress(false)
    setStartClick(false)
    setField(createField(size, mineQuantity))
  }

  const checkWin = (notOpenedTile: number) => {
    if (notOpenedTile !== 0) return
    let win = true
    field.forEach((row) =>
      row.forEach((item) => {
        if (item.value === -1 && item.condition !== 'flag') {
          win = false
        }
      })
    )

    if (!win) return
    setGameState('win')
  }

  const leftMouseClick = (currX: number, currY: number) => {
    if (gameState !== 'playing') return

    if (field[currX][currY].condition !== 'fill') return

    if (field[currX][currY].value === -1) {
      setClickedMine({ x: currX, y: currY })
      setGameState('lose')
      field.forEach((row) =>
        row.forEach((item) => item.value === -1 && (item.condition = 'opened'))
      )
    } else if (field[currX][currY].value === 0) {
      const clearing: [number, number][] = []
      const clear = (x: number, y: number) => {
        if (x >= 0 && x < size && y >= 0 && y < size) {
          if (
            field[x][y].condition === 'opened' ||
            field[x][y].condition === 'flag' ||
            field[x][y].condition === 'question'
          )
            return

          clearing.push([x, y])
        }
      }

      clear(currX, currY)

      while (clearing.length) {
        const [x, y] = clearing.pop()!

        field[x][y].condition = 'opened'

        if (field[x][y].value !== 0) continue

        clear(x + 1, y)
        clear(x - 1, y)
        clear(x, y + 1)
        clear(x, y - 1)
      }
    } else {
      field[currX][currY].condition = 'opened'
    }
    if (!startClick) {
      setStartClick(true)
    }

    let notOpenedTile = size * size - mineQuantity

    field.forEach((row) =>
      row.forEach((item) => {
        if (item.condition === 'opened' && item.value !== -1) {
          notOpenedTile -= 1
        }
      })
    )
    setNotOpened(notOpenedTile)
    checkWin(notOpenedTile)
    setField((prev) => [...prev])
  }

  const rightMouseClick = (x: number, y: number) => {
    if (gameState !== 'playing') return
    if (field[x][y].condition === 'opened') return

    if (field[x][y].condition === 'fill' && counter > 0) {
      field[x][y].condition = 'flag'
      setCounter((prev) => prev - 1)
    } else if (field[x][y].condition === 'flag') {
      field[x][y].condition = 'question'
      setCounter((prev) => prev + 1)
    } else if (field[x][y].condition === 'question') {
      field[x][y].condition = 'fill'
    }

    setField((prev) => [...prev])
    checkWin(notOpened)
  }
  return {
    field,
    gameState,
    counter,
    clickedMine,
    isPress,
    startClick,
    leftMouseClick,
    rightMouseClick,
    restartGame,
    setIsPress,
  }
}
