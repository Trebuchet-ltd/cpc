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
import {JSONTo2DArray} from "../utils";





function Publish() {
    const [data, setData] = useState([]);
    const [name, setName] = useState(null);

    async function RetrieveUploadedFiles()  {
        let url = API_URL + "api/";
        let names = [];
        let response = await axios.get(url);
        let str = "";

        JSONTo2DArray(response.data);
        
        for(let i = 0; i < response.data.length; i++) {
            str = response.data[i].name.replace(/\s+/g, '_');
            names.push(str);
        }

      }

    useEffect(() => {
        RetrieveUploadedFiles()
    }, [])
    

  function sendElement(i) {
    return (<button onClick={() => sendSong(i)}>Send</button>);
  }

  function sendSong(i) {
    axios.post(API_URL + "send/", name[i], {
        headers: {
            'Content-Type': 'application/json'
        }
    })
  }

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
                            head={["Name", "Song", "Publish"]}
                            content={data}
                            customStyle={"publish-table-style"}
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
