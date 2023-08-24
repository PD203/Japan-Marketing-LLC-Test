import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import K10 from "./Page/K10";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<K10 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
