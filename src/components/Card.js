import React from 'react';

const Card = ({body, title, picture, picturealt}) => {
	return(
		<div className="ma3 ba b--moon-gray br4 pa3 w-third">
			<img src={picture} alt={picturealt} className="br2"/>
			<h2 className="baskerville tc">{title}</h2>
			<ul className="list">
				{body}
			</ul>
		</div>
	);
};

export default Card;