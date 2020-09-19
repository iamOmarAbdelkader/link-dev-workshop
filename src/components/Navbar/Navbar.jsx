import React from 'react';
import {
  Link
} from "react-router-dom";
import './Navbar.style.sass'
import navArrowDown from '../../assets/images/navArrowDown.png';
import Search from '../../assets/images/Search.png';
const navItems = [
  {name:'Home',url:'/'},
  {name:'Who We Are'},
  {name:'What We Do' , children:[]},
  {name:'Get Involved'},
  {name:'Media Centre' , children:[]},
  {name:'Contact Us'},
]

function Navbar() {
  return (
    <nav id={'app-nav'}>
        <div className={'container-fluid'}>
            <div className={'nav-inner flex space-between align-items-center'}>

                <div className={'left'}>
                   <ul className={'nav-items'}>
                      {navItems.map(({name , children , url} , index)=>
                      <li key={index} className={'item cursor-pointer'}>
                        {url?<Link to={url}>{name}</Link>:<a href={'#'}>{name}</a>}
                        {children?<span className={'nav-arrow-container'}> <img  src={navArrowDown} alt={'nav arrow'}/> </span>:null}
                      </li>
                      )}
                   </ul>
                </div>
                   
                <div className={'right'}>
                  <img src={Search} alt={'search icon'} />
                </div>

            </div>
        </div>
    </nav>
  );
}

export default Navbar;
