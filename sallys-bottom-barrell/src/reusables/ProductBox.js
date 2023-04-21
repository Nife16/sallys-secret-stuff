import React from 'react'

function ProductBox(props) {
    return (
        <div className='flex-col  product-box'>
            <div>Product: {props.product.name}</div>
            <div>Description: {props.product.description}</div>
            <div>Price: ${props.product.price}</div>
            <div>Items Left In Stock: {props.product.quantity}</div>
            <img src={props.product.imgUrl} className='product-img' />
            <button
                className='button-53'
                onClick={() => { props.onClick(props.product) }}>
                {props.text}
            </button>
        </div>
    )
}

export default ProductBox