import React from 'react';
import './Slider.style.sass'
import Carousel from 'react-elastic-carousel'
// ={({type, onClick}) => <div onClick={onClick}>{type ==='PREV' ? '<-' : '->'}</div>}
import sliderArrowLeft from '../../assets/images/sliderArrowLeft.png';
import sliderArrowRight from '../../assets/images/sliderArrowRight.png';
import mouse from '../../assets/images/mouse.png';
const renderArrow = ({type, onClick})=><div onClick={onClick}>{type ==='PREV' ? <img className={'slider-arrow'} src={sliderArrowLeft} alt={'slider arrow left'} /> :  <img  className={'slider-arrow'}  src={sliderArrowRight} alt={'slider arrow left'} />}</div>
const Slide = ()=>(
  <div className={'slide'}>
    <p>
      <span className={'foundation-name'}>Al Jalila Foundation</span> is focused on inspiring the next generation of Emirati <span className={'health-care'}>Healthcare</span> professionals in the UAE.
    </p>
    <div className={'actions'}>
      <button className={'read-more'}>READ MORE</button>
      <button className={'donate'}>DONATE NOW</button>
      
    </div>
  </div>
) 
function Slider() {
  return (
    <section id={'app-slider'}>
              <div className={'container'}>
                <div className={'slider-inner'}>
                  <div className={'carousel-container'}>
                      <Carousel enableAutoPlay={true} renderArrow={renderArrow}  pagination={false} itemsToShow={1}>
                          <Slide />
                          <Slide />
                          <Slide />
                      </Carousel>
                  </div>

                  <div className={'scroll-down'}>
                    <div className={'scroll-down-inner'}>
                        <img  src={mouse} alt={'mouse scroll down'}/>
                        <span className={'line'}></span>
                        <span className={'rect'}></span>
                        <p>Scroll Down</p>
                    </div>
                  </div>
                </div>
            </div>
    </section>
  );
}

export default Slider;
