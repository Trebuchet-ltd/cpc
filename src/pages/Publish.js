//Importing libraries
import axios from 'axios'; /* axios is used to send POST request to server */
import { useState, useRef } from 'react'; 

//Importing Components
import Table from '../components/Table/Table';

//Importing styles
import './Pages.css';
import '../styles/publish.css';

//Importing Images
import FileIcon from "../assets/svg/file.svg";


function Publish() {
    const [file, setFile] = useState({selectedFile: null});

    // const {width, setWidth} = useContext(UserContext);
    
    const submit = async (e) => {
        e.preventDefault(); //Prevents page from reloading (Default behaviour of form)

        const data = new FormData() 

        data.append('file', file.selectedFile, file.selectedFile.name)
        data.append('name', 'test')

        /* URL to which POST request is to be sent */
        let url = "http://localhost:8000/api/";
 
        /* sending post request */
        axios.post(url, data, {
            header: {
                'Content-Type': 'multipart/form-data' //Content type of data being sent (necessary to send file)
            }
        })
        .then(res => { 
            console.warn(res);
        })
        .catch(err => console.log(err))
    }

    const handleChange = (e) => {
        //Setting selected file to state 
        setFile({selectedFile: e.target.files[0]});
    }

    return (
        <>
            <section id="publish">
                <h2>Manage</h2>
                <div className="publish-content">

                    <div className="publish-upload">
                        <h4>Upload Songs</h4>
                        <FileUploadDiv/>
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
                            content={[["Drake.mp3", "mp3", "Accepted"],
                            ["Drake.mp3", "mp3", "Accepted"]]}/>
                    </div>

                    <div className="publish-list">

                    </div>

                </div>
                {/* <h1>{file.name}</h1>
                <input type="file" onChange={handleChange}/>
                <button onClick={submit}>Upload to Server</button> */}
            </section>

        </>
    );
}

function handleFile(files) {
    alert("Number of files: " + files.length);
  }
  
  
  // drag drop file component
function FileUploadDiv() {
    // drag state
    const [dragActive, setDragActive] = useState(false);
    // ref
    const inputRef = useRef(null);
    
    // handle drag events
    const handleDrag = function(e) {
      e.preventDefault();
      e.stopPropagation();

      if (e.type === "dragenter" || e.type === "dragover") {
        setDragActive(true);
      } 
      
      else if (e.type === "dragleave") {
        setDragActive(false);
      }
    };
    
    // triggers when file is dropped
    const handleDrop = function(e) {
      e.preventDefault();
      e.stopPropagation();

      setDragActive(false);

      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleFile(e.dataTransfer.files);
      }
    };
    
    // triggers when file is selected with click
    const handleChange = function(e) {
      e.preventDefault();
      if (e.target.files && e.target.files[0]) {
        handleFile(e.target.files);
      }
    };
    
  // triggers the input when the button is clicked
    const onButtonClick = () => {
      inputRef.current.click();
    };
    
    return (
      <form className="publish-fileupload-form" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
        <input ref={inputRef} type="file" className="publish-fileinput" multiple={true} onChange={handleChange} />
        <label id="publish-input-label" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
          <div>
            <img src={FileIcon} alt=""/>
            <p className="sub-head">Drag and drop playlists, files or</p>
            <p>Supports all audio formats</p>
            <button className="upload-button" onClick={onButtonClick}>Upload a file</button>
          </div> 
        </label>
        { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
      </form>
    );
  };

export default Publish;
