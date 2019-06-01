import React from 'react';
import Sidebar from './Sidebar';

const WaffleCaper = () => {
	return (
		<div className="flex flex-wrap flex-nowrap-l">
			<div className="mr4 w-100">
	        	<h1 className="baskerville bb b--moon-gray"><i>The Great Waffle Caper</i></h1>
	        	<p>The world as we experience it from day to day calls upon us to embody the artificial, to construct a life of empty contrivances on a foundation of inauthentic, thoughtless nonsense. It calls upon us to do this with a smile. It demands complete deference to the hegemony of the mediocre, unqualified allegiance to the Great Task of doing and saying and thinking and creating Nothing in Particular. It teases us with materialism, dangling the prospect of a life well lived like still-bleeding bait from a digital advertisement string, forcefully circumscribing our capacity to dream so you can stream another Corporate Pop single "for free." </p>
	        	<p>Waffle House is the beating heart of an America that is trying to exist in this nightmare of normalcy--A land where we decide what kind of lives we will live; where reverence is not static, not located in an object, but a dynamic relationship we voluntarily and warmly cultivate; where the love of liberation gives us sure footing as we embark on the long walk to Us from the suffocating confines of Me.</p>
	        	<p>This is a pilgrimage; heretics take note.</p>
		    </div>
	         <Sidebar />
         </div>
   	);
};

export default WaffleCaper;
