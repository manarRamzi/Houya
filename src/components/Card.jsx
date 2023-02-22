import React from 'react'
export const Card = (props) => {
  return (
    <div className='card_item   d-flex  justify-content-center align-items-center my-5'>
        
       <div className='text-center item'>
            <img src={props.img} alt='items' width="62px" height="62px" className='my-2'/>
            <p className='my-2'>
           {props.title}
            </p>
        </div>

       
        </div>
  )
}
