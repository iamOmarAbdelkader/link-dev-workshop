import React from 'react';
import './Details.style.sass'
import classNames from 'classnames';
import achievements from '../../assets/images/achievements.png';
import download from '../../assets/images/download.png';
import recommends1 from '../../assets/images/recommends1.png';

function Details() {
  return (
    <section id={'details'}>
      <div className={'container'}>
          <div className={'details-inner'}>
            <h2 id={'title'}>PRESS RELEASE</h2>
              <div className={'detail-section'}>
                  <p className={'new'}>
                    <img src={achievements} alt={'new descriptor image'} />
                    <span className={'title'}>Al Jalila Foundation Awards AED 5 million to boost Medical Research</span>
                    <span className={'published-at'}>13April 2016</span>
                          Al Jalila Foundation, a global healthcare philanthropic organisation founded to position the UAE at the forefront of medical innovation, has awarded AED 5 million in seed grants to 20 UAE-based medical researchers bringing the total investment to date to AED 9 million for 35 research projects. The seed grants focus on research in the field of cancer, cardiovascular disease, diabetes, mental health and obesity, Al Jalila Foundation Research Centre’s five research priorities. Two Emirati graduates were also selected to pursue medical research fellowships at internationally renowned institutions Out of 55 applications submitted for the seed grants, 20 candidates, including 10 women, succeeded following a competitive two-stage international review process with experts from the world’s most renowned medical institutions.
                          including Harvard Medical School.
                          University of Oxford, Imperial College, University of Queensland, INSERM, University of Auckland, University of Toronto, University of Glasgow, National University of Singapore and University of Stony Brook. The reviewers were handpicked as leaders in each specific field of research, in line with Al Jalila Foundation’s commitment to cultivating a medical research ecosystem built on international best practice.
                          Her Excellency Dr Raja Al Gurg, Member of the Board of Trustees and Chairperson of the Board of Directors of Al Jalila Foundation, commented: “Scientists around the world continue to search for answers into the causes, prevention and treatment of diseases affecting mankind. Our investment in medical research reaffirms our commitment to embed research and innovation in the fabric of the nation’s long-term healthcare strategy. Medical research has the potential to save lives and our efforts today will pave the way for a healthier world for future generations. ”
                          Al Jalila Foundation is fully funded by the generosity of donors. 100% of funds donated to Al Jalila Foundation are invested into medical research, education and treatment in the UAE.
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
            {/* recommended-section */}
          </div>
      </div>
    </section>
  );
}

export default Details;
