import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Employee from './employeePage';
import react from 'react';

localStorage.setItem('Ola', 'mypassword123');
localStorage.setItem('Nathaniel', 'mypassword321');

function Welcome() {
  const[togglePage, setTogglePage] = useState(true);
  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');
  const[newUsername, setNewUsername] = useState('');
  const[newPassword, setNewPassword] = useState('');

  const authentication = () => {
    ReactDOM.render(
      <React.StrictMode>
        <Employee/>
      </React.StrictMode>,
      document.getElementById('root')
    )
  }

  const startGame = (player) => {
    ReactDOM.render(
      <React.StrictMode>
        <App player={player}/>
      </React.StrictMode>,
      document.getElementById('root')
    )
  }

  const handleNewPlayer = () => {
    if (localStorage.getItem(newUsername) != null) {
      alert("This username is taken");
      return;
    }
    else if (!isNaN(newUsername)){
      alert("Your username cannot be a number");
      return;
    }
    localStorage.setItem(newUsername, newPassword);
    alert("Welcome, " + newUsername + "!");
    startGame(newUsername);
  }

  const handleReturningPlayer = () => {
    var pass;
    for (var i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) == username) {
        pass = localStorage.getItem(username);
        if (pass == password) {
          alert("Welcome back, " + username + "!");
          startGame(username);
          return;
        }
        else {
          alert("The password is incorrect. Try again.");
          return;
        }
      }
    }
    alert("This user does not exist");
  }

  return (
    <div>
      <div>
      { togglePage && 
        <div className="playerIntro">
          <button className="playerTypeButton disabled newPlayerButton">New Player</button>
          <button className="playerTypeButton" onClick={() => setTogglePage(!togglePage)}>Returning Player</button>
          <p>User Name:</p>
          <label>
            <input id="new-username" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
          </label>
          <p>Password:</p>
          <label>
            <input id="new-password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
          </label>
          <div id="playerIntroButtons">
            <button className="startGameButton" onClick={() => handleNewPlayer()}>Start Playing</button>
          </div>
          <div>
            <button className="playerTypeButton" id="employeeButton" onClick={authentication}>Employee Page</button>
          </div>
        </div>
      }

      { !togglePage &&
        <div className="playerIntro">
          <button className="playerTypeButton newPlayerButton" onClick={() => setTogglePage(!togglePage)}>New Player</button>
          <button className="playerTypeButton disabled" >Returning Player</button>
          
          <p>User Name:</p>
          <label>
            <input id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <p>Password:</p>
          <label>
            <input id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <div>
            <button className="startGameButton" id="startOne" onClick={() => handleReturningPlayer()}>Start Playing</button>
          </div>
          <div>
            <button className="playerTypeButton" id="employeeButton" onClick={authentication}>Employee Page</button>
          </div>
          
        </div>
      }
        
      </div>
    </div>
    
  )
}
export default Welcome;
ReactDOM.render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>,
  document.getElementById('root')
);

