import React from "react";
import { List, ListButtonItem } from "../components/List";
import { Jumbotron } from "react-bootstrap";


const History = (props) => {
  return (
    <div>
      <br/>
      <Jumbotron>
        <h3>Viewing History</h3>
        <div>
        {props.userHistory.length ? (
          <List>
            {props.userHistory.map(review => {
              return (
                <ListButtonItem
                  key={review.id}
                  id={review.id}
                  name="reviewModalOpen"
                  content={[(`${review.Beer.beername}`)]}
                  value={[(`${review.Beer.beername}`), (`${review.beerScore}`), (`${review.beerRev}`)]}
                  buttonValue={`Review this Beer`}
                  onClick={props.handleReviewModal}
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

export default History;