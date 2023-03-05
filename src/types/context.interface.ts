import { IFieldItem } from './field.interface'

export interface IContext {
  field: IFieldItem[][]
  leftMouseClick: (currX: number, currY: number) => void
  rightMouseClick: (x: number, y: number) => void
  gameState: GameState
  counter: number
  clickedMine: { x: number; y: number }
  isPress: boolean
  setIsPress: (value: boolean) => void
  restartGame: () => void
  startClick: boolean
}

export type GameState = 'lose' | 'playing' | 'win'
