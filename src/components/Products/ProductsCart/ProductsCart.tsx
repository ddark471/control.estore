import React from 'react'
import style from "./productsCart.module.scss"
import { product } from 'interfaces'

const ProductsCart:React.FC<product> = ({id, title, category, description, image, price, rating}) => {
  return (
    <div className={style.wrapper} key={id}>
        <div className={style.wrapper__img}>
            <img src={image}/>
        </div>
        <div className={style.wrapper__details}>
            <div className={style.details__main}>
                <span className={style.details__title}>{title}</span>
                <span className={style.details__text}>Price: {price}$</span>
            </div>
            <div className={style.details__sub}>
                <span className={style.sub__rating}>rating: </span>
                <span className={style.sub__text}>{rating.rate}</span>
            </div>
        </div>
    </div>
  )
}

export default ProductsCart