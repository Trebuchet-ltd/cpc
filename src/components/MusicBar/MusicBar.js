import "./MusicBar.css";
import {useState} from "react";
import axios from "axios";

import Play from "../../assets/svg/play.svg";
import Pause from "../../assets/svg/pause.svg";
import Right_seek from "../../assets/svg/right-seek.svg";
import Left_seek from "../../assets/svg/left-seek.svg";

import {API_URL} from "../../constants";

const MusicBar = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    function sendPlayState() {
        // let data = new FormData();
        // data.append("is_playing", isPlaying);
        // data.append("song", "1");

        // let data = [{"is_playing": true, "song": "1"}];

        axios.post(API_URL + "api/playstate/", {is_playing: true, song: 1}, {
            header: {
                "Content-Type": "application/json",
                // "X-CSRFToken": document.getCookie("csrftoken")
            }
        })
        .then((res) => {
            alert(res.data);
        }).catch( (err) => {
         console.log(err.response);
    })
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