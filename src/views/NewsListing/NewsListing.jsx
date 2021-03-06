import React, { useState , useEffect , useCallback } from 'react';
import { Filter , BreadCrumb, PressReleaseCard } from '../../components';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import './NewsListing.style.sass'
import News from '../../models/news';
import { PER_PAGE, LOADER_COLOR } from '../../constants';

const NewsListing= ()=>{

  const [category , setCategory] = useState('')
  const [title , setTitle] = useState('')
    // custom search
    const [ data , setData] = useState([])
    const [ canLoadMore , setCanLoadMore] = useState(false)
    const [ offset , setOffset] = useState(0)
    const [ fullPageLoading , setFullPageLoading] = useState(true)
    const [ loadMoreLoading , setLoadMoreLoading] = useState(false)
    
    useEffect(()=>{
      setFullPageLoading(true)
      setTimeout(() => {
        const _news = new News()
        setOffset(0)
        let res = _news.search(title  , category ,0)
        setData(res.data)
        setCanLoadMore(res.canLoadMore)
        setFullPageLoading(false)
        setOffset(prev => prev + PER_PAGE)
      }, 3000);
    },[category,title])
  
  
  
    const loadMore = useCallback(()=>{
      setCanLoadMore(false)
      setLoadMoreLoading(true)
      setTimeout(()=>{
        const _news = new News()
        let res = _news.search(title  , category ,offset)
        setOffset(offset + PER_PAGE)
        setData([ ...data , ...res.data ])
        setCanLoadMore(res.canLoadMore)
        setLoadMoreLoading(false)
      },1000)
    },[data , setCanLoadMore , setLoadMoreLoading , title  , category ,offset]) 

    

  return (<div  id={'news-listing-page'}>
        <BreadCrumb breadCrumbs={['Press Release']} />
        <div className={'container-fluid'}>
          <p id={'page-title'}>PRESS RELEASE</p>
        </div>
         <Filter setCategoryValue={setCategory} setTitleValue={setTitle}  />
         <div className={'container-fluid'}>
           <div className={'row'}>
            {fullPageLoading?
             <div className={'col-sm-12'}>
               <div className={'full-page-loader-container'}>
               <Loader
                  type="Oval"
                  color={LOADER_COLOR}
                  height={100}
                  width={100}
                  visible={fullPageLoading}
                />
                </div>
             </div>:null}
          {data.length && !fullPageLoading?data.map((item,index)=><div key={index} className={'col-md-3'}> 
              <div className={'press-release-container'}>
                 <PressReleaseCard easternBlueBtn item={item} />
              </div>
          </div>): !fullPageLoading? <div className={'col-sm-12'}>
              <div className={'no-data'}>
                  <p>No Data To Show.</p>
              </div>  
          </div>:null}
          <div className={'load-more-container'}>
              {canLoadMore && !loadMoreLoading && !fullPageLoading && data.length?
                <button onClick={loadMore} id={'load-more'}>LOAD MORE</button>
              :null}

            {loadMoreLoading ?<div className={'load-more-loader-container'}>
                <Loader
                    type="Oval"
                    color={LOADER_COLOR}
                    height={50}
                    width={50}
                    visible={loadMoreLoading}
                  />
              </div>:null}

          </div>
         
          </div>
      </div>
    </div>             
  );
}

export default NewsListing;
