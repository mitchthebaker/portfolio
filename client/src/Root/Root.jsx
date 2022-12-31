import React from 'react';
import App from './App';

// Separation of concerns mostly: abstract out providers and other configurations 
// and wrap around the main App component 
const Root = () => {
  return (
    <App />
  );
};

export default Root;