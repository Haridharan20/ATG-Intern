import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome'
import './App.css';

function App() {
  const [username, setUsername] = useState(null)
  const [pic, setPic] = useState(null)
  console.log(username);
  return (
    <>
      <Navbar username={username} pic={pic} setUsername={setUsername} setPic={setPic} />
      <Welcome username={username} pic={pic} setUsername={setUsername} setPic={setPic} />
    </>
  );
}

export default App;
