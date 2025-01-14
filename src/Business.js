import React, {useState} from 'react';
import styles from './Business_style.module.css'; 


const Business= ({inst}) => {
    return(
        <div className={styles.business}>
        <img src={inst.image_url}/> 
        <h3>{inst.name}</h3> 
        <h5>{inst.location.address1}</h5>
        <h5>{inst.location.city}</h5>
        <h5>{inst.location.state} {inst.location.zip_code}</h5>
        <h7>{inst.categories && inst.categories.length > 0 ? inst.categories[0].title : "No category available"}</h7>
        <h6>{inst.rating + " stars"}</h6>
        <h5>{inst.review_count + " reviews"}</h5>
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
        list.push(<Business inst={input_data[i]} key={input_data[i].id}/>)
    };
    return (
        <div className={styles.business_list}>{list}</div>
    );

}

const sortByOptions = {
    "Best Match":"distance",
    "Highest Rated":"rating",
    "Most Reviewed":"review_count",
};




const SearchBar = ({onSearch}) => {
    const [userInput, setUserInput] = useState(" ");
    const [location, setLocation] = useState(" ");
    const [sortingOption, setSortingOption] = useState("Best Match");
    
    const handleChangeInput = ({target}) => setUserInput(target.value);
    const handleChangeLocation = ({target}) => setLocation(target.value);
    const handleChangeSort= (option) => setSortingOption(option);

    const handleSubmit=() => {
        const sort_by = sortByOptions[sortingOption];
        console.log(`Searching Yelp with ${userInput}, ${location}, ${sort_by}`)
        const query = `term=${userInput}&location=${location}&sort_by=${sortingOption}`;
        console.log("API query:", query);  // Log the final query being sent
        
        onSearch(userInput, location, sort_by)
      }

    return (
        <div className={styles.search_bar}>
        <ul className={styles.search_options}>
                {Object.keys(sortByOptions).map(x=> {
                    return(
                    <li className={sortingOption === x? styles.li_active:styles.li_inactive} key ={x}  onClick={()=>handleChangeSort(x)}> {x} </li>
                )}
                )}
            </ul>    
        <input className={styles.search_input_left} type='text' placeholder='Search Businesses' onChange={handleChangeInput}/>
        <input className={styles.search_input_right} type='text' placeholder='Where?' onChange={handleChangeLocation}/> 
        <button className={styles.search_button} type='button' onClick ={handleSubmit}>Let`s Go</button>  
        </div>
    )
}



const WebPage= ({input_data, on_search}) => {
    return (
        <div>
        <SearchBar onSearch={on_search}/>
        <BusinessList input_data={input_data}/>
        </div>
    )
}

export default WebPage;