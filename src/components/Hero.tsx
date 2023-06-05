import React from "react";
import my_photo from "../assets/my_photo_square.jpg";
// @ts-ignore
import Fireworks from "@fireworks-js/react";

const Hero: React.FunctionComponent = () => {
    return (
        <div className="hero user-select-none">
            <Fireworks style={{
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                position: 'absolute',
                background: 'transparent'
            }}/>
            <div className="vh-100 w-100 d-flex align-items-center justify-content-center bg-dark text-light">
                <div className="d-flex flex-column align-items-center">
                    <div style={{position: "relative", zIndex: 10}}>
                        <img width="300px" style={{borderRadius: "50%"}} src={my_photo} alt="my photo"/>
                        <div className="avatar_bg shadow-lg"></div>
                    </div>
                    <h2 className="mt-4">Kabil Rajendhiran</h2>
                    <p>Professional web developer</p>
                </div>
            </div>
        </div>
    )
}

export default Hero;