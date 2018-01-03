import React from "react";
import { List, ListButtonItem } from "../components/List";
import { Jumbotron } from "react-bootstrap";


const History = (props) => {
  const beerArr = props.userHistory.Beers;
  const reviewArr = props.userHistory.Reviews;
  return (
    <div>
      <br/>
      <Jumbotron>
        <h3>Your History</h3>
        <div>
        {beerArr ? (
          <List>
            {beerArr.map(history => {
              let beerRev = "";
              let beerScore = "";
              for (let key in reviewArr) {
                (history.id === reviewArr[key].BeerId ?
                  beerRev = reviewArr[key].beerRev :
                  beerScore = reviewArr[key].beerScore
                )
              }
              return (
                <ListButtonItem
                  key={history.id}
                  id={history.id}
                  name="reviewModalOpen"
                  content={[(`${history.beername}`)]}
                  value={[(`${history.beername}`), (`${beerScore}`), (`${beerRev}`)]}
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