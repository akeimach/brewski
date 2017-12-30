import React from "react";


export const Item = (props) => {
  return (
    <div>
      {props.content ? (
        <div>
          {props.content.map(item => {
            return <h6 key={item}>{item}</h6>;
          })}
        </div>
      ) : (
        <p>Nothing here yet</p>
      )}
    </div>
  );
}