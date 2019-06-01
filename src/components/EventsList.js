import React from 'react';
import Sidebar from './Sidebar';

const EventsList = () => {
	return (
		<div className="flex flex-wrap flex-nowrap-l">
			<div className="mr4 w-100">
	        	<h1 className="baskerville bb b--moon-gray"><i>Events List</i></h1>
	        	<a href="https://docs.google.com/document/d/1ZcQznMuZF70RiagrVKqWxNoAWTfRQol8Ffcdiwk9QDs/edit?ts=5c9974bd" target="_blank">words maybe a link in a new tab</a>
		    </div>
	         <Sidebar />
         </div>
   	);
};

export default EventsList;
