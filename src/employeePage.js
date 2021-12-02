import React from 'react';
import { useState } from 'react';
import './index.css';
import App from './App';
import GameHistory from './GameHistory';
import ReactDOM from 'react-dom';
import Welcome from './index';


function Employee() {
    const[togglePage, setTogglePage] = useState(true);
    const[username] = useState('admin');
    const[password] = useState('cis3344');
    const[givenUsername, setGivenUsername] = useState('');
    const[givenPassword, setGivenPassword] = useState('');

    const giveAccess= () => {
        if ((username == givenUsername) && (password == givenPassword)){
            ReactDOM.render(
                <React.StrictMode>
                  <GameHistory />
                </React.StrictMode>,
                document.getElementById('root')
              )
        }
        else{
            alert('Wrong user/password. Try again')
        }
        return;
    }
    
    const goBack=() => {
        ReactDOM.render(
            <React.StrictMode>
              <Welcome/>
            </React.StrictMode>,
            document.getElementById('root')
          )
    }

    return(
        <div>
            <div className="playerIntro">
                <h2 id="employeePortal">Employee Portal</h2>
                <p>User Name:</p>
                <label>
                    <input id="new-username" value={givenUsername} onChange={e => setGivenUsername(e.target.value)} />
                </label>
                <p>Password:</p>
                <label>
                    <input id="new-password" value={givenPassword} onChange={e => setGivenPassword(e.target.value)} />
                </label>
                <div id="playerIntroButtons">
                    <button className="startGameButton" onClick={() => giveAccess()}>Log in</button>
                </div>
                <div>
                    <button className="startGameButton" onClick={() => goBack()}>Return to Index</button>
                </div>
            </div>
            
        </div>
        
    )
}
export default Employee;

