import React from 'react'


function Card(props) {

  return (
    <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
            {props.children}
        </div>
    </div>
  )
}

export default Card