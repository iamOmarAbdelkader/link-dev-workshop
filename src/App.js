import React from 'react';
import './App.sass';
import { Achivements, Footer, Header, Navbar , Slider } from './components'
function App() {
  return (
    <div className="App">
       <Header/>
       <Navbar/>
       <Slider/>
       <Achivements />
       <Footer/>
    </div>
  );
}

export default App;
