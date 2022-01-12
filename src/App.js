import React from "react";
import "./App.css";

function DistanceToTimeCalculator() {
  const [distance, setDistance] = React.useState({
    walking: "",
    driving: "",
    flight: "",
  });
  let walkingSpeedPerHour = 3.6;
  let drivingSpeedPerHour = 50;
  let flightSpeedPerHour = 800;

  const updateValue = (ev) =>
    setDistance({
      value: ev.target.value,
      walking: ((+ev.target.value * 60) / walkingSpeedPerHour).toFixed(2),
      driving: ((+ev.target.value * 60) / drivingSpeedPerHour).toFixed(2),
      flight: ((+ev.target.value * 60) / flightSpeedPerHour).toFixed(1),
    });

  return (
    <form>
      <h1>DISTANCE TO TIME CALCULATOR</h1>
      <br></br>
      <div id="container">
        <div id="distance">
          Distance In KM:
          <input
            id="distance"
            type="number"
            value={distance.value}
            onChange={updateValue}
          ></input>
        </div>

        <div id="timeWalking">
          Time In Hours&Minutes:
          <input
            type="number"
            value={distance.walking}
            onChange={updateValue}
          ></input>
        </div>

        <div id="timeDriving">
          Time In Hours&Minutes:
          <input
            type="number"
            value={distance.driving}
            onChange={updateValue}
          ></input>
        </div>
        <div id="timeFlying">
          Time In Hours&Minutes:
          <input
            type="number"
            value={distance.flight}
            onChange={updateValue}
          ></input>
        </div>
      </div>
    </form>
  );
}

export default DistanceToTimeCalculator;
//  constructor(props) {
//     super(props);
//     this.state = {
//       time: [],
//       walking: "",
//       driving: "",
//       flight: ""
//     };
//   }

//    distance(distanceInKm) {
//      var distanceInKm = [];
//      var distance =""
//     for (let i in distanceInKm) {
//       distanceInKm.push("");
//     }

//     return distance;
//   }
//   updateMessage(event) {
//     this.setState({
//       distanceInKm: event.target.value,
//     });
//   }

//     handleClick(event) {
//       event.preventDefault();
//       let distance = ""
//       if (Number(this.state.walking) >= 3.6) {
//         return distance / 3.6
//       } if (Number(this.state.driving) >= 100) {
//         return distance / 80

//       } if (Number(this.state.flight) >= 800) {
//         return distance / 800
//       }
//       this.setState({
//         ...this.state,
//         distance: [...this.state.distance, this.distance(+this.state.distanceInKm)],
//       });
//       this.setState({
//         walking: "",
//         driving: "",
//         flight:""

//       });

//     }
//     renderRows() {
//       return this.state.distance.map(function (time) {
//         return (
//           <tr>
//             <td>{time}</td>
//           </tr>
//         );
//       });
//     }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleClick.bind(this)}>
//           <label>kilomtres</label>
//           <input type="number" onChange={this.updateMessage.bind(this)} />

//           <button type="submit">calculate distance</button>
//         </form>

//       </div>
//     );
//   }
