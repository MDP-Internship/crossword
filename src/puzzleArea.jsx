import React, { Component } from 'react'
import { Container, Row, Col, CardColumns } from 'reactstrap'
import data from "./data/word.js"



class PuzzleArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clueX: data.filter(item => item.orientation === "across").map(item => {
                return {
                    "coordinate": [item.startx, item.starty],
                    "position": item.position,
                    "answer": [...item.answer]
                }

            }),
            clueY: data.filter(item => item.orientation === "down").map(item => {
                return {
                    "coordinate": [item.startx, item.starty],
                    "position": item.position,
                    "answer": [...item.answer]
                }

            }),
            clueMatris: []
        }

    }

    column(row) {
        var letter = row.map(item => item.answer)



        return letter.join();
    }


    render() {
        var data = [];
        for (let indexY = 0; indexY < 8; indexY++) {
            var row = this.state.clueX
                .filter(item => item.coordinate[1] - 1 === indexY)
                .map(item => {
                    return {
                        position: item.position,
                        answer: item.answer.map(letter => letter),
                        coordinate: item.coordinate,

                    }
                })

            data.push(this.column(row))

        }




        console.table(data);


        /* this.state.clueY.forEach((word, indexY) => {
            var data = [...word.answer].map(item => { return { letter: item, clueY: word.position } })
            matris[indexY].push(data)

        }) */

        // console.table(matris)

        return 0;
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


