import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";

class Home extends Component {
  state = {
    books:[],
    q: "",
    message: "Search for a book to begin!"
  };

  //handleInputChange
  handleInputChange = event => {
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

 handleBookSave = id => {
   const book = this.state.books.find(book => book.id === id);

   API.saveBook({
    googleId: book.id,
    title: book.volumeInfo.title,
    subtitle: book.volumeInfo.subtitle,
    link: book.volumeInfo.infoLink,
    authors: book.volumeInfo.authors,
    description: book.volumeInfo.description,
    image: book.volumeInfo.imageLinks.thumbnail
   }).then(() => this.getBooks());
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
            {this.state.books.length ?  (
              <List>
                {this.state.books.map(book => (
                  <Book
                    key={book.id}
                    title={book.volumeInfo.title}
                    subtitle={book.volumeInfo.subtitle}
                    link={book.volumeInfo.infoLink}
                    authors={book.volumeInfo.authors.join(",")}
                    description={book.volumeInfo.description}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    Button={() => (
                      <button
                        onClick= {() => this.handleBookSave(book.id)}
                        className= "btn btn-primary ml-2"
                        >
                        Save
                        </button>
                    )}
                  />
                ))}
              </List>

            ) : (
              <h2 className="text-center">{this.state.message}</h2>
            )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
        );
    }
}

export default Home;
