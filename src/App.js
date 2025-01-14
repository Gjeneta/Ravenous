/* import logo from './logo.svg'; */
import './App.css';
import WebPage from './Business';
import data_api from './utils/Yelp';
import {useState} from 'react';

function App() {
  const [list, setList] = useState([]); 

  const example= {
    image_url: "https://cdn.shopify.com/s/files/1/0274/9503/9079/files/20220211142754-margherita-9920_5a73220e-4a1a-4d33-b38f-26e98e3cd986.jpg?v=1723650067?w=1024",
    name:"Pizza", 
    location:{
      address1:"adress",
      city:"Rome",
      state:"Italy", 
      zip_code:"84933"
    },
    categories:[{title:"Italian"}], 
    rating:4.5, 
    review_count: 987
  }

  let list_old = [];
  for (let i=0; i<12; i++){
      list_old.push({...example, id:i})
  };
  const fetchResult = (food, place, sortby) => {
    const data_agent = Object.create(data_api)
    data_agent.run(food, place, sortby).then(temp => {
        // Assigning the resolved data to a new variable
        const list = temp; 
        console.log(`new: `,list); // Logs the data assigned to the new variable
        setList(temp)
      })
  }
  // const data_agent = Object.create(data_api)
  // data_agent.run("Sushi", "San Francisco", "rating").then(temp => {
  //   // Assigning the resolved data to a new variable
  //   const list = temp; 
  //   console.log(`new: `,list); // Logs the data assigned to the new variable
  //   setList(temp)
  // })
  // console.log(`old: `, list_old)
  
  return (
    <div className="App" on>
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <WebPage input_data={list} on_search={fetchResult}/>
        {/*<p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
      </header>
    </div>
  );
}

export default App;
