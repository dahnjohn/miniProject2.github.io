import React from "react"
import "./Hero.css";
import TopMainBG from "../images/topMainBG.png"
import TopMain from "../images/topMain.png"

export default function Hero() {

    return (
        <>
        <div className="container heroSection">
        <div className="row">
        <div className="col-md-6 ps-5">
              <p className="playCollect">PLAY AND COLLECT GEMS</p>
              <p className="sloGan">Welcome to the magical world of Dahn</p>
              <p className="subSlogan">Discover over 200+ magical artifacts, hunt deadly beasts with incredible strength and unique abilities</p>
              <button type="button" className="btn btnDis mt-3">Button here muna</button>

        <div className="row mt-5">
          <div className="col-md-6"> Grace</div>
          <div className="col-md-6"> Dahn</div>
        </div>

            </div>

            <div className="col-md-6">
              <div className="row mb-3">

                <img className="topSide" src={TopMainBG} alt="Main Character"/>
                <img className="imgBG" src={TopMain} alt="Main Character"/>
                

              </div>
            </div>

        </div>

        <div className="row mt-5">
          <hr className="heroLine" />
        </div>

        </div>
        </>

    )
}