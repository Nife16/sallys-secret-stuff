import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../css/specials.css'
import ProductBox from '../reusables/ProductBox'
import { DotLoader } from 'react-spinners'


function Cart(props) {

    const submitHandler = (product) => {
        axios.post(`http://localhost:8080/cart/removeProductToCart/${props.user.cart.id}`, product)
        .then((response) => {
            props.setUpdateUser({})
        })
        .catch((e) => {
            console.log(e)
        })
    }

    const renderProducts = () => {

        if(props.user.cart === undefined) {

            return (
                <DotLoader color="hotpink" />
            )

        } else {
            return props.user.cart.itemsInCart.map((product) => {
                return (
                    <ProductBox 
                        product={product}
                        text="Remove from Cart!"
                        onClick={submitHandler}
                    />
                    
                )
            })
        }
    }

  return (
    <div className='flex-row product-container'>
        {renderProducts()}
    </div>
  )
}

export default Cart