import React from 'react';
import Sidebar from './Sidebar';

const CivicEngagement = () => {
	return (
		<div className="flex flex-wrap flex-nowrap-l">
			<div className="mr4 w-100 b3">
	        	<h1 className="baskerville bb b--moon-gray"><i>Civic Engagement Opportunities</i></h1>
	        	<h2>Civic Engagement As Routine</h2>
				<p>A healthy democracy requires an engaged citizenry--but civic engagement takes many different forms other than just voting. There are daily, weekly, monthly, and yearly things that you can do to be a more active citizen/resident (as opposed to a passive citizen/resident). </p>
				<p>In order to be impactful and sustainable in the long term, civic engagement needs to be woven into your life rather than reduced to attending one-off events or voting in Presidential elections every four years. You need to figure out what active citizenship/residency looks like for you and what kinds of engagement you can integrate into your life. Remember that a single parent who works full-time will have different answers than a full-time college student or an elderly retired person.</p> 
				<p>The question is what can <u>you</u> do? Consider the options below:</p>
				<li>Attend your local <b>city council meetings</b> <i>(or whatever your equivalent municipal legislative body is)</i> so you can stay on top of municipal business, new developments, policy changes, etc.
				<a href="https://docs.google.com/document/d/1KXttlLbhhQOWSNRHqjjpO9KyccpfnbncJItMV_c4cMg/edit?usp=sharing"><b>(Check here for information about YOUR municipality!)</b></a></li> 
				<li>Read your local <b>newspaper</b> so you know what is going on around you.</li>
				<li>Organize <b>civics study groups</b> with your friends. Get together before elections to discuss the candidates and/or ballot questions. Set aside some time to research problems in your community in order to generate ideas for how to address them.</li>
				<li>Seek out existing <b>community groups</b> that address issues you care about or organize around values that you share. They are out there, you just need to find them!</li>
				<li> Attend <b>community meetings</b> that take place in your ward or neighborhood.</li>
				<li> <b>vote in all elections</b>, not just the national ones!</li>
				<li> Establish a line of communication with your <b>elected officials</b> (writing letters is always a good start, but you can also meet your representatives at speaking events).</li>
				<li><b>Volunteer for a campaign</b> (or, better yet, run for office).</li>
	         </div>
	         <Sidebar />
         </div>
   	);
};

export default CivicEngagement;
