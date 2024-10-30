import './App.css'
import { useState } from 'react'
import FighterShop from './FighterShop'
import FighterTeam from './FighterTeam'

const App = () => {
  
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [totalStrength, setTotalStrength] = useState(0)
  const [totalAgility, setTotalAgility] = useState(0)
  const [zombiefighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://dummyimage.com/150x150/8c2a8c/000000&text=Survivor',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://dummyimage.com/150x150/315910/000000&text=Scavenger',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://dummyimage.com/150x150/993b20/000000&text=Shadow',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://dummyimage.com/150x150/e3e2ca/000000&text=Tracker',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://dummyimage.com/150x150/f0e50c/000000&text=Sharpshooter',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://dummyimage.com/150x150/5ce065/000000&text=Medic',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://dummyimage.com/150x150/bfbe95/000000&text=Engineer',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://dummyimage.com/150x150/cfb2cc/000000&text=Brawler',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://dummyimage.com/150x150/619bb0/000000&text=Infiltrator',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://dummyimage.com/150x150/302f0c/000000&text=Leader',
    },
  ])
  

  return (
    <>
      <h1>Zombie Fighters!</h1>
      <header>
        <h3>Money: ${money}</h3>
        <h3>Total Strength: {totalStrength}</h3>
        <h3>Total Agility: {totalAgility}</h3>
        <h3>Current team</h3>
        <section>
        {team.map((fighter, idx) => (
            <ul>
              <li><img src={fighter.img} alt="Image of Zombie Fighter!" /></li>
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
      <h4>Buy team members!</h4>
      <section>
        {zombiefighters.map((fighter, idx) => (
            <ul>
              <li><img src={fighter.img} alt="Image of Zombie Fighter!" /></li>
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
    let selectedFighter = zombiefighters[fighterArrayID]

    let cost = selectedFighter.price
    if (cost > money) {
      console.log(`You can't afford this fighter!`)
    } else {
      let newMoney = money - cost
      console.log('Old balance:', money)
      console.log('New balance:', newMoney)
      setMoney(newMoney)
      team.push(selectedFighter)

      recalculateTotals()
    }
  }

  function handleRemoveFighter(fighterID) {
    let fighterArrayID = fighterID.idx /* The ID was nested weird for some reason */
    let selectedFighter = team[fighterArrayID]

    let cost = selectedFighter.price
    let newMoney = money + cost
    console.log('Old balance:', money)
    console.log('New balance:', newMoney)
    setMoney(newMoney)
    team.splice(selectedFighter, 1) 

    recalculateTotals()
  }

  function calculateTotal(value, totalValue, setTotalValue) {
    let newValue = 0
    for (let teamMember of team) {
      newValue += teamMember[value]
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
