import React from 'react';

const Business= ({inst}) => {
    return(
        <div>
        <img src={inst.image}/>
        <h1>{inst.name}</h1> 
        <h1>{inst.address}</h1>
        <h1>{inst.city}</h1>
        <h1>{inst.state}</h1>
        <h1>{inst.zipcode}</h1>
        <h1>{inst.category}</h1>
        <h1>{inst.rating}</h1>
        <h1>{inst.review_count}</h1>
        </div>
    )

}



const BusinessList= ()=>{
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
    for (let i=0; i<10; i++){
        list.push(<Business inst={example}/>)
    };
    return (
        <div>{list}</div>
    );

}

export default BusinessList;