import './App.css';
import { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { app } from './firebase'

function App() {
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()

    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setUser(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

  }
  console.log(user)

  return (
    <div className="App">
      {user ? `Selamat datang Admin | ${user.email}` :
        <>
          <h5>Firebase Login</h5>
          <div className="login">
            <input type="text" placeholder='email@domain.tld' onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
          </div>
        </>}
    </div>
  );
}

export default App;
