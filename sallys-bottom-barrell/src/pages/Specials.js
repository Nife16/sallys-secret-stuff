import axios, { all } from 'axios'
import React, { useEffect, useState } from 'react'

function Specials() {

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


    const renderProducts = () => {

        return allProducts.map((product) => {
            return (
                <div>{product.name}</div>
            )
        })

    }

  return (
    renderProducts()
  )
}

export default Specials