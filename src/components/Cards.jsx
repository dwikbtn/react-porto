import React from 'react'

const Cards = React.memo((props) => {
  // console.log(props.data[0].id);
    return (
      <div className="card-container">
        {props.children}
      </div>
    );
})

export default Cards
