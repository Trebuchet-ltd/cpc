import "./Listview.css";
import {useState} from "react";
import arrow from '../../assets/svg/arrow.svg';

const ListView = ({title, items}) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    function toggleExpand() {
      setIsExpanded(!isExpanded);
    }
  
    return(
      <>
        <div className="list-view">
          <span onClick={toggleExpand}>
            <h6>{title}</h6>
            <img src={arrow} style={{transform: (isExpanded) ? "rotate(180deg)" : "rotate(0)"}} alt=""/>
          </span>
          {
            items.map((item, index) => (
                <ul className={(isExpanded) ? "list-view-item" : "list-view-item item-hidden"} key={index}>
                    <li>{item.id}</li>
                    <li>{item.name}</li>
                    <li>Uploaded on: {item.date}</li>
                </ul>
            ))
          }
        </div>
      </>
    );
  }

export default ListView;