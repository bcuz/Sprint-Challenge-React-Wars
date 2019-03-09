import React, { Component } from 'react';
import './App.css';

import TerrierList from './components/TerrierList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      terriers: []
    };
  }

  componentDidMount() {
    this.getTerriers('https://dog.ceo/api/breeds/list/all');
  }

  getTerriers = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ terriers: data.message.terrier });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">terrier breeds</h1>
        <TerrierList terriers={this.state.terriers} />
      </div>
    );
  }
}

export default App;
