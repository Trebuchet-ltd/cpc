import axios from 'axios';
import { useState } from 'react';
import './Pages.css';

function Publish() {
    // const [state, setState] = useState(0);
    const [file, setFile] = useState({selectedFile: null});
    
    const submit = async (e) => {
        e.preventDefault();

        const data = new FormData() 

        data.append('file', file.selectedFile, file.selectedFile.name)
        data.append('name', 'test')

        let url = "http://localhost:8000/api/";
 
        axios.post(url, data, { // receive two parameter endpoint url ,form data 
            header: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => { // then print response status
            console.warn(res);
        })
        .catch(err => console.log(err))
    }

    const handleChange = (e) => {
        console.log(e.target.files[0]);
        setFile({selectedFile: e.target.files[0]});
    }

    return (
        <>
            <main id='publish' className="container">
                <div className="publish-content">
                    <h1>{file.name}</h1>
                    <input type="file" onChange={handleChange}/>
                    <button onClick={submit}>Upload to Server</button>
                </div>
            </main>
        </>
    );
}

export default Publish;
