import './App.css';
import { useState, useEffect } from 'react';
import { Channel } from './Components/Channel';

function App() {
  const [initialState, setState] = useState([]);
  const url = 'http://localhost/api';

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        setState(data);
      });
  }, []); // Correct position for the dependency array

  return (
    <div className="App">
      <Channel data={initialState}></Channel>
    </div>
  );
}

export default App;