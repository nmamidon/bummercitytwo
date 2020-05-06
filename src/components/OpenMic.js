import React from 'react';
import Sidebar from './Sidebar';
import openmicmatt from '../img/openmic/openmicmatt.jpg';
import openmicmckinley from '../img/openmic/openmicmckinley.jpg';
import openmicdoubleguitar from '../img/openmic/openmicdoubleguitar.jpg';

const OpenMic = () => {
	return (
		<div className="flex flex-wrap flex-nowrap-l">
			<div className="mr4 w-100">
	        	<h1 className="baskerville bb"><i>Bummer City Open Mic (BCOM)</i></h1>
	        	<div className="pa3 ba bw1 b--pink br3 mv2 grow">
		        	<h3 className="hot-pink">
		        		**As of March 2020, we have moved BCOM online, so anyone anywhere is welcome to participate! Follow the link below for more info. 
		        	</h3>
		        	<p className="tc"><a href="https://www.facebook.com/pg/BummerCityUSA/events/?ref=page_internal">Facebook Mic Events List!</a></p>
		        	<p className="tc"><a href="https://www.twitch.tv/bummercityhs">twitch.tv/bummercityhs</a></p>
	        	</div>
	        	<p>
	        		The Bummer City Open Mic is held on the <strong>2nd Thursday of each month</strong> at HI Hostel Boston (<a href="https://www.google.com/maps/place/HI+Boston+Hostel/@42.3512199,-71.0656431,17z/data=!3m2!4b1!5s0x89e37a77a393b957:0x2e4f17583fbbc3d0!4m8!3m7!1s0x89e37a1b1a833ea1:0x82e3d529a9b89dd1!5m2!4m1!1i2!8m2!3d42.351216!4d-71.0634544" target="_blank">19 Stuart Street</a>) from 7-9 PM (sign ups begin at 7). It is a single song/poem/piece/bit/dance mic, with a short set by a featured performing artist and a small display of works by a featured visual artist. Donations are collected for the two features (25% each) as well as an organization, charity, cause, or person in need, preferably local, that the two features collaboratively choose (50%). Come hang with, listen to, learn from, share with, and join this weird and wonderful community of artists!  
	        	</p>
	        	<h2><a href="https://www.facebook.com/pg/BummerCityUSA/events/?ref=page_internal" target="_blank">A List of Upcoming Open Mics (via facebook)</a></h2>
	        	<h2><a href="https://docs.google.com/spreadsheets/d/1sQMDo2pRahD3PR6M9u3HC1S4EOsULvWZNNXsMRyjXWo/edit?usp=sharing" target="_blank">Past Musical Features, Artists, and Donation Recipients</a></h2>
	        	<img src={openmicdoubleguitar} alt="double guitar mic photo" />
	        	<p>The legendary duo (and original Bummer City homies) Cheese Boys</p>
	        	<img src={openmicmckinley} alt="Matt" />
	        	<p>Poet extraordinaire and beloved Bummer City stalwart McKinley Theobald</p>
	        	<img src={openmicmatt} alt="Mckinley" />
	        	<p>Matt O'Connor of Greater Boston's most Texan band Tuxis Giant</p>
		    </div>
	         <Sidebar />
         </div>
   	);
};

export default OpenMic;
