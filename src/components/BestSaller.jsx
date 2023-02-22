import React from 'react'
import arrow from "../Images/downarrow.png"
import { Liner } from './Liner';
import { CradItems } from './CradItems';
export const BestSaller = (props) => {
  return (
    <div className='BestSaller  mt-3' style={{background:props.background}}>
  { props.arrow&& <div className='arrow  d-flex  align-items-center  justify-content-center'>
      <img src={arrow} alt='arrow'  height="30px"/>
     </div>}  
        <div className='container py-5 '>
        <Liner  title={props.title}/>
        <div className='my-5 d-vlock d-flex  justify-content-between scrol'>
     {props.data.map((x,index)=>{
        return <CradItems img={x.img} key={index} title={x.title} subtitle={x.subTitle}  rate={x.rate} 
        price={x.price}/>
     })}   
       
        </div>

        
        </div>
        </div>
  )
}
