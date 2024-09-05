import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import AddProducts from './AddProducts'
import style from "./pages.module.scss"
import { AuthContext } from 'contexts/AuthContext'

const Pages = () => {
  const context = useContext(AuthContext);
  /*
    Login logic
    share token from the hook useLogIn.
    if token exists, let user go for other pages
    else only login page
    
    1) sharing token => use context method for global sharing.
    2) in pages, conditionally render pages.

  */
  if(!context?.authToken){
    return (
      <div className={style.wrapper}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }


  return (
    <div className={style.wrapper}>
      <BrowserRouter>
        {
          context.authToken && (  
            <Routes>
              <Route path="/home" element={<Home/>}/>
              <Route path='/home/products/add' element={<AddProducts/>}/>
              <Route path='*' element={<h1>Wrong direction</h1>}/>
            </Routes>
          )
        }
        {
          !context.authToken && (
            <Routes>
              <Route path='/login' element={<Login/>}/>
            </Routes>
          )
        }
      </BrowserRouter>
        
    </div>
  )
}

export default Pages