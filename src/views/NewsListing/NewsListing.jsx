import React, { useState , useEffect , useCallback , useRef } from 'react';
import { Filter , BreadCrumb, PressReleaseCard } from '../../components';
import './NewsListing.style.sass'
import News from '../../models/news';

const NewsListing= ()=>{

  const [category , setCategory] = useState('')
  const [title , setTitle] = useState('')
    // custom search
    const [ data , setData] = useState([])
    const [ canLoadMore , setCanLoadMore] = useState(false)
    const news = useRef(new News())

  

    useEffect(()=>{
      console.log('hereeee')
      let _data = news.current.whereCategory(category).whereTite(title).perform().articles
      setData(_data)
      setCanLoadMore(news.current.canLoadMore())
      console.log(news.current.canLoadMore() , news  , _data )
    },[category,title])
  
  
  
    const loadMore = useCallback(()=>{
      let loaded = []
      loaded = news.current.whereTite(title).perform(true).articles
      setData([...loaded , ...data])
      setCanLoadMore(news.current.canLoadMore())
      console.log(news)
    },[news ,data , setCanLoadMore]) 

    

  return (<div  id={'news-listing-page'}>
    <p>{JSON.stringify(category)}</p>
    <p>{JSON.stringify(title)}</p>
    {/* <p>{JSON.stringify(data)}</p> */}
      
        <BreadCrumb breadCrumbs={['Press Release']} />
        <div className={'container-fluid'}>
          <p id={'page-title'}>PRESS RELEASE</p>
        </div>
         <Filter setCategoryValue={setCategory} setTitleValue={setTitle}  />
         <div className={'container-fluid'}>
           <div className={'row'}>
          {data.length?data.map((item,index)=><div key={item.id} className={'col-md-3'}> 
              <div className={'press-release-container'}>
                 <PressReleaseCard easternBlueBtn item={item} />
              </div>
          </div>):null}
          <div className={'container-fluid'}>
              {canLoadMore?
                <button onClick={loadMore} id={'load-more'}>LOAD MORE</button>
              :null}
          </div>
         
          </div>
      </div>
    </div>             
  );
}

export default React.memo(NewsListing);
