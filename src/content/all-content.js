import React from 'react';
import './all-content.css';
import Form from './form/form';

const AllContent = () => {
  return (
    <div className="main-container-all-content">
      <span className="h1-all-content">Contact Us</span>
      <span className="body-text-all-content">
        Any question or remarks? Just write us a message!
      </span>
      <div className="display-flex">
        <Form />
      </div>
    </div>
  );
};

export default AllContent;
