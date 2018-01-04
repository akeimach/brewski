import React from "react";
import { Jumbotron } from "react-bootstrap";
import { List, Item } from "../List";
import CircularProgressbar from "react-circular-progressbar";
import "./percentStyle.css";
import { Col, Row } from "../Grid";


const ShowReviews = (props) => {

  const reviewArr = JSON.parse(localStorage.getItem("beerReviews"));
  let index = 0;
  let total = 0;
  let count = 1;

  {(reviewArr && reviewArr.length > 1) ? (
    count = reviewArr.length,
    reviewArr.map(review => {
      return (total += review.score);
    })
  ) : (
    total = 0
  )}
  
  const average = total / count;
  const scoreDisplay = (total / count).toFixed(1);
  const resultStatus = (total === 0 ? "None found" : "");

  return (
    <div>
      <br/>
      <Jumbotron>
        <Row>
          <Col size="6">
            <h3>Public Reviews</h3>
          </Col>
          <Col size="6">
            <h5 style={{ textAlign: "center" }}>{`RateBeer Average\n${resultStatus}`}</h5>
            <CircularProgressbar
              className="CircularProgressbar-inverted"
              background
              backgroundPadding={5}
              strokeWidth={6}
              percentage={parseInt(((average * 100) / 5.0), 10)}
              textForPercentage={(average) => {
                return `${scoreDisplay} / 5`;
              }}
            />
          </Col>
        </Row>
        <div>
          {(reviewArr && reviewArr.length)  ? (
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
            <p></p>
          )}
        </div>
      </Jumbotron>
    </div>
  );
}

export default ShowReviews;


