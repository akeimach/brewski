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

        <h5>Average Score: {average ? average.toFixed(1) : "Loading" }</h5>
        </div>
      </Jumbotron>
    </div>
  );
}

export default ShowReviews;







