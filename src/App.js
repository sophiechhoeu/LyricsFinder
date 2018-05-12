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

  searchLyrics(){
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
              <Label id="artist" for="artist">Song Artist</Label>
              <Input type="artist" name="artist" id="artist-input" placeholder="Artist"
                value={this.state.artist}
                onChange={event => {this.setState({artist:event.target.value})}}/>
            </FormGroup>
            <FormGroup className="title-search">
              <Label id="title" for="title">Song Title</Label>
              <Input type="title" name="title" id="title-input" placeholder="Title" value={this.state.title}
              onChange={event => {this.setState({title:event.target.value})}}/>
            </FormGroup>
            </Form>
          <Button color="primary" onClick={() => this.searchLyrics()}>Submit</Button>
        </div>
          <div className="lyrics">
            <span>{this.state.data}</span>
          </div>
      </div>
    );
  }
}

export default App;
