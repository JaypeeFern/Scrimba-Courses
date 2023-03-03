import './vendors/styles.css'
import Info from './Info'
import About from './About'
import Interest from './Interest'
import Footer from './Footer'

function App() {
  return (
    <div className='container'>
      <div className='--info-container'>
        <Info />
        <About />
        <Interest />
        <Footer />
      </div>
    </div>
  )
}

export default App
