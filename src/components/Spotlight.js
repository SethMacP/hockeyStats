import React from 'react'
import {connect} from 'react-redux'
import { Jumbotron } from 'reactstrap';
import '../App.css'
export const Spotlight = ({spotlight}) => {

console.log("spotlight", spotlight)



    return (
        <>
            {spotlight && <Jumbotron color='primary'>
                <h1 className="display-3">{spotlight.fullName}</h1>
                <p>{spotlight.birthCountry}:   {spotlight.birthCity}, {spotlight.birthStateProvince}</p>
               
                <div className="spotlightBox0">

                    <div className="spotlightBox1">
                        <p className="lead">Birthday: {spotlight.birthDate}</p>
                        <p className="lead">Age: {spotlight.currentAge}</p>
                        <p className="lead">Height: {spotlight.height}</p>
                        <p className="lead">Weight: {spotlight.weight}</p>
                    </div>

                    <div className="spotlightBox2">
                    <p className="lead">Jersey #: {spotlight.primaryNumber}</p>
                    <p className="lead">Position: {spotlight.primaryPosition.name}</p>
                    <p className="lead">Role: {spotlight.primaryPosition.type}</p>
                    <p className="lead">
                        {spotlight.primaryPosition.type === "Goalie" ? "Catches: " : "Shoots: "}
                        {spotlight.shootsCatches}
                        
                        </p>
                    </div>




                </div>

                <hr className="my-2" />
                <p>{spotlight.currentTeam.name}</p>
               
                
            </Jumbotron>}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        spotlight: state.data.spotlight
    }
}

export default connect (mapStateToProps)(Spotlight);