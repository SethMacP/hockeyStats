import './App.css';
import React, { useEffect } from 'react'
// import {connect} from 'react-redux'
import Roster from './components/Roster'
import Teams from './components/Teams'
import Spotlight from './components/Spotlight'
import MainPage from './components/MainPage'
import LandingPage from './components/LandingPage'
import Schedule from './components/Schedule'
import {BrowserRouter as Router, Route} from 'react-router-dom'
//temporary imports






function App() {

	



return (
	<Router>
		<Route exact path="/" component={MainPage} />
		{/* <Route exact path="/mainPage" component={MainPage}/>
		<Route exact path="/schedule" component={Schedule}/> */}

			

	</Router>


);
}


export default App;
