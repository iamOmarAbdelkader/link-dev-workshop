import React from 'react';
import './HomePage.style.sass'
import { Achivements, PressReleases, Programs, Slider } from '../../components'

const HomePage= ()=>{


  return (<div  className={'home-page'}>
         <Slider/>
       <Achivements />
       <Programs />
       <PressReleases />
    </div>             
  );
}

export default React.memo(HomePage);
