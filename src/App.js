import React, { Suspense } from 'react';
import './App.sass';
import { Footer, Header, Navbar  } from './components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
const  NewsListing =  React.lazy(()=> import('./views/NewsListing'));
const NewsDetails =  React.lazy(()=>import('./views/NewsDetails'));
const HomePage = React.lazy(()=> import('./views/HomePage'))
function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>faild to load app</div>}>

      <Router basename={'link-dev-workshop'}>

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
      </Suspense>
    </div>
  );
}

export default App;
