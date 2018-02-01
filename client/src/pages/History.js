import React from "react";
import { List, ListItem } from "../components/List";
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
        {(beerArr && beerArr.length) ? (
          <List>
            {beerArr.map(history => {
              let userPrevReview = { //initialize their previous review to empty
                beerScore: "",
                beerRev: ""
              };
              reviewArr.map(prevReview => { //check each of the user's previous reviews for a matching beer ID
                if (history.id === prevReview.BeerId) { //if they've written a review for this beer before
                  userPrevReview = { //set the empty review to prev review
                    beerScore: prevReview.beerScore,
                    beerRev: prevReview.beerRev
                  };
                }
                return userPrevReview;
              });

              return (
                <ListItem
                  addButton={true}
                  key={history.id}
                  id={history.id}
                  name="reviewModalOpen"
                  content={[(`${history.beername}`)]}
                  value={[(`${history.beername}`), (`${userPrevReview.beerScore}`), (`${userPrevReview.beerRev}`)]}
                  buttonValue={`Review this Beer`}
                  onClick={props.handleReviewModal}
                />
              );
            })}
          </List>
        ) : (
          (localStorage.getItem("userId")) ? (
            <p>You have no history yet</p>
          ) : (
            <p>Log in to see your history</p>
          )
        )}
        </div>
      </Jumbotron>
    </div>
  );
}

export default History;