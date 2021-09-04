import React from 'react';

function Error({ message }) {
  return (
    <div
      style={{
        padding: 15,
        fontSize: 16,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      Error: {message}
    </div>
  );
}

export default Error;
