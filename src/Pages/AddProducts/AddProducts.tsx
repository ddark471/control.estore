import React, {useState, useCallback} from 'react'
import Sidebar from 'components/Sidebar'
import { Button, Input } from 'antd'
import TextArea from 'antd/es/input/TextArea';
import { addProducts } from 'services/addProducts';
import { product } from 'interfaces';
import ProductsCart from 'components/Products/ProductsCart/ProductsCart';
import style from "./addProducts.module.scss"

interface cart{
    title: string;
    price: number;
    image: string;
    category: string;
    description: string;
}

const AddProducts = () => {
    const [newCart, setNewCart] = useState<cart>({
        title: "", 
        price: 0, 
        image: "",
        category: "",
        description: "" 
    })
    const [products, setProducts] = useState<product>()
    
    const handleChange = useCallback((key: string, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setState: React.Dispatch<React.SetStateAction<cart>>) => {
        setState(prevState => ({
            ...prevState, 
            [key]: e.target.value
        }))
    }, [newCart])

    const handlePriceChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setNewCart(prevState => ({
            ...prevState,
            price: e.target.valueAsNumber
        }))
    }, [newCart.price])

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            if(e.target.files && e.target.files?.[0]){
                const file = e.target.files?.[0];
                const imageUrl = URL.createObjectURL(file)
                setNewCart(prevState => ({
                    ...prevState, 
                    image: imageUrl
                }))
            }
      };

    const handleSubmit = async () => {
        try{
            const response = await addProducts(newCart);
            setNewCart({title: "", price: 0, image: "", category: "", description: ""})
            setProducts(response)
        }   catch(err){
            console.error(err)
        }
        
    } 

  return (
    <div className={style.wrapper}>
        <Sidebar/>
        <div className={style.wrapper__main}>
            <h1>Add new product</h1>
            <div className={style.main__input}>
                <Input placeholder='Enter Product Name' value={newCart.title} onChange={e => handleChange("title" ,e, setNewCart)}/>
            </div>
            <div className={style.main__input}>
                <Input placeholder='Enter price' type='number' value={newCart.price} onChange={e => handleChange("price", e, setNewCart)}/>
            </div>
            <label className={style.main__imageInput}>
                <input 
                    type='file' 
                    accept='image/*' 
                    className={style.imageInput}   
                    onChange={e => handleImageChange(e)}
                />
                {
                    newCart.image && (
                        <div className={style.imageInput__icon}>
                            <img src={newCart.image} width={48} height={48}/>
                        </div>
                    )
                }
            </label>
            <div className={style.main__input}>
                <Input placeholder='Enter category' value={newCart.category} onChange={e => handleChange("category", e, setNewCart)}/>
            </div>
            <div className={style.main__input}>
                <TextArea 
                    placeholder='Enter description' 
                    value={newCart.description} 
                    onChange={e => handleChange("description", e, setNewCart)}
                    style={{resize: "none"}}
                />
            </div>
            <div className={style.main__button}>
                <Button type='primary' onClick={handleSubmit}>Submit Product</Button>
            </div>
        </div>
        {
            products && <ProductsCart 
                id={products.id} 
                title={products.title}
                category={products.category}
                rating={products.rating}
                description={products.description}
                price={products.price}
                image={products.image}
            />
        }
    </div>
  )
}

export default AddProducts