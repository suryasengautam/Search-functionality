import './App.css';
import data from './assets/MOCK_DATA.json'
import { useState } from 'react';

function App() {
  const [searchTerm,setSearchTerm] = useState('')

  return (
    <div className="App">
      <div>
        <input type='text' placeholder='Search' onChange = {e => {setSearchTerm(e.target.value)}} />
        {data.filter((val) => {
          if (searchTerm === ''){
            return val
          }
          else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
            return val
          }
        }).map((val, key) => {
          return (<div key={key}  className = 'user'>
            <p>{val.first_name}</p>
            </div>)
        })}
      </div>
    </div>
  );
}

export default App;
