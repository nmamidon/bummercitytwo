import React from 'react';
import Card from './Card';
import CardData from '../data/CardData'
//and now I'm gonna hack some stuff together in order to get the information up, and we'll go from here wooh
import Matt from '../img/matt.jpg'
import MattFam from '../img/civic_engagement_and_matt.jpg'
import Bawg from '../img/bawg-printed-everything.jpg'
import Kona from '../img/kona.jpg'
import Wafflecaper from '../img/wafflecaper.jpg'
import Mcproffy from '../img/mcproffy1.jpg'
import Marty from '../img/marty_and_fam.jpg'
import Lou from '../img/jimmy_and_lou.jpg'
import Cheeseboys from '../img/cheese_boys_open_mic.jpg'
import Legsnacks from '../img/leg/legsnacks.jpeg'
import Bcbcamanda from '../img/bcbc/bcbcamanda.jpg'
import Abouttile from '../img/wafflecaper/waffleinside.jpg';

const CardList = ({ routeChange }) => {

	// return (
	// 	<div className="flex flex-wrap justify-center">
	// 		{CardData.cards.map((item, index)=>{
	// 			return (
	// 				<Card body={item.body} title={item.title} picture={item.picture} picturealt={"didn't work"}/>
	// 			)
	// 		})}
	// 	</div>
	// );

	return (

		<div className="">
			<div class="mw9 center ph3-ns">
			  <div class="cf ph2-ns">
			    <div class="fl w-100 w-50-ns">
				    <div className="ba b--moon-gray br4">
						<img src={Marty} alt="didn't work" className="br2"/>
						<h2 className="baskerville tc"><a href="#" onClick={()=>{routeChange("civicengagement")}}>Civic Engagement Coalition</a></h2>
						<ul className="list">
							<li><a href="#" onClick={()=>{routeChange("upcomingcecevents")}}>Upcoming Events</a></li>
							<li><a href="#" onClick={()=>{routeChange("elections")}}>Elections & Voting Info</a></li>
							<li><a href="#" onClick={()=>{routeChange("voterguides")}}>Voter Guides</a></li>
							<li><a href="#" onClick={()=>{routeChange("issues")}}>Learn About the Issues</a></li>
							<li><a href="#" onClick={()=>{routeChange("localgov")}}>How does Local Government Work?</a></li>
							<li><a href="#" onClick={()=>{routeChange("civicengagement")}}>Civic Engagement Opportunities</a></li>
						</ul>
					</div>
			    </div>
			    <div class="fl w-100 w-50-ns pa2">
			        <div className="ba b--moon-gray br4">
						<img src={Cheeseboys} alt="didn't work" className="br2"/>
						<h2 className="baskerville tc"><a href="#" onClick={()=>{routeChange("openmic")}}>Bummer City Open Mic</a></h2>
					</div>
			    </div>
			    <div class="fl w-100 w-50-ns pa2">
			        <div className="ba b--moon-gray br4">
						<img src={MattFam} alt="didn't work" className="br2"/>
						<h2 className="baskerville tc"><a href="#"onClick={()=>{routeChange("eventslist")}}>Events & Meetings</a></h2>
					</div>
			    </div>
			    <div class="fl w-100 w-50-ns pa2">
			        <div className="ba b--moon-gray br4">
						<img src={Lou} alt="didn't work" className="br2"/>
						<h2 className="baskerville tc"><a href="#" onClick={()=>{routeChange("houseshow")}}>House Show Theory & Practice</a></h2>
					</div>
			    </div>
			    <div class="fl w-100 w-50-ns pa2">
			        <div className="ba b--moon-gray br4">
						<img src={Bcbcamanda} alt="didn't work" className="br2"/>
						<h2 className="baskerville tc"><a href="#" onClick={()=>{routeChange("bcbc")}}>Bummer City Billiards Club</a></h2>
					</div>
			    </div>
			    <div class="fl w-100 w-50-ns pa2">
			        <div className="ba b--moon-gray br4">
						<img src={Bawg} alt="didn't work" className="br2"/>
						<h2 className="baskerville tc"><a href="#" onClick={()=>{routeChange("bawg")}}>Breakfast Archives Working Group</a></h2>
					</div>
			    </div>
			    <div class="fl w-100 w-50-ns pa2">
			        <div className="ba b--moon-gray br4">
						<img src={Wafflecaper} alt="didn't work" className="br2"/>
						<h2 className="baskerville tc"><a href="#" onClick={()=>{routeChange("waffleCaper")}}>The Great Waffle House Caper</a></h2>
					</div>
			    </div>
			    <div class="fl w-100 w-50-ns pa2">
			        <div className="ba b--moon-gray br4">
						<img src={Legsnacks} alt="didn't work" className="br2"/>
						<h2 className="baskerville tc"><a href="#" onClick={()=>{routeChange("leg")}}>LEG (Literary, Lyric, Language // Exploration, Expression, Education // Group, Gang, Get-Together)</a></h2>
					</div>
			    </div>
			    <div class="fl w-100 w-50-ns pa2">
			        <div className="ba b--moon-gray br4">
						<img src={Mcproffy} alt="didn't work" className="br2"/>
						<h2 className="baskerville tc"><a href="#" onClick={()=>{routeChange("mctheprofessor")}}>MCtheProfessor.GOV</a></h2>
					</div>
			    </div>
			    <div class="fl w-100 w-50-ns pa2">
			        <div className="ba b--moon-gray br4">
						<img src={Abouttile} alt="didn't work" className="br2"/>
						<h2 className="baskerville tc"><a href="#" onClick={()=>{routeChange("about")}}>About</a></h2>
					</div>
			    </div>
			  </div>
			</div>
		</div>
	);
}

export default CardList;