// Box.js
import React from 'react';

const Box = ({ text }) => {
  return (
    <div style={{ border: '1px solid red', margin: '10px', padding: '10px' }}>
      <p>{text}</p>
    </div>
  );
};

export default Box;
