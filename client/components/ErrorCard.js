import React from 'react';

const ErrorCard = ({ message }) => {
  return (
    <div className="row">
      <div className="col s9 m3">
        <div className="card red darken-1">
          <div className="card-content white-text">
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorCard;
