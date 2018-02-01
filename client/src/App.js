import React from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import History from "./pages/History";
import API from "./utils/API";
import { Container } from "./components/Grid";
import { Route } from "react-router-dom";
import dotenv from "dotenv";
import Modal from "react-modal";
import { TextArea } from "./components/Form";
import StarRatings from "react-star-ratings";
import Analytics from "./components/Analytics";
import { List, ListSelect } from "./components/List";

class App extends React.Component {

  state = {
    imageData: "",
    imageResults: [],
    userData: [], //un-used for now
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
    reviewModalOpen: false,
    feedbackModalOpen: false,
    visionUpdate: "",
    beerResultOptions: [],
    selectedBeerId: []
  };


  componentDidMount() {
    dotenv.config();
    if (localStorage.getItem("userId")) { //if a user is logged on
      API.getUser( localStorage.getItem("userId") )
      .then(res => {
        this.setState({ userData: res.data }); //un-used for now
      })
      .catch(err => console.log(err));
      API.getHistory( localStorage.getItem("userId") )
      .then(res => {
        this.setState({ userHistory: res.data[0] });
      })
      .catch(err => console.log(err));
      API.getReviews( localStorage.getItem("userId") )
      .then(res => {
        this.setState({ userReviews: res.data });
      })
      .catch(err => console.log(err));
    }
  }


  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };


  handleImageChange = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({ imageData: reader.result });
    }
    if (file) reader.readAsDataURL(file);
  };


  openModal = (event) => {
    if (event) this.setState({ [event.target.name]: true });
  };


  closeModal = (event) => {
    this.setState({
      loginModalOpen: false,
      reviewModalOpen: false,
      feedbackModalOpen: false
    });
  };


  changeRating = (newRating) => {
    this.setState({
      rating: newRating,
      beerScore: newRating
    });
  };


  handleBeerInfomation = (event) => {
    API.postBreweryID({ nameOfBrewery: this.state.imageResults[0] })
    .then(res1 => {
      console.log("Brewery results: ", res1.data);
      if (res1.data) {
        sessionStorage.setItem("visionBreweryName", res1.data.name);
        this.setState({ visionUpdate: res1.data });
      }
      API.postBeerID({ imageResults: this.state.imageResults })
      .then(res2 => {
        console.log("Beer results: ", res2.data);
        if (res2.data) {
          const beerInfo = res2.data[0]; //best guess is at 0th index in array
          sessionStorage.setItem("visionBeerName", beerInfo.name);
          sessionStorage.setItem("visionBeerAbv", beerInfo.abv);
          sessionStorage.setItem("visionBeerIbu", (beerInfo.ibu ? beerInfo.ibu : 0));
          sessionStorage.setItem("visionBeerFoodPairings", beerInfo.foodPairings ? beerInfo.foodPairings : "None listed");
          sessionStorage.setItem("visionBeerIsOrganic", beerInfo.isOrganic);
          sessionStorage.setItem("visionBeerShortDes", beerInfo.description);
          this.setState({ 
            visionUpdate: beerInfo,
            beerResultOptions: res2.data
          });
          API.postRateBeer({ visionBeerName: sessionStorage.getItem("visionBeerName") })
          .then(res3 => {
            console.log("Review results: ", res3.data);
            if (res3.data) {
              sessionStorage.setItem("beerReviews", JSON.stringify(res3.data));
              this.setState({ visionUpdate: res3.data });
            }
          })
          .catch(err3 => console.log(err3));

          const beerData = {
            beername: sessionStorage.getItem("visionBeerName"),
            brewery: sessionStorage.getItem("visionBreweryName"),
            abv: sessionStorage.getItem("visionBeerAbv"),
            ibu: sessionStorage.getItem("visionBeerIbu"),
            foodPairings: sessionStorage.getItem("visionBeerFoodPairings"),
            isOrganic: sessionStorage.getItem("visionBeerIsOrganic"),
            shortDes: sessionStorage.getItem("visionBeerShortDes")
          };
          if (localStorage.getItem("userId")) { //check if user is logged in, if so post history
            API.postUsersBeers( localStorage.getItem("userId"), beerData )
            .then(res4 => {
              console.log("Added to history: ", res4.data);
              API.getHistory( localStorage.getItem("userId") )
              .then(res5 => {
                this.setState({ userHistory: res5.data[0] });
              })
              .catch(err5 => console.log(err5));
            })
            .catch(err4 => console.log(err4));
          }
        }
      })
      .catch(err2 => console.log(err2));
    })
    .catch(err1 => console.log(err1));
  };


  handleBeerImage = (event) => {
    if (event.base64) this.setState({ imageData: event.base64 });
    if (this.state.imageData) {
      API.postVision({ imageData: this.state.imageData })
      .then(res => {
        console.log("Image results: ", res.data);
        if (res.data) {
          this.setState({ imageResults: 
            [res.data.logoDescription.replace(/[\n\r]/g, " ").trim(),
             res.data.textDescription.replace(/[\n\r]/g, " ").trim()] });
          this.handleBeerInfomation();
        }
      })
      .catch(err => console.log(err));
    }
  };


  handleFeedbackModal = (event) => {
    console.log(event.target.value);
    if (event.target.value === "incorrect") this.openModal(event);
  };


  handleBeerFeedback = (event) => {
    const beerInfo = this.state.beerResultOptions[this.state.selectedBeerId]; //index of last clicked beer
    sessionStorage.setItem("visionBeerName", beerInfo.name);
    sessionStorage.setItem("visionBeerAbv", beerInfo.abv);
    sessionStorage.setItem("visionBeerIbu", (beerInfo.ibu ? beerInfo.ibu : 0));
    sessionStorage.setItem("visionBeerFoodPairings", beerInfo.foodPairings ? beerInfo.foodPairings : "None listed");
    sessionStorage.setItem("visionBeerIsOrganic", beerInfo.isOrganic);
    sessionStorage.setItem("visionBeerShortDes", beerInfo.description);
    this.setState({ visionUpdate: beerInfo });
    API.postRateBeer({ visionBeerName: sessionStorage.getItem("visionBeerName") })
    .then(res1 => {
      console.log("Review results: ", res1.data);
      if (res1.data) {
        sessionStorage.setItem("beerReviews", JSON.stringify(res1.data));
        this.setState({ visionUpdate: res1.data });
      }
    })
    .catch(err1 => console.log(err1));

    const beerData = {
      beername: sessionStorage.getItem("visionBeerName"),
      brewery: sessionStorage.getItem("visionBreweryName"),
      abv: sessionStorage.getItem("visionBeerAbv"),
      ibu: sessionStorage.getItem("visionBeerIbu"),
      foodPairings: sessionStorage.getItem("visionBeerFoodPairings"),
      isOrganic: sessionStorage.getItem("visionBeerIsOrganic"),
      shortDes: sessionStorage.getItem("visionBeerShortDes")
    };

    if (localStorage.getItem("userId")) { //check if user is logged in, if so post history
      API.postUsersBeers( localStorage.getItem("userId"), beerData )
      .then(res2 => {
        console.log("Added to history: ", res2.data);
        API.getHistory( localStorage.getItem("userId") )
        .then(res3 => {
          this.setState({ userHistory: res3.data[0] });
        })
        .catch(err3 => console.log(err3));
      })
      .catch(err2 => console.log(err2));
    }

    this.closeModal(event);
  };


  handleBeerSelect = (event) => {
    this.setState({ selectedBeerId: event });
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
        .then(res1 => {
          console.log("Add review results: ", res1.data);
          this.setState({ isNewReview: false });
          API.getReviews( localStorage.getItem("userId") )
          .then(res2 => {
            this.setState({ userReviews: res2.data });
          })
          .catch(err2 => console.log(err2));
        })
        .catch(err1 => console.log(err1));
      }
      else {
        API.updateBeerReview( beerReviewData )
        .then(res1 => {
          console.log("Update review results: ", res1.data);
          API.getReviews( localStorage.getItem("userId") )
          .then(res2 => {
            this.setState({ userReviews: res2.data });
          })
          .catch(err2 => console.log(err2));
        })
        .catch(err1 => console.log(err1));
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

    const feedbackModal = (
      <Modal isOpen={this.state.feedbackModalOpen} onRequestClose={this.closeModal} ariaHideApp={false}>
        <br />
        <h6>Please select the correct beer from these options:</h6>

        <List>
          {this.state.beerResultOptions.map(beerOption => {
            if ((this.state.beerResultOptions.indexOf(beerOption) > 0) && 
              (this.state.beerResultOptions.indexOf(beerOption) < 11)) {
              return (
                <ListSelect
                  key={beerOption.id}
                  id={this.state.beerResultOptions.indexOf(beerOption)}
                  handleBeerSelect={this.handleBeerSelect}
                  content={[beerOption.name, beerOption.abv, beerOption.description]}
                />
              );
            }
            return null;
          })}
        </List>

        <button style={{ margin: 5 }} className="btn btn-primary" onClick={this.handleBeerFeedback}>Submit</button>
        <button style={{ margin: 5 }} className="btn btn-dark" onClick={this.closeModal}>Close</button>
      </Modal>
    );


    const HomeComponent = () => {
      return (
        <Home
          imageData={this.state.imageData}
          handleInputChange={this.handleInputChange}
          handleImageChange={this.handleImageChange}
          handleBeerImage={this.handleBeerImage}
          handleFeedbackModal={this.handleFeedbackModal}
          visionUpdate={this.state.visionUpdate} //to force a component reload
        />
      );
    };

    const ReviewComponent = () => {
      return (
        <Reviews
          userReviews={this.state.userReviews}
        />
      );
    };

    const HistoryComponent = () => {
      return (
        <History
          userHistory={this.state.userHistory}
          handleReviewModal={this.handleReviewModal}
        />
      );
    };

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
          <Route exact path="(/|/home)" component={Analytics(HomeComponent)} />
          {feedbackModal}
          <Route exact path="/reviews" component={Analytics(ReviewComponent)} />
          {reviewModal}
          <Route exact path="/history" component={Analytics(HistoryComponent)} />
        </Container>
      </div>
    );
  }
}

export default App;
