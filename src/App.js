import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useEffect, useState} from 'react';
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

import {SOCKET_URL} from "./constants";
import {alertbox} from "./components/AlertBox/Alertbox";

import useWebSocket from 'react-use-websocket';

// export const UserContext = createContext();

var socket = new WebSocket(SOCKET_URL + "music/lvl0/");

socket.onopen = function(e) {
    alertbox({text: "Websocket: Connection established", type: "success"});
    socket.send(JSON.stringify({"is_playing": false}));
}

socket.onmessage = function(e) {
    const data = JSON.parse(e.data);

    console.log(data);
}

socket.onclose = function(e) {
    alertbox({text: "Websocket: Connection closed", type: "error"});
}

function App() {
  const [webSocket, setWebSocket] = useState(null);

  useEffect(() => {
    setWebSocket(socket);
  }, [])

  const sendMessage = (data) => {
    socket.send(JSON.stringify(data));
  }

  return (
    

    <div className="App">
      
      {/* <UserContext.Provider value={{width, setWidth}}>  */}
        <Router>
          <Sidebar />
          <main className="container">
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/publish" element={ <Publish socketSend={sendMessage}/>} />
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

          <MusicBar socketSend={sendMessage}/>

        </Router>
      {/* </UserContext.Provider> */}
    </div>
  );
}

export default App;
