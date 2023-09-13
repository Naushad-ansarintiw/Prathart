import React from 'react'
import { useRouter } from 'next/router';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useStateContext } from '../../../context/stateContext';

const products = [
    {
        "_id": 2,
        "name": "product2",
        "imageURL": "/images/2.jpeg",
        "price": 69,
        "slug": "product2"
    },
    {
        "_id": 3,
        "name": "product3",
        "imageURL": "/images/3.jpeg",
        "price": 99,
        "slug": "product3"
    },
    {
        "_id": 4,
        "name": "product4",
        "imageURL": "/images/4.jpeg",
        "price": 87,
        "slug": "product4"
    },
    {
        "_id": 5,
        "name": "product5",
        "imageURL": "/images/5.jpeg",
        "price": 69,
        "slug": "product5"
    },
    {
        "_id": 6,
        "name": "product2",
        "imageURL": "/images/6.jpeg",
        "price": 69,
        "slug": "product2"
    },

]

const ProductDetails = () => {
    const router = useRouter();
    const { slug } = router.query;
    console.log(slug);
    const product = products.find((item) => item.slug === slug);

    const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

    return (
        <>
            {
                (slug === 'PaymentDone') ? <div className="payment-done">
                    <h1>Payment Successful</h1>
                    <p>Your payment has been successfully processed.</p>
                    <p>Thank you for your purchase!</p>
                    {setShowCart(false)}
                    <button onClick={() => window.location.href = '/'}>Back to Home</button>
                </div> : <>
                    <div>
                        <div className="product-detail-container">
                            <div>
                                <div className="image-container">
                                    <img src={product && product.imageURL} className="product-detail-image" />
                                </div>
                            </div>

                            <div className="product-detail-desc">
                                <h1>{product.name}</h1>
                                <div className="reviews">
                                    <div>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiOutlineStar />
                                    </div>
                                    <p>
                                        (20)
                                    </p>
                                </div>
                                <h4>Details: </h4>
                                <p>{product.details}</p>
                                <p className="price">{product.price}</p>
                                <div className="quantity">
                                    <h3>Quantity:</h3>
                                    <p className="quantity-desc">
                                        <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
                                        <span className="num">{qty}</span>
                                        <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
                                    </p>
                                </div>
                                <div className="buttons">
                                    <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>Add to Cart</button>
                                    <button type="button" className="buy-now" onClick="">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div >
                </>
            }
        </>
    )
}



export default ProductDetails
