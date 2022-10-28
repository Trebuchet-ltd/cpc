import './Pages.css';
import '../styles/songs.css';
import ListView from "../components/ListView/Listview";

function Songs() {
  return (
    <>
        <section id="songs">
          <h2>Songs</h2>

          <div className="songs-list">
            <h4>Songs by Level</h4>
            <ListView title="Level 1 Songs" items={[{id: 1, name: "Drunk in a shaapu.mp3", date: "2020-08-07"}]}/>
            <ListView title="Level 2 Songs" items={[{id: 1, name: "Drunk in a shaapu.mp3", date: "2020-08-07"}]}/>
          </div>
        </section>
    </>
  );
}

export default Songs;
