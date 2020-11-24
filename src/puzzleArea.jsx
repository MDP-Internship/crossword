import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import data from "./data/word.js"



class puzzleArea extends Component {
    constructor(props) {
        super(props);
        this.state = {

            across: data.filter(item => item.orientation === "across"),
            down: data.filter(item => item.orientation === "down"),
            acrossArray: []

        };


        [...Array(8).keys()].forEach((index) => {

            let data = this.state.across.filter(item => item.starty === (index + 1))

            this.state.acrossArray[index] = data

        })

    };


    render() {

        var word = this.state.acrossArray;
        // console.log(word.length);
        return (
            <Container>
                {
                    //8 item 4 item
                    [...Array(8).keys()].map((index) => {
                        console.log(index);
                        return <Row>
                            {
                                [...word[index][0].answer, "block", ...word[index][1].answer]
                            }
                        </Row>
                    })
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
            <div className={"embed-responsive-item cell " + this.props.bgColor}>

                fatih
            </div>
        </Col>

    }
}



export default puzzleArea;


