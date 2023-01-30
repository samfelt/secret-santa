import './css/Card.css'
import { useState } from 'react'

export default function Card() {


    const [cardOpen, setCardOpen] = useState(false);

    const handleClick = () => {
        console.log("Handing Click")
        setCardOpen(prev => !prev)
    }

    return(
      <div className={cardOpen ? "card open" : "card"} onClick={handleClick}>

        <div className="left-card">
          <div className="card-front">
            <img src="/img/cover.jpg" alt="christmas card cover" />
          </div>
          <div className="card-back">
          </div>
        </div>

        <div className="right-card">
          <p>You are giving to</p>
          <h2>Tracy</h2> 
          <p></p>
          <p>good luck...</p>
        </div>
      </div>
    )
}
