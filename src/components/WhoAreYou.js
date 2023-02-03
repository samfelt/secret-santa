import './css/WhoAreYou.css'
import { useState } from 'react'

export default function WhoAreYou({ setUser }) {

    const [formUser, setFormUser] = useState('')

    return(
      <div className="whoareyou">
         <form onSubmit={() => setUser(formUser)}>
         <label>Who are you?</label>
         <input
           type="text"
           value={formUser}
           onChange={(e) => setFormUser(e.target.value)}
         />
         <input type="submit" value="Submit" />
        </form>
      </div>
    )
}
