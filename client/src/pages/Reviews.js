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
          (localStorage.getItem("userId")) ? (
            <p>You have not written any reviews yet</p>
          ) : (
            <p>Log in to see your reviews</p>
          )
        )}
        </div>
      </Jumbotron>
    </div>
  );
}

export default Reviews;