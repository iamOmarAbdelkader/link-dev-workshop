import React from 'react';
import './Programs.style.sass'
import graduation from '../../assets/images/graduation.png';
import children from '../../assets/images/children.png';
import gift from '../../assets/images/gift.png';
import heart from '../../assets/images/heart.png';
import flower from '../../assets/images/flower.png';
import flowers from '../../assets/images/flowers.png';
import telescope from '../../assets/images/telescope.png';

function Programs() {
  return (
    <section id={'programs'}>
      <div className={'container-fluid'}>
        <div className={'programs-inner'}>
          <h2>Today’s Investments, Tomorrow’s Cures</h2>
          <p>Support the different programs we have below</p>
          <div className={"diamond"}>
        <div className={"colum-container"}>
              <div className={"item up"}> 
                  <div className={'item-inner'}>
                    <img  width={72} height={58} src={children} alt={'gradution cap'} />
                    <p>Ta’alouf</p>
                    <i className={'fa fa-plus fa-2x'}></i>
                  </div>
              </div>
              <div className={"item bottom"}> 
                    <div className={'item-inner'}>
                    <img width={64} height={64} src={gift} alt={'gradution cap'} />
                    <p>Zakat</p>
                    <i className={'fa fa-plus fa-2x'}></i>
                  </div>
              </div>

            </div>

            <div className={"colum-container"}>
              <div className={"item up"}>
                 <div className={'item-inner'}>
                    <img width={93} height={85} src={heart} alt={'gradution cap'} />
                    <p>A’awen</p>
                    <i className={'fa fa-plus fa-2x'}></i>
                  </div>
              </div>
              <div className={"item bottom"}>
                 <div className={'item-inner'}>
                    <img width={45} height={69} src={flower} alt={'gradution cap'} />
                    <p>Fundraising</p>
                    <i className={'fa fa-plus fa-2x'}></i>
                  </div>
              </div>
            </div>

            <div className={"colum-container"}>
              <div className={"item up"}>
                 <div className={'item-inner'}>
                    <img width={84} height={75}  src={graduation} alt={'gradution cap'} />
                    <p>Scholarships</p>
                    <i className={'fa fa-plus fa-2x'}></i>
                  </div>
              </div>
              <div className={"item bottom"}>
                 <div className={'item-inner'}>
                    <img  width={67} height={65} src={flowers} alt={'gradution cap'} />
                    <p>Ta’alouf</p>
                    <i className={'fa fa-plus fa-2x'}></i>
                  </div>
              </div>
            </div>
            <div className={"colum-container"}>
              <div className={"item up last-item"}>
                 <div className={'item-inner'}>
                    <img width={36} height={63} src={telescope} alt={'gradution cap'} />
                    <p>Omniyat Dania</p>
                    <i className={'fa fa-plus fa-2x'}></i>
                  </div>
              </div>
              <div className={"item bottom for-demo "}>
                 <div className={'item-inner'}>
                    <img src={children} alt={'gradution cap'} />
                    <p>Medical Research</p>
                    <i className={'fa fa-plus fa-2x'}></i>
                  </div>
              </div>
            </div>  
          </div>

        </div>
      </div>
    </section>
  );
}

export default Programs;
