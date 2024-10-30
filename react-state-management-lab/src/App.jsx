import './App.css'
import { useState } from 'react'
import FighterShop from './FighterShop'
import FighterTeam from './FighterTeam'

const App = () => {
  
  const [army, setArmy] = useState([])
  const [money, setMoney] = useState(100)
  const [totalStrength, setTotalStrength] = useState(0)
  const [totalAgility, setTotalAgility] = useState(0)
  const [polyFighters, setPolyFighters] = useState([
    {
      name: 'Warrior',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://static.wikia.nocookie.net/supertribes/images/1/19/To-Li_Warrior.png',
    },
    {
      name: 'Rider',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://static.wikia.nocookie.net/supertribes/images/2/2c/Urkaz_Rider.png',
    },
    {
      name: 'Defender',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://static.wikia.nocookie.net/supertribes/images/0/02/Cultist_Defender.png',
    },
    {
      name: 'Catapult',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://static.wikia.nocookie.net/supertribes/images/6/6f/CatapultI.png',
    },
    {
      name: 'Archer',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://static.wikia.nocookie.net/supertribes/images/3/31/Yorthwober_Archer.png',
    },
    {
      name: 'Mind Bender',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://static.wikia.nocookie.net/supertribes/images/9/99/MindBenderA.png',
    },
    {
      name: 'Swordsman',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://static.wikia.nocookie.net/supertribes/images/8/82/Anzala_Swordsman.png',
    },
    {
      name: 'Knight',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://static.wikia.nocookie.net/supertribes/images/8/8e/KnightB.png',
    },
    {
      name: 'Cloak',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://static.wikia.nocookie.net/supertribes/images/e/ef/CloakC.png',
    },
    {
      name: 'Giant',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://static.wikia.nocookie.net/supertribes/images/b/bf/GiantY.png',
    },
  ])
  

  return (
    <>
      <h1>Poly Fighters!</h1>
      <header>
        <h3>Money: ${money}</h3>
        <h3>Total Strength: {totalStrength}</h3>
        <h3>Total Agility: {totalAgility}</h3>
        <h3>Current army</h3>
        <section>
        {army.map((fighter, idx) => (
            <ul>
              <li><img src={fighter.img} alt="Image of Poly Fighter!" /></li>
              <li>#{idx}</li>
              <li>{fighter.name}</li>
              <li>price: {fighter.price}</li>
              <li>strength: {fighter.strength}</li>
              <li>agility: {fighter.agility}</li>
              <li><button  onClick={() => handleRemoveFighter({idx})}>Sell {fighter.name}</button></li>
            </ul>
        ))}
        </section>
      </header>
      <h4>Buy army members!</h4>
      <section>
        {polyFighters.map((fighter, idx) => (
            <ul>
              <li><img src={fighter.img} alt="Image of Poly Fighter!" /></li>
              <li>#{idx}</li>
              <li>{fighter.name}</li>
              <li>price: {fighter.price}</li>
              <li>strength: {fighter.strength}</li>
              <li>agility: {fighter.agility}</li>
              <li><button  onClick={() => handleAddFighter({idx})}>Buy {fighter.name}</button></li>
            </ul>
        ))}
      </section>
    </>
  )

  /* Functions */

  function handleAddFighter(fighterID) {
    let fighterArrayID = fighterID.idx /* The ID was nested weird for some reason */
    let selectedFighter = polyFighters[fighterArrayID]

    let cost = selectedFighter.price
    if (cost > money) {
      console.log(`You can't afford this fighter!`)
    } else {
      let newMoney = money - cost
      console.log('Old balance:', money)
      console.log('New balance:', newMoney)
      setMoney(newMoney)
      army.push(selectedFighter)

      recalculateTotals()
    }
  }

  function handleRemoveFighter(fighterID) {
    let fighterArrayID = fighterID.idx /* The ID was nested weird for some reason */
    let selectedFighter = army[fighterArrayID]

    let cost = selectedFighter.price
    let newMoney = money + cost
    console.log('Old balance:', money)
    console.log('New balance:', newMoney)
    setMoney(newMoney)
    army.splice(selectedFighter, 1) 

    recalculateTotals()
  }

  function calculateTotal(value, totalValue, setTotalValue) {
    let newValue = 0
    for (let armyMember of army) {
      newValue += armyMember[value]
    }
    console.log(`old ${value}, ${totalValue}`)
    console.log(`New ${value}, ${newValue}`)
    setTotalValue(newValue)
  }

  function recalculateTotals() {
    calculateTotal('strength', totalStrength, setTotalStrength)
    calculateTotal('agility', totalAgility, setTotalAgility)
  }

}

export default App
