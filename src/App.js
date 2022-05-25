import { useState } from 'react'
import './App.css'
import Burger from './components/Burger.jsx'
import Ingredients from './components/Ingredients.jsx'

const ingredients = [
  'bread',
  'lettuce',
  'tomato',
  'onion',
  'ketchup',
  'mustard',
  'mayo',
  'beef patty',
  'veggie patty',
  'chicken patty',
  'avocado',
  'tuna',
  'bacon',
  'mushroom',
]

function App() {
  const [userIngredients, setUserIngredients] = useState([])

  const handleListClick = (ingredient) => {
    let tempList = userIngredients.slice()
    tempList.unshift(ingredient)
    setUserIngredients(tempList)
    console.log(userIngredients)
  }

  const handleBurgerClick = (ingredient) => {
    let tempList = userIngredients.slice()
    const index = tempList.indexOf(ingredient)
    tempList.splice(index, 1)
    setUserIngredients(tempList)
    console.log(tempList)
  }

  const handleClearClick = () => {
    setUserIngredients([])
  }

  return (
    <div className="main">
      <Ingredients handleClick={handleListClick} ingredients={ingredients} />
      <Burger
        userIngredients={userIngredients}
        handleClick={handleBurgerClick}
        handleClear={handleClearClick}
      />
    </div>
  )
}

export default App
