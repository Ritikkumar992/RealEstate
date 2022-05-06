//  to import our apis we use axios:

import axios from "axios";
export const baseUrl = "https://bayut.p.rapidapi.com"

//  copy and paste from the bayut api code snippet:
// headers: {
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
//     'X-RapidAPI-Key': 'c4b13cf282mshee97c9524e093fep190015jsn56d9256ae971'
// }
export const fetchApi = async(url) =>{
    const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'c4b13cf282mshee97c9524e093fep190015jsn56d9256ae971'
        }
    });
    return data;
}