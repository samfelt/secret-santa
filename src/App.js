import './App.css';
import { whoHasWho } from './static/whoHasWho'
import Card from './components/Card'
import Lights from './components/Lights'
import Title from './components/Title'
import WhoAreYou from './components/WhoAreYou'

import { useState, Fragment } from 'react'

function App() {

  const [user, setUser] = useState(null)
  const [error, setError] = useState('')
    
  const acceptUser = (user) => {
      if (user.toLowerCase() in whoHasWho) {
          setUser(user.toLowerCase())
          setError('')
      } else {
          setUser(null)
          setError(`Are you sure??? '${user}' not found`)
      }
  }
  return (
    <div className="App">
      <Lights />
      {user ?
        <Card user={whoHasWho[user]} />
      :
        <Fragment>
        <Title />
        <WhoAreYou
          setUser={(u) => acceptUser(u)}
          error={error}
        />
        </Fragment>
      }
    </div>
  );
}

export default App;
