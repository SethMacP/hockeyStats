import React from 'react'
import Spotlight from './Spotlight'
import Roster from './Roster'
import Teams from './Teams'
import Schedule from './Schedule'
import {
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	NavbarText
  } from 'reactstrap';

export const MainPage = () => {


    return(
        <div>
			<div>

      <Navbar color="primary" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler  />
          <Nav  navbar>
            <NavItem>
              {/* <NavLink href="/schedule/">Schedule</NavLink> */}
            </NavItem>
            <NavItem>
              <NavLink href="/mainPage">Rosters</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>MAJOR work in progress</NavbarText>
      </Navbar>


    </div>
		<div className = "siteContainer">
			<div className = "spotlightContainer">
				<Schedule/>
				
			<div className = "rosterContainer">
				
				
					</div>
				</div>
			<div className = "headerContainer">
			<Teams />
            <Spotlight />
			<Roster />
			</div> 
		</div>
</div>
    )
}

export default MainPage;