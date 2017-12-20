import React from "react";
import Nav from "./components/Nav";
import Content from "./components/Content";
import { Container } from "./components/Grid";
import API from "./utils/API";


class App extends React.Component {

  state = {
    imageData: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleBeerImage = (event) => {
    event.preventDefault();
    if (this.state.imageData) {
      API.searchBeerImage(this.state.imageData);
      // API.searchArticles({
      //   searchTerm: this.state.searchTerm,
      //   startYear: this.state.startYear,
      //   endYear: this.state.endYear
      // })
      // .then(res => {
      //   console.log(res);
      // })
      // .catch(err => console.log(err));
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
