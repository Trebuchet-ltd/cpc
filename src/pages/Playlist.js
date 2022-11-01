import "../styles/playlist.css";
import './Pages.css';
import ListView from "../components/ListView/Listview";
import Table from "../components/Table/Table";
import Checkbox from "../components/Checkbox/Checkbox";

import {useState, useEffect, useRef} from "react";
import axios from "axios";
import {API_URL} from "../constants";

const Playlist = () => {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  const inputRef = useRef(null);

  useEffect(() => {
    axios.get(`${API_URL}playlist/`).then((res) => {
      setList(res.data);
    })
    .catch((err) => {
      console.log(err);
    })

    axios.get(`${API_URL}playlist/get/`).then((res) => {
      setPlaylist(res.data);
    })
    .catch((err) => {
      console.log(err);
    })

  }, []);

  const handleSelectAll = e => {
    setIsCheckAll(!isCheckAll);

    let items = Array.from({length:list.length}, (_, index) => index + 1);
    setIsCheck(items);
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = e => {
    const {id, checked} = e.target;

    var updatedList = [...isCheck, parseInt(id)];

    if(checked) {
        setIsCheck(updatedList);
    }
    else {
        setIsCheck(isCheck.filter(item => item !== parseInt(id)));
    }

    if (isCheck.length <= list.length) {
        setIsCheckAll(false);
    }

  };

  function createPlaylist() {
    let playlistName = inputRef.current.value;
    let selectedSongs = [];
    isCheck.forEach((item) => {
      selectedSongs.push(list[item-1].music_id);
    })

    axios.post(`${API_URL}playlist/`, {name: playlistName, songs: selectedSongs}, {
      headers: {
        'Content-Type': 'application/json'
      }
  }).then((res) => {console.log(res.data)}).then((res) => {
    axios.get(`${API_URL}playlist/get/`)
    .then((res) => {
      setPlaylist(res.data)
    }).catch((err) => {console.log(err.response.data)})
  }).catch((err) => {console.log(err)}); ;



  }

  function updateList(list) {
    var updatedArray = [];

    list.forEach((item, index) => {
        updatedArray.push([item.name, <Checkbox id={index+1} name={index+1} handleClick={handleClick} isChecked={isCheck.includes(index+1)}/>])
    })

    console.log(updatedArray);
    return updatedArray;
  }


  return (
    <>
        <section id="playlist">
            <h2>Playlist</h2>

            <div className="playlist-container">
                <div className="songs-list-table">
                <h4>Songs List</h4>
                <Table 
                        head={["Name", <Checkbox id={0} name={0} handleClick={handleSelectAll} isChecked={isCheckAll}/>]}
                        content={updateList(list)}
                        customStyle={"publish-table-style"}
                    />
                <div className="playlist-input">
                    <input type="text" ref={inputRef} placeholder="Enter playlist name"/>
                    <ul>
                        <li>{isCheck.length} songs selected</li>
                        <li className="btn-primary pointer" onClick={createPlaylist}>Create Playlist</li>
                    </ul>
                </div>
                </div>
                <div className="songs-list-2">
                    <h4>Playlist</h4>
                    {
                      playlist.map((item) => (
                        <ListView title={item.name} items={[{id: 1, name: "Drunk in a shaapu.mp3", date: "2020/08/07"},
                        {id: 1, name: "Drunk in a shaapu.mp3", date: "2020/08/07"}]}/>
                      ))
                    }

                </div>

            </div>
        


        </section>
    </>
  );
}





export default Playlist;
