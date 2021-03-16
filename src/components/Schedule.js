import React, { useEffect } from 'react';
import '../Styles/schedule.css'
import {Table} from 'reactstrap'
import {getTodaySchedule} from '../redux/actions/scheduleActions'
import {connect} from 'react-redux'



export const Schedule = ({schedule,getTodaySchedule}) => {

    useEffect(()=>{
        getTodaySchedule();
        
    },[Schedule])


    const formatTime = (gameString) => {
        // const noTTime = gameString.split("T")[1]
        // const noZTime = noTTime.split("Z")[0]
        // const noCTime = noZTime.split(":")
        const newTime = gameString.slice(11,19).split(':')
        const pst = parseInt(newTime[0])+16;
        const finalTime = (pst)+":"+(newTime[1])
        return (finalTime)
    }

   
    


    const gameStatus = ( gameState ) => {
        //takes in games status and returns specified sting
        let status = gameState;
        if (status === 'Preview'){
            status = 'Not Started'
        }
        return status;
    }
 
    return(
    <>   
    <div className="container">
        <h4>Today's Games</h4>
        <Table hover >
            <thead >
                <tr>
                    <th>Time</th>
                    <th>Away</th>
                    <th>Home</th>
                    {/* <th>Venue</th> */}
                    <th>Status</th>
                </tr>
            </thead>
                {(schedule && schedule.map(
                    game=>(
                        
                        <tbody>
                        <th>{formatTime(game.gameDate)}</th>
                        <th>{game.teams.away.team.name}</th>
                        <th>@{game.teams.home.team.name}</th>
                        {/* <th>{game.venue.name}</th> */}
                        <th>{gameStatus(game.status.abstractGameState)}</th>
            </tbody>
                        
                )
                ))}
        </Table>
    </div>
    </>
    )
}

const mapStateToProps = (state)=>{
    return {
        schedule: state.data.schedule
    }
}
const mapDispatchToProps ={getTodaySchedule}


export default connect( mapStateToProps , mapDispatchToProps )(Schedule)




// {schedule && schedule.map(game=>(
//     <div className="gameHolder" key={game.gamePk}>
//         <div className="teamsHolder">
//             <div className="teamHolder">
//                 <p>{game.teams.away.team.name}</p>
//                 <p>[ {game.teams.away.leagueRecord.wins}-{game.teams.away.leagueRecord.losses}-{game.teams.away.leagueRecord.ot} ]</p>
//                 </div>
//             <div className="teamHolder">
//                 <p key={game.gamePk}> {game.teams.home.team.name}</p>
//                 <p>[ {game.teams.home.leagueRecord.wins}-{game.teams.home.leagueRecord.losses}-{game.teams.away.leagueRecord.ot} ]</p>
//                 </div>
//             </div>
//             <div className="detailHolder">
//                 <p>  Venue: {game.venue.name} </p>
//                 <p>Status: {game.status.abstractGameState}</p>
//                 <p>Start Time: {formatTime(game.gameDate)}</p>
//             </div>
//     </div>
// ))}