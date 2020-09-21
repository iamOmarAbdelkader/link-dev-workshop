import React, { useState , useEffect , useCallback , useRef } from 'react';
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
    const news = useRef(new News())
    const [ offset , setOffset] = useState(0)
    const [ fullPageLoading , setFullPageLoading] = useState(false)
    const [ loadMoreLoading , setLoadMoreLoading] = useState(false)
    
    useEffect(()=>{
      setFullPageLoading(true)
      setTimeout(() => {
        const _news = new News()
        setOffset(0)
        console.log(_news.search(title  , category ,0))
        let res = _news.search(title  , category ,0)
        setData(res.data)
        setCanLoadMore(res.canLoadMore)
        setOffset(offset + PER_PAGE)
        setFullPageLoading(false)
      }, 3000);
    },[category,title])
  
  
  
    const loadMore = useCallback(()=>{
      setCanLoadMore(false)
      setLoadMoreLoading(true)
      setTimeout(()=>{
        let loaded = []
        const _news = new News()
        let res = _news.search(title  , category ,offset)
        setOffset(offset + PER_PAGE)
        setData([...res.data , ...data])
        setCanLoadMore(res.canLoadMore)
        setLoadMoreLoading(false)
      },3000)
    },[news ,data , setCanLoadMore , setLoadMoreLoading]) 

    

  return (<div  id={'news-listing-page'}>
        <BreadCrumb breadCrumbs={['Press Release']} />
        <div className={'container-fluid'}>
          <p id={'page-title'}>PRESS RELEASE</p>
        </div>
         <Filter setCategoryValue={setCategory} setTitleValue={setTitle}  />
         <div className={'container-fluid'}>
           <div className={'row'}>
            {fullPageLoading? <div className={'col-sm-12'}>
               <div className={'full-page-loader-container'}>
               <Loader
                  type="Oval"
                  color={LOADER_COLOR}
                  height={100}
                  width={100}
                  visible={true}
                />
                </div>
             </div>:null}
          {data.length?data.map((item,index)=><div key={index} className={'col-md-3'}> 
              <div className={'press-release-container'}>
                 <PressReleaseCard easternBlueBtn item={item} />
              </div>
          </div>): !fullPageLoading? <div className={'col-sm-12'}>
              <div className={'no-data'}>
                  <p>No Data To Show.</p>
              </div>  
          </div>:null}
          <div className={'container-fluid'}>
              {canLoadMore && data.length?
                <button onClick={loadMore} id={'load-more'}>LOAD MORE</button>
              :null}

            {loadMoreLoading?<div className={'load-more-loader-container'}>
                <Loader
                    type="Oval"
                    color={LOADER_COLOR}
                    height={50}
                    width={50}
                    visible={true}
                  />
              </div>:null}

          </div>
         
          </div>
      </div>
    </div>             
  );
}

export default React.memo(NewsListing);
