// import db and uid
import { db } from './firebase/firebase'
import { v4 as uuidv4 } from 'uuid'
import SignIn from './pages/SignIn'
function App() {
  return (
    <div className="App">
      <SignIn />
    </div>
  )
}

export default App
