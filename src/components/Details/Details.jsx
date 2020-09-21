import React from 'react';
import './Details.style.sass'
import download from '../../assets/images/download.png';
import { useParseNewsDate } from '../../hooks';

function Details({item}) {

  const date = useParseNewsDate(item.publishedAt)
  return (
    <section id={'details'}>
      <div className={'container-fluid'}>
          <div className={'details-inner'}>
            <h2 id={'title'}>PRESS RELEASE</h2>
              <div className={'detail-section'}>
                  <p className={'new'}>
                        <img src={item.urlToImage} alt={'new descriptor image'} />
                        <span className={'title'}>{item.title}</span>
                        <span className={'published-at'}>{date.format('D MMMM yyyy')}</span>
                          {item.content}                         
                  </p>
                  <div className={'clear-fix'}></div>
              </div> 
            {/* detail-section */}


            <div className={'attachments-section'}>
                <p className={'title'}>ATTACHMENTS</p>
                  <div className={'attachments'}>

                    <div className={'attachment'}>
                      <span className={'name'}>AL Jalila Foundation.PDF</span>
                      <span className={'img'}>
                        <img src={download} alt={'click to download'} />
                      </span>
                    </div>
                    {/* /.attachement */}

                    <div className={'attachment'}>
                      <span className={'name'}>AL Jalila Foundation 2.PDF</span>
                      <span className={'img'}>
                        <img src={download} alt={'click to download'} />
                      </span>
                    </div>
                    {/* /.attachement */}

                  </div>
              </div> 
            {/* attachments-section */}

            <div className={'recommended-section'}>
              <p className={'title'}>YOU MAY ALSO BE INTERESTED IN </p>
              <div className={'recommends'}>
                <div className={'row'}>
                      <div className={'col-lg-4'}>

                                <div  className={'item item-1'}>
                                    <div className={'inner'}>
                                      <p className={'inner-title'}>About MRMI</p>
                                      <p className={'inner-description'}>Mohammed Bin Rashid Al Maktoum Global Initiatives was inaugurated on 4 October 2015. </p>
                                      <div className={'view'}>
                                        <i className={'fa fa-chevron-right icon'}></i>
                                      </div>
                                    </div>
                          </div>
                          {/* ./item */}

                      </div>

                      <div className={'col-lg-4'}>
                                <div  className={'item item-2'}>
                            <div className={'inner'}>
                              <p className={'inner-title'}>Our Message</p>
                              <p className={'inner-description'}>As a young Foundation, we are inspired by our young nation whose achievements have surpassed.</p>
                              <div className={'view'}>
                                <i className={'fa fa-chevron-right icon'}></i>
                              </div>
                            </div>
                          </div>
                          {/* ./item */}

                      </div>
                      <div className={'col-lg-4'}>
                        
                            <div  className={'item item-3'}>
                              <div className={'inner'}>
                                <p className={'inner-title'}>Our Vision, Mission & Goals</p>
                                <p className={'inner-description'}>VisionAl Jalila Foundation is a global philanthropic organisation. </p>
                                <div className={'view'}>
                                  <i className={'fa fa-chevron-right icon'}></i>
                                </div>
                              </div>
                            </div>
                            {/* ./item */}
                      </div>

                </div>
             

             

              </div>
              </div> 
            {/* recommended-section */}
          </div>
      </div>
    </section>
  );
}

export default Details;
