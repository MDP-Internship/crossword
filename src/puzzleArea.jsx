import React, { Component } from 'react'
import { Container, Row, Col, CardColumns } from 'reactstrap'
import data from "./data/word"
import MatrisConvert from './matrisConvert';

class PuzzleArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clueMatris: []
        }
    }
    componentDidMount() {
        this.setState({ clueMatris: MatrisConvert.result(data) })
    }

    render() {
        return <Container>
            {
                this.state.clueMatris.map(item => {
                    return <Row>
                        {
                            item.map(element => <Square letter={element.letter} clueX={element.clueX} clueY={element.clueY}></Square>)
                        }
                    </Row>
                })
            }
        </Container>
    }
}


class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            black: ""
        };

    }
    componentDidMount() {
        // isBlack(this.props.letter)
    }

    isBlack = (letter) => letter === 0 ? "bg-dark" : "bg-white"



    render() {
        return <Col className="embed-responsive embed-responsive-1by1 text-center">
            <div className={"embed-responsive-item cell " + this.isBlack(this.props.letter)}>
                {this.props.letter}
            </div>
        </Col>

    }
}



export default PuzzleArea;


