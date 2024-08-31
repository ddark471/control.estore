import React from 'react'
import { Button } from 'antd'
import style from "./loginButton.module.scss"

interface Iprops{
    text: string;
}

const LoginButton: React.FC<Iprops> = ({ text}) => {
  return (
    <div className={style.button}>
        <Button 
            type={"primary"} 
            size='large' 
            htmlType='submit'
        >
            <span className={style.button__text}>{text}</span>
        </Button>
    </div>
  )
}

export default LoginButton
