import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Show, Nav, Hero } from './components/';

function App() {

  const [data, setdata] = useState([]);
  // const [showdata, setshowdata] = useState([]);
  const [clientId, setclientId] = useState(
    "0_NbVCNnwR6AsFVIEwlSzh2_c4dJEf8sY47ZN0KascI"
  );

  useEffect(() => {
    const url = "https://api.unsplash.com/photos?page=1&client_id=" + clientId;
    axios.get(url).then((res) => setdata(res));
  }, []);
  return (
    <div className="App">
      <div className="navi">
          <Nav />
        </div>
        <div className='simple'>
          <Hero />
        </div>
        {/* <div className="show">
            <Show photo={Show} />
        </div> */}
        <div className="show">
          {data !== undefined ? <Show photo={data} id = {clientId}/>: null }
        </div>
  </div>
  );
}

export default App;
