import React from 'react'
import style from "./home.module.scss"
import Sidebar from 'components/Sidebar'
import Products from 'components/Products'

const Home = () => {
  return (
    <div className={style.wrapper}>
        <Sidebar/>
        <Products/>
    </div>
  )
}

export default Home