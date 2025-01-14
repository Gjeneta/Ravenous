/* import logo from './logo.svg'; */
import './App.css';
import WebPage from './Business';

function App() {
  const example= {
    image: "https://cdn.shopify.com/s/files/1/0274/9503/9079/files/20220211142754-margherita-9920_5a73220e-4a1a-4d33-b38f-26e98e3cd986.jpg?v=1723650067?w=1024",
    name:"Pizza", 
    address:"adress",
    city:"Rome", 
    state:"Italy", 
    zipcode:"84933", 
    category:"Italian", 
    rating:4.5, 
    review_count: 987
  }

  let list = [];
  for (let i=0; i<12; i++){
      list.push({...example, id:i})
  };

  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <WebPage input_data={list}/>
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
