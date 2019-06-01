import React from 'react';
import Sidebar from './Sidebar';

const Elections = () => {
	return (
		<div className="flex flex-wrap flex-nowrap-l">
			<div className="mr4 w-100 mb3">
	        	<h1 className="baskerville bb b--moon-gray"><i>Elections</i></h1>
	        	<h2>Upcoming Elections</h2>
	        	<h3>2019</h3>
	        	<p><em>November 5th, 2019</em> -- State & Local Off-Year Elections</p>		    
	        	<h2>Past Elections</h2>
	         	<h3>2018</h3>
	         	<p><em>November 6th, 2018</em> -- General Midterm Elections</p>
					<li><a href="https://ballotpedia.org/Election_results,_2018"><b>Election Results (Ballotpedia)</b></a></li>
	         	<p><em>September 4th, 2018</em> -- Massachusetts Primary Elections</p>
	         		<li><a href="Candidate List: http://www.sec.state.ma.us/ele/ele18/state_primary-democratic18.htm"><b>Democratic Primary Candidate List</b></a></li>
                    <li><a href="http://www.sec.state.ma.us/ele/ele18/state_primary-republican18.htm"><b>Republican Primary Candidate List</b></a></li>
	         	<h3>2017</h3>
	         	<p><em>November 7th, 2017</em> -- Massachusetts Municipal General Elections</p>
	        </div>
	        <Sidebar />
         </div>
   	);
};

export default Elections;
