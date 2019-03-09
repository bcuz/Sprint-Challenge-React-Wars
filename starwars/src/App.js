import React, { Component } from 'react';
import './App.css';

import CharacterList from './components/CharacterList';


class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://dog.ceo/api/breeds/list/all');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.message.terrier });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">terrier breeds</h1>
        <CharacterList characters={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
