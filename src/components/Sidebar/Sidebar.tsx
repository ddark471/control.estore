import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from "./sidebar.module.scss"

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className={style.sidebar}>
        <div className={style.sidebar__main}>
            <Link to={"/home"}>
              Home  
            </Link>
            <Link to="/home/products/add">
              Add Product
            </Link>
        </div>
    </div>
  )
}

export default Sidebar