
import React from 'react'

export const Characters = ({characters = []}) => {
    return (
        <div className='row'>
            {
                characters.map((item, index) => (
                    <div key={index} className='col mb-4'>
                        <div className='card' style={{minWidth: "200px"}}>
                            <img src={item.image} alt="Personaje" />
                            <div className='card-body'>
                                <h5 className='card-title'>{item.name}</h5>
                                <hr />
                                <p className=''>Ubicación: {item.location.name}</p>
                                <p className=''>Especie: {item.species}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
            
        </div>
    )
}