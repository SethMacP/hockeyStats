import axios from 'axios'


export const GET_ROSTER_START = "GET_ROSTER_START"
export const GET_ROSTER_SUCCESS = "GET_ROSTER_SUCCESS"
export const GET_ROSTER_FAILURE = "GET_ROSTER_FAILURE"

export const ACTIVATE_SPOTLIGHT_START = "GET_SPOTLIGHT_START"
export const ACTIVATE_SPOTLIGHT_SUCCESS = "GET_SPOTLIGHT_SUCCESS"
export const ACTIVATE_SPOTLIGHT_FAILURE = "GET_SPOTLIGHT_FAILURE"

const headers = {
    Accept: "application/json"
}


export const activateSpotlight = (link) => (dispatch) => {
    dispatch({type: ACTIVATE_SPOTLIGHT_START})

    axios
        .get(`https://statsapi.web.nhl.com${link}`, {headers:headers})
        .then( res => {
            dispatch({type: ACTIVATE_SPOTLIGHT_SUCCESS, payload: res.data.people[0]})
        })
        .catch( err => {
            dispatch({type: ACTIVATE_SPOTLIGHT_FAILURE, payload: err})
        })
}









export const getRoster = (teamId) => (dispatch) => {
    
    dispatch ({type: GET_ROSTER_START})
    
    axios
        .get(`https://statsapi.web.nhl.com/api/v1/teams/${teamId}/roster`,  {headers: headers})
        .then( res => {
            dispatch({type: GET_ROSTER_SUCCESS, payload: res})
            console.log(res)
        })
        .catch( err => {
            dispatch({type: GET_ROSTER_FAILURE, payload: err})
            console.log(err)
        })
}