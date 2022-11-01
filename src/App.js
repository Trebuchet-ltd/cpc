import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useEffect} from 'react';
// Import CSS
import './App.css';

// Import pages
import Home from './pages/Home'
import Publish from './pages/Publish';
import Users from './pages/Users';
import Songs from './pages/Songs';
import Profile from './pages/Profile';
import Logout from './pages/Logout';
import Playlist from './pages/Playlist';

import MusicBar from "./components/MusicBar/MusicBar";

// export const UserContext = createContext();

function App() {
 
  return (

    <div className="App">
      
      {/* <UserContext.Provider value={{width, setWidth}}>  */}
        <Router>
          <Sidebar />
          <main className="container">
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/publish" element={ <Publish />} />
              <Route path="/users" element={ <Users /> } />
              <Route path="/songs" element={<Songs />} /> 
              <Route path="/playlist" element={<Playlist />} /> 
              <Route path="/profile" element={<Profile />}/>
              <Route path="/logout" element={ <Logout />} />
            </Routes>
          </main>
          <ToastContainer
            autoClose={3000}
            className="toast-style"
            hideProgressBar={true}
            position={toast.POSITION.TOP_RIGHT}
            />

          <MusicBar/>

        </Router>
      {/* </UserContext.Provider> */}
    </div>
  );
}

export default App;
