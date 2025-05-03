import React from 'react';
import './Typing.css';

const Typing = ({ text }) => {
  return (
    <div className="typing-container">
     <h1 className="typing-text" style={{ '--text-length': text.length }}>
  {text}
</h1>

    </div>
  );
};

export default Typing;
