import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      data:[],
    }
  }



  componentDidMount(){
    fetch(`https://api.lyrics.ovh/v1/TLC/Unpretty`)
    .then(res =>res.json())
    .then((json) => {
      console.log(json.lyrics)
      console.log(json.error)
      this.setState({
        data:[json.lyrics,json.error]
        })
    });
  }


  render() {
    return (
      <div className="App">
        <h1>{this.state.data}</h1>
      </div>
    );
  }
}

export default App;
