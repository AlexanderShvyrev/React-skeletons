import React, { useState, useEffect } from 'react'
import User from './components/User'
import Articles from './components/Articles';

function App() {
  const [theme, setTheme] = useState(true)

  const handleTheme = () => {
    setTheme(!theme)
  }

  return (
    <div className="App">
      <header>
        <h1>React Skeletons</h1>
      </header>
      <button className="btn" onClick={handleTheme}>Change Theme</button>
      <div className="content">
        <Articles theme={theme ? "light" : "dark"} />
        <User theme={theme ? "light" : "dark"} />
      </div>
    </div>
  );
}

export default App;
