import React from "react";


class Background extends React.Component {
      

    render () {
         return(
        <div>

        <button onClick={this.props.toggleBackground}>SHOW button</button>
         
      </div>
         )
    }
}

export default Background