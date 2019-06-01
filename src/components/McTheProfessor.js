import React from 'react';
import Sidebar from './Sidebar';

const McTheProfessor = () => {
	return (
		<div className="flex flex-wrap flex-nowrap-l">
			<div className="mr4 w-100">
	        	<h1 className="baskerville bb b--moon-gray"><i>MCTheProfessor.GOV</i></h1>
	        	<p>MCtheProfessor.GOV is Greater Boston’s premier improvisational history lecture band/collective. Consisting of a lecturer, an ever-growing chamber ensemble, an ambient band, a small film team, and a variety of others (projectionists, lighting people, sound engineers, etc.), MCProffy performs engaging, college-level history lectures with partially composed, partially improvisational music. They perform in art galleries, cafes, bars, recording studios, and DIY venues around Greater Boston and are SO down to play your wedding, birthday, corporate training event, academic conference, etc. Get in touch!</p> 
	        		<p>Booking: mcproffy@gmail.com</p>
		    	<h5>Past Lecture Topics:</h5>
		    	<ul className="list">
		    		<li>
		    			<a href="https://www.youtube.com/watch?v=ANbU74tg0MY">#1 - Problematizing the National History Survey</a>
		    		</li>
		    		<li>
		    			<a href="https://www.youtube.com/watch?v=StAVct_OX_k">#2 - Civil War Memory: Contestations of the Past & Politics Today</a>
		    		</li>
		    		<li> 
		    			<a href="https://www.youtube.com/watch?v=h9ON8HtakPA">#3 - Civilization & Savagery: The Racial Ideologies of American Settler Colonialism and Imperialism</a>
		    		</li>
		    		<li>#4 - A Brief History of Japanese Americans</li>
		    		<li>#5 - Testimony-as-Activism: Why Storytelling Matters</li>
		    	</ul>
		    </div>
	         <Sidebar />
         </div>
   	);
};

export default McTheProfessor;
