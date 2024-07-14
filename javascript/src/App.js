// import logo from './logo.svg';
import './css/App.css';
import React from 'react';
import { BrowserRouter as  Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Welcome, Daniel
//         </p>

//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
