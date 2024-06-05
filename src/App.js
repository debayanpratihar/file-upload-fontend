import React from 'react';
import FileUpload from './components/FileUpload';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>File Upload to Firebase</h1>
        <h2>DHC Virtual Project Challenge: Practice Your Code</h2>
        <p>Challenge Description:</p>
        <p>
          VoIP Project: <br />
          Objective: Incorporate a feature into a web app that allows users to:
          <ul>
            <li>Make video calls to their friends.</li>
            <li>Share their screen, specifically the YouTube website.</li>
            <li>Record the video session and save it locally.</li>
          </ul>
          Timing Constraint: Video calls can only be made between 6 PM and 12 AM. Outside of these hours, the video call option should be disabled.
        </p>
        <FileUpload />
      </header>
    </div>
  );
}

export default App;
