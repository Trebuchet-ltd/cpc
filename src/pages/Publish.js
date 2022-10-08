//Importing libraries
import axios from 'axios'; /* axios is used to send POST request to server */
import { useState, useRef, useEffect } from 'react'; 

//Importing Components
import Table from '../components/Table/Table';

//Importing styles
import './Pages.css';
import '../styles/publish.css';

//Importing Images
import FileIcon from "../assets/svg/file.svg";


function Publish() {
    const [data, setData] = useState([]);

    useEffect(() => {
        RetrieveUploadedFiles();
    }, [])

    function handleFile(files) {
        let selected = [];
        let totalSize = 0;

        //For checking if the selected file is audio file or not
        if(!isSupported) {
            alert('File type not supported');
            return;
        }

        //For restricting the length of the selected files to 5
        if (files.length >= 6) {
            alert("Maximum of 5 files can be uploaded at a time");
            return;
        }

        for(let i=0; i<files.length; i++) {
            totalSize += files[i].size;

            //For restricting the total size of the selected files to 25MB
            //In Django maximum body request size is set to 25MB

            if(totalSize >= 26214400) {
                console.log("Total size exceeded");
                break;
            }

            console.log(files[i].size, totalSize);


            if(selected.findIndex(f => f.name === files[i].name) === -1) {
                selected.push(files[i].name);
                const data = new FormData();
                data.append('file', files[i], files[i].name);
                data.append('name', files[i].name);
                data.append('size', files[i].size);
            
                /* URL to which POST request is to be sent */
                let url = "http://localhost:8000/api/";
    
                /* sending post request */
           
                axios.post(url, data, {
                    header: {
                        'Content-Type': 'multipart/form-data' //Content type of data being sent (necessary to send file)
                    }
                }).then((res) => {
                    alert("File uploaded successfully");
                    RetrieveUploadedFiles();
                }).catch( (err) => {
                 console.log(err);

                });
            }
        }

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
        <input ref={inputRef} type="file" className="publish-fileinput" multiple={true} onChange={handleChange} accept="audio/*"/>
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

    
  async function RetrieveUploadedFiles()  {
    let url = "http://localhost:8000/api/";

    let response = await axios.get(url);

    console.log(response.data.length)
    JSONTo2DArray(response.data);
  }

  function JSONTo2DArray(json) {
    let arr = [];
    for(let i=0; i<json.length; i++) {
      arr.push([json[i].name, json[i].size, json[i].date_created]);
    }

    setData(arr);
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
                            content={data}
                            style="publish-table-style"
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


function isSupported(file) {
    const supportedTypes = ['audio/mp3', 'audio/mpeg', 'audio/wav', 'audio/ogg', 'audio/aac', 'audio/flac'];
    return supportedTypes.includes(file.type);
}
export default Publish;
