import React from 'react';
import logo from './pangku.PNG';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Image } from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Image src={logo} className="App-logo" alt="logo" size='medium' circular/>
        <br/>
        <p>
          WUB WUB WUB WUBBBB
        </p>
      </header>
    </div>
  );
}

export default App;
