import React from 'react';
import './App.sass';
import { Achivements, Footer, Header, Navbar , PressReleases, Programs, Slider } from './components'
function App() {
  return (
    <div className="App">
       <Header/>
       <Navbar/>
       <Slider/>
       <Achivements />
       <Programs />
       <PressReleases />
       <Footer/>
    </div>
  );
}

export default App;
