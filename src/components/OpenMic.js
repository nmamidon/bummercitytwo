import React from 'react';
import Sidebar from './Sidebar';
import openmicmatt from '../img/openmic/openmicmatt.jpg';
import openmicmckinley from '../img/openmic/openmicmckinley.jpg';
import openmicdoubleguitar from '../img/openmic/openmicdoubleguitar.jpg';

const OpenMic = () => {
	return (
		<div className="flex flex-wrap flex-nowrap-l">
			<div className="mr4 w-100">
	        	<h1 className="baskerville bb b--moon-gray"><i>Bummer City Open Mic</i></h1>
	        	<p>
	        		The Bummer City Open Mic happens <strong>every 2nd Thursday of the month at <a href="https://www.google.com/maps/place/HI+Boston+Hostel/@42.3512199,-71.0656431,17z/data=!3m2!4b1!5s0x89e37a77a393b957:0x2e4f17583fbbc3d0!4m8!3m7!1s0x89e37a1b1a833ea1:0x82e3d529a9b89dd1!5m2!4m1!1i2!8m2!3d42.351216!4d-71.0634544" target="_blank">Hi Hostel Boston</a> from 7-9 PM</strong>, and each one has a featured musician, artists, and charity organization.  Come hang at the next one!  
	        	</p>
	        	<h2><a href="https://www.facebook.com/pg/BummerCityUSA/events/?ref=page_internal" target="_blank">A List of Upcoming Open Mics (via facebook)</a></h2>
	        	<h2><a href="https://docs.google.com/spreadsheets/d/1sQMDo2pRahD3PR6M9u3HC1S4EOsULvWZNNXsMRyjXWo/edit?usp=sharing" target="_blank">Past Musical Features, Artists, and Donation Recipients</a></h2>
	        	<img src={openmicdoubleguitar} alt="double guitar mic photo" />
	        	<img src={openmicmckinley} alt="Matt" />
	        	<img src={openmicmatt} alt="Mckinley" />
		    </div>
	         <Sidebar />
         </div>
   	);
};

export default OpenMic;
