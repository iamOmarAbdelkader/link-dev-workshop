import React from 'react';
import './App.sass';
import { Achivements, Footer, Header, Navbar , PressReleases, Slider } from './components'
function App() {
  return (
    <div className="App">
       <Header/>
       <Navbar/>
       <Slider/>
       <Achivements />
       <hr />
       <PressReleases />
       <Footer/>
    </div>
  );
}

export default App;
