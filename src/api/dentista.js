import axios from "axios";


export const getDentistas = async () => {
    let response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data    
}

export const getDentistaById = async (id) => {
    try {
        let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        console.log(response.data);  
        return response.data
        
    } catch (error) {
        console.log(error)
    }
}      
