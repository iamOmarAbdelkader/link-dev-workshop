import React, { useMemo } from 'react';
import moment from 'moment';
import numeral from 'numeral'
import {
  Link
} from "react-router-dom";
import './PressReleaseCard.style.sass'

function PressReleaseCard({item}) {
  const date = useMemo(()=>{
    return moment(new Date(item.publishedAt))
  },[item , moment])
  return (
    <section style={{backgroundImage:`url(${item.urlToImage})`}} className={'press-release-card has-over-lay'}>
      <div className={'over-lay'}>
          <div className={'press-release-card-inner'}>
              <div className={'date'}>
                  <div className={'day'}>{numeral(date.format('DD')).format('00')}</div>
                  <div className={'month'}>{date.format('MMMM')}</div>
                  <div className={'day-name-and-year'}>{date.format('dddd')} {date.format('yyyy')}</div>
              </div>
            <p>{item.title}</p>
              <Link   to={`/news-details/${item.id}`} className={'read-more-btn cursor-pointer'}>Read More</Link>
          </div>
      </div>
    </section>
  );
}

export default PressReleaseCard;
