import react from "react";
import React from "react";

class OutputName extends React.Component {

    constructor(props) {
        super(props);
        this.state = { inputValue : ""};
      }

     handleInput = (event) => {
        localStorage.setItem(this.props.inputkey, event.target.value)
        this.setState({inputValue : event.target.value})
     }
     componentDidMount() {
         
        const outputItem =  localStorage.getItem(this.props.inputkey)
        if (outputItem === null) {
            return 
        }
        this.setState({inputValue : outputItem})
    }
  
  render() {
      return(
    <div className="Text-input">
        
      <input type="text" value = {this.state.inputValue} onChange={this.handleInput}/>
      

    </div>
      )
  }
}
export default OutputName