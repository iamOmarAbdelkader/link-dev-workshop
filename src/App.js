import React from 'react';
import './App.sass';
import { Achivements, BreadCrumb, Details, Footer, Header, Navbar , PressReleases, Programs, Slider } from './components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NewsListing from './views/NewsListing';
import NewsDetails from './views/NewsDetails';
import HomePage from './views/HomePage';

function App() {
  return (
    <div className="App">
      <Router>

       <Header/>
       <Navbar/>
       {/* <Slider/>
       <Achivements />
       <Programs />
       <PressReleases /> */}
       {/* <BreadCrumb />
       <Details /> */}
        <Switch>
          <Route path="/news">
            <NewsListing />
          </Route>
          <Route path="/news-details/:id">
            <NewsDetails />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
       <Footer/>
      </Router>
    </div>
  );
}

export default App;
