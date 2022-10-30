import './Pages.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Alertbox from '../components/AlertBox/Alertbox';

function Home() {

    const [data, setData] = useState({content: null});


  async function get() {
    let url = await axios.get('http://localhost:8000/api/send/');
    console.log(url);
    setData({content: url.data})

  }


  useEffect(() => {
    axios.post('http://localhost:8000/api/send/', {data})
    .then((res) => {<Alertbox type="info" text={res}/>})
    .catch((err) => {<Alertbox type="error" text={err}/>})
  }, [])

  
  return (
    <>
      <main id='home' className="container">
        <div className="home-content">
          <button onClick={get} className="home-btn">Publish</button>
          <audio controls>
    </audio>
        </div>
      </main>
    </>
  );



}

export default Home;
