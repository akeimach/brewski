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
    userId: 1, //temporary
    userData: [],
    userHistory: [],
    userReviews: [],
    reviewId: "",
    isNewReview: true,
    beerReviews: [],
    beerRev: "",
    beerName: "",
    beerId: "",
    beerScore: 0,
    beerAbv: "",
    beerShortDes: "",
    breweryName: "",
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
      this.setState({ userHistory: res.data[0] });
      console.log(this.state.userHistory);
    });
    API.getReviews( this.state.userId )
    .then(res => {
      this.setState({ userReviews: res.data });
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
      API.postBeerID({ imageResults: this.state.imageResults })
      .then(res => {
        console.log("Beer results: ", res.data);
        if (res.data) {
          this.setState({
            beerName: res.data.name,
            beerAbv: res.data.abv + "%",
            beerShortDes: res.data.description,
          });
          API.postRateBeer({ beerName: this.state.beerName })
          .then(res => {
            console.log("Review results: ", res.data);
            if (res.data) {
              this.setState({
                beerReviews: res.data
              });
            }
          })
          .catch(err => console.log(err));

          const userBeer = {
            beername: this.state.beerName,
            brewery: this.state.breweryName,
            abv: 5, //temp - need to change DB to float
            shortDes: "hey dood" //temp - change DB to text
          }
          API.postUsersBeers( this.state.userId, userBeer )
          .then(res => {
            console.log("Added to history: ", res.data);
          })
          .catch(err => console.log(err));
        }
      });
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


  handleReviewModal = (event) => {
    const valueArr = event.target.value.split(",");
    console.log(valueArr);
    this.setState({
      reviewId: event.target.id,
      beerName: valueArr[0],
      beerScore: (valueArr[1] ? valueArr[1] : 0),
      beerRev: valueArr[2],
      isNewReview: (valueArr[2] ? false : true)
    });
    this.openModal(event);
  };


  handleBeerReview = (event) => {
    if (this.state.beerRev) {
      const beerReviewData = {
        BeerId: this.state.reviewId,
        UserId: this.state.userId,
        beerScore: this.state.beerScore,
        beerRev: this.state.beerRev,
        starred: true //just for now
      }
      console.log("App.js handleBeerReview: ", beerReviewData, this.state.beerName, this.state.isNewReview);
      if (this.state.isNewReview) {
        API.postBeerReview( beerReviewData )
        .then(res => {
          console.log("Add review results: ", res.data);
          if (res.data) {
            this.setState({ isNewReview: false });
          }
        })
        .catch(err => console.log(err));
      }
      else {
        API.updateBeerReview( beerReviewData )
        .then(res => {
          console.log("Update review results: ", res.data);
          if (res.data) {
            
          }
        })
        .catch(err => console.log(err));
      }
    }
    this.closeModal(event);
  };


  render() {

    const reviewModal = (
      <Modal isOpen={this.state.reviewModalOpen} onRequestClose={this.closeModal} ariaHideApp={false}>
        <br />
        <h6>Write a review for {this.state.beerName}</h6>
        <TextArea
          value={this.state.beerRev ? this.state.beerRev : ""} //if there is already a review written, let them edit it
          onChange={this.handleInputChange}
          name="beerRev"
          placeholder={this.state.beerRev ? "" : "This beer was..."} //if there is no review yet, put a placeholder
          type="text"
        />
        <FormBtn
          name="Submit"
          value={this.state.beerId}
          onClick={this.handleBeerReview}
        />
        <button onClick={this.closeModal}>Close</button>
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
              beerAbv={this.state.beerAbv}
              beerShortDes={this.state.beerShortDes}
              beerReviews={this.state.beerReviews}
            />
          )}/>
          <Route exact path="/reviews" render={() => (
            <Reviews
              userReviews={this.state.userReviews}
            />
          )}/>
          {reviewModal}
          <Route exact path="/history" render={() => (
            <History
              userHistory={this.state.userHistory}
              handleReviewModal={this.handleReviewModal}
            />
          )}/>
        </Container>
      </div>
    );
  }
}

export default App;