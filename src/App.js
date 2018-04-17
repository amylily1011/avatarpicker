import React, { Component } from 'react';
import './App.css';
import AvatarPicker from './AvatarPicker';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Avatar Picker</h1>
        </header>
          <AvatarPicker />
      </div>
    );
  }
}

export default App;
