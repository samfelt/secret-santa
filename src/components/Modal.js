import './css/Modal.css'
import { useState } from 'react'

export default function Modal({ setUser }) {

    const [formUser, setFormUser] = useState('')

    return(
      <div className="modal">
        <div>
           <form onSubmit={() => setUser(formUser)}>
           <label>Who are you?</label>
           <input
             type="text"
             value={formUser}
             onChange={(e) => setFormUser(e.target.value)}
           />
           <input type="submit" value="?????" />
          </form>
        </div>
      </div>
    )
}
