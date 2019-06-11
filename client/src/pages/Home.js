import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";


class Home extends Component {

state = {

}
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>Google Reads</strong>
              </h1>
              <h2 className="text-center"> Search for and Save Books </h2>
            </Jumbotron>
          </Col>
          <Col size="md-12">
                {/* /form for search */}

          </Col>
        </Row>

        <Row>
          <Col size="md-12">
          {/* card with results */}
          {/* if results, return Card > List > Book */}
        {/* else return a please search message */}


          </Col>
        </Row>
      </Container>

        )
    }
}

export default Home;
