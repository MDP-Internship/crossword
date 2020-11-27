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
    componentDidMount() {
        this.row(this.state.clueX)
    }



    column(row) {
        let rowLetter = [];
        var letter = row.map(item => item.answer).join().replace(/,/g, "");

        var coordinate = row.map(item => {
            return {
                startx: item.coordinate[0],
                length: item.answer.length
            }
        }).map(item => {
            let array = [...Array(item.length).keys()].map(element => element + item.startx - 1)
            return array;
        }).join().replace(/,/g, "")


        for (let index = 0; index < coordinate.length; index++) {
            rowLetter[coordinate[index]] = letter[index]
        }
        for (let index = 0; index < 8; index++)
            if (typeof rowLetter[index] === "undefined")
                rowLetter[index] = 0

        return rowLetter
    }

    row(clueX) {
        var result = []
        for (let indexY = 0; indexY < 7; indexY++) {
            var row = clueX
                .filter(item => item.coordinate[1] - 1 === indexY)
                .map(item => {
                    return {
                        position: item.position,
                        answer: item.answer.map(letter => letter),
                        coordinate: item.coordinate,

                    }
                })
            result.push(this.column(row))
        }

        this.setState({ clueMatris: result })

    }




    render() {



        console.table(this.state.clueMatris);






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


