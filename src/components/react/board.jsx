// wrapper component for Leaderboard

import React from 'react';
import Profiles from './profiles.jsx';
import { Leaderboard } from './database.jsx';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      period: 30 // default selection from 7,30 and all time
    };
  }

  handleClick = (e) => {
    let dataId = e.target.getAttribute('data-id');

    this.setState({
      period: dataId
    });
  }

  getButtonClassName(dataId) {
    return this.state.period == dataId ? 'selected' : '';
  }

  render() {
    return (
      <div className="board">
        <h1 className='leaderboard'>Leaderboard</h1>
        <hr />
        <div className="duration">
            <button onClick={this.handleClick} className={this.getButtonClassName(7)} data-id='7'>7 Days</button>
            <button onClick={this.handleClick} className={this.getButtonClassName(30)} data-id='30'>30 Days</button>
            <button onClick={this.handleClick} className={this.getButtonClassName(0)} data-id='0'>All time</button>
        </div>

        <Profiles Leaderboard={between(Leaderboard, this.state.period)}></Profiles>
      </div>
    )
  }
}

// export default function Board() {

//   const [period, setPeriod] = useState(0);

//   const handleClick = (e) => {
     
//     setPeriod(e.target.dataset.id)
//   }

//   return (
//     <div className="board">
//         <h1 className='leaderboard'>Leaderboard</h1>

//         <div className="duration">
//             <button onClick={handleClick} data-id='7'>7 Days</button>
//             <button onClick={handleClick} data-id='30'>30 Days</button>
//             <button onClick={handleClick} data-id='0'>All-Time</button>
//         </div>

//         <Profiles Leaderboard={between(Leaderboard, period)}></Profiles>

//     </div>
//   )
// }



function between(data, between){
    const today = new Date();
    const previous = new Date(today);
    previous.setDate(previous.getDate() - between);

    let filter = data.filter(val => {
        let userDate = new Date(val.dt);
        if (between == 0) return val;
        return previous <= userDate && today >= userDate;
    })

    return filter.sort((a, b) => {
        return b.score - a.score;
    })

}