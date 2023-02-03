import './css/WhoAreYou.css'
import { useState } from 'react'

export default function WhoAreYou({ setUser, error}) {

    const [formUser, setFormUser] = useState('')

    const handleSubmit = (e, user) => {
        e.preventDefault()
        setUser(user)
    }

    return(
      <div className="whoareyou">
         <form onSubmit={(e) => {handleSubmit(e, formUser)}}>
         <label>Who are you?</label>
         <input
           type="text"
           value={formUser}
           onChange={(e) => setFormUser(e.target.value)}
         />
         <input type="submit" value="Submit" />
        </form>
        {error && <div className="error">{error}</div>}
      </div>
    )
}
