import React from 'react';
import './BreadCrumb.style.sass'
import classNames from 'classnames';
import print from '../../assets/images/print.png';
import envelop from '../../assets/images/envelop.png';
import share from '../../assets/images/share.png';

function BreadCrumb({breadCrumbs}) {
  return (
    <section id={'bread-crumb'}>
      <div className={'container-fluid'}>
        <div className={'bread-crumb-inner'}>
          <div className={'bread-crumbs'}>
                <p className={'bread-crumb-label'}>Home</p>
                <i className={'fa fa-chevron-right chevron'}></i>
                <p className={'bread-crumb-label'}>Media Center</p>
                <i className={'fa fa-chevron-right chevron'}></i>

                {breadCrumbs.map((item , index)=>{
                  const isNotLastItem =  !(breadCrumbs.length   === index + 1)
                  return(
                    <React.Fragment key={index}>
                          <p  className={classNames({'bread-crumb-label':true , 'active':!isNotLastItem})}>{item}</p>
                            {isNotLastItem ?<i className={'fa fa-chevron-right chevron'}></i>:null}
                      </React.Fragment>
                  )
                }
              )}
          </div>
          {/* ./bread-crumbs */}

          <div className={'actions'}>
            <img src={print} alt={'click to print'} />
            <img src={envelop} alt={'click to send'} />
            <img src={share} alt={'click to share'} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BreadCrumb;
