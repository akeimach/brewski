import React from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import History from "./pages/History";
import API from "./utils/API";
import { Container } from "./components/Grid";
import { Route } from "react-router-dom";


class App extends React.Component {

  state = {
    imageData: "",
    imageResults: [],
    userId: 1,
    userData: [],
    userHistory: [],
    isLoading: true,
    beerName: "",
    abv: "",
    description: "",
    loginModalOpen: false,
    reviewModalOpen: false
  };

  componentDidMount() {
    API.getUser( this.state.userId )
    .then(res => {
      this.setState({ userData: res.data });
    });
    API.getHistory( this.state.userId )
    .then(res => {
      this.setState({ userHistory: res.data });
    });
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  toggleModal = (event) => {
    if (event) this.setState({ [event.target.name]: true });
    else {
      this.setState({
        loginModalOpen: false,
        reviewModalOpen: false
      });
    }
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
        .then(res => console.log(res))
        .catch(err => console.log(err));
        API.getBeerID(this.state.imageResults.textDescription)
        .then((response) => {
          console.log('this is response testing', response);
          if (response.data.data) {
            this.setState({
              isLoading: false,
              beerName: response.data.data[0].name,
              abv: response.data.data[0].abv,
              description: response.data.data[0].description,
            }); 
          }
        });
      })
      .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <Container fullwidth>
          <Nav
            loginModalOpen={this.state.loginModalOpen}
            toggleModal={this.toggleModal}
          />
        </Container>
        <Container fluid>
          <Route exact path="(/|/home)" render={() => (
            <Home
              imageData={this.state.imageData}
              imageResults={this.state.imageResults}
              handleInputChange={this.handleInputChange}
              handleBeerImage={this.handleBeerImage}
              beerName={this.state.beerName}
              abv={this.state.abv}
              description={this.state.description}
            />
          )}/>
          <Route exact path="/reviews" render={() => (
            <Reviews
              userHistory={this.state.userHistory}
            />
          )}/>
          <Route exact path="/history" render={() => (
            <History
              userHistory={this.state.userHistory}
              reviewModalOpen={this.state.reviewModalOpen}
              toggleModal={this.toggleModal}
            />
          )}/>
        </Container>
      </div>
    );
  }
}

export default App;