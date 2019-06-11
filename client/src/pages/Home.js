import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import Form from "../components/Form";
import API from "../utils/API";


class Home extends Component {

  state = {
  //books
    q: "",
  //message 
  }

  //handleInputChange
  handleInputChange = event => {
    console.log(event.target);
    const { name, value } = event.target;
    this.setState({
      [name] : value
    });
  };
  //handleFormSubmit
 handleFormSubmit = event => {
   event.preventDefault();
   this.getBooks()
 };

 getBooks = () => {
   //pass this.state.q to our API.getBooks
   API.getBooks(this.state.q)
   .then(res =>
    this.setState({
      books: res.data
    })
  )
  .catch(() =>
  this.setState({
    books:[],
    message: "No New Books Found, Try a different search"
  })
  );
 };

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
            <Card title="Book Search" icon="far fa-book">
              <Form 
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />

            </Card>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <Card title="Results">
       {/* if results, return List > Book */}
        {/* else return a please search message */}
            </Card>



          </Col>
        </Row>
      </Container>

        )
    }
}

export default Home;
