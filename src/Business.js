import React, {useState} from 'react';
import styles from './Business_style.module.css'; 


const Business= ({inst}) => {
    return(
        <div className={styles.business}>
        <img src={inst.image}/> 
        <h3>{inst.name}</h3> 
        <h5>{inst.address}</h5>
        <h5>{inst.city}</h5>
        <h5>{inst.state} {inst.zipcode}</h5>
        <h5>{inst.category}</h5>
        <h5>{inst.rating}</h5>
        <h5>{inst.review_count}</h5>
        </div>
    )

}



const BusinessList= ({input_data})=>{
    // const example= {
    //     image: "https://cdn.shopify.com/s/files/1/0274/9503/9079/files/20220211142754-margherita-9920_5a73220e-4a1a-4d33-b38f-26e98e3cd986.jpg?v=1723650067?w=1024",
    //     name:"Pizza", 
    //     address:"adress",
    //     city:"Rome", 
    //     state:"Italy", 
    //     zipcode:"84933", 
    //     category:"Italian", 
    //     rating:4.5, 
    //     review_count: 987
    // }

    let list = [];
    for (let i=0; i<input_data.length; i++){
        list.push(<Business inst={input_data[i]}/>)
    };
    return (
        <div className={styles.business_list}>{list}</div>
    );

}

const sortByOptions = [
    "Best Match",
    "Highest Rated",
    "Most Reviewed",
];




const SearchBar = () => {
    const [userInput, setUserInput] = useState(" ");
    const [location, setLocation] = useState("");
    const [sortingOption, setSortingOption] = useState("");
    
    const handleChangeInput = ({target}) => setUserInput(target.value);
    const handleChangeLocation = ({target}) => setLocation(target.value);
    const handleChangeSort= ({target}) => setSortingOption(target.value);

    return (
        <div className={styles.search_bar}>
        <ul className={styles.search_options}>
                {sortByOptions.map(x=> {
                    return(
                    <li key ={x} on onClick={handleChangeSort}> {x} </li>
                )}
                )}
            </ul>    
        <input className={styles.search_input_left} type='text' placeholder='Search Businesses' />
        <input className={styles.search_input_right} type='text' placeholder='Where?' /> 
        <button className={styles.search_button} type='button'>Let`s Go</button>  
        </div>
    )
}



const WebPage= ({input_data}) => {
    return (
        <div>
        <SearchBar/>
        <BusinessList input_data={input_data}/>
        </div>
    )
}

export default WebPage;