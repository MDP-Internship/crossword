import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Cell from "./cell"


class puzzleArea extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        return (
            <Container>
                {
                    [...Array(8).keys()].map(y =>
                        <Row>{
                            [...Array(8).keys()].map((x) =>
                                <Square clueX="0" clueY="0" dataX={x} dataY={y} bgColor={(x % 2) === 0 ? "bg-danger" : "bg-warning"}></Square>
                            )
                        }</Row>)

                }
            </Container>

        );
    }
}

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <Col className="embed-responsive embed-responsive-1by1 text-center">
            <div className={"embed-responsive-item cell " + this.props.bgColor}><Cell /></div>
        </Col>

    }
}



export default puzzleArea;


