import React from 'react'
import{Link} from 'react-router-dom'

function AboutCardItem(props) {
    return (
        <>
          <li className = 'aboutcards__item'>
              <Link className='aboutcards__item__link' to={props.path}>
                  <figure className='aboutcards__item__pic-wrap' data-category={props.label}>
                  <img 
                  src={props.src} 
                  alt='Cerebro Image' 
                  className='aboutcards__item__img' />
                  </figure>
                  <div className = 'aboutcards__item__info'>
                      <h5 className='aboutcards__item__text'>{props.text}</h5>
                  </div>
              </Link>
          </li>  
        </>
    )
}

export default AboutCardItem
