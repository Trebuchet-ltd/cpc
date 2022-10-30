import "./MusicBar.css";
import {useEffect, useState} from "react";
import axios from "axios";

import Play from "../../assets/svg/play.svg";
import Pause from "../../assets/svg/pause.svg";
import Right_seek from "../../assets/svg/right-seek.svg";
import Left_seek from "../../assets/svg/left-seek.svg";

import {API_URL, SOCKET_URL} from "../../constants";

import {toast} from "react-toastify";
import Alertbox from "../AlertBox/Alertbox";



const MusicBar = () => {
    // const [socket, setSocket] = useState();
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        var socket = new WebSocket(SOCKET_URL + "music/zero/")

        socket.onmessage = function(e) {
            const data = JSON.parse(e.data);
    
            console.log(data);
            // document.querySelector('#chat-log').value += (data.message + '\n');
        };
        
        socket.onclose = function(e) {
            toast(<Alertbox type="error" text="Websocket closed Unexpectedly"/>);
        };

        }, [])


    function sendPlayState() {

        this.socket.send(JSON.stringify({"is_playing": isPlaying}));
    }

    function togglePlay() {
        setIsPlaying(!isPlaying);
        sendPlayState()
    }

    return(
        <>
            <div className="musicbar">
                <div className="musicbar-left">
                    <img src={""} alt=""/>
                    <div>
                        <h5>Sunroof</h5>
                        <p>Nicky Youre, dazy</p>
                    </div>

                </div>

                <div className="musicbar-controls">
                    <img src={Left_seek} alt=""/>
                    <div onClick={togglePlay}>
                        <img src={(isPlaying) ? Play : Pause} alt=""/>
                    </div>
                    
                    <img src={Right_seek} alt=""/>
                </div>

                <div className="musicbar-right">

                </div>
            </div>
        </>
    )
}

export default MusicBar;