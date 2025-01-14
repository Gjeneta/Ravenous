import 'whatwg-fetch'

const Client_ID= "D6BkkqsvWvtnoPm43Rs5TQ"
const API_KEY= "n8SDCGZZC_U8HB8ao_NIEDvo-wzRON0CoGHHE0C6Bal7amj_ju3l6MhLEJ22Jjfz0OrlL2ZmrEy05bluyFuTrNY8u8h1IFBiYmdTq0oOZh7LZ3eaU5TnHgifL4SGZ3Yx"
const API_URL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search"

const data_api={
    
    run: async (searchTerm, location, sortBy) => {
        const url= `${API_URL}?term=${encodeURIComponent(searchTerm)}&location=${encodeURIComponent(location)}&sort_by=${encodeURIComponent(sortBy)}`;


        const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            mode: 'no-cors',
        },
        });

        // const data = await response.json();
        const data = await response.json();
        return data.businesses
        }

    };
 export default data_api;