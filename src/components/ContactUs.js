import React from "react";

import "./ContactUs.css";

export default function ContactUs() {
    return (
    <>
        <div className="container">
            <div className="row mt-5">
            <div className="col-md-12">
                <div className="contact">
                    <h2 className="section-header text-center text-light mb-5">CONTACT US</h2>
                    <form id="myForm">
                        <div className="form-group mb-5">
                            <label htmlFor="full_name">Full Name:</label>
                            <input type="text" name="full_name" className="form-control" id="full_name" />
                        </div>
                        <div className="form-group mb-5">
                            <label htmlFor="email">Email:</label>
                            <input type="text" name="email" className="form-control" id="email" />
                        </div>
                        <div className="form-group mb-5">
                            <label htmlFor="phone">Phone:</label>
                            <input type="tel" name="phone" className="form-control" id="phone" />
                        </div>
                        <div className="form-group mb-5">
                            <label htmlFor="message">Message:</label>
                            <br />
                            <textarea name="message" id="message" cols="92" />
                        </div>

                        {/* <!-- hidden --> */}
                        <input type="hidden" id="city" name="city" className="form-control" />
                        <input type="hidden" id="country" name="country" className="form-control" />
                        <input type="hidden" id="postal" name="postal" className="form-control" />
                    </form>
                    {/* <button onClick={() => SubForm()}>Submit</button> */}
                </div>
            </div>
            </div>
        </div>
    </>
    );
}
