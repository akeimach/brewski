import React from "react";
import { Jumbotron } from "react-bootstrap";
import { List, Item } from "../List";


let index = 0;
const ShowReviews = (props) => {
  return (
    <div>
      <br/>
      <Jumbotron>
        <h3>Public Reviews</h3>
        <div>
        {props.beerReviews.length ? (
          <List>
            {props.beerReviews.map(review => {
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