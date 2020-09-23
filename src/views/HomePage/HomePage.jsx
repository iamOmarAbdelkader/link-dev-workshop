import React , { useEffect} from 'react';
import './HomePage.style.sass'
import { Achivements, PressReleases, Programs, Slider } from '../../components'
import { News } from '../../models';

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
