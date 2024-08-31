import React from 'react'
import style from "./App.module.scss"
import Pages from './Pages'

const App = () => {
  return (
    <div className={style.wrapper}>
      <Pages/>
    </div>
  )
}

export default App