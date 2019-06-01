import React from 'react';
import './Nav.css'

const Nav = ({ routeChange }) => {
	return(
	<div className="sans-serif f7 ttu tracking">
		<nav>
			<ul>
				<li><a href="#" onClick={()=>{routeChange("civicengagement")}}>CEC - Civic Engagement Coalition</a>
					<ul>
						<li><a href="#" onClick={()=>{routeChange("elections")}}>Elections & Voting Info</a></li>
						<li><a href="#" onClick={()=>{routeChange("voterguides")}}>Voter Guides</a></li>
						<li><a href="#" onClick={()=>{routeChange("issues")}}>Learn About the Issues</a></li>
						<li><a href="#" onClick={()=>{routeChange("localgov")}}>How does Local Government Work?</a></li>
						<li><a href="#" onClick={()=>{routeChange("civicengagement")}}>Civic Engagement Opportunities</a></li>
					</ul>
				</li>
				<li><a href="#" onClick={()=>{routeChange("openmic")}}>BCOM - Bummer City Open Mic</a>
					<ul>
						<li><a href="#" onClick={()=>{routeChange("pastfeatures")}}>Past Features</a></li>
						<li><a href="#" onClick={()=>{routeChange("pictures")}}>Pictures</a></li>
					</ul>
				</li>
				<li><a href="#"onClick={()=>{routeChange("eventslist")}}>Events & Meetings</a></li>
				<li><a href="#" onClick={()=>{routeChange("houseshow")}}>House Show Theory & Practice</a></li>
				<li><a href="#" onClick={()=>{routeChange("bcbc")}}>BCBC - Bummer City Billiards Club</a></li>
				<li><a href="#" onClick={()=>{routeChange("bawg")}}>BAWG - Breakfast Archives Working Group</a></li>
				<li><a href="#" onClick={()=>{routeChange("waffleCaper")}}>The Great Waffle House Caper</a></li>
				<li><a href="#" onClick={()=>{routeChange("leg")}}>LEG (Literary, Lyric, Language // Exploration, Expression, Education // Group, Gang, Get-Together)</a></li>
				<li><a href="#" onClick={()=>{routeChange("mctheprofessor")}}>MCtheProfessor.GOV</a></li>
				<li><a href="#" onClick={()=>{routeChange("about")}}>About</a></li>
			</ul>
		</nav>
	</div>
	);
};

export default Nav;