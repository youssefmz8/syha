import React, { useEffect, useState } from 'react';

function App() {
  // Define state to hold the response data from the backend
  const [message, setMessage] = useState('');

  // useEffect will run once when the component is mounted
  useEffect(() => {
    // Fetch data from the Node.js backend
    fetch('http://localhost:4000')  // Ensure this is the correct backend URL
      .then(response => response.text())  // Get the response as plain text
      .then(data => {
        setMessage(data);  // Update the message state with the response data
      })
      .catch(err => console.error('Error fetching data:', err));  // Handle any errors
  }, []);  // Empty dependency array means this effect runs only once when the component is mounted

  return (
    <div>
      <h1>React Frontend</h1>
      <p>{message ? message : 'Loading...'}</p> {/* Display the backend message or loading */}
    </div>
  );
}

export default App;