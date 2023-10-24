import React from 'react';
import './style.css'
import { CircularProgress } from '@mui/material';

const Modal = ({ show,data }) => {
  return show ? (
    <div className="modal-overlay">
      <div className="modal-content">
      <CircularProgress size={100}/>
          {/* You can replace this with your preferred loading spinner or animation */}
          <p


style={{
    fontWeight: 'bold',
    fontFamily: 'Acme',
    textAlign: 'center', // Center align text
    fontSize: '1.5rem',
    marginTop: 10,

}}
className={`text-primary mt-4`}

>
{data}...
</p>
        </div>
    </div>
  ) : null;
};

export default Modal;
