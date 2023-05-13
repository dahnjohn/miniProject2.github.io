import React from "react"
import "./ShopMerch.css";

export default function ShopMerch() {

    return (
        <>
        <section id="login">
            <div className="row">
                <div className="col-md-12">
                <section className="container content-section">
                    <h2 className="section-header">MERCH</h2>
                    <div className="shop-items">
                        <div className="shop-item">
                            <span className="shop-item-title">Born pink standard digipack <br /> – Jisoo</span>
                            {/* <img className="shop-item-image" src="Images/prod1.jpg" /> */}
                            <div className="shop-item-details">
                                <span className="shop-item-price">$12.99</span>
                                <button className="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
                            </div>
                        </div>
                        <div className="shop-item">
                            <span className="shop-item-title">Born pink standard digipack <br /> – Jennie</span>
                            {/* <img className="shop-item-image" src="Images/prod2.jpg" /> */}
                            <div className="shop-item-details">
                                <span className="shop-item-price">$14.99</span>
                                <button className="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
                            </div>
                        </div>
                        <div className="shop-item">
                            <span className="shop-item-title">Born pink standard digipack <br /> – Rosé</span>
                            {/* <img className="shop-item-image" src="Images/prod3.jpg" /> */}
                            <div className="shop-item-details">
                                <span className="shop-item-price">$9.99</span>
                                <button className="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
                            </div>
                        </div>
                        <div className="shop-item">
                            <span className="shop-item-title">Born pink standard digipack <br /> – Lisa</span>
                            {/* <img className="shop-item-image" src="Images/prod4.jpg" /> */}
                            <div className="shop-item-details">
                                <span className="shop-item-price">$19.99</span>
                                <button className="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
                            </div>
                        </div>
                        <div className="shop-item">
                            <span className="shop-item-title">Tie dye fall 2022 tour <br /> T-Shirt</span>
                            {/* <img className="shop-item-image" src="Images/prod5.png" alt="product" /> */}
                            <div className="shop-item-details">
                                <span className="shop-item-price">$19.99</span>
                                <button className="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
                            </div>
                        </div>
                        <div className="shop-item">
                            <span className="shop-item-title">Pink Venom Hoodie</span>
                            {/* <img className="shop-item-image" src="Images/prod6.png" alt="product" /> */}
                            <div className="shop-item-details">
                                <span className="shop-item-price">$6.99</span>
                                <button className="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </section>
                </div>
            </div>
        </section>
        </>

    )
}