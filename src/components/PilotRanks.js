import React from 'react'

import { ranksData, RanksHeader } from '../assets/data'
import './css/Ranks.css'

const PilotRanks = () => {
  return (
    <>
    <div className='container'>
        <div className='ranks__container p-2'>
            {RanksHeader.map(({id, title}) => (
                <h3 className='text-end my-4'>{title}</h3>
            ))}
            
            <div className='ranks__data'>
            {ranksData.map(({id, image, description}) => (
                <>
                <div cLassName='ranks__item'>
                    <img src={image} className='ranks__img my-2' alt='ranks__img'/>
                    <p className='text-end'>{description}</p>
                </div>
                </>
            ))}
            </div>
        </div>
    </div>
    </>
  )
}

export default PilotRanks
