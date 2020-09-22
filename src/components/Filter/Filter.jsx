import React, { useEffect, useState , useCallback, useRef } from 'react';
import './Filter.style.sass'
import classNames from 'classnames';
import { News } from '../../models';
const SELECT_PLACEHOLDER = 'PLACEHOLDER';
function Filter({setCategoryValue , setTitleValue }) {
  const [categories , setCategories] = useState([])
  const [category , setCategory] = useState(SELECT_PLACEHOLDER)
  const [title , setTitle] = useState('')
  const news = useRef(new News())
  
  useEffect(()=>{
    setCategories(news.current.getCategories())
  },[])



  const handleChangeCategory = useCallback((e)=>{
    setCategory(e.target.value || null)
  },[setCategory])

  const handleChangeTitle = useCallback((e)=>{
    setTitle(e.target.value)
  },[setTitle])







  const submit = useCallback(()=>{
    if(!(category === SELECT_PLACEHOLDER)){
      setCategoryValue(category)
    } else {
      setCategoryValue(null)
    }
    setTitleValue(title)
  },[title , category , setCategoryValue , setTitleValue])


 


  return (
    <section id={'filter'}>
      <div className={'container-fluid'}>
        <div className={'row'}>
  {/* <p>{JSON.stringify(data)}</p> */}
  {/* <p>{JSON.stringify(data.length)}</p> */}

          {/* <button onClick={loadMore}>loadMore</button> */}
          <div className={'col-md-4'}>
            <select value={category} onChange={handleChangeCategory} placeholder={'category'}  id={'select-category'} className={classNames('control',{'has-null-value': category === SELECT_PLACEHOLDER})}>
              <option  value={SELECT_PLACEHOLDER}>Category</option>
                  {categories.map((item , index)=> <option value={item.id} key={item.id}>{item.name}</option>)}
            </select> 

          </div>
          <div className={'col-md-8'}>

            <input value={title} onChange={handleChangeTitle} type={'text'} placeholder={'Title'} id={'search-title'} className={'control'} />
            <button onClick={submit} id={'search-btn'} className={''}>
              <i className={'fa fa-search'}></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Filter;
