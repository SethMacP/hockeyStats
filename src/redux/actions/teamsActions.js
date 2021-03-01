import axios from 'axios'
import {API} from '../../utils/API'

const headers = {
    Accept: "application/json"
}


export const GET_TEAMS_START = "GET_TEAMS_START"
export const GET_TEAMS_SUCCESS = "GET_TEAMS_SUCCESS"
export const GET_TEAMS_FAILURE = "GET_TEAMS_FAILURE"

export const CURRENT_TEAM_STATS_START = "CURRENT_TEAM_STATS_START"
export const CURRENT_TEAM_STATS_SUCCESS = "CURRENT_TEAM_STATS_SUCCESS"
export const CURRENT_TEAM_STATS_FAILURE = "CURRENT_TEAM_STATS_FAILURE"

export const getTeams = () => (dispatch) => {
    dispatch({type: GET_TEAMS_START})

    axios.get("https://statsapi.web.nhl.com/api/v1/teams", {headers: headers})
            .then( res => {
                console.log('res',res)
                dispatch({type:GET_TEAMS_SUCCESS, payload: res.data})
            })
            .catch(err => {
                console.log(err)
                dispatch({type:GET_TEAMS_FAILURE, payload: err})
            })


}

export const getCurrentTeamStats = () => (dispatch) => {
    dispatch({type:CURRENT_TEAM_STATS_START})
    axios.get("https://statsapi.web.nhl.com/api/v1/teams/54/stats")
        .then(res=>{
            console.log(res)
            dispatch({type:CURRENT_TEAM_STATS_SUCCESS, payload: res.data})
        })
        .catch(err=>{
            console.log(err)
            dispatch({type:CURRENT_TEAM_STATS_FAILURE, payload: err})
        })
}
