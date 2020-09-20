import React from 'react';
import { Filter } from '../../components';
import './NewsListing.style.sass'

const NewsListing= ()=>{

  return (<div  className={'home-page'}>
  home
         <Filter />
    </div>             
  );
}

export default React.memo(NewsListing);
