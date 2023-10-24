import React from 'react';
import { useParams } from 'react-router-dom';

function UpdateDetail() {
  const { date, subject, message } = useParams();

  return (
    <div className="container mt-5" >
      <h2 style={{marginTop:100}}>Update Detail</h2>
      <div className="card">
        <div className="card-header">
          <h5 className="card-title">Subject: {subject}</h5>
          <p className="card-text">Date: {date}</p>
        </div>
        <div className="card-body">
          <p className="card-text">{message}</p>
        </div>
      </div>
    </div>
  );
}

export default UpdateDetail;
