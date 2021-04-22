import './App.css';
import React, { Component } from 'react';
import 'react-dom';
import Dialog from './newDialog';

export class App extends Component {
  render() {
    return (
      <div className = "body">
        <Dialog />
      </div>
    );
  }
}

export default App;