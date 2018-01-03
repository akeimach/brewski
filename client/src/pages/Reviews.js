import React from "react";
import { List, ListItem } from "../components/List";
import { Jumbotron } from "react-bootstrap";

const Reviews = (props) => {
  return (
    <div>
      <br/>
      <Jumbotron>
        <h3>Your Reviews</h3>
        <div>
        {props.userReviews.length ? (
          <List>
            {props.userReviews.map(review => {
              return (
                <ListItem
                  key={review.id}
                  id={review.id}
                  content={[(`${review.Beer.beername}`), (`Score: ${review.beerScore}`), (`Review: ${review.beerRev}`)]}
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

export default Reviews;