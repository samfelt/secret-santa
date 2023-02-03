import './App.css';
import Card from './components/Card'
import Lights from './components/Lights'
import Title from './components/Title'
import Modal from './components/Modal'

import { useState, Fragment } from 'react'

function App() {

  const [showModal, setShowModal] = useState(true)
  const [user, setUser] = useState(null)
    
    const acceptUser = (user) => {
        console.log(`Setting user to: ${user}`)
        setUser(user)
        setShowModal(false)
    }
  return (
    <div className="App">
      <br />
      <br />
      {showModal
        ? <Modal setUser={(user) => acceptUser(user)} />
        : 
          <Fragment>
          <Title />
          <Lights />
          <Card />
          <Lights />
          </Fragment>
        }
    </div>
  );
}

export default App;
