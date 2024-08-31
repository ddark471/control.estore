import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import style from "./pages.module.scss"
import Login from './Login'
import Home from './Home'

const Pages = () => {
  return (
    <div className={style.wrapper}>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path='*' element={<h1>Wrong direction</h1>}/>
        </Routes>
      </BrowserRouter>
        
    </div>
  )
}

export default Pages