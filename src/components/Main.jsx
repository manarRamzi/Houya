import React from 'react'
import { Route, Routes ,Navigate} from 'react-router-dom';
import { Home } from './Home';
export const Main = () => {
  return (
    <>
     <Routes>
      <Route  path="/home"  element={<Home/>} />
      <Route path='/' element={<Navigate replace to='/home' />} />
      </Routes>
    </>
  )
}
