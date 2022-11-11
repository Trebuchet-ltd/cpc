import "./Listview.css";
import {useState} from "react";
import arrow from '../../assets/svg/arrow.svg';

const ListView = ({title, items, socketSend}) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    function toggleExpand() {
      setIsExpanded(!isExpanded);
    }

    function sendPlaylist(title, musics) {
      let songIds = [];

      musics.forEach((id) => {
        songIds = [...songIds, id.music_id]
      });

      console.log({playlist_name: title, song_list: songIds});
      socketSend({playlist_name: title, song_list: songIds});
    }
  
    return(
      <>
        <div className="list-view">
          <span>
            <h6 onClick={toggleExpand}>{title}</h6>
            <button className="btn-oval pointer" onClick={() => sendPlaylist(title, items)}>send</button>
            <img src={arrow} style={{transform: (isExpanded) ? "rotate(180deg)" : "rotate(0)"}} onClick={toggleExpand} alt=""/>
          </span>
          {
            items.map((item, index) => (
                <ul className={(isExpanded) ? "list-view-item" : "list-view-item item-hidden"} key={index}>
                    <li>{index+1}</li>
                    <li>{item.name}</li>
                    <li>Uploaded on: {item.date_created}</li>
                </ul>
            ))
          }
        </div>
      </>
    );
  }

export default ListView;