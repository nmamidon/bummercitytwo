import React from 'react';
import Sidebar from './Sidebar';

const Bawg = () => {
	return (
		<div className="flex flex-wrap flex-nowrap-l">
			<div className="mr4 w-100">
				<h1 className="baskerville bb b--moon-gray"><i>BAWG</i></h1>
				<p>The BREAKFAST ARCHIVES WORKING GROUP (BAWG) makes collaborative zines that collect all kinds of visual art and written material relating to THE MACHINERY OF EVERYDAY LIFE -- THE PRACTICES THAT HOLD OUR COMMUNITIES TOGETHER AND THUS MAKE THE WORLD MORE BEARABLE -- THINGS WIDELY CONSIDERED TOO COMMONPLACE TO FLIP OUT OVER BUT ARE NEVERTHELESS WORTHY OF CELEBRATION AND DOCUMENTATION -- </p>
	        	<p>When we say breakfast, [we're not necessarily being literal]1. But, in some sense we are, because breakfast is generally a great time to meet up with your friends, plan, bond, recuperate, take care of each other -- you know, all stuff we're into. We welcome submissions from anyone. Whatever you're submitting, we've got an exceptional love for the experimental, the exuberant, the unpolished, the risky, the mildly incomprehensible (but if you want to say a few words explaining what you've made, that's cool too). The specifics of what we're looking for depend on the themes of the issue -- read more about those below!</p>
	        	<p>Upcoming issues:</p>
	        	<ul className="list">
	        		<li>#1: [Get Hype For The Insignificant!]2 (SUBMISSIONS OPEN: fb event [here]3; submit your art to dead.army.choir@gmail.com by 2/17/19)</li>
	        		<li>#2: Hallowed Sites/Lost Spaces</li>
	        		<li>#3: Eggs</li>
	        	</ul>
	        	<p>Got any ideas for something else you'd like to see in print? Want to band together and make more stuff with us under the Bummer City banner? Shoot us an email.</p>
	        </div>
	        <Sidebar />
        </div>
   	);
};

export default Bawg;
