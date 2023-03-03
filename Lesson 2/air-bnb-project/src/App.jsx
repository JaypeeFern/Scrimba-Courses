import './vendors/styles.css'
import Navbar from './Navbar'
import Card from './Card'
import CardData from './data/data'

function App() {

  const cardList = CardData.map(card => {
    return (
      <Card
        key={card.id}
        item={card}
      />

    //   <Card
    //   key={card.id}
    //   image={card.coverImg}
    //   rating={card.stats.rating}
    //   reviewCount={card.stats.reviewCount}
    //   location={card.location}
    //   title={card.title}
    //   price={card.price}
    //   openSpots={card.openSpots}
    // />
    )
  })


  return (
    <div className="main-container">
      <Navbar />
      <div className='card-container'>
        {cardList}
        {/* <Card
          image="./src/assets/card1.png"
          rating="5.0"
          ratingCount={6}
          country="USA"
          title="Life Lessons with Katie Zaferes"
          price={136}
        />
        <Card
          image="./src/assets/card2.png"
          rating="5.0"
          ratingCount={30}
          country="USA"
          title="Learn wedding photography"
          price={125}
        />
        <Card
          image="./src/assets/card3.png"
          rating="5.0"
          ratingCount={'0'}
          country="USA"
          title="Group Mountain Biking"
          price={136}
        /> */}
      </div>
    </div>
  )
}

export default App
