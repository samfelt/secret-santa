import './App.css';
import Card from './components/Card'
import Lights from './components/Lights'
import Title from './components/Title'
import Modal from './components/Modal'

import { useState, Fragment } from 'react'

function App() {

  const people = {
    "tracy": "Sam",
    "patti": "Tracy",
    "alyssa": "Patti",
    "roger": "Alyssa"
  }

  const [showModal, setShowModal] = useState(true)
  const [user, setUser] = useState(null)
    
    const acceptUser = (user) => {
        console.log(`Setting user to: ${user}`)
        if (user.toLowerCase() in people) {
            setUser(user.toLowerCase())
            setShowModal(false)
        }
    }
  return (
    <div className="App">
      <br />
      <br />
      {showModal
        ? 
          <Fragment>
          <Title />
          <Modal setUser={(user) => acceptUser(user)} />
          </Fragment>
        : 
          <Fragment>
          <Lights />
          <Card user={people[user]} />
          </Fragment>
        }
    </div>
  );
}

export default App;
