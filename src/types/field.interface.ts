export interface IFieldItem {
  value: number
  condition: Condition
  id: string
}

type Condition = 'fill' | 'flag' | 'question' | 'opened'
