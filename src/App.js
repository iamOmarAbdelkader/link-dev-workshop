import React from 'react';
import './App.sass';
import { Footer, Header, Navbar , Slider } from './components'
function App() {
  return (
    <div className="App">
       <Header/>
       <Navbar/>
       <Slider/>
       <Footer/>
    </div>
  );
}

export default App;
