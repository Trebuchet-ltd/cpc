import "../styles/playlist.css";
import './Pages.css';
import ListView from "../components/ListView/Listview";
import Table from "../components/Table/Table";
import Checkbox from "../components/Checkbox/Checkbox";

import {useState, useEffect, useRef} from "react";
import axios from "axios";
import {API_URL} from "../constants";
import {JSONTo2DArray} from "../utils";

const Catalogues = [
    {
      id: "01",
      name: "Chicken"
    },
    {
      id: "02",
      name: "Beef"
    },
    {
      id: "03",
      name: "Lamb"
    },
    {
      id: "04",
      name: "Pork"
    },
    {
      id: "05",
      name: "Seafood"
    },
    {
      id: "06",
      name: "Dairy"
    },
    {
      id: "07",
      name: "Tofu"
    },
    {
      id: "08",
      name: "Vegan"
    }
  ];
  

const Playlist = () => {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(Catalogues);
  }, [list]);

  const handleSelectAll = e => {
    setIsCheckAll(!isCheckAll);
    let items = new Array(1, 2, 3)
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

  async function getSongs() {
    let songs = await axios.get(API_URL + "api/songs/");
    console.log(songs.data[0])
    console.log(JSONTo2DArray(songs.data));
  }

  function createPlaylist() {
    console.log(isCheck);
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
                        content={[["oom.wav",  <Checkbox id={1} name={1}  handleClick={handleClick} isChecked={isCheck.includes(1)}/>],
                        ["drunk in a shaapu.wav", <Checkbox id={2} name={2} handleClick={handleClick} isChecked={isCheck.includes(2)}/>],
                        ["Chalmar.wav", <Checkbox id={3} name={3} handleClick={handleClick} isChecked={isCheck.includes(3)}/>],]}
                        customStyle={"publish-table-style"}
                    />
                <div className="playlist-input">
                    <input type="text" placeholder="Enter playlist name"/>
                    <ul>
                        <li>{isCheck.length} songs selected</li>
                        <li className="btn-primary pointer" onClick={createPlaylist}>Create Playlist</li>
                    </ul>
                </div>
                </div>
                <div className="songs-list-2">
                    <h4>Playlist</h4>
                    <ListView title="Playlist 1" items={[{id: 1, name: "Drunk in a shaapu.mp3", date: "2020/08/07"},
                {id: 1, name: "Drunk in a shaapu.mp3", date: "2020/08/07"}]}/>
                </div>

            </div>
        


        </section>
    </>
  );
}





export default Playlist;
