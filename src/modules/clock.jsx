
import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clock: new Date() };
  }
  componentDidMount() {
    this.clockInterval = setInterval(() => {
      this.setState({ clock: new Date() });
    }, 1000);
  }
  checkTime(){
    const currentTime = this.state.clock.getHours()
    if ( currentTime >= 6 && currentTime <= 12){
      return "Good morning!"
    }
    else if(currentTime > 12 && currentTime <= 18){
      return "Good day"
    }
    else if(currentTime > 18 && currentTime <= 24){
      return "Good evening"
    }
    else{
      return "Good night"
    }
  }
  render() {
    return (
      <div className= "Clock">
        <h1>Clock</h1>
        <h2>{this.state.clock.toLocaleTimeString()}</h2>
        <p className = "Good-smth">{this.checkTime() }</p>
        
      </div>
    );
  }
}
export default Clock;
