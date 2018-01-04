import React from "react";
import { Jumbotron } from "react-bootstrap";
import { List, Item } from "../List";
import CircularProgressbar from "react-circular-progressbar";
import "./percentStyle.css";
import { Col, Row } from "../Grid";
// import API from "../../utils/API";


const ShowReviews = (props) => {

  // let totalScore2 = 0;
  // let totalReviews2 = 0;
  // let percentVal2 = 0;
  // let circle2;
  // API.getReviewHistory(localStorage.getItem("visionBeerName"))
  // .then(res => {
  //   for (let i = 0; i < res.data.length; i++) {
  //     if (res.data[i].Reviews.length) {
  //       totalReviews2++;
  //       totalScore2 += res.data[i].Reviews[0].beerScore;
  //     }
  //   }
  //   percentVal2 = ((totalScore2 / totalReviews2) * 100) / 5.0;
  //   console.log(percentVal2);
  //   circle2 = (
  //     <CircularProgressbar
  //       className="CircularProgressbar-inverted"
  //       background
  //       backgroundPadding={5}
  //       strokeWidth={6}
  //       percentage={parseInt(percentVal2, 10)}
  //     />
  //   );
  // })
  // .catch(err => console.log(err));

  const reviewArr = JSON.parse(localStorage.getItem("beerReviews"));
  let index = 0;
  let total = 0;
  reviewArr.map(review => {
    return (total += review.score);
  });
  let average = total / reviewArr.length;
  let scoreDisplay = (total / reviewArr.length).toFixed(1);

  const circle = (
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
  );

  return (
    <div>
      <br/>
      <Jumbotron>
        <Row>
          <Col size="6">
            <h3>Public Reviews</h3>
          </Col>
          <Col size="6">
            <h5 style={{ textAlign: "center" }}>RateBeer Average {average ? "" : "...loading" }</h5>
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


