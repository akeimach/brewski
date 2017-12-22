import { Button } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import React, { Component } from "react";
import axios from "axios";


//put class here

class APIReviews extends Component {

  state = {
    isLoading: true,
    articles: "",
    rating: "",
    description: "",
  };

  componentDidMount() {
    console.log('component mounted!!!');
        
    axios.get("/api/breweryDB")
      .then((response) => {
          console.log('this is response testing', response);
          this.setState({
              isLoading: false,
              articles: response.data.data[0].name,
              rating: response.data.data[0].abv,
              description: response.data.data[0].description,

          }); 
      });
  };


  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };



  render() {

    if (this.state.isLoading) {
      return (
          <h3>Loading...</h3>
      );
    }


    return (
      <div>
        <br/>
        <Jumbotron>
          <h1>Beer Information!</h1>

          <div>

            <h5>Name: {this.state.articles} <br/>
                 ABV: {this.state.rating} <br />
                 Description: {this.state.description}

            </h5>

            <p><Button bsStyle="primary">Submit</Button></p>
        
          </div>


        </Jumbotron>
      </div>
    );

  }

}


export default APIReviews;





