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


const Publish = () =>  {
    const [data, setData] = useState([]);
    const [name, setName] = useState([]);

    useEffect(() => {
        RetrieveUploadedFiles()
    }, [])

    async function RetrieveUploadedFiles()  {
        // let names = [];
        await axios.get(API_URL + "api/")
        .then((res) => {
            let convertedData = JSONTo2DArray(res.data);
            let names = [];

            convertedData.shift();
            convertedData.forEach((row, index) => {
                row.push(sendElement(index))
                row[1] = convertToMB(row[1]);
                names.push(row[0]);
            })

            setData(convertedData);
            setName(names);

        })
        .catch((err) => {
            console.log(err);
        });


        // let str = "";
        


        
        // for(let i = 0; i < response.data.length; i++) {
        //     str = response.data[i].name.replace(/\s+/g, '_');
        //     names.push(str);
        // }

    }
    

  function sendElement(i) {
    return (<button onClick={() => sendSong(i)}>Send</button>);
  }

  function sendSong(i) {
    axios.post(API_URL + "api/send/", name[i], {
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
                        <DragAndDropDiv name={name} retrieveUploadedFiles={RetrieveUploadedFiles}/>
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
