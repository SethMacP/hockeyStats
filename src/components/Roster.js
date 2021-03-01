import React, { useEffect } from 'react'
import {getRoster, activateSpotlight} from '../redux/actions/rosterActions'
import {connect} from 'react-redux'
import {Table, Button} from 'reactstrap'
import { getCurrentTeamStats } from '../redux/actions/teamsActions'
// import PlayerCard from './PlayerCard'



const Roster = ({isLoading, error, roster, spotlight, getRoster, activateSpotlight, getCurrentTeamStats}) => {

    useEffect(()=>{
        getRoster(54);
        
    },[])

    // useEffect(() => {
    //     window.scrollTo(0, 0)
    //   }, [{activateSpotlight}])
console.log('spotlight: ',spotlight)


    return (
    <>
        
        
        <div className="playerContainer"> 
            <div className="rosterHeader">
                <h4> Roster</h4>
                </div>
            <div className="rosterMain">
                <Table   hover>
                    <thead>
                        <tr>
                        <th>Pos.</th>
                        <th>Name</th>
                        {/* <th>Position</th> */}
                        <th>Jersey #</th>
                        <th>Spotlight</th>
                        </tr>
                    </thead>
                    <tbody>

                    {roster && roster.map(player => (
                        <tr key = {player.person.id}>
                            <th scope="row">{player.position.code}</th>
                            <td> {player.jerseyNumber}</td>
                            <td> {player.person.fullName}</td>
                            {/* <td> {player.position.name}</td> */}
                            <td> <Button color="primary" size="sm"
                                onClick={()=>{activateSpotlight(player.person.link)}}>
                                Activate</Button></td>
                        </tr>
                        ))} 
                    
                    </tbody>
                </Table>
            </div>
        </div>
        
    </>
    )
}

const mapStateToProps = (state) => {
   return{
       isLoading: state.isLoading,
        error: state.error,
        roster: state.data.roster,
        spotlight: state.data.spotlight
    }

}

const mapDispatchToProps = {getRoster, activateSpotlight, getCurrentTeamStats}

export default connect(mapStateToProps, mapDispatchToProps) (Roster);