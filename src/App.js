import './App.css';
import { people } from './static/people'
import Card from './components/Card'
import Lights from './components/Lights'
import Title from './components/Title'
import WhoAreYou from './components/WhoAreYou'

import { useState, Fragment } from 'react'

function App() {

  const whoHasWho = {
    tracy: people.alyssa,
    alyssa: people.sam,
    sam: people.tracy
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
          <Lights />
          <Title />
          <WhoAreYou setUser={(user) => acceptUser(user)} />
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
