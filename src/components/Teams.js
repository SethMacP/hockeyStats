import React, {useEffect, useState} from 'react'
import {getTeams} from '../redux/actions/teamsActions'
import {connect} from 'react-redux'
import {Button} from 'reactstrap'
import '../Styles/teams.css'
import { getRoster } from '../redux/actions/rosterActions'



const Teams = ({isLoading, error, data, getTeams, getRoster}) => {

    useEffect(()=>{
        getTeams()
    },[])

    const [visible, setVisible] = useState(true)
    const toggle = () => setVisible(!visible);


    return (
    <>
        
       

        <div className="teamsContainer"> 

            <h4>Select Roster</h4>
            <div className="teamsMain">
                {data && data.map(team => (
                    
                    <Button 
                    className="teamButton"
                    outline 
                    onClick={()=>getRoster(team.id)}
                    key={team.id}> {team.name} </Button>
                    ))} 
            </div>

        </div>
        

    </>
    )
}

const mapStateToProps = (state) => {
   return{
       isLoading: state.isLoading,
        error: state.error,
        data: state.data.teams
    }

}

const mapDispatchToProps = {getTeams, getRoster}

export default connect(mapStateToProps, mapDispatchToProps) (Teams);