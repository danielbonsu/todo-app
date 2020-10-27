import React from 'react';

const Message = ({ children, variant }) => {
  return (
    <div
      className={`alertDiv alert-message-${
        variant === 'success' ? 'success' : 'danger'
      }`}
    >
      <i className='fas fa-info-circle'></i>
      <p>{children}</p>
    </div>
  );
};

export default Message;
