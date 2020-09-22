import React , { useState  ,  useEffect } from 'react';
import { BreadCrumb, Details } from '../../components';
import News from '../../models/news';
import {
  useParams
} from "react-router-dom";

const breadCrumbs = [
  'Press Release',
];
const NewsDetails= ()=>{

  const [newsDetailsItem , setNewsDetailsItem] = useState()
  let { id } = useParams();
  useEffect(()=>{
      const news = new News()
      setNewsDetailsItem(news.findById(id))
      console.log(news.findById(id))
  },[id])
  return (<div  className={'news-details'}>
   
      {newsDetailsItem?
      <React.Fragment>
         <BreadCrumb breadCrumbs={[...breadCrumbs,newsDetailsItem.title]} />
        <Details item={newsDetailsItem} />
      </React.Fragment>
      :null}
    </div>             
  );
}

export default NewsDetails;
