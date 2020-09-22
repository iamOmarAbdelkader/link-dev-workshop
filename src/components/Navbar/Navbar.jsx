import React, { useCallback, useState } from 'react';
import {
  Link
} from "react-router-dom";
import './Navbar.style.sass'
import navArrowDown from '../../assets/images/navArrowDown.png';
import Search from '../../assets/images/Search.png';
import classNames from 'classnames';
const navItems = [
  {name:'Home',url:'/'},
  {name:'Who We Are'},
  {name:'What We Do' , children:[]},
  {name:'Get Involved'},
  {name:'Media Centre' , children:[]},
  {name:'Contact Us'},
]

function Navbar() {
  const [isOpen , setIsOpen] = useState(false)
  const toggleMenu = useCallback(()=>{
    setIsOpen(!isOpen)
  },[isOpen , setIsOpen])
  return (
    <nav id={'app-nav'}>
        <div className={'container-fluid'}>
            <div className={'nav-inner flex space-between align-items-center'}>

                <div className={'left'}>
                 <button onClick={toggleMenu} className={'toggle-menu'}>
                   {isOpen?<i className={'fa fa-2x fa-close menu-icon'}></i>: <i className={'fa fa-bars fa-2x menu-icon'}></i>}
                 </button>
                   <ul className={'nav-items desktop-menu'}>
                      {navItems.map(({name , children , url} , index)=>
                      <li key={index} className={'item cursor-pointer'}>
                        {url?<Link to={url}>{name}</Link>:<button href={'#'}>{name}</button>}
                        {children?<span className={'nav-arrow-container'}> <img  src={navArrowDown} alt={'nav arrow'}/> </span>:null}
                      </li>
                      )}
                   </ul>
                </div>
                   
                <div className={'right'}>
                  <img src={Search} alt={'search icon'} />
                </div>

            </div>
              <ul className={classNames('nav-items mobile-menu',{'is-open':isOpen})}>
                      {navItems.map(({name , children , url} , index)=>
                      <li key={index} className={'item cursor-pointer'}>
                        {url?<Link to={url}>{name}</Link>:<button href={'#'}>{name}</button>}
                        {children?<span className={'nav-arrow-container'}> <img  src={navArrowDown} alt={'nav arrow'}/> </span>:null}
                      </li>
                      )}
                   </ul>


        </div>
    </nav>
  );
}

export default Navbar;
