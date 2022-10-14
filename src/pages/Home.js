import './Pages.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

function Home() {

    const [data, setData] = useState({content: null});


  async function get() {
    let url = await axios.get('http://localhost:8000/api/send/');
    console.log(url);
    setData({content: url.data})

  }


  useEffect(() => {

  }, [data])

  
  return (
    <>
      <main id='home' className="container">
        <div className="home-content">
          <button onClick={get} className="home-btn">Publish</button>
          <audio controls>
      <source src="https://foo.com/foo.mp3/" type="audio/mpeg"/>
    </audio>
        </div>
      </main>
    </>
  );



}

export default Home;
