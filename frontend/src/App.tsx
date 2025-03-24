import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Lisää React Router
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import api from './api/api';

const Home = () => {
  const [message, setMessage] = useState("");  // Tilaa viestin tallentamiseen

  useEffect(() => {
    // API-pyyntö backendin Flask-API:iin
    api.get("/")
      .then((res) => setMessage(res.data.message))
      .catch((err) => setMessage(err.message));
  }, []);  // Tyhjä riippuvuuslista, jotta pyyntö tehdään vain kerran, kun komponentti ladataan
  
   return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the home page</p>
      <h3>{message}</h3>  {/* Näytetään API:sta saatu viesti */}
    </div>
  );
};

const About = () => (
  <div>
    <h2>About Page</h2>
    <p>This is the about page of our app.</p>
  </div>
);

function App() {
  
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* React Router */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
