import React from 'react';
import Sidebar from './Sidebar';
import kelly from '../img/kelly_house_show.jpg'

const HouseShow = () => {
	return (
		<div className="flex flex-wrap flex-nowrap-l">
			<div className="mr4 w-100">
	        	<h1 className="baskerville bb b--moon-gray"><i>House Show Theory and Practice</i></h1>
				<p>We at the BCHS are committed to a world where artists and fans feel empowered to create their own sharing spaces on their own terms. If you would like to start running your own art or community space but are not sure how to go about it, get in touch! We can help!</p>
				<p>Relatedly, we are committed to the art of the House Show and believe that it only takes a little bit of attention and a basic concern for the craft of event-running to turn an otherwise boring, mediocre house show into a genuinely exciting, inclusive, magical event. See our Field Guide for House Concerts (2015) below for further details. </p>
				<p><a href="https://docs.google.com/document/d/1igNUNhOekssoKzlYGBE9LV0861xGb8SJ_7I-7rhcxJc/edit?usp=sharing"><b>Link to the Bummer City Historical Society Field Guide for House Concerts (2015 edition) </b></a></p>
				<p><a href="https://drive.google.com/file/d/0B9_KFdsAcL1RcmpGalFhMk9NaUk/view?usp=sharing"><b>Printable Version</b></a></p>
				<p>*NOTE* A team of people worked very hard to make this field guide happen and I am still very proud of it. That said, it must be admitted that the guide was written in a period characterized by, if not outright utopian fantasies, at least a great deal more optimism and energy than any of us have for this sort of thing today...and yes, a bit of naivety as well. This is something of an artifact from a different time and should be looked upon and used as such. I think it is still useful today but I am also looking forward to eventually editing and updating it.</p>
				<p> -- James (9/26/2018)</p>

				<img src={kelly} alt="Kelly Dickinson performing at the Bummer City Winter Gala in 2016"/>
				<p>Kelly Dickinson performing at the Bummer City Winter Gala in 2016</p>
   		    </div>
	         <Sidebar />
         </div>
   	);
};

export default HouseShow;
