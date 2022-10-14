import './Pages.css';
import '../styles/songs.css';

import {useState} from "react"; 
import arrow from '../assets/svg/arrow.svg';

function Songs() {
  return (
    <>
        <section id="songs">
          <h2>Songs</h2>

          <div className="songs-list">
            <h4>Songs by Level</h4>
            <ListView/>
            <ListView/>
          </div>
        </section>
    </>
  );
}

const ListView = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleExpand() {
    setIsExpanded(!isExpanded);
  }

  return(
    <>
      <div className="list-view">
        <span onClick={toggleExpand}>
          <h6>Level 1 Songs</h6>
          <img src={arrow} style={{transform: (isExpanded) ? "rotate(180deg)" : "rotate(0)"}} alt=""/>
        </span>
        <ul className={(isExpanded) ? "list-view-item" : "list-view-item item-hidden"}>
          <li>1</li>
          <li>Inferno</li>
          <li>Uploaded on: 21/07/2022</li>
        </ul>
      </div>
    </>
  );
}

export default Songs;
