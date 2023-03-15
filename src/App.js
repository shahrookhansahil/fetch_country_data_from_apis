import './App.css';
import Header from './Components/Header';
import Elements from './Components/Elements';
import { useState, useEffect } from 'react';

function App() {
  const [data ,setData] = useState([]);
  useEffect(()=>{
    const fetchData = () =>{
      fetch('https://restcountries.com/v2/all?fields=name,region,area') //Fetching data from given Api
      .then(response =>response.json())
      .then(json => setData(json))
      .catch(error=>{
        console.log("Error", error)
      })
    }
    fetchData();
  },[])
  const filter_by_Oceania = () => {
    const filtered = data.filter(function(element){
      return element.region=="Oceania";
  });
    setData(filtered);
  };
  const filter_by_Lithuania = () => {
    const filtered = data
    .filter(function(element){
      return element.area<=65300;
    });
    setData(filtered);    
  };

  //Sort Function used to sort Data By Name
  const Sort_Data = () => {
    const sorted = data.slice().reverse()  //slice() operation clones the array and returns a reference to a new array
    setData(sorted);
  };
  
  return (
    <div className="App">
      <Header/>
      <button onClick={filter_by_Oceania}>Oceania </button>
      <button onClick={filter_by_Lithuania}>Smaller than Lithuania</button>
      <button id='srch' onClick={Sort_Data}>Sort</button>
      <div className='main'>
        {
          data  
          .map((element, index) =>{
            return(
              <Elements 
                key={index}
                name = {element.name}
                region = {element.region}
                area = {element.area}
                /> 
            )
          })
        }
        
      </div>
    </div>
  );
}
export default App;