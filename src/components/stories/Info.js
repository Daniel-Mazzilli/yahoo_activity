import React from 'react'

import './Info.css'


export default function Info({category, header, description, stats}) {


    return (
        <div className='Info'>
            <div className='spanDiv'>
                <span className='firstSpan'>{category[0]}</span> · <span className='secondSpan'>{category[1] && category[1]}</span>
            </div>
            <h3>{header}</h3>
            <p>{description}</p>
            <div className='stats'>
                <span>708</span> · <span>3 min read</span>
            </div>
        </div>
    )
}
