import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Clock from "./modules/clock";
import OutputName from "./modules/OutputName";
import Background from "./modules/background";
const arrayImages = [
  "https://mirpozitiva.ru/wp-content/uploads/2019/11/1472042719_15.jpg",
  "https://st2.depositphotos.com/3538667/8031/i/600/depositphotos_80317012-stock-photo-beautiful-lake-panoramic-view-alps.jpg",
  "https://bfoto.ru/foto/river/bfoto_ru_3331.jpg",
  "https://st2.depositphotos.com/1011081/9323/i/600/depositphotos_93231188-stock-photo-high-resolution-planet-earth-view.jpg",
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }
  toggleBackground = () => {
    if (this.state.index === arrayImages.length-1) {
      let newIndex = 0;
      this.setState({ index: newIndex });
    } else {
      let newIndex = this.state.index + 1;
      this.setState({ index: newIndex });
    }
  };
  render() {
    return (
      <div
        className="App"
        style={{ backgroundImage: `url(${arrayImages[this.state.index]})` }}
      > 
        <p>asdasdsa</p>
        <Clock />
        <OutputName inputkey="inputValue" />
        <OutputName inputkey="inputValueFocus" />

        <Background toggleBackground={this.toggleBackground} />
        
      </div>
    );
  }
}

export default App;
