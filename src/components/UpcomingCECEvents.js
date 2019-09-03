import React from 'react';
import Sidebar from './Sidebar';

const UpcomingCECEvents = () => {
	return (
		<div className="flex flex-wrap flex-nowrap-l">
			<div className="mr4 w-100 mb3">
	        	<h1 className="baskerville bb b--moon-gray"><i>Upcoming Events</i></h1>
	        	<br></br>
	        	<h3>SEPTEMBER 8: Civic Engagement Coalition Study Hang, Fall 2019 #1</h3>
	        	<p><strong><a href="https://www.facebook.com/events/509713126452902/?active_tab=about">facebook event</a></strong></p>
	        	<p>We're back! All are welcome.</p>
	        	<p>It's a local election year and it's time to get ourselves sorted. 
Come hang out and learn about local government with friends and strangers!</p>
				<p>*Bring a laptop if you have one!</p>
				<p><i>New Location:</i></p>
				<p>Mezzanine Conference Room 3 Boston Public Library (Copley), 700 Boylston St, Boston, MA 02116</p>
				<p>Directions from the library: "Use the 700 Boylston Street entrance into the library. Turning left in the main lobby, you will find an orange staircase beside the Borrower Services desk that leads to the mezzanine level. After reaching the top of the stairs, Mezzanine Conference Room 3 will be straight ahead (each of the conference rooms have a sign posted with daily reservations listed). Anyone unable to navigate the stairs can be directed to the public elevators and proceed to the mezzanine level."</p>
	        </div>
	        <Sidebar />
         </div>
   	);
};

export default UpcomingCECEvents;