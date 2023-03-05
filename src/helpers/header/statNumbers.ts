import zero from '../../assets/header-numbers/0.png'
import one from '../../assets/header-numbers/1.png'
import two from '../../assets/header-numbers/2.png'
import three from '../../assets/header-numbers/3.png'
import four from '../../assets/header-numbers/4.png'
import five from '../../assets/header-numbers/5.png'
import six from '../../assets/header-numbers/6.png'
import seven from '../../assets/header-numbers/7.png'
import eight from '../../assets/header-numbers/8.png'
import nine from '../../assets/header-numbers/9.png'

const statNumbers = {
  '0': zero,
  '1': one,
  '2': two,
  '3': three,
  '4': four,
  '5': five,
  '6': six,
  '7': seven,
  '8': eight,
  '9': nine,
}

export const getDividedNumber = (value: number) => {
  const num_100 = Math.floor(value / 100)
  const num_10 = Math.floor((value - num_100 * 100) / 10)
  const num_1 = value - num_100 * 100 - num_10 * 10

  return {
    hundreds: statNumbers[num_100 as unknown as keyof typeof statNumbers],
    dozens: statNumbers[num_10 as unknown as keyof typeof statNumbers],
    units: statNumbers[num_1 as unknown as keyof typeof statNumbers],
  }
}
