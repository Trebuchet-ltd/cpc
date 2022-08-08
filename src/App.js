import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import CSS
import './App.css';

// Import pages
import Home from './pages/Home'
import Publish from './pages/Publish';
import Users from './pages/Users';
import Songs from './pages/Songs';
import Profile from './pages/Profile';
import Logout from './pages/Logout';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/publish" element={ <Publish />} />
          <Route path="/users" element={ <Users /> } />
          <Route path="/songs" element={<Songs />} /> 
          <Route path="/profile" element={<Profile />}/>
          <Route path="/logout" element={ <Logout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
