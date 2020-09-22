import React from 'react';
import './Achivements.style.sass'
import Carousel from 'react-elastic-carousel'
import graduation from '../../assets/images/graduation.png';
import { useMediaPredicate } from "react-media-hook";
import { TABLET_MAX_WIDTH_SCREEN_SIZE } from '../../constants';

const SliderArrowContainer = ({children})=> <div className={'arrow'}>{children}</div>
const renderArrow = ({type, onClick})=><div className={'arrow-container'} onClick={onClick}>{type ==='PREV' ?<SliderArrowContainer><i className={'fa fa-chevron-left'} /></SliderArrowContainer>: <SliderArrowContainer><i className={'fa fa-chevron-right'} /></SliderArrowContainer> }</div>
const Slide = ()=>(
  <div  className={'slide-container'}>
       <div className={'top-icon'}>
            <img src={graduation} alt={'gradution cap'}/>
        </div>
        <div className={'slide has-over-lay'}>
          <div className={'over-lay'}>
            <div className={'slide-inner'}>
              <h2 className={'title'}>TA’ALOUF PROGRAM</h2>
              <p className={'count'}>200</p>
              <p className={'to-date'}>GRADUATES TO DATE</p>
              <p className={'description'}>Ta”alouf program aims to extend its reach across the Emirates addressing the needs of the country.</p>
            </div>
          </div>
        </div>
  </div>
 
) 


function Slider() {

  const isNotDesktop = useMediaPredicate(`(max-width: ${TABLET_MAX_WIDTH_SCREEN_SIZE})`);
  return (
    <section id={'achivements'}>
            <div className={'container-fluid'}>
              <div className={'achivements-inner'}>
                  <div className={'intro'}>
                        <h2>How we have helped</h2>
                        <p>See how Al Jalila Foundation have promoted change locally and to the world</p>
                  </div>
                  <div className={'slider'}>
                  <Carousel renderArrow={renderArrow} pagination={false} itemsToShow={isNotDesktop?1:2}>
                     <Slide />
                     <Slide />
                     <Slide />
                     <Slide />
                     <Slide />
                     <Slide />
                     <Slide />
                  </Carousel>
                  </div>
              </div>
             
            </div>
    </section>
  );
}

export default Slider;
