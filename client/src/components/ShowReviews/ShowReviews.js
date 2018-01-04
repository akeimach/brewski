import React from "react";
import { Jumbotron } from "react-bootstrap";
import { List, Item } from "../List";


let index = 0;
const ShowReviews = (props) => {

  let total = 0;
  props.beerReviews.map(review => {
    total += review.score 
  });

  let average = total/props.beerReviews.length;
  const reviewArr = JSON.parse(localStorage.getItem("beerReviews"));
  return (
    <div>
      <br/>
      <Jumbotron>
        <h3>Public Reviews</h3>
        <h5>Average Score: {average ? average.toFixed(1) : "...loading" }</h5>
        <div>
        {reviewArr ? (
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


