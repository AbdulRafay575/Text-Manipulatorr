import React, { useState, useEffect } from 'react';

export default function Alert(props) {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [props.mode]);

  return (
    <div>
      {showAlert && (
        <div style={{ borderRadius: "10px",position:'absolute',width:'100vw',height:'50px' }} className={`alert alert-${props.mode==='light'?'dark':'light'} alert-dismissible fade show`} role="alert">
          <strong>{props.mode === 'light' ? 'Light Mode' : 'Dark Mode'}</strong>
          {props.mode === 'light' ? 'You have enabled Light Mode' : 'You have enabled Dark Mode'}
        </div>
      )}
    </div>
  );
}
