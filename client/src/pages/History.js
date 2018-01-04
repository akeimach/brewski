import React from "react";
import { List, ListButtonItem } from "../components/List";
import { Jumbotron } from "react-bootstrap";


const History = (props) => {
  const beerArr = (props.userHistory ? props.userHistory.Beers : []);
  const reviewArr = (props.userHistory ? props.userHistory.Reviews : []);
  return (
    <div>
      <br/>
      <Jumbotron>
        <h3>Your History</h3>
        <div>
        {beerArr ? (
          <List>
            {beerArr.map(history => {
              let beerStats = {
                beerScore: "",
                beerRev: ""
              };
              for (let key in reviewArr) {
                if (history.id === reviewArr[key].BeerId) {
                  beerStats = {
                    beerScore: reviewArr[key].beerScore,
                    beerRev: reviewArr[key].beerRev
                  };
                }
              }
              return (
                <ListButtonItem
                  key={history.id}
                  id={history.id}
                  name="reviewModalOpen"
                  content={[(`${history.beername}`)]}
                  value={[(`${history.beername}`), (`${beerStats.beerScore}`), (`${beerStats.beerRev}`)]}
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