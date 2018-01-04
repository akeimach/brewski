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
import { TextArea } from "./components/Form";
import StarRatings from "react-star-ratings";

class App extends React.Component {

  state = {
    imageData: "",
    imageResults: [],
    userData: [],
    userHistory: [],
    userReviews: [],
    reviewId: "",
    rating: 0,
    isNewReview: true,
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
    API.getUser( localStorage.getItem("userId") )
    .then(res => {
      this.setState({ userData: res.data });
    });
    API.getHistory( localStorage.getItem("userId") )
    .then(res => {
      this.setState({ userHistory: res.data[0] });
    });
    API.getReviews( localStorage.getItem("userId") )
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


  changeRating = (newRating) => {
    this.setState({
      rating: newRating,
      beerScore: newRating
    });
  };


  handleBeerInfomation = () => {
    API.postBreweryID({ nameOfBrewery: this.state.imageResults[0] })
    .then(res => {
      console.log("Brewery results: ", res.data);
      if (res.data) {
        localStorage.setItem("visionBreweryName", res.data.name);
      }
      API.postBeerID({ imageResults: this.state.imageResults })
      .then(res => {
        console.log("Beer results: ", res.data);
        if (res.data) {
          localStorage.setItem("visionBeerName", res.data.name);
          localStorage.setItem("visionBeerAbv", res.data.abv);
          localStorage.setItem("visionBeerIbu", res.data.ibu);
          localStorage.setItem("visionBeerFoodPairings", res.data.foodPairings);
          localStorage.setItem("visionBeerIsOrganic", res.data.isOrganic);
          localStorage.setItem("visionBeerShortDes", res.data.description);
          API.postRateBeer({ visionBeerName: localStorage.getItem("visionBeerName") })
          .then(res => {
            console.log("Review results: ", res.data);
            if (res.data) {
              localStorage.setItem("beerReviews", JSON.stringify(res.data));
            }
          })
          .catch(err => console.log(err));

          const userBeer = {
            beername: localStorage.getItem("visionBeerName"),
            brewery: localStorage.getItem("visionBreweryName"),
            abv: localStorage.getItem("visionBeerAbv"),
            ibu: localStorage.getItem("visionBeerIbu"),
            foodPairings: localStorage.getItem("visionBeerFoodPairings"),
            isOrganic: localStorage.getItem("visionBeerIsOrganic"),
            shortDes: localStorage.getItem("visionBeerShortDes")
          }
          API.postUsersBeers( localStorage.getItem("userId"), userBeer )
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
          console.log(res.data);
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
    this.setState({
      reviewId: event.target.id,
      beerName: valueArr[0],
      beerRev: valueArr[2],
      isNewReview: (valueArr[2] ? false : true) //beerRev changed in modal, store info here
    });
    this.changeRating(valueArr[1] ? parseInt(valueArr[1], 10) : 0);
    this.openModal(event);
  };


  handleBeerReview = (event) => {
    if (this.state.beerRev || this.state.beerScore) {
      const beerReviewData = {
        BeerId: this.state.reviewId,
        UserId: localStorage.getItem("userId"),
        beerScore: this.state.beerScore,
        beerRev: this.state.beerRev,
        starred: true //just for now
      }
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
        <StarRatings
          rating={this.state.rating}
          isSelectable={true}
          isAggregateRating={false}
          changeRating={this.changeRating}
          numOfStars={5}
          starRatedColor={"red"}
          starWidthAndHeight={"30px"}
        />
        <TextArea
          value={this.state.beerRev ? this.state.beerRev : ""} //if there is already a review written, let them edit it
          onChange={this.handleInputChange}
          name="beerRev"
          placeholder={this.state.beerRev ? "" : "This beer was..."} //if there is no review yet, put a placeholder
          type="text"
        />
        <button style={{ margin: 5 }} className="btn btn-primary" value={this.state.beerId} onClick={this.handleBeerReview}>Submit</button>
        <button style={{ margin: 5 }} className="btn btn-dark" onClick={this.closeModal}>Close</button>
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