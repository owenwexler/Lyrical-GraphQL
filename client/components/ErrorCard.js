import React from 'react';

const ErrorCard = ({ message }) => {
  return (
    <div className="row">
      <div className="col s12 m5">
        <div className="card-panel red">
          <span className="white-text">{message}</span>
        </div>
      </div>
    </div>
  )
}

export default ErrorCard;
