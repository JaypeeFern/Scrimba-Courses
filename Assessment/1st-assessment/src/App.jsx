import React from "react";
import Header from "./components/Header";
import Recipe from './components/Recipe'
import { nanoid } from 'nanoid'

function App() {
  return (
    <div className="main-container">
      <Header />
      <main className="body--container">
        <div className='body--left'>
          <Recipe
            foodName='Chicken'
            foodImage='https://thumbs.dreamstime.com/b/panorama-banner-raw-chicken-portions-cooking-barbecuing-skinless-breasts-diced-strips-goulash-stir-fry-legs-157723250.jpg'
          />
        </div>
        <div className='body--right'>
        </div>
      </main>
    </div>
  );
}

export default App;

// https://helios-i.mashable.com/imagery/articles/05fQvWTQeAAdXYZNNst8ukj/hero-image.fill.size_1200x1200.v1619479187.png
// https://mashable.com/article/best-free-recipe-apps
// https://www.google.com/search?q=Recipe+Book+App&sxsrf=AJOqlzWuRYZUzfWZIONXd2Xeu-trWqY0Mw:1678425958971&source=lnms&tbm=isch&sa=X&ved=2ahUKEwihv8P4z9D9AhWomlYBHUMPAPQQ_AUoAXoECAEQAw&biw=1366&bih=636&dpr=1#imgrc=RNDiKYH7mXC_cM
