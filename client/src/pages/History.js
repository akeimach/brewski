import React from "react";
import { List, ListItem } from "../components/List";
// import { Button } from 'react-bootstrap';
// import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';


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
