import React, { useState , useEffect , useCallback , useRef } from 'react';
import { Filter , BreadCrumb, PressReleaseCard } from '../../components';
import './NewsListing.style.sass'
import News from '../../models/news';
import { PER_PAGE } from '../../constants';

const NewsListing= ()=>{

  const [category , setCategory] = useState('')
  const [title , setTitle] = useState('')
    // custom search
    const [ data , setData] = useState([])
    const [ canLoadMore , setCanLoadMore] = useState(false)
    const news = useRef(new News())
    const [ offset , setOffset] = useState(0)

  

    useEffect(()=>{
      console.log('hereeee')
      const _news = new News()
      setOffset(0)
      console.log(_news.search(title  , category ,0))
      let res = _news.search(title  , category ,0)
      setData(res.data)
      setCanLoadMore(res.canLoadMore)
      setOffset(offset + PER_PAGE)
    },[category,title])
  
  
  
    const loadMore = useCallback(()=>{
      let loaded = []
      const _news = new News()
      let res = _news.search(title  , category ,offset)
      setOffset(offset + PER_PAGE)
      setData([...res.data , ...data])
      setCanLoadMore(res.canLoadMore)
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
          {data.length?data.map((item,index)=><div key={index} className={'col-md-3'}> 
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
