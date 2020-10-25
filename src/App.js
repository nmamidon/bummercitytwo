import React, { Component } from 'react';
import CardList from './components/CardList';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import About from './components/About';
import banner from './img/BCHSbanner.png';
import votingguide from './img/2020-Voting-Guide-Bummer-City.jpg';
import Bawg from './components/Bawg';
import WaffleCaper from './components/WaffleCaper';
import Elections from './components/Elections';
import VoterGuides from './components/VoterGuides';
import Issues from './components/Issues';
import LocalGov from './components/LocalGov';
import CivicEngagement from './components/CivicEngagement';
import OpenMic from './components/OpenMic';
import Bcbc from './components/Bcbc';
import Leg from './components/Leg';
import EventsList from './components/EventsList';
import HouseShow from './components/HouseShow';
import McTheProfessor from './components/McTheProfessor';
import People from './components/People';
import UpcomingCECEvents from './components/UpcomingCECEvents';
import 'tachyons';


class App extends Component {

  constructor() {
    super();
    this.state = {
      page: "home",
    }
  }

  pageData = () => {
    const { page } = this.state;
    if (page==="home"){
      return (
        <div>
              <img src={banner} alt="banner"/>
              <h1 className="baskerville tc mt4">Welcome to BCHS INTERNET HQ</h1>
              <p className="avenir tc mh1 mh1-m mh6-ns">Welcome to the official website of the Bummer City Historical Society & Civic Engagement Coalition, your one-stop-shopping destination for all your local government & public policy information, voting guidance, open mic & acoustic house concert needs! Wow!</p>
              <p className="avenir tc mh6-ns mh1 mh1-m mb5">Contact us anytime at ⇢ <strong>bummercityhistoricalsociety@gmail.com</strong> ⇠</p>
              <hr className="mh6-ns mh1 mh1-m"/>
              <h1 className="baskerville tc mt4">2020 VOTING GUIDE</h1>
              <p className="avenir tc mh1-m mh1 mh6-ns">If you'd like to see a more detailed breakdown of the reasoning behind these endorsements, go to <a href="https://docs.google.com/document/d/1WUTHqUi_ahtz8182K7kuM_sINsGCt0TBYmNQ9hoJC5Q/edit">Full Voting Guide With Candidate Write-Ups Here</a>.</p>
              <img src={votingguide} alt="2020 voting guide" className="db center w-60-ns w-100-m w-100"/>
              <hr className="mh6-ns mh1 mh1-m mv5"/>
              <CardList routeChange={this.routeChange}/>
        </div>
      );
    } else if (page ==="about") {
      return <About/>;
    } else if (page==="bawg") {
      return <Bawg />;
    } else if (page==="waffleCaper") {
      return <WaffleCaper />;
    } else if (page==="elections") {
      return <Elections />;
    } else if (page==="voterguides") {
      return <VoterGuides />;
    } else if (page==="issues") {
      return <Issues />;
    } else if (page==="localgov") {
      return <LocalGov />;
    } else if (page==="civicengagement") {
      return <CivicEngagement routeChange={this.routeChange}/>
    } else if (page==="openmic") {
      return <OpenMic />
    } else if (page==="bcbc") {
      return <Bcbc />
    } else if (page==="leg") {
      return <Leg />
    } else if (page==="eventslist") {
      return <EventsList />
    } else if (page==="houseshow") {
      return <HouseShow />
    } else if (page==="mctheprofessor") {
      return <McTheProfessor />
    } else if (page==="people") {
      return <People />
    } else if (page==="upcomingcecevents") {
      return <UpcomingCECEvents />
    } 
  }

  routeChange = (route) => {
    this.setState({page: route});
  }


  render() {
    return (
      <div className="mh6-l mh5-ns mh3">
        <Header routeChange={this.routeChange} />
        <Nav routeChange={this.routeChange}/>
        {this.pageData()}
        <Footer />
      </div>
    );
  }
}

export default App;
