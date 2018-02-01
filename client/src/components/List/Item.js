import React from "react";


export const Item = (props) => {

  let index = 0;

  return (
    <div>
      {props.content ? (
        <div>
          {props.content.map(item => {
            return (<h6 key={index++}>{item}</h6>); // need key for map iterator
          })}
        </div>
      ) : (
        <p>Nothing here yet</p>
      )}
    </div>
  );
}