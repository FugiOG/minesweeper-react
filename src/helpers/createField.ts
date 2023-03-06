import { IFieldItem } from '../types/field.interface'

import { createNewField } from './createNewField'

export const createField = (
  size: number,
  mineQuantity: number,
  fistX: number,
  firstY: number,
  field: IFieldItem[][]
): IFieldItem[][] => {
  const Mine = -1
  // const field = createNewField(size)

  const inc = (x: number, y: number) => {
    if (x >= 0 && x < size && y >= 0 && y < size) {
      if (field[x][y].value === Mine) return
      field[x][y].value += 1
    }
  }

  for (let i = 0; i < mineQuantity; ) {
    const x = Math.floor(Math.random() * size)
    const y = Math.floor(Math.random() * size)

    if (
      field[x][y].value === Mine ||
      (x >= fistX - 1 && x <= fistX + 1 && y >= firstY - 1 && y <= firstY + 1)
    )
      continue

    field[x][y].value = Mine

    inc(x + 1, y)
    inc(x - 1, y)
    inc(x, y + 1)
    inc(x, y - 1)
    inc(x + 1, y + 1)
    inc(x + 1, y - 1)
    inc(x - 1, y + 1)
    inc(x - 1, y - 1)

    i += 1
  }

  return field
}
