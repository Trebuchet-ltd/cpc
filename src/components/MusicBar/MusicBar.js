import "./MusicBar.css";
import {useState} from "react";

import Play from "../../assets/svg/play.svg";
import Pause from "../../assets/svg/pause.svg";
import Right_seek from "../../assets/svg/right-seek.svg";
import Left_seek from "../../assets/svg/left-seek.svg";

// import {API_URL, SOCKET_URL} from "../../constants";
// import {alertbox} from "../AlertBox/Alertbox";


const MusicBar = ({socketSend}) => {
    const [isPlaying, setIsPlaying] = useState(true);
        
    function sendPlayState() {

        socketSend({"is_playing": isPlaying});
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