import React from 'react';
import Sidebar from './Sidebar';

const LocalGov = () => {
	return (
		<div className="flex flex-wrap flex-nowrap-l">
			<div className="mr4 w-100">
	        	<h1 className="baskerville bb b--moon-gray"><i>How Does Local Government Work?</i></h1>
	        	<h3>How Does Local Government Work?</h3>
          
          
          <div>
            <p>In the United States, local governments broadly fit into one of two categories; municipal & county. County governments tend to wield more influence in rural areas with spread-out populations while municipal governments tend to wield more influence in densely populated areas.</p>

            <p>That said, many places in the United States fall under the jurisdiction of both municipal and county governments. For example, If you live in Boston, MA you are within the jurisdiction of the City of Boston (municipal government), Suffolk County (county government), as well as Massachusetts (state government), and the federal (national) government of the United States. That’s four intertwined and overlapping levels of government in one spot! Wowzers!</p> 

            <p>Both types of local government (municipal & county) are created by state governments so they are ultimately beholden to the authority of their state.</p> 

            <p>This is different from the relationship between state governments and the federal (national) government which have both shared powers and unique powers that the other does not have [this system is called Federalism].</p> 
            
  			<p><a href="https://docs.google.com/document/d/1KXttlLbhhQOWSNRHqjjpO9KyccpfnbncJItMV_c4cMg/edit?usp=sharing"><b>Learn about YOUR municipal government!</b></a></p> 
        
            
            <ul><li>What are the different types of municipal government?</li> 
              <ul><li>Because local governments are created by states, each state has its own specific types of municipal government. That said, these types are very similar from state-to-state.</li>
              <li>Some common types of municipal government include…</li>
               <ul><li>Strong Mayor-Council System</li>
                <ul><li>A popularly-elected Mayor [executive] who directly appoints (picks) the heads of various departments who carry out the functions of city government. The Mayor has near-total administrative authority. A popularly elected Council [legislature] who make laws for the city and often control the city budget but lack administrative powers.</li></ul> 
              <li>Weak Mayor-Council System</li>
               <ul><li>A popularly-elected Council [legislature] holds near-total administrative authority while the Mayor holds little formal power.</li></ul> 
              <li>Council-Manager System</li>
                <ul><li>A popularly-elected legislative body (council, board of alderman, etc.) makes laws and crafts policy, then appoints a professional manager to actually carry out the administration of these policies and laws.</li></ul> 
              <li>Town Meeting</li> 
                <ul><li>A big silly thing</li>
            </ul></ul></ul></ul>
            <img src="http://teachers.henrico.k12.va.us/tucker/strusky_m/webquests/Local%20Government/mayor-council%20chart.jpg" alt="Card image cap"/>
			<img src="http://teachers.henrico.k12.va.us/tucker/strusky_m/webquests/Local%20Government/council%20manager%20diagram.jpg" alt="Card image cap"/>		    
			</div>
			</div>
	         <Sidebar />
         </div>
   	);
};

export default LocalGov;
