import React from "react";
import { Jumbotron } from "react-bootstrap";
import { List, Item } from "../List";


let index = 0;
const ShowReviews = (props) => {
  const reviewArr = JSON.parse(localStorage.getItem("beerReviews"));
  return (
    <div>
      <br/>
      <Jumbotron>
        <h3>Public Reviews</h3>
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