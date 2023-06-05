import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import SkillsCard from "./SkillsCard.tsx";
import {skills} from "../utils/SkillsData.tsx";
const Skills: React.FunctionComponent = () => {

    return (
        <div className="pb-5 user-select-none">
            <Container>
                <Row>
                    <Col>
                        <h3 className="mb-0">My Skills</h3>
                    </Col>
                </Row>

                <Row className="mt-5">
                    {skills.map((skill) => {
                        return (
                            <Col key={skill.id} style={{marginBottom: "20px"}} lg={4} md={4} sm={6} xs={12}>
                                <SkillsCard {...skill}/>
                            </Col>
                        )
                    })}
                </Row>

            </Container>
        </div>
    )
}

export default Skills;