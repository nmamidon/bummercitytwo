import React from 'react';
import Sidebar from './Sidebar';

const EventsList = () => {
	return (
		<div className="flex flex-wrap flex-nowrap-l">
			<div className="mr4 w-100">
	        	<h1 className="baskerville bb b--moon-gray"><i>Events List</i></h1>
	        	<h2><a href="https://www.facebook.com/pg/BummerCityUSA/events/?ref=page_internal" target="_blank">Via Facebook: A LIST OF OUR UPCOMING EVENTS</a></h2>
	        	<h2><a href="https://docs.google.com/document/d/1ZcQznMuZF70RiagrVKqWxNoAWTfRQol8Ffcdiwk9QDs/edit?usp=sharing" target="_blank">Via a google doc: ANOTHER list of Upcoming Events, including the recurring events that haven't been created on facebook yet</a></h2>
		    </div>
	         <Sidebar />
         </div>
   	);
};

export default EventsList;
