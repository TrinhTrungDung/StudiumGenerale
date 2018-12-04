import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './App.css'
import MainForm from './MainForm';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <MainForm />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App
