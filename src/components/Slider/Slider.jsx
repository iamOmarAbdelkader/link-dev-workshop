import React , { useCallback } from 'react';
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

  const  scrollToAchievementsSection =  useCallback(()=>{
    // 210 is nav height 
            window.scrollTo({top:document.getElementById('achivements').offsetTop  -210, behavior:'smooth'}); 
  },[])
  return (
    <section id={'app-slider'}>
              <div className={'container-fluid'}>
                <div className={'slider-inner'}>
                  <div className={'carousel-container'}>
                      <Carousel  renderArrow={renderArrow}  pagination={false} itemsToShow={1}>
                          <Slide />
                          <Slide />
                          <Slide />
                      </Carousel>
                  </div>

                  <div className={'scroll-down'}>
                    <button onClick={scrollToAchievementsSection}  className={'scroll-down-inner'}>
                        <img  src={mouse} alt={'mouse scroll down'}/>
                        <span className={'line'}></span>
                        <span className={'rect'}></span>
                        <p>Scroll Down</p>
                    </button>
                  </div>
                </div>
            </div>
    </section>
  );
}

export default Slider;
