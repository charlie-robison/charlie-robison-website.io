import './App.css';
import { Home } from './pages/Home';
import { Header } from './components/Header';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/skills" element={<Home />} />
        <Route exact path="/careers" element={<Home />} />
        <Route exact path="/projects" element={<Home />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
