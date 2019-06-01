import React from 'react';

const Header = ({ routeChange }) => {
	return(
		<div>
			<h1 className="baskerville tc f1 pointer" onClick={()=>{routeChange("home")}}>Bummer City Historical Society</h1>
		</div>
	);
};

export default Header;