import './App.css';
import React from 'react';
import {BsJoystick,BsNewspaper} from "react-icons/bs";
import {GiPodium} from "react-icons/gi";
import Slots from './Slots.js';
import Leaderboard from './Leaderboard.js';

import gamesPlayed from './Slots.js';
import prize from './Slots.js';

function App(props){

  return(
    <>
        <div id="mainPage">
          <div id="game">
            <div>
              <h2><BsJoystick/> Let's play</h2>
              <span>Name: {props.player} </span>
            </div>
            <Slots player={props.player} />
          </div>
          
          {/* <div class="clear"><br /></div> */}
          <div id="instructions">
            <h2><BsNewspaper/> Instructions</h2>
            <p>You start with a balance of $1000. Each spin costs $250. As you play, you can win, lose, or not gain any money.</p>
            <p>The breakdown for each selection is as follows</p>
            <ul>
              <li>Blank: Don't lose or gain money <br/>(3 blanks: Lose $100)</li>
              <li>Bomb: Lose $100 <br/>(2 bombs: lose $200, 3 bombs: lose $500)</li>
              <li>Lemons: Gain $200 <br/>(3 lemons: gain $500)</li>
              <li>Grapes: Gain $100 <br/>(3 Grapes: gain $500)</li>
              <li>Bell: Gain $150 <br/>(3 Bells: Gain $750)</li>
              <li>Seven: Gain $200 <br/>(3 sevens: $1000)</li>
            </ul>
          </div>
          <div id="leaderboard">
            <h2><GiPodium/>Leaderboard</h2>
            <Leaderboard />
          </div>

          
        </div>
    </>
  )
}

export default App;
