import React from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import History from "./pages/History";
import API from "./utils/API";
import { Container } from "./components/Grid";
import { Route } from "react-router-dom";
import dotenv from "dotenv";
import Modal from 'react-modal';
import { TextArea, FormBtn } from "./components/Form";


class App extends React.Component {

  state = {
    imageData: "",
    imageResults: [],
    userId: 1,
    userData: [],
    userHistory: [],
    isLoading: true,
    breweryName: "",
    beerName: "",
    beerID: "",
    beerReviews: [],
    currBeerReview: "",
    abv: "",
    description: "",
    loginModalOpen: false,
    reviewModalOpen: false
  };


  componentDidMount() {
    dotenv.config();
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


  openModal = (event) => {
    if (event) this.setState({ [event.target.name]: true });
  };


  closeModal = (event) => {
    this.setState({
      loginModalOpen: false,
      reviewModalOpen: false
    });
  };


  handleBeerInfomation = () => {
    API.postBreweryID({ nameOfBrewery: this.state.imageResults[0] })
    .then(res => {
      console.log("Brewery results: ", res.data);
      if (res.data) {
        this.setState({
          breweryName: res.data.name
        });
      }
    });

    API.postBeerID({ imageResults: this.state.imageResults })
    .then(res => {
      console.log("Beer results: ", res.data);
      if (res.data) {
        this.setState({
          isLoading: false,
          beerName: res.data.name,
          abv: res.data.abv + "%",
          description: res.data.description,
        });
        API.postRateBeer({ beerName: this.state.beerName })
        .then(res => {
          console.log("Review results: ", res.data);
          if (res.data) {
            this.setState({
              beerReviews: res.data
            });
          }
        });
      }
    });
  };


  handleBeerImage = (event) => {
    if (event.base64) this.setState({ imageData: event.base64 });
    if (this.state.imageData) {
      API.postVision({ imageData: this.state.imageData })
      .then(res => {
        console.log("Image results: ", res.data);
        if (res.data) {
          this.setState({ imageResults: 
            [res.data.logoDescription.replace(/[\n\r]/g, ' ').trim(),
             res.data.textDescription.replace(/[\n\r]/g, ' ').trim()] });
          this.handleBeerInfomation();
        }
      })
      .catch(err => console.log(err));
    }
  };


  handleBeerReview = (event) => {
    this.openModal(event);
    this.setState({
        beerID: event.target.id
      });
    if (this.state.currBeerReview) {
      const beerReviewData = {
        currBeerReview: this.state.currBeerReview,
        currBeer: 1
      }
      API.postBeerReview( beerReviewData )
      .then(res => {
        console.log("Review results: ", res.data);
        if (res.data) {
          
        }
      })
      .catch(err => console.log(err));
    }
  };


  render() {

    const reviewModal = (
      <Modal
        isOpen={this.state.reviewModalOpen}
        onRequestClose={this.closeModal}
        contentLabel="Example Modal"
        // appElement={el}
      >
        <br />
        <h6>Write a review for {this.state.beerID}</h6>
        <TextArea
          value={this.currBeerReview}
          onChange={this.handleInputChange}
          name="currBeerReview"
          placeholder="This beer was..."
          type="text"
        />
        <FormBtn
          name="Submit"
          value={this.state.beerID}
          onClick={this.closeModal}
        />
        <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
        <button onClick={this.closeModal}>close</button>
        <div>I am a modal</div>
        <div>{this.state.beerID}</div>
      </Modal>
    );

    return (
      <div>
        <Container fullwidth>
          <Nav
            isOpen={this.state.loginModalOpen}
            openModal={this.openModal}
            closeModal={this.closeModal}
          />
        </Container>
        <Container>
          <Route exact path="(/|/home)" render={() => (
            <Home
              imageData={this.state.imageData}
              imageResults={this.state.imageResults}
              handleInputChange={this.handleInputChange}
              handleBeerImage={this.handleBeerImage}
              breweryName={this.state.breweryName}
              beerName={this.state.beerName}
              abv={this.state.abv}
              description={this.state.description}
              beerReviews={this.state.beerReviews}
            />
          )}/>
          <Route exact path="/reviews" render={() => (
            <Reviews
              userHistory={this.state.userHistory}
            />
          )}/>
          {reviewModal}
          <Route exact path="/history" render={() => (
            <History
              userHistory={this.state.userHistory}
              handleBeerReview={this.handleBeerReview}
            />
          )}/>
        </Container>
      </div>
    );
  }
}

export default App;