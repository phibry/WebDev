import React from 'react';

const Alert = ({ alert, clearAlert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <div>
          <i className="fas fa-info-circle" /> {alert.msg}
        </div>
        <i className="fas fa-times delete" onClick={clearAlert}></i>
      </div>
    )
  );
};

export default Alert;
