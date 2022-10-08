import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createContext, useState } from 'react';

// Import CSS
import './App.css';

// Import pages
import Home from './pages/Home'
import Publish from './pages/Publish';
import Users from './pages/Users';
import Songs from './pages/Songs';
import Profile from './pages/Profile';
import Logout from './pages/Logout';

export const UserContext = createContext();


function App() {
  const [width, setWidth] = useState(250);

  return (
    <div className="App">
      {/* <UserContext.Provider value={{width, setWidth}}>  */}
        <Router>
          <Sidebar />
          <main class="container">
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/publish" element={ <Publish />} />
              <Route path="/users" element={ <Users /> } />
              <Route path="/songs" element={<Songs />} /> 
              <Route path="/profile" element={<Profile />}/>
              <Route path="/logout" element={ <Logout />} />
            </Routes>
          </main>


        </Router>
      {/* </UserContext.Provider> */}
    </div>
  );
}

export default App;
