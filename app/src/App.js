import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import logo from './logo.svg'
import './App.css'
import Form from './Form'

class App extends Component {


  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Form />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App
