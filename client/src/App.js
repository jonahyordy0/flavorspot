import Home from "./views/home/Home";
import Login from "./views/login/Login";
import Navbar from "./components/Navbar"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from "./views/register/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/homefeed" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
