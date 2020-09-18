import React from 'react';
import './PressReleaseCard.style.sass'

function PressReleaseCard() {
  return (
    <section style={{backgroundImage:'url(https://images.mktw.net/im-231687/social)'}} className={'press-release-card has-over-lay'}>
      <div className={'over-lay'}>
          <div className={'press-release-card-inner'}>
              <div className={'date'}>
                <div className={'day'}>02</div>
                <div className={'month'}>December</div>
                <div className={'day-name-and-year'}>Monday 2015</div>
              </div>
              <p>7 Emirates Run raises AED60,000 for Al Jalila Foundation to support Sharjah toddler suffering from limb deformity.</p>
              <button  className={'read-more-btn'}>Read More</button>
          </div>
      </div>
    </section>
  );
}

export default PressReleaseCard;
