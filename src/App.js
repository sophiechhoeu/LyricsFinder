import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      data:[],
      artist:'',
      title: ''
    }
  }

 //  componentDidMount(){
 //   fetch(`https://api.lyrics.ovh/v1/TLC/Unpretty`)
 //   .then(res =>res.json())
 //   .then((json) => {
 //     console.log(json.lyrics)
 //     console.log(json.error)
 //     this.setState({
 //       data:[json.lyrics,json.error]
 //       })
 //   });
 // }

  search(){
    fetch(`https://api.lyrics.ovh/v1/${this.state.artist}/${this.state.title}`)
    .then(res =>res.json())
    .then((json) => {
      this.setState({
        data:[json.lyrics,json.error]
        })
    })
    .catch(function(error) { console.log( error); });
  }


  render() {
    return (
      <div className="App">
        <h1>LyricFinder</h1>
       <div className="search-form">
        <Form>
          <FormGroup className="artist-search">
            <Label id="artist" for="artist">Artist</Label>
            <Input type="artist" name="artist" id="Artist" placeholder="Artist"
              value={this.state.artist}
              onChange={event => {this.setState({artist:event.target.value})}}/>
          </FormGroup>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input type="title" name="title" id="Title" placeholder="Title" value={this.state.title}
            onChange={event => {this.setState({title:event.target.value})}}/>
          </FormGroup>
        <Button onClick={() => this.search()}>Submit</Button>
          </Form>
          </div>
        <h2>{this.state.data}</h2>

      </div>
    );
  }
}

export default App;
