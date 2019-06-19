import React from 'react';
import Sidebar from './Sidebar';

const Bawg = () => {
	return (
		<div className="flex flex-wrap flex-nowrap-l">
			<div className="mr4 w-100">
				<h1 className="baskerville bb b--moon-gray"><i>BAWG</i></h1>
				<p>WHAT IS BREAKFAST??</p>
				<p>BREAKFAST is one of society's many unsung engines -- it is all the little things we do, public or private, that structure our day -- it is unpretentious -- it is intimate -- it is adaptable -- BREAKFAST must be defended in a world where time off the clock is considered a luxury good.</p>
				<p>THE BREAKFAST ARCHIVES WORKING GROUP is a zine collective that aims to celebrate THE MACHINERY OF EVERYDAY LIFE through our very own arts + literary journal, BREAKFAST ARCHIVES.</p>
				<p>Our thematic directions vary widely from issue to issue -- our driving principles include effusive commemoration (aka getting hype), as well as camaraderie. we hate commodification. we love public spaces -- willful co-optation -- intentionality, hash browns. we're not necessarily being literal.</p>
				<p>WE ARE CURRENTLY TAKING SUBMISSIONS FOR OUR SECOND ISSUE! submission details/prompts can be found here --> <a href="https://cooltapes.itch.io/bawg2">cooltapes.itch.io/bawg2</a></p>
				<p>download free digital copies of our past issues here --> <a href="https://cooltapes.itch.io/bawg">cooltapes.itch.io/bawg</a></p>
	        </div>
	        <Sidebar />
        </div>
   	);
};

export default Bawg;
