import {Button, Col, Container, Row} from "react-bootstrap";
import resume from "../assets/kabil_resume.pdf";

const Details = () => {

    const downloadResume = () => {
        window.open(resume, '_blank')
    }

    return (
        <Container className="py-5 user-select-none">
            <Row>
                <Col>
                    <div className="d-flex justify-content-between">
                        <h3 className="mb-0 text-light">
                            Do you want to know more about me ?
                        </h3>
                        <Button onClick={downloadResume} variant="light">Download CV</Button>
                    </div>

                </Col>
            </Row>
        </Container>
    )
}
export default Details;