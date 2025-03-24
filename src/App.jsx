// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import One from './components/One';
import Two from './components/Two';
import Three from './components/Three';


function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">One</Link>
            </li>
            <li>
              <Link to="/two">Two</Link>
            </li>
            <li>
              <Link to="/three">Three</Link>
            </li>
            
          </ul>
        </nav> */}

        <Routes>
          <Route path="/" element={<One />} />
          <Route path="/two" element={<Two />} />
          <Route path="/three" element={<Three />} />
      
        </Routes>
      </div>
    </Router>
  );
}

export default App;