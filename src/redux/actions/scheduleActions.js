import axios from 'axios'
export const GET_SCHEDULE_START = "GET_SCHEDULE_START"
export const GET_SCHEDULE_SUCCESS = "GET_SCHEDULE_SUCCESS"
export const GET_SCHEDULE_FAILURE = "GET_SCHEDULE_FAILURE"


export const getTodaySchedule = () => (dispatch) => {
    dispatch({type:GET_SCHEDULE_START})
    axios.get(`https://statsapi.web.nhl.com/api/v1/schedule`)
        .then(res=>{
            console.log(res)
            dispatch({type:GET_SCHEDULE_SUCCESS, payload: res.data.dates[0].games})
        })
        .catch(err=>{
            console.log(err)
            dispatch({type:GET_SCHEDULE_FAILURE, payload: err})
        })
}