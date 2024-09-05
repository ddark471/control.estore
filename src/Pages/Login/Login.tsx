import React, { useCallback, useMemo } from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import style from './login.module.scss'
import { useLogIn } from '../../hooks/useLogIn'
import LoginInput from './LoginInput'
import LoginButton from './LoginButton'

const Login = () => {
  const validationRules = Yup.object().shape({
    login: Yup.string().required("Required")
      .min(4)
      .matches(/^[A-Za-z0-9!@#%^&*()_+\-=]*$/)
      .max(30, "Login must not be longer than 30"),
    password: Yup.string().required("Required")
      .min(6, "Password must be at least 6 characters")
      .matches(/^[A-Za-z0-9!@#%^&*()_+\-=]*$/)
      .max(50, "Password must not be longer than 50"),
  });

  const { mutate, data } = useLogIn();

  const handleSubmit = useCallback((values: any) => {
    mutate({
      username: values.login,
      password: values.password
    });
  }, [mutate])

  const formik = useFormik({
    initialValues: {
      login: "", 
      password: ""
    }, 
    validationSchema: validationRules,
    onSubmit: handleSubmit
  });

  return (
    <form className={style.wrapper} onSubmit={formik.handleSubmit}>
      <span className={style.wrapper__text}>
        Sign in to the system
      </span>
      <div className={style.wrapper__input}>
        <LoginInput 
          prefix="Login" 
          placeholder='enter your email' 
          name='login'
          handleChange={formik.handleChange}
        />
        <LoginInput 
          prefix="Password" 
          placeholder='enter your password' 
          name='password'
          handleChange={formik.handleChange}  
        />
      </div>
      <LoginButton text='Sign In'/>
    </form>
  );
}

export default Login;
