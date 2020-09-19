import React, { useEffect  , useState } from 'react';
import PressReleaseCard from '../PressReleaseCard';
import './PressReleases.style.sass'
import News from '../../models/news';

function PressReleases() {
  const [homeNews,setHomeNews] = useState([])
  useEffect(()=>{
    const news =new  News()
    setHomeNews(news.getHomeNews())
  },[])
  return (
    <section id={'press-releases'}>
      <div className={'container-fluid'}>
        <div className={'press-releases-inner'}>
          <h2>
            <span>Our latest</span>
            Press Releases
          </h2>
          <div className={'cards-container'}>
            <div className={'row no-gutters'}>
              {homeNews.map((item , index)=> 
                  <div className={'col-md-3 col-sm-6'}>
                      <PressReleaseCard key={index}  item={item} />
                  </div> 
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default PressReleases;
