import {GET_ROSTER_START, GET_ROSTER_SUCCESS, GET_ROSTER_FAILURE, ACTIVATE_SPOTLIGHT_START, ACTIVATE_SPOTLIGHT_SUCCESS, ACTIVATE_SPOTLIGHT_FAILURE} from '../actions/rosterActions'
import { GET_SCHEDULE_FAILURE, GET_SCHEDULE_START, GET_SCHEDULE_SUCCESS } from '../actions/scheduleActions'
import {GET_TEAMS_START, GET_TEAMS_SUCCESS, GET_TEAMS_FAILURE,
    CURRENT_TEAM_STATS_START,CURRENT_TEAM_STATS_SUCCESS, CURRENT_TEAM_STATS_FAILURE} from '../actions/teamsActions'


const initialState = {
    isLoading: false,
    error: "",
    data: {}
}

export const initialReducer = (state = initialState , action) => {
    switch(action.type){
        case GET_ROSTER_START:
            return {
                ...state,
                isLoading: true
                
            }
        case GET_ROSTER_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                data: {...state.data, 
                    roster: action.payload.data.roster
                    }
            }
        case GET_ROSTER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        //NEXT ACTION
        case GET_TEAMS_START:
            return{
                ...state,
                isLoading: true,
                }
        case GET_TEAMS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: {...state.data,
                    teams:action.payload.teams}
            }
        case GET_TEAMS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case ACTIVATE_SPOTLIGHT_START:
            return{
                ...state,
                isLoading: true,
            }
        case ACTIVATE_SPOTLIGHT_SUCCESS:
            return{
                ...state,
                isLoading: false,
                data: {...state.data,
                    spotlight: action.payload}
            }
        case ACTIVATE_SPOTLIGHT_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        case CURRENT_TEAM_STATS_START:
            return{
                ...state,
                isLoading: true
            }
        case CURRENT_TEAM_STATS_SUCCESS:
            return{
                ...state,
                isLoading: false,
                data: {
                    ...state.data,
                    currentTeam:{
                        ...state.data.currentTeam,
                        stats:action.payload
                    }
                }
            }
        case CURRENT_TEAM_STATS_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        case GET_SCHEDULE_START:
            return{
                ...state,
                isLoading: true,
            }
        case GET_SCHEDULE_SUCCESS:
            return{
                ...state,
                isLoading: false,
                data:{
                    ...state.data,
                    schedule: action.payload
                }
            }
        case GET_SCHEDULE_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}
