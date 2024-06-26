import { Product } from '@/lib/models/ProductModel'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Rating } from './Rating'

export default function ProductItem({ product }: { product: Product }) {
  return (
    <>
    
    {/* <div className="card bg-base-300 shadow-xl mb-4 p-2">
      <figure>
        <Link href={`/product/${product.slug}`}>
          <img
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="object-cover h-64 w-full p-2 radius"
          />
        </Link>
      </figure>
      <div className="card-body">
        <Link href={`/product/${product.slug}`}>
          <h2 className="card-title font-normal">{product.name}</h2>
        </Link>
        <Rating value={product.rating} caption={`(${product.numReviews})`} />
        <p className="mb-2">{product.brand}</p>
        <div className="card-actions flex items-center justify-between">
          <span className="text-2xl">${product.price}</span>
        </div>
      </div>
    </div>

    <hr /> */}
    <div id="list-container" className="list-container">
    <div className="card__content bg-base-300 shadow-xl mb-4">
        <div className="card__img-box h-64">
            <Link href={`/product/${product.slug}`}><img className="card__img" src={product.image} alt={product.name} /></Link>
            <div className="new">New</div>
        </div>
        <h3 className="card__title">{product.name}</h3>
        <Rating value={product.rating} caption={`(${product.numReviews})`} />
        <p className="mb-2">{product.brand}</p>
        <hr />
        <div className="card__footer">
            <div className="card__footer-left"><Link className='btn' href={`/product/${product.slug}`}>Batafsil</Link></div>
            <div className="card__footer-right">
                {/* <del>250.000</del> */}
                <span>${product.price}</span>
            </div>
        </div>
    </div>
</div>

    </>
  )
}




