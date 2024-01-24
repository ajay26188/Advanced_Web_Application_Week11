import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from "./components/About";
import MyContainer from "./components/MyContainer";
import Header from "./components/Header";

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
        <Routes>
          <Route path ="/" element={<MyContainer />} />
          <Route path ="/about" element={<About />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
