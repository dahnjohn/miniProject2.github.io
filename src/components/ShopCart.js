import React from "react"
import "./ShopCart.css";
import { useCart } from 'react-use-cart';

const ShopCart = () => {
    const { 
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if (isEmpty) return <p className='text-center mt-5 text-light'>Your Cart is empty</p>
    return (
        <>
        <section id="cart">
            <div className="row mt-4">
                <div className="col-md-12 cart-box">
                    <p className="cart-heading text-light"> <span className="spanL">|</span> Cart</p>
                    <h5 className="text-light mb-3 text-center cart-total">Cart ({totalUniqueItems}) total items: ({totalItems})</h5>
                    <table className='table table-hover m-0 mt-5 cart-table'>
                        <tbody>
                            {items.map((item, index) =>{
                                return (
                                <tr key={index}>
                                    <td>
                                        <img src={item.img} style={{height: '6rem'}} />
                                    </td>
                                    <td className="text-light">{item.title}</td>
                                    <td className="text-light">{item.price}</td>
                                    <td className="text-light">Quantity: ({item.quantity})</td>
                                    <td>
                                        <button 
                                        className='btn btn-info ms-2'
                                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                        > - </button>
                                        <button 
                                        className='btn btn-info ms-2'
                                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                        > + </button>
                                        <button 
                                        className='btn btn-danger ms-2'
                                        onClick={() => removeItem(item.id)}
                                        ><i class="fa fa-trash" aria-hidden="true"></i></button>
                                    </td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>

                    <div className='cartTotal-price'>
                        <div className='col-auto ms-auto mt-5 text-light'>
                            <h3>Total Price: P {cartTotal}</h3>
                        </div>
                        <div className='col-auto'>
                            <button 
                            className='btn btn-danger m-2'
                            onClick={() => emptyCart()}><i class="fa fa-trash" aria-hidden="true"></i>  Clear Cart</button>
                            <button className='btn btn-primary m-2'>Buy now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>

    )
}
export default ShopCart;