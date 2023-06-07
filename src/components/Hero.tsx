import React, {useState} from "react";
import my_photo from "../assets/my_photo_square.jpg";
import RoundButton from "./RoundButton.tsx";

const Hero: React.FunctionComponent = () => {
    const [isExpanded, setExpanded] = useState(false)

    const onMouseOver = () => {
        if(!isExpanded) {
            setExpanded(true)
        }
    }

    const onMouseLeave = () => {
        if(isExpanded) {
            setExpanded(false)
        }
    }


    return (
        <div className="hero user-select-none">
            <div className="vh-100 w-100 d-flex align-items-center justify-content-center bg-dark text-light">
                <RoundButton className={`${isExpanded ? "expand" : ""}`} id={"git"} skill={"Git"}/>
                <RoundButton className={`${isExpanded ? "expand" : ""}`} id={"python"} skill={"Python"}/>
                <RoundButton className={`${isExpanded ? "expand" : ""}`} id={"django"} skill={"Django"}/>
                <RoundButton className={`${isExpanded ? "expand" : ""}`} id={"docker"} skill={"Docker"}/>
                <RoundButton className={`${isExpanded ? "expand" : ""}`} id={"react"} skill={"React"}/>
                <div className="d-flex flex-column align-items-center">
                    <div className="profile-img-container" style={{position: "relative", zIndex: 10}}>
                        <img onMouseLeave={onMouseLeave} onMouseOver={onMouseOver} className="w-100" style={{borderRadius: "50%"}} src={my_photo} alt="my photo"/>
                    </div>
                    <h2 className="mt-4">Kabil Rajendhiran</h2>
                    <p>Professional web developer</p>
                </div>
            </div>
        </div>
    )
}

export default Hero;