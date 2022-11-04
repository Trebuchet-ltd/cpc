//Importing libraries
import { useState, useEffect } from 'react'; 
import DragAndDropDiv from "../components/DragAndDropDiv/DragAndDrop";
import axios from 'axios';

//Importing styles
import './Pages.css';
import '../styles/publish.css';

//Importing functions
import {API_URL} from "../constants";
import {convertToMB, JSONTo2DArray} from "../utils";

//Importing Components
import Table from '../components/Table/Table';
import { alertbox } from '../components/AlertBox/Alertbox';



const Publish = ({socketSend}) =>  {
    const [data, setData] = useState([]);
    const [fileDetails, setFileDetails] = useState({name: null, size: null, type: null});

    useEffect(() => {
        RetrieveUploadedFiles();
    }, [])


    async function RetrieveUploadedFiles()  {
        await axios.get(API_URL + "api/")
        .then((res) => {
            let convertedData =  JSONTo2DArray(res.data);
            let fileObject = {};

            convertedData.shift();
            convertedData.forEach((row) => {
                let id = row[0];

                row.shift();
                row.push(sendElement(id));
                row[1] = convertToMB(row[1]);

                fileObject.name = row[0];
                fileObject.size = row[1];

            });

            setData(convertedData);
            setFileDetails(fileObject);
        })
        .catch((err) => {
            alertbox({text: "Error retrieving files", type: "error"});
            console.log(err);
        }); 

    }
    

  const sendElement = (i) => {
    return (<button className="btn-oval pointer" value={i} onClick={(e) => sendSong(e)}> Send </button>);
  }

  const sendSong = (e) => {
    socketSend({"song_id": e.target.value});
  }

    return (
        <>
            <section id="publish">
                <h2>Manage</h2>
                <div className="publish-content">

                    <div className="publish-upload">
                        <h4>Upload Songs</h4>
                        <DragAndDropDiv name={fileDetails} retrieveUploadedFiles={RetrieveUploadedFiles}/>
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
                        />
                            
                    </div>
                </div>
            </section>
        </>
    );
}



export default Publish;
