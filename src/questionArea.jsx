import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import data from './data/word.js'

class questionArea extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clueX: [],
            clueY: []
        }

    }
    componentDidMount() {
        this.setState({
            clueX: this.orientationFilter(data, "across"),
            clueY: this.orientationFilter(data, "down")
        })

        // console.log(this.state.clueX);

    }

    orientationFilter = (data, orientation) => data
        .filter(item => item.orientation === orientation)
        .map(element => {
            return {
                clue: element.clue,
                position: element.position
            }
        })


    render() {

        return (
            <Container>
                <Row>
                    <Col md="6">
                        <h5>Soldan Sağa</h5>
                        <ul>
                            {this.state.clueX.map(clue => <li>{clue.position + clue.clue}</li>)}
                        </ul>

                    </Col>
                    <Col md="6"><h5>Yukardan Aşağı</h5>
                        <ul>
                            {this.state.clueY.map(clue => <li>{clue.position + clue.clue}</li>)}
                        </ul></Col>
                </Row>
            </Container>
        );
    }
}



export default questionArea;