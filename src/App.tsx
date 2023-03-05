import styles from './App.module.scss'
import Board from './components/board/Board'
import Header from './components/header/Header'
import { Provider } from './hooks/Context'
import { useGame } from './hooks/useGame'

function App() {
  const data = useGame()
  return (
    <Provider value={data}>
      <div className={styles.app}>
        <section className={styles.playspace}>
          <Header />
          <Board />
        </section>
      </div>
    </Provider>
  )
}

export default App
