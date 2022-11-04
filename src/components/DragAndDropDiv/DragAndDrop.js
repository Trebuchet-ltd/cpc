import { useState, useRef } from 'react';
import axios from 'axios'; /* axios is used to send POST request to server */
import "./DragAndDrop.css";
import { isAudio } from '../../utils';
import FileIcon from "../../assets/svg/file.svg";
import {alertbox} from "../AlertBox/Alertbox";
import {API_URL} from "../../constants";

/*---- Drag and Drop Container ----*/
const DragAndDropDiv = ({name, retrieveUploadedFiles}) => {

    // stores state of the drag and drop container
    const [dragActive, setDragActive] = useState(false);
    
    // reference to file input element
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

    function handleFile(files) {
        let selected = [];
        let totalSize = 0;

        //For restricting the length of the selected files to 5
        if (files.length >= 6) {
            alertbox({text: "Maximum of 5 files can be uploaded at a time", type: "error"});
            return;
        }

        for(let i=0; i<files.length; i++) {

            //For checking if the selected file is audio file or not
            if(!isAudio(files[i])) {
              alertbox({text: 'Not an audio file!!!', type: "error"});
              return;
            }

			console.log(name, files[i]);

			//For checking if the selected file is already in the database or not
			// if((files[i].name).toString in name) {
			// 	alertbox({text: 'File already exists!!!', type: "error"});
			// 	return 
			// }

			console.log(files[i].name, name);

            totalSize += files[i].size;

            //For restricting the total size of the selected files to 25MB
            //In Django maximum body request size is set to 25MB

            if(totalSize >= 26214400) {
                console.log("Total size exceeded[ > 25MB ]");
                alertbox({text: 'Total size exceeded[ > 25MB ]', type: "error"});
                break;
            }

            console.log(files[i].size, totalSize); //For debugging purposes


            if(selected.findIndex(f => f.name === files[i].name) === -1) {
                selected.push(files[i].name);
                const data = new FormData();
                data.append('file', files[i], files[i].name);
                data.append('name', files[i].name);
                data.append('size', files[i].size);
            
    
                /* sending post request */
           
                axios.post(API_URL + "api/", data, {
                    header: {
                        'Content-Type': 'multipart/form-data' //Content type of data being sent (necessary to send file)
                    }
                }).then((res) => {
					alertbox({text: 'File uploaded successfully', type: "success"});
                    retrieveUploadedFiles();
                }).catch( (err) => {
					alertbox({text: err, type: "error"});

                });
            }
        }

    }

    function onButtonClick() {
        inputRef.current.click();
    }
    
    
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

  export default DragAndDropDiv;