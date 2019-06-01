import React from 'react';
import Sidebar from './Sidebar';

const VoterGuides = () => {
	return (
		<div className="flex flex-wrap flex-nowrap-l">
			<div className="mr4 w-100 mb3">
	        	<h1 className="baskerville bb b--moon-gray"><i>Voter Guides</i></h1>
				<p> Sometimes you don't have time to do all of the research on your own, and that's okay! For those of you who are not entirely sure who you want to vote for, who are looking for some guidance, here are our suggestions. These are in no way authoritative; they are merely the endorsements that the Bummer City team landed on after deliberation.</p>
	            <li> <a href="https://docs.google.com/document/d/1G-7HkrfoJ8RjGRJ8XHIASY_6N_ABRigvWwtKiN7VlZU/edit?usp=sharing"><b>2018 Midterm General Election Voting Guide</b></a></li> 
	            <li> <a href="https://docs.google.com/document/d/19jWRvtjLr2kAYmBvc7PzJEzd8jPZp1EmwpeSiaKI7GQ/edit?usp=sharing"><b>2018 MA Primary Voting Guide</b></a></li> 
	            <li> <a href="minutes/2017 Somerville Voting Guide.pdf"><b>2017 Somerville Municipal Elections Voting Guide</b></a></li> 
	            <li> <a href="minutes/2017 Boston Voting Guide.pdf"><b>2017 Boston Municipal Elections Voting Guide</b></a></li>
		    </div>
	        <Sidebar />
         </div>
   	);
};

export default VoterGuides;
