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
        <button onClick={ () => fetchData("party") }>Party</button>
        <button onClick={ () => fetchData("family") }>Family</button>
        <button onClick={ () => fetchData("office") }>Office</button>
      </div>
      { data && (
        <div className='excuse'>
          <h2>{ data }</h2>
        </div>
      ) }
    </div>
  )
}

export default App
