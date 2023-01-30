import './css/Card.css'
import { useState } from 'react'

export default function Card() {


    const [cardOpen, setCardOpen] = useState(false);

    const handleClick = () => {
        console.log("Handing Click")
        setCardOpen(prev => !prev)
    }

    return(
        <div className={`card ${cardOpen ? "open" : ""}`} onClick={handleClick}>

        <div className="top-card">
          <div className="card-front">
            <img src="/img/cover.jpg" alt="christmas card cover" />
          </div>
          <div className="card-back">
            <br/>
            <br/>
            <p>You are giving to</p>
            <h2>Tracy</h2> 
            <p></p>
            <p>good luck...</p>
          </div>
        </div>

        <div className="bottom-card">
          <h2>What They Want for Christmas</h2> 
          <ul>
            <li>Delicious Chips</li>
            <li>Gift Cards</li>
            <li>Some peace and quite</li>
            <li>More wine, always more wine</li>
          </ul>
        </div>
      </div>
    )
}
