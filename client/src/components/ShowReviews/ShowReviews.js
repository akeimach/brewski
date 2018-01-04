import React from "react";
import { Jumbotron } from "react-bootstrap";
import { List, Item } from "../List";
import CircularProgressbar from 'react-circular-progressbar';
import styles from './percentStyle.css';


const Circle = (props) => {
  return (
    <div className="col-xs-12 col-sm-6 col-md-3">
      <div className="row mb-1">
        <div className="col-xs-6 offset-xs-3">
          <CircularProgressbar
            className="CircularProgressbar-inverted"
            background
            backgroundPadding={5}
            strokeWidth={6}
            percentage={props.percentage}
          />
        </div>
      </div>
    </div>
  );
};

const ShowReviews = (props) => {
  let index = 0;
  let totalScore = 0;
  let totalReviews = 0;
  let percentVal = 0;
  const reviewArr = JSON.parse(localStorage.getItem("beerReviews"));
  for (let key in reviewArr) {
    totalScore += reviewArr[key].score;
    totalReviews++;
  }
  percentVal = ((totalScore / totalReviews) * 100) / 5.0;
  return (
    <div>
      <br/>
      <Jumbotron>
        <h3>Public Reviews</h3>
        <Circle percentage={parseInt(percentVal, 10)} />
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