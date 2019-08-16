import React from 'react';
import Sidebar from './Sidebar';
import bcbcblurryamanda from '../img/bcbc/bcbcblurryamanda.JPG';
import bcbccomic from '../img/bcbc/bcbccomic.JPG';
import bcbclongshot from '../img/bcbc/bcbclongshot.jpg';
import bcbcmatt from '../img/bcbc/bcbcmatt.jpg';
import bcbcmilner from '../img/bcbc/bcbcmilner.jpg';

const Bcbc = () => {
	return (
		<div className="flex flex-wrap flex-nowrap-l">
			<div className="mr4 w-100">
	        	<h1 className="baskerville bb b--moon-gray"><i>Bummer City Billiards Club</i></h1>
	        	<br></br>
	        	<p>The <strong>BUMMER CITY BILLIARDS CLUB (BCBC)</strong> was founded in late 2018 with the explicit mission of cultivating personal excellence on all fronts through amicable competition, mutual support and intensive training -- which is to say, a bunch of us meet up and play pool somewhere in the Boston area every week or two. Most of our members are just starting out, so if you kind of suck at pool but you've always wanted to get better amongst like-minded amateurs (and fix your technique systematically, if you so desire), this is the group for you! Email milnrar@gmail.com if you want to get on the list and receive updates about future meetings.</p>
	        	<br></br>
	        	<img src={bcbcblurryamanda} alt="Amanda being a boss" />
			    <img src={bcbcmilner} alt="milner shootin like a pro" />
			    <img src={bcbclongshot} alt="woah he's so concentrated" />
			    <img src={bcbcmatt} alt="a pool pro" />
			    <img src={bcbccomic} alt="lil christmas comic in the pool hall" />
		    </div>
	         <Sidebar />
         </div>
   	);
};

export default Bcbc;
