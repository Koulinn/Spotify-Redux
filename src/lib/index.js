import axios from "axios";
const { request } = axios

const getFromDeezerRapid = async (search) => {
    let options = {
        method: 'GET',
        url: process.env.REACT_APP_DEEZER_ENDPOINT_SEARCH,
        params: { q: search },
        headers: {
            'x-rapidapi-host': process.env.REACT_APP_DEEZER_HOST,
            'x-rapidapi-key': process.env.REACT_APP_DEEZER_KEY
        }
    };

    try {

        const response = await request(options)
        console.log(response.data)
        return response.data.data
    } catch (error) {
        console.log(error)
    }



}


const requests = {
    getFromDeezerRapid:getFromDeezerRapid
}

export default requests