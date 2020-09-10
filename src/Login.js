import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then(auth => {
      history.push('/')
    })
    .catch(err => console.log(err.message))
  }
  const register = e => {
    e.preventDefault();
    
    auth.createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      console.log(auth);
      if(auth){
        history.push('/')
      }
    })
    .catch(err => alert(err.message))

  }

  return (
    <div className="login">
      <Link to="/login">
        <img
          className="login__logo"
          src="https://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
          alt="logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button  
            onClick={signIn}
          className="login__signInButton"
          type="submit">Sign in</button>
        </form>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum sint
          consequuntur iste molestias incidunt iusto voluptatibus illo
          blanditiis corporis vitae, doloribus enim repellat? Doloremque qui
          alias incidunt harum. Autem, ut!\
        </p>

        <button 
          onClick={register}
        className="login__registerButton">
          Create your amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
