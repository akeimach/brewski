import React from "react";
import Nav from "./components/Nav";
import Content from "./components/Content";
import { Container } from "./components/Grid";
// import API from "./utils/API";
import axios from "axios";


class App extends React.Component {

  state = {
    imageData: "",
    modalIsOpen: false
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleBeerImage = (event) => {
    event.preventDefault();
    if (this.state.imageData) {
      console.log("Axios post request for: " + this.state.imageData);
      axios.post("/api/vision", { imageData: this.state.imageData })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    }
  };

  openModal = function() {
    this.setState({modalIsOpen: true})
  };

  closeModal = function() {
    this.setState({modalIsOpen: false})
  };


  render() {
    return (
      <div>
        <Container fullwidth>
          <Nav 
            isOpen={this.state.modalIsOpen}
            openModal={this.openModal}
            closeModal={this.closeModal}
          />
        </Container>
        <Container fluid>
          <Content
            imageData={this.state.imageData}
            handleInputChange={this.handleInputChange}
            handleBeerImage={this.handleBeerImage}
          />
        </Container>
      </div>
    );
  }
}

export default App;
