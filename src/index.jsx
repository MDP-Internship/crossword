import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import Puzzle from "./puzzleArea.jsx"
import Questions from "./questionArea.jsx"

export default class CrosswordPage extends Component {
  render() {
    return (
      <Container className="mt-5 p-0">
        <Row>
          <Col md="6 " className="bg-light">
            <Puzzle />
          </Col>
          <Col md="4" className="bg-primary">
            <Questions />
          </Col>
        </Row>
      </Container>
    )
  }
}

ReactDOM.render(
  <CrosswordPage />,
  document.getElementById("root")
)
