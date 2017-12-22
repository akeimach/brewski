import React from "react";
import History from "./History";
import Home from "./Home";
import Reviews from "./Reviews";
import { Route } from "react-router-dom";
import API from "../../utils/API";
import axios from "axios";


class Content extends React.Component {

    state = {
    imageData: "",
    imageResults: [],
    modalIsOpen: false,
    userId: 1,
    userData: [],
    userHistory: [],
    isLoading: true,
    beerName: "",
    abv: "",
    description: "",
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

  componentDidMount() {
    console.log('component mounted!!!');
        
    axios.get("/api/breweryDB/corona extra")
      .then((response) => {
          console.log('this is response testing', response);
          this.setState({
              isLoading: false,
              articles: response.data.data[0].name,
              rating: response.data.data[0].abv,
              description: response.data.data[0].description,

          }); 
      });
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


  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {

    return (
      <div>
        <Route exact path="(/|/home)" render={() => (
          <Home
            imageData={this.state.imageData}
            imageResults={this.state.imageResults}
            handleInputChange={this.handleInputChange}
            handleBeerImage={this.handleBeerImage}
          />
        )}/>
        <Route exact path="/reviews" render={() => (
          <Reviews />
        )}/>
        <Route exact path="/history" render={() => (
          <History
            userHistory={this.state.userHistory}
          />
        )}/>
      </div>
    );
  }

}

export default Content;
