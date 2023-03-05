import zero from '../../src/assets/board-states/0.png'
import one from '../../src/assets/board-states/1.png'
import two from '../../src/assets/board-states/2.png'
import three from '../../src/assets/board-states/3.png'
import four from '../../src/assets/board-states/4.png'
import five from '../../src/assets/board-states/5.png'
import six from '../../src/assets/board-states/6.png'
import seven from '../../src/assets/board-states/7.png'
import eight from '../../src/assets/board-states/8.png'
import flag from '../../src/assets/board-states/flag.png'
import mine from '../../src/assets/board-states/mine.png'
import question from '../../src/assets/board-states/question.png'
import tile from '../../src/assets/board-states/tile.png'

export const Mask = {
  tile,
  flag,
  question,
  numbersOfMine: {
    '0': zero,
    '1': one,
    '2': two,
    '3': three,
    '4': four,
    '5': five,
    '6': six,
    '7': seven,
    '8': eight,
    '-1': mine,
  },
}
