//Importing libraries
import { useState } from 'react'; 
import DragAndDropDiv from "../components/DragAndDropDiv/DragAndDrop";


//Importing Components
import Table from '../components/Table/Table';

//Importing styles
import './Pages.css';
import '../styles/publish.css';




function Publish() {
    const [data, setData] = useState([]);

    return (
        <>
            <section id="publish">
                <h2>Manage</h2>
                <div className="publish-content">

                    <div className="publish-upload">
                        <h4>Upload Songs</h4>
                        <DragAndDropDiv data={data} setData={setData}/>
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
                            head={["Name", "Format", "Status"]}
                            content={data}
                            customStyle={"publish-table-style"}
                            />

                            
                    </div>

                    <div className="publish-list">
                        <h4>My Playlist</h4>
                        <Table head={["Songs", "Level"]} content={[["Drake.mp3", "mp3"]]}/>
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
