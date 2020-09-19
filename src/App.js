import React from 'react';
import './App.sass';
import { Achivements, BreadCrumb, Details, Footer, Header, Navbar , PressReleases, Programs, Slider } from './components'
function App() {
  return (
    <div className="App">
       <Header/>
       <Navbar/>
       {/* <Slider/>
       <Achivements />
       <Programs />
       <PressReleases /> */}
       <BreadCrumb />
       <Details />
       <Footer/>
    </div>
  );
}

export default App;
