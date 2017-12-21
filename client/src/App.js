import React from "react";
import Nav from "./components/Nav";
import Content from "./components/Content";
import { Container } from "./components/Grid";
// import API from "./utils/API";
import axios from "axios";


class App extends React.Component {

  state = {
    imageData: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleBeerImage = (event) => {
    if (event.base64) this.setState({ imageData: event.base64 });
    if (this.state.imageData) {
      console.log("Axios post request in App.js");
      axios.post("/api/vision", { imageData: this.state.imageData })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    }
  };


  render() {
    return (
      <div>
        <Container fullwidth>
          <Nav />
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
