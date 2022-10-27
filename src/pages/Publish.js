//Importing libraries
import { useState, useEffect } from 'react'; 
import DragAndDropDiv from "../components/DragAndDropDiv/DragAndDrop";

//Importing Components
import Table from '../components/Table/Table';

//Importing styles
import './Pages.css';
import '../styles/publish.css';
import {API_URL} from "../constants";
import axios from 'axios';
import {convertToMB} from "../utils";





function Publish() {
    const [data, setData] = useState([]);

    async function RetrieveUploadedFiles()  {
        let url = API_URL + "api/";
    
        let response = await axios.get(url);
    
        JSONTo2DArray(response.data);
      }

    useEffect(() => {
        RetrieveUploadedFiles()
    }, [])
    


  function JSONTo2DArray(json) {

    let arr = [];
    for(let i=0; i<json.length; i++) {
    
      arr.push([json[i].name, convertToMB(json[i].size), json[i].date_created]);
    }

    setData(arr);
  }


    // async function getPlaylist() {
    //     let playlist = await axios.get(API_URL + "send/");

    // }

    return (
        <>
            <section id="publish">
                <h2>Manage</h2>
                <div className="publish-content">

                    <div className="publish-upload">
                        <h4>Upload Songs</h4>
                        <DragAndDropDiv retrieveUploadedFiles={RetrieveUploadedFiles}/>
                    </div>

                    <div className="publish-table">
                        <h4>Uploaded Files</h4>
                        <ul>
                            <li>Level 1</li>
                            <li className="is-active">Level 2</li>
                            <li>Level 3</li>
                            <li>Level 4</li>
                        </ul>

                        <Table 
                            head={["Name", "Size", "Publish"]}
                            content={data}
                            customStyle={"publish-table-style"}
                            custom
                            />

                            
                    </div>

                    <div className="publish-list">
                        <h4>My Playlist</h4>
                        <Table head={["Songs", "Level"]} content={data}/>
                    </div>

                </div>
                {/* <h1>{file.name}</h1>
                <input type="file" onChange={handleChange}/>
                <button onClick={submit}>Upload to Server</button> */}
            </section>

        </>
    );
}



export default Publish;
