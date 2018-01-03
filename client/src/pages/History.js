import React from "react";
import { List, ListButtonItem } from "../components/List";
import { Jumbotron } from "react-bootstrap";


const History = (props) => {
  const beerArr = props.userHistory.Beers;
  return (
    <div>
      <br/>
      <Jumbotron>
        <h3>Viewing History</h3>
        <div>
        {beerArr ? (
          <List>
            {beerArr.map(history => {
              return (
                <ListButtonItem
                  key={history.id}
                  id={history.id}
                  name="reviewModalOpen"
                  content={[(`${history.beername}`)]}
                  value={[(`${history.beername}`), (`${history.beerScore}`), (`${history.beerRev}`)]}
                  buttonValue={`Review this Beer`}
                  onClick={props.handleReviewModal}
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

export default History;