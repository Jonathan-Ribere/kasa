import React from 'react'
import './CardHome.scss'

export default function CardHome(props) {
    return (
      <div className='card'>
        <div className='card-titre'>
          <p className='card-titre_text'>{props.title}</p>
        </div>
      </div>
    );
  }
