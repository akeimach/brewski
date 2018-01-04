import React from "react";
import { Jumbotron } from "react-bootstrap";
import { List, Item } from "../List";
import CircularProgressbar from 'react-circular-progressbar';
import styles from './percentStyle.css';
import API from "../../utils/API";


const ShowReviews = (props) => {
  let totalScore2 = 0;
  let totalReviews2 = 0;
  let percentVal2 = 0;
  let circle2;
  API.getReviewHistory(localStorage.getItem("visionBeerName"))
  .then(res => {
    for (let i = 0; i < res.data.length; i++) {
      if (res.data[i].Reviews.length) {
        totalReviews2++;
        totalScore2 += res.data[i].Reviews[0].beerScore;
      }
    }
    percentVal2 = ((totalScore2 / totalReviews2) * 100) / 5.0;
    console.log(percentVal2);
    circle2 = (
      <CircularProgressbar
        className="CircularProgressbar-inverted"
        background
        backgroundPadding={5}
        strokeWidth={6}
        percentage={parseInt(percentVal2, 10)}
      />
    );
  })
  .catch(err => console.log(err));
  let index = 0;
  let totalScore1 = 0;
  let totalReviews = 0;
  let percentVal1 = 0;
  const reviewArr = JSON.parse(localStorage.getItem("beerReviews"));
  for (let key in reviewArr) {
    totalScore1 += reviewArr[key].score;
    totalReviews++;
  }
  percentVal1 = ((totalScore1 / totalReviews) * 100) / 5.0;
  return (
    <div>
      <br/>
      <Jumbotron>
        <h3>Public Reviews</h3>
        {circle2}
        <div className="col-xs-12 col-sm-6 col-md-3">
          <div className="row mb-1">
            <div className="col-xs-6 offset-xs-3">
              <CircularProgressbar
                className="CircularProgressbar-inverted"
                background
                backgroundPadding={5}
                strokeWidth={6}
                percentage={parseInt(percentVal1, 10)}
              />
              <CircularProgressbar
                className="CircularProgressbar-inverted"
                background
                backgroundPadding={5}
                strokeWidth={6}
                percentage={parseInt(percentVal2, 10)}
              />
            </div>
          </div>
        </div>
        <div>
        {reviewArr.length ? (
          <List>
            {reviewArr.map(review => {
              return (
                <Item
                  key={index++}
                  content={[(`Score: ${review.score}`), (`${review.comment}`)]}
                />
              );
            })}
          </List>
        ) : (
          <p>Nothing here yet</p>
        )}
        </div>
      </Jumbotron>
    </div>
  );
}

export default ShowReviews;