import styles from './App.module.css'
import Card from './components/Card/Card.jsx'
import Cards from './components/Cards/Cards.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import characters, { Rick } from './data.js'

function App() {

  function onSearch(id) {
    alert(id)
  }
  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <div>
          <NavBar
            onSearch={onSearch}
          />
        </div>
      <hr />
      <div>
        <Cards
          characters={characters}
        />
      </div>
      <hr />
      </div>
    </div>
  )
}

export default App
