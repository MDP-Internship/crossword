import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import data from "./data/word.js"



class PuzzleArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            across: data.filter(item => item.orientation === "across"),
            down: data.filter(item => item.orientation === "down"),
            answerMatris: []
        };
    };

    componentWillMount() {
        this.answerMatrisCreate(this.state.across);
    }

    answerMatrisCreate(across) {
        var wordAcrossArray = [...Array(8).keys()].map(item => across.filter(across => across.starty === (item + 1)))
        var letterAcrossArray = wordAcrossArray.map((item) => item.map(item => item.answer))
        this.state.answerMatris = letterAcrossArray.map(item => item)
    }

    wordToLetter(answerMatris) {
        return answerMatris.map(item => {
            if (typeof item[1] !== "undefined")
                return {
                    result: item[0].concat(0, item[1]),
                    count: item[0].length
                }

            return {
                result: item[0],
                count: item[0].length
            }
        });


    }



    render() {
        const letterArray = this.wordToLetter(this.state.answerMatris)
        return (
            <Container>{
                letterArray.map((letter) => {

                    return <Row>{
                        [...letter.result].map((item, index) => {
                            if ((index) === letter.count)
                                return <Square bgColor="bg-danger"></Square>
                            return <Square letter={item}></Square>

                        })
                    }</Row>

                }

                )
            }</Container>
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

                {this.props.letter}

            </div>
        </Col>

    }
}



export default PuzzleArea;


