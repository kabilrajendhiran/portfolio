import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import web_dev from "../assets/web_dev_trimmed.jpg";

const About: React.FunctionComponent = () => {
    return (
        <Container className="user-select-none">
            <Row>
                <Col>
                    <h3 className="mb-0">About Myself</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="d-flex">
                        <div style={{fontSize: "18px", textAlign: "justify"}} className="w-50 p-3 ps-0">
                            <p>Hello there! My name is Kabil, and I am a professional web developer. Welcome to my
                                portfolio, where I am excited to showcase my skills, experience, and projects in the
                                world of web development.</p>
                            <p>With a solid foundation in computer science and a specialization in web development, I
                                have dedicated myself to mastering the art of building dynamic and interactive user
                                interfaces using React. I find immense joy in creating seamless and intuitive user
                                experiences that captivate and engage visitors.</p>
                            <p>During my career, I have had the privilege of working on various projects that have honed
                                my skills as a Web developer. I have collaborated with teams to deliver cutting-edge web
                                applications, ranging from small-scale projects to large enterprise-level solutions.
                                These experiences have taught me the importance of effective communication, teamwork,
                                and meeting project deadlines.</p>
                        </div>
                        <div className="w-50 m-2 shadow-sm border rounded ">
                            <img className="w-100 pt-0 rounded" src={web_dev}/>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default About;