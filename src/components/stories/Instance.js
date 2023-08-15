import React from 'react'

import Image from './Image'
import Info from './Info'

import './Instance.css'



export default function Instance({image, category, header, description, stats}) {


    return (
        <div className='Instance'>
        
            <Image image={image}/>
            
            <Info category={category} header={header} description={description} stats={stats}/>

        </div>
    )
}
