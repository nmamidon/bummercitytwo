import React from 'react';
import Sidebar from './Sidebar';
import legcouch from '../img/leg/legcouch.jpg'
import legguitar from '../img/leg/legguitar.png'
import legsnacks from '../img/leg/legsnacks.jpeg'

const Leg = () => {
	return (
		<div className="flex flex-wrap flex-nowrap-l">
			<div className="mr4 w-100">
	        	<h1 className="baskerville bb b--moon-gray"><i>L . E . G .</i></h1>
	        	<p>Hi everyone! Welcome to LEG, the: </p>
	        	<ul className="list">
	        		<li><i>Literary</i></li>
	        		<li><i>Language</i></li>
	        		<li><i>Lyrical</i></li>
	        	</ul>
	        	<ul className="list pl6">
	        		<li><i>Exploration</i></li>
	        		<li><i>Expression</i></li>
	        		<li><i>Education</i></li>
	        	</ul>
	        	<ul className="list pl7">
	        		<li><i>Group</i></li>
	        		<li><i>Gang</i></li>
	        		<li><i>Get-Together</i></li>
	        	</ul>
	        	<br></br>
	        	
	        	<h4 className="ba b--black-20 br2 pa3">LEG is a monthly workshop intended for poets and songwriters looking for new avenues of insight into their practices, and who hope to work on the writing, academic, and performative aspects of both forms.</h4>

	        	<h3>Our Meetings:</h3>
	        	<p>Sessions will be an ever-evolving mix of: review and/or critique of each other’s work, exploration of ‘professional’ work, strange and experimental prompts, and, of course, delicious snax.</p>
	        	<p>In order to facilitate this process, we ask that each artist uploads their work into Google Docs one week before each meeting. A folder will be labelled with the date of the next session in order to keep everything organized. Please spend time before each meeting reviewing each piece and be ready to give thoughtful critique.</p>
	        	<p>★★ If you prefer to take notes directly on the electronic copy of the work, PLEASE download the document to your computer first. Give a print copy to the artist or email your edits directly to them after the session. Editing documents within Google Docs will make your edits visible to everyone! ★★</p>
	        	<br></br>

	        	<h3>Critique:</h3>
	        	<p>While many of you have done creative critique before, we’d like to encourage, on approaching a piece, the following questions:</p>
	        	<ul>
	        		<li>What is happening in the poem/song?</li>
	        		<li>What does the song/poem “do”?</li>
	        		<li>What works, either for you personally, or for the piece as a whole? Why?</li>
	        		<li>What fails, either for you personally, or for the piece as a whole? Why?</li>
	        	</ul>
	        	<br></br>

	        	<h3>The Rules:</h3>
	        	<ol>
	        		<li>No apologies for your work. We’re all beginners at some part of our craft, and while there’s a fine line between humility and self-loathing, we want to encourage you to claim what you make as you would your own ugly babies.</li>
	        		<li>We will always ask you for your consent before beginning a critique – if you’re still too raw about a piece for a critique, or you’re only ready for some specific kind of feedback, that’s fine – just tell the group what you need and come prepared to help others with their pieces.</li>
	        		<li>We will hold you accountable for your work – if something in it communicates some oppressive, bigoted, or thoughtless messages, we want to make this a working circle to dialogue through those issues out together, so we can all grow as people and artists. We hope to make this workshop a compassionate one, but also one where we can all encourage and make space for each other to grow.</li>
	        	</ol>
	        	<br></br>

	        	<img src={legcouch} alt="people sitting on the couch"/>
	        	<img src={legguitar} alt="a guy and a guitar" />
	        	<img src={legsnacks} alt="snackums" />

		    </div>
	         <Sidebar />
         </div>
   	);
};

export default Leg;
