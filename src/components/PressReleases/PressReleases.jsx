import React from 'react';
import PressReleaseCard from '../PressReleaseCard';
import './PressReleases.style.sass'

function PressReleases() {
  return (
    <section id={'press-releases'}>
      <div className={'container'}>
        <div className={'press-releases-inner'}>
          <h2>
            <span>Our latest</span>
            Press Releases
          </h2>
          <div className={'cards-container'}>
            <div className={'col'}>
                <PressReleaseCard />
            </div>
            <div className={'col'}>
              <PressReleaseCard />
            </div>
            <div className={'col'}>
              <PressReleaseCard />
            </div>
            <div className={'col'}>
              <PressReleaseCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PressReleases;
