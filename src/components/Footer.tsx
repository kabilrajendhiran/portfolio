import my_photo from "../assets/my_photo_square.jpg";
import {Button} from "react-bootstrap";

const Footer = () => {
    return (
        <div className="w-100 bg-dark p-5 user-select-none">
            <div className="d-flex align-items-center justify-content-between flex-column text-light">
                <div className="mb-2">
                    <img alt="My Photo" className="rounded-pill" style={{width: "75px"}} src={my_photo}/>
                </div>
                <h5 className="mb-1">Kabil Rajendhiran</h5>
                <p className="mb-0">kabildeveloper@gmail.com</p>
                <p>+91 7904178527</p>
                <Button onClick={()=>window.open("https://github.com/kabilrajendhiran/portfolio", "_blank")} variant="outline-light"> Source Code </Button>
            </div>
        </div>
    )
}

export default Footer;