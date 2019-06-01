import React from 'react';
import Sidebar from './Sidebar';

const Issues = () => {
	return (
		<div className="flex flex-wrap flex-nowrap-l">
			<div className="mr4 w-100">
	        	<h1 className="baskerville bb b--moon-gray"><i>Issues</i></h1>
				<p><b><em>THIS PAGE IS STILL UNDER DEVELOPMENT</em></b></p>
				<p>Getting acquainted with major political issues can be a daunting task. That said, remember that <b>learning equips you for civic engagement</b>. Moreover, you do not have to do it alone; try getting a few friends together and checking out some of the resources below. Learning with a group enables you to delegate research duties and adds a fun social component to this important process. Remember that your understanding of fundamental political issues like housing will continuously develop over time; you just need to take the <b>first step</b> by doing a bit of research.</p>
				<li>Housing</li>
				<ul>
					<li>Affordable housing resources:</li>
					<ul>
						<li><a href=" ">https://www.bostonhousing.org/en/Home.aspx</a></li>
						<li><a href=" ">https://www.boston.gov/affordable-housing-boston</a></li>
						<li><a href=" ">https://www.boston.gov/metrolist/affordable-properties?combine=&tid%5B%5D=141&tid%5B%5D=201</a></li>
					</ul>
					<li>(From what I remember from the earlier meeting we had about housing:)  A certain percentage of new housing must be affordable, so the current strategy is to emphasize building large luxury condos in order to maximize the amount of affordable housing units required to be in those condos</li>
					<ul>
						<li>The details of this are in the inclusionary development policy, explained here: <a href=" ">http://www.bostonplans.org/getattachment/43eefea6-85ae-48ee-965a-6358ea84bc7e</a></li>
						<li>And that policy came from here: <a href=" ">http://www.bostonplans.org/housing/overview</a></li>
					</ul>
				</ul>
				<ul>
					<li>City Departments Related to Housing</li>
					<ul>
						<li><a href=" ">https://www.boston.gov/departments/neighborhood-development/office-housing-stability</a></li>
						<li><a href=" ">https://www.boston.gov/departments/neighborhood-development</a></li>
						<li><a href=" ">https://www.boston.gov/departments/fair-housing-and-equity</a></li>
						<li><a href=" ">https://www.boston.gov/departments/planning-development-agency</a></li>
					</ul>
				</ul>
				<ul>
					<li>Transportation</li>
					<li>Taxes</li>
					<li>Federalism</li>
					<li>Car Stuff</li>
					<li>Education</li>
					<li>Climate Change</li>
				</ul>
            </div>
	        <Sidebar />
        </div>
   	);
};

export default Issues;
