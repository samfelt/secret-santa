import './App.css';
import { whoHasWho } from './static/whoHasWho'
import Card from './components/Card'
import Lights from './components/Lights'
import Title from './components/Title'
import WhoAreYou from './components/WhoAreYou'

import { useState, Fragment } from 'react'

function App() {

  const [showModal, setShowModal] = useState(true)
  const [user, setUser] = useState(null)
    
    const acceptUser = (user) => {
        console.log(`Setting user to: ${user}`)
        if (user.toLowerCase() in whoHasWho) {
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
          <Lights />
          <Title />
          <WhoAreYou setUser={(user) => acceptUser(user)} />
          </Fragment>
        : 
          <Fragment>
          <Lights />
          <Card user={whoHasWho[user]} />
          </Fragment>
        }
    </div>
  );
}

export default App;
