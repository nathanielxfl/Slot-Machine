import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {BiHistory} from "react-icons/bi";
import GameEntry from './GameEntry';
import Search from './Search';
import Welcome from './index';

function GameHistory(){

  const [search, setSearch] = useState('');
  var numberOfSessions = localStorage.getItem('lastSession');

  const searchPlayers = () => {
    ReactDOM.render(
      <React.StrictMode>
        <Search query={search} />
      </React.StrictMode>,
      document.getElementById('root')
    )
  }

  const getSessionsList = () => {
    let sessionsList = [];
    let sessionCheck;
    let session;
    for (var i = 1; i <= Number(numberOfSessions); i++) {
      sessionCheck = localStorage.getItem(i);
      if (sessionCheck != null) {
        session = JSON.parse(sessionCheck);
        sessionsList.push(session);
      }
    }
    return sessionsList;
  }

  var sessions = getSessionsList();
  
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
      <div id="gameHistory">
        <h2><BiHistory/> Game History</h2>
        <div id="searching">
          <input id="search" value={search} onChange={(e) => setSearch(e.target.value)} />
          <button onClick={searchPlayers}>Search</button>
        </div>
        <div id="results">
          <table>
            <thead>
              <tr>
                <th>Session ID</th>
                <th>Player</th>
                <th>Date</th>
                <th>($) Earnings</th>
              </tr>
            </thead>
            <tbody>
            {sessions.map((thisSession) => 
              <GameEntry id={thisSession.id}
                player={thisSession.player}
                date={thisSession.date}
                earnings={thisSession.earnings}
              />)
              }
            </tbody>
          </table>
        </div>
        <div>
          <button className="startGameButton" onClick={() => goBack()}>Return to Index</button>
        </div>
      </div>
      
    </div>
  )
}
export default GameHistory;