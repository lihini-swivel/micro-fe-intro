import React, { useState, useEffect } from 'react'
import { getProductById, currency } from 'home/products'

export default function PDPContent() {
  const id = 1
  const [product, setProduct] = useState(1)
  if (!product) {
    return null
  }

  useEffect(() => {
    // id !== null ? setProduct(getProductById(id)) : setProduct(null)
    if (id) {
      getProductById(id)?.then((prod) => {
        setProduct(prod)
      })
    } else {
      setProduct(null)
    }
  }, [id])

  return (
    <div className='grid grid-cols-2 gap-5'>
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        <div className='flex'>
          <h1 className='font-bold text-3xl flex-grow'>{product.name}</h1>
          <div className='font-bold text-3xl flex-end'>
            {currency.format(product.price)}
          </div>
        </div>
        {/* <div ref={addToCart}></div> */}
        <div className='mt-10'>{product.description}</div>
        <div className='mt-10'>{product.longDescription}</div>
      </div>
    </div>
  )
}
