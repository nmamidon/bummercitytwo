import React from 'react';
import Sidebar from './Sidebar';

const PastFeatures = () => {
	return (
		<div className="flex flex-wrap flex-nowrap-l">
			<div className="mr4 w-100">
	        	<h1 className="baskerville bb b--moon-gray"><i>Open Mic Past Features</i></h1>
	        	<p>both past features and past donation recipients go here</p>
		    </div>
	         <Sidebar />
         </div>
   	);
};

export default PastFeatures;
