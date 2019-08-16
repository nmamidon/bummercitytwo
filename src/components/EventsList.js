import React from 'react';
import Sidebar from './Sidebar';

const EventsList = () => {
	return (
		<div className="flex flex-wrap flex-nowrap-l">
			<div className="mr4 w-100">
	        	<h1 className="baskerville bb b--moon-gray"><i>Events List</i></h1>
	        	<h2><a href="https://www.facebook.com/pg/BummerCityUSA/events/?ref=page_internal" target="_blank">A LIST OF OUR UPCOMING EVENTS (on the facebook)</a></h2>
		    </div>
	         <Sidebar />
         </div>
   	);
};

export default EventsList;
