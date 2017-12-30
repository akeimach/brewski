import React from "react";
import { List, ListItem } from "../components/List";
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
                <ListItem
                  key={review.id}
                  id={review.id}
                  beerRev={review.beerRev}
                  beerScore={review.beerScore}
                  content={[(`${review.Beer.beername}`)]}
                  reviewModalOpen={props.reviewModalOpen}
                  toggleModal={props.toggleModal}
                  modalValue={`Write your review`}
                  buttonValue={`Review this Beer`}
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