import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../css/specials.css'
import ProductBox from '../reusables/ProductBox'


function Specials(props) {

    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {

        axios.get("http://localhost:8080/product/findAll")
        .then((response) => {
            setAllProducts(response.data)
        })
        .catch((e) => {
            console.log(e)
        })

    }, [])

    const submitHandler = (product) => {
        axios.post(`http://localhost:8080/cart/addProductToCart/${props.user.cart.id}`, product)
        .then((response) => {
            props.setUpdateUser({})
        })
        .catch((e) => {
            console.log(e)
        })
    }

    const renderProducts = () => {

        return allProducts.map((product) => {
            return (
                <ProductBox 
                    product={product}
                    text="Add to Cart!"
                    onClick={submitHandler}
                />
                
            )
        })

    }

  return (
    <div className='flex-row'>
        {renderProducts()}
    </div>
  )
}

export default Specials