import { v4 as uuidv4 } from 'uuid'

import { IFieldItem } from '../types/field.interface'

export const createNewField = (size: number) => {
  let newField: IFieldItem[][] = new Array(size).fill(
    new Array(size).fill({
      value: 0,
      condition: 'fill',
    })
  )
  newField = newField.map((row) =>
    [...row].map((cell) => ({ ...cell, id: uuidv4() }))
  )
  return newField
}
