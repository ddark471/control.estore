import React from 'react'
import { useFetchProducts } from 'hooks/useFetchProducts'
import style from "./products.module.scss"
import ProductsCart from 'components/Products/ProductsCart/ProductsCart';

const Products = () => {

  const {data, error} = useFetchProducts();
  console.log(data)

  return (
    <div className={style.wrapper}>
      {
        data?.map((item:any) => (
          <ProductsCart 
            id={item.id}
            category={item.category}
            description={item.description}
            image={item.image}
            price={item.price}
            rating={item.rating}
            title={item.title}
          />
        ))
      }
    </div>
  )
}

export default Products