import React from "react";
import { Jumbotron } from "react-bootstrap";
import { List, Item } from "../List";

let index = 0;
const ShowReviews = (props) => {
  return (
    <div>
      <br/>
      <Jumbotron>
        <h1>Reviews</h1>
        <div>
        {props.beerReviews.length ? (
          <List>
            {props.beerReviews.map(review => {
              // console.log(review);
              return (
                <Item
                  key={index++}
                  content={[(`Score: ${review.score}`), (`${review.comment}`)]}
                />
              );
            })}
          </List>
        ) : (
          <h3>Nothing here yet</h3>
        )}
        </div>
      </Jumbotron>
    </div>
  );
}

export default ShowReviews;