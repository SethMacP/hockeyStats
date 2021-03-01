import axios from 'axios'

export const API = () => {
    axios.create({
        baseURL: "https://statsapi.web.nhl.com/api/v1",
        
    })
}


