import "../styles/playlist.css";
import './Pages.css';
import ListView from "../components/ListView/Listview";
import Table from "../components/Table/Table";
import Checkbox from "../components/Checkbox/Checkbox";

const Playlist = () => {
    function handleCheck(e) {
        console.log(e.target.checked);
    }

  return (
    <>
        <section id="playlist">
            <h2>Playlist</h2>

            <div className="playlist-container">
                <div className="songs-list-table">
                <h4>Songs List</h4>
                <Table 
                        head={["Name", <Checkbox check={handleCheck}/>]}
                        content={[[1, ],[1,2],[1,2]]}
                        customStyle={"publish-table-style"}
                    />
                </div>
                <div className="songs-list-2">
                    <h4>Playlist</h4>
                    <ListView title="Playlist 1" items={[{id: 1, name: "Drunk in a shaapu.mp3", date: "2020/08/07"}]}/>
                </div>

            </div>
        


        </section>
    </>
  );
}





export default Playlist;
