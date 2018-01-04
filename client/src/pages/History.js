import React from "react";
import { List, ListButtonItem } from "../components/List";
import { Jumbotron } from "react-bootstrap";


const History = (props) => {
  const beerArr = (props.userHistory ? props.userHistory.Beers : null);
  const reviewArr = (props.userHistory ? props.userHistory.Reviews : null);
  return (
    <div>
      <br/>
      <Jumbotron>
        <h3>Your History</h3>
        <div>
        {beerArr ? (
          <List>
            {beerArr.map(history => {
              let beerStats = [];
              for (let key in reviewArr) {
                (history.id === reviewArr[key].BeerId ? beerStats.push(reviewArr[key].beerScore, reviewArr[key].beerRev) : beerStats.push(null, null)
                )
                console.log(beerStats);
              }
              return (
                <ListButtonItem
                  key={history.id}
                  id={history.id}
                  name="reviewModalOpen"
                  content={[(`${history.beername}`)]}
                  value={[(`${history.beername}`), (`${beerStats[0]}`), (`${beerStats[1]}`)]}
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