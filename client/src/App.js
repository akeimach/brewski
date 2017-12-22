import React from "react";
import Nav from "./components/Nav";
import Content from "./components/Content";
import { Container } from "./components/Grid";
import API from "./utils/API";


class App extends React.Component {

  state = {
    imageData: "",
    imageResults: [],
    modalIsOpen: false,
    userId: 1,
    userData: [],
    userHistory: []
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleBeerImage = (event) => {
    if (event.base64) this.setState({ imageData: event.base64 });
    if (this.state.imageData) {
      console.log("Axios post request in App.js");
      API.postVision({ imageData: this.state.imageData })
        .then(res => {
          this.setState({ imageResults: [res.data.logoDescription, res.data.textDescription] });
          console.log(this.state.imageResults);
          API.postRateBeer({ imageResults: this.state.imageResults })
            .then(res => {
              console.log(res);
            })
            .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
    }
  };

  openModal = function() {
    this.setState({modalIsOpen: true})
  };

  closeModal = function() {
    this.setState({modalIsOpen: false})
  };

  componentDidMount() {
    API.getUser( this.state.userId )
      .then(res => {
        this.setState({ userData: res.data });
        console.log(res);
      });
    API.getHistory( this.state.userId )
      .then(res => {
        this.setState({ userHistory: res.data });
        console.log(res);
      });
  }

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
            imageResults={this.state.imageResults}
            handleInputChange={this.handleInputChange}
            handleBeerImage={this.handleBeerImage}
            userHistory={this.state.userHistory}
          />
        </Container>
      </div>
    );
  }
}

export default App;
