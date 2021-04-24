import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  // Initialize Context
  const alertContext = useContext(AlertContext);
  // Destructure
  const { alert } = alertContext;

  console.log(alert);

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <div>
          <i className="fas fa-info-circle" /> {alert.msg}
        </div>
        <i
          className="fas fa-times delete"
          onClick={alertContext.clearAlert}
        ></i>
      </div>
    )
  );
};

export default Alert;
