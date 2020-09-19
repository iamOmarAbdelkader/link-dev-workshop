import React , { useState  ,  useEffect } from 'react';
import { Details } from '../../components';
import News from '../../models/news';
import {
  useParams
} from "react-router-dom";
const NewsDetails= ()=>{

  const [newsDetailsItem , setNewsDetailsItem] = useState()
  let { id } = useParams();
  useEffect(()=>{
      const news = new News()
      setNewsDetailsItem(news.findById(id))
      console.log(news.findById(id))
  },[])
  return (<div  className={'news-details'}>
      {newsDetailsItem?<Details item={newsDetailsItem} />:null}
    </div>             
  );
}

export default React.memo(NewsDetails);
