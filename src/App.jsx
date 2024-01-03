import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [data, setData] = useState("");

  const fetchData = (userOption) => {
    axios.get(`https://excuser-three.vercel.app/v1/excuse/${userOption}`)
      .then(res => setData(res.data[0].excuse));
  }

  console.log(data);
  return (
    <div className='app'>
      <h1>Click any button</h1>
      <div className='buttons'>
        <button className='btn' onClick={ () => fetchData("party") }>Party</button>
        <button className='btn' onClick={ () => fetchData("family") }>Family</button>
        <button className='btn' onClick={ () => fetchData("office") }>Office</button>
      </div>
      { data && (
        <div className='excuse'>
          <p className='excuse-result'>{ data }</p>
        </div>
      ) }
    </div>
  )
}

export default App
