import GameEntry from './GameEntry';

function Leaderboard(props) {

  var numberOfSessions = localStorage.getItem('lastSession');

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

  const findTopTen = () => {
    var sessionsList = getSessionsList();
    var topTen = [];
    sessionsList.sort(function(a, b) {return a.earnings - b.earnings; });

    if (sessionsList.length > 10) {
      for (var i = sessionsList.length - 1; i >= sessionsList.length - 10; i--) {
        topTen.push(sessionsList[i]);
      }
    }
    else {
      for (var i = sessionsList.length - 1; i >= 0; i--) {
        topTen.push(sessionsList[i]);
      }
    }

    return topTen;
  }

  var sessions = findTopTen();

  return (
    <table>
        <thead>
          <tr>
            <th>Session ID</th>
            <th>Player</th>
            <th>Date</th>
            <th>Earnings</th>
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
  )
}

export default Leaderboard;