import React from 'react';
import Sidebar from './Sidebar';

const About = () => {
	return (
		<div className="flex flex-wrap flex-nowrap-l">
			<div className="mr1 mr4-ns w-100">
	        	<h1 className="baskerville bb b--moon-gray"><i>History</i></h1>
		        <p>The Bummer City Historical Society & Civic Engagement Coalition (BCHS & BC.CEC) is a tiny, Boston-based arts and education organization, but it took a circuitous path to reach its current form. </p>

		        <p>Between 2013 and 2015 a small crew of friends operated a living room show-space in Quincy, MA called Bane Voice which hosted 88 different artists from all over the US (and even some from abroad) in its brief two years of existence. Interested in making space for new artists (with a specific interest in promoting artists of marginalized identities) and in offering a replicable model of a comfortable, accessible, and communal art space, this crew sought to capture the Bane Voice project on film as a few (and then many) key figures made plans to move away from the Boston area. </p>

		        <p>An ill-fated Bane Voice documentary was dreamed-up and at the first planning meeting the name The Bummer City Historical Society was jokingly suggested by Kelly Dickinson, based on the 2014 song Bummer City, USA by Nap Forever, a collaboration of two other Bane Voice organizers.</p> 

		       	<p>Although most of the footage would be lost in a tragic hard drive crash later that summer and the documentary was never made, the BCHS name stuck as veteran Bane Voice organizers set out on a new project to run monthly charity open mics at Hostelling International Boston starting in June of 2015. The Bummer City Open Mic, still going strong today, became the anchor of BCHS operations but there were other projects in the pipeline as well.</p> 

		        <p>In the summer of 2015 the BCHS crew collaboratively wrote and self-published a zine explaining all of the details of how to run a house show-space. BCHS organizers set out to replicate the Bane Voice model throughout the Boston area. Like the documentary, this effort was ill-fated, with a few notable exceptions. Nonetheless, the vision of an accessible, inclusive art scene continued to drive the Open Mic and BCHS began to branch out into different types of operations to actualize this vision.</p> 

		        <p>In 2016 BCHS ran a series of potluck dinners ahead of the November elections to discuss the candidates and ballot questions. Driven by a frustration with political art that failed to meaningfully impact society, BCHS began to drift into the realm of civic engagement. Shortly before and in the aftermath of the 2016 election, the Bummer City Civic Engagement Coalition was born. Hosting irregular meetings in public libraries around Boston, the BC.CEC set out to model civic engagement for young people without children or property (the traditional pathways for becoming more personally invested in the machinations of local government).</p> 

		        <p>These efforts evolved into the current iteration of the BC.CEC which seeks to educate as many people as possible about how local government works, how people can meaningfully engage with the institutions of local government, and how people can practice active citizenship/residency with an eye toward long-term sustainability.</p> 

		        <p>Today, BC.CEC continues to host meetings and work on projects towards these ends, the Bummer City Open Mic continues to feature excellent performance and visual artists, raise money for local organizations, and provide space for emerging and established artists to share their work on the 2nd Thursday of each month at Hostelling International Boston, and the BCHS continues to push for the proliferation of inclusive and accessible art spaces.</p>
	         </div>
	         <Sidebar />
         </div>
   	);
};

export default About;
