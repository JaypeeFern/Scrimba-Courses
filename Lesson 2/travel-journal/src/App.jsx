import './vendor/styles.css'
import Header from './Header'
import Card from './Card'
import CardData from './data/data'

function App() {

  const card = CardData.map(info => {
    return (
      <Card
      key={info.id}
      item={info}
      />
    )
  })


  return (
    <div className='main-container'>
      <Header />
      {card}
    </div>
  )
}

export default App
