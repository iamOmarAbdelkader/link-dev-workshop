import React from 'react';
import LinkDevLogo from '../../assets/images/linkdevlogo.png'
import './Header.style.sass'
function Header() {
  return (
    <header id={'app-header'}>
        <div className={'container'}>
            <div className={'header-inner  flex space-between'}>
                <div className={'left'}>
                   <img src={LinkDevLogo} className={'header-logo'} alt={'link dev logo'} />
                </div>
                   
                <div className={'right  flex space-between flex-direction-column space-around'}>
                  <div className={'upper'}>
                        <span className={'link cursor-pointer'}>register</span>
                        <span className={'border'}></span>
                        <span className={'link cursor-pointer'}>login</span>
                  </div>

                  <div className={'lower'}>
                        <span  className={'lang active cursor-pointer'}>En</span>
                        <span  className={'lang cursor-pointer'}>Ar</span>
                        <span  className={'border'}></span>
                        <span className={'label lg cursor-pointer'}>A</span>
                        <span className={'label sm cursor-pointer'}>A</span>
                  </div>
                </div>

            </div>
        </div>
    </header>
  );
}

export default Header;
