import React, { Component } from 'react';
import './App.css';
import Btn from './components/Btn';
import Picture from './components/Picture';

class App extends Component {
  state = {
    index: 0,
    picList: ["https://images.unsplash.com/photo-1592193771792-cd0884c55dcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1555898866-8f1ac5cc8d76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1566460534866-43a00acfc1fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  ]  
  }

  previousChange = () => {
    if (this.state.index <= 0) {
      this.setState({ index: 3 })
    } else {
      this.setState({ index: this.state.index - 1 })
    }
  }

  nextChange = () => {
    if (this.state.index >= 3) {
      this.setState({ index: 0 })
    } else {
      this.setState({ index: this.state.index + 1 })
    }
  }

  render() {

    return (
      <div className="App">
        <Picture
          picList={this.state.picList[this.state.index]}
        />
        <Btn
          btnText={"Previous"}
          changeState={this.previousChange}
        />
        <Btn
          btnText={"Next"}
          changeState={this.nextChange}
        />


      </div>
    );

  }
}

export default App;
