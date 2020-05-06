import React from 'react';
import Sidebar from './Sidebar';

const Elections = () => {
	return (
		<div className="flex flex-wrap flex-nowrap-l">
			<div className="mr4 w-100 mb3">
				<div>
		        	<h1 className="baskerville bb b--moon-gray"><i>Elections</i></h1>
		        	<h2 className="baskerville">Upcoming Elections</h2>
		        	<h3>2020</h3>
		        	<p><em>September 1st, 2020</em> -- Primary Congressional Elections (Massachusetts)</p>
		        	<p><em>November 3, 2020</em> -- General Presidential Election</p>
		        	<h2 className="baskerville pt3">Past Elections</h2>
		        	<h3>2019</h3>
		        	<p><em>November 5th, 2019</em> -- State & Local Off-Year Elections</p>
		        		<li><a href="https://drive.google.com/file/d/0B1JroPKomfUdbW1TU1BWOEhhZFl6a2JYWHZRc2dlSXFJVzZr/view?usp=sharing"><b>2019 Voting Guide</b></a></li> 
		         	<h3>2018</h3>
		         	<p><em>November 6th, 2018</em> -- General Midterm Elections</p>
						<li><a href="https://ballotpedia.org/Election_results,_2018"><b>Election Results (Ballotpedia)</b></a></li>
		         	<p><em>September 4th, 2018</em> -- Massachusetts Primary Elections</p>
		         		<li><a href="Candidate List: http://www.sec.state.ma.us/ele/ele18/state_primary-democratic18.htm"><b>Democratic Primary Candidate List</b></a></li>
	                    <li><a href="http://www.sec.state.ma.us/ele/ele18/state_primary-republican18.htm"><b>Republican Primary Candidate List</b></a></li>
		         	<h3>2017</h3>
		         	<p><em>November 7th, 2017</em> -- Massachusetts Municipal General Elections</p>
	         	</div>
	         	<div className="mv4"> 
		         	<h1 className="baskerville bb b--moon-gray"><i>Voting Guides</i></h1>
		         	<p> Sometimes you don't have time to do all of the research on your own, and that's okay! For those of you who are not entirely sure who you want to vote for, who are looking for some guidance, here are our suggestions. These are in no way authoritative; they are merely the endorsements that the Bummer City team landed on after deliberation.</p>
		            <li> <a href="https://drive.google.com/file/d/0B1JroPKomfUdbW1TU1BWOEhhZFl6a2JYWHZRc2dlSXFJVzZr/view?usp=sharing"><b>2019 State & Local Off-Year Election Voting Guide</b></a></li> 
		            <li> <a href="https://docs.google.com/document/d/1G-7HkrfoJ8RjGRJ8XHIASY_6N_ABRigvWwtKiN7VlZU/edit?usp=sharing"><b>2018 Midterm General Election Voting Guide</b></a></li> 
		            <li> <a href="https://docs.google.com/document/d/19jWRvtjLr2kAYmBvc7PzJEzd8jPZp1EmwpeSiaKI7GQ/edit?usp=sharing"><b>2018 MA Primary Voting Guide</b></a></li> 
		            <li> <a href="minutes/2017 Somerville Voting Guide.pdf"><b>2017 Somerville Municipal Elections Voting Guide</b></a></li> 
		            <li> <a href="minutes/2017 Boston Voting Guide.pdf"><b>2017 Boston Municipal Elections Voting Guide</b></a></li>
	            </div>
	        </div>
	        <Sidebar />
         </div>
   	);
};

export default Elections;
