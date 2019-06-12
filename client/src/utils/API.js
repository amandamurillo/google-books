import axios from "axios";

export default {
    //gets books from Google API
  getBooks: function(q) {
      return axios.get("/api/google", {params: { q: "title" + q} });
  }, 
  //gets all saved books
  getSavedBooks: function() {
      return axios.get("/api/books");
  }, 
  //delete book with given id
  deleteBook: function(id) {
      return axios.delete("/api/books/"+ id);
  }, 
  //saves book to database
  saveBook: function(bookData) {
      return axios.post("/api/books", bookData);
  }
};