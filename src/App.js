import React, { Component } from 'react';
import './App.css';

import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link
} from 'react-router-dom';

import PersonalProfile 		from './personalprofile';
import PersonalSkills 		from './personalskills';
import ProfessionalSkills 	from './professionalskills';
import WorkExperience 		from './workexperience';
import Education 			from './education';
import Contact 				from './contact';


import myPhoto from "./photo.png";

// const HomePage = () => <h1>Home</h1>;

class App extends Component {

	constructor() {
		super();
		this.state = {
			selectedMenu : 'personal_profile'
		};

		this.menuItems = [
			{id: "personal_profile", name: "Personal Profile", route: "/personal"},
			{id: "personal_skills", name: "Personal Skills", route: "/personal_skills"},
			{id: "professional_skills", name: "Professional Skills", route: "/professional_skills" },
			{id: "work_experience", name: "Work Experience", route: "/work_experience"},
			{id: "education", name: "Educational History", route: "/education"},
			{id: "contact", name: "Contact Me", route: "/contact"}
		];
	}

	clickHandler(selectedItem) {
		this.setState({selectedMenu: selectedItem});
	}

	getMenuLinks() {
		return this.menuItems.map((eachItem, index) => {

			var selectionClass = "Menu";
			if(this.state.selectedMenu === eachItem.id) {
				selectionClass = "SelectedMenu";
				// console.log("selection", this.state.selectedMenu);
			}

			return <Link key={index} id={eachItem.id} onClick={this.clickHandler.bind(this, eachItem.id)} className={selectionClass} to={eachItem.route}>{eachItem.name}</Link>
		});
	}

	render() {
		// console.log("RENDER : ", process.env.PUBLIC_URL);
		console.log("env : ", process.env);

		return (
				<div className="App">
					<Router basename='/profile'>

						<div className="App-header">

							<div className="headerLeft"><img src={myPhoto} width="100" border="0" alt="photo" /></div>

							<div className="headerRight">
								<h1>ASHLY THOMAS ABRAHAM</h1>
								<h3>Full Stack Developer</h3>
							</div>						
						</div>

						<div className="App-navigation">
							{
								this.getMenuLinks()
							}
						</div>

						<div className="App-content">
							<Switch>
								<Route exact path="/" component={PersonalProfile} />
								<Route path="/personal" component={PersonalProfile} />
								<Route path="/personal_skills" component={PersonalSkills} />
								<Route path="/professional_skills" component={ProfessionalSkills} />
								<Route path="/work_experience" component={WorkExperience} />
								<Route path="/education" component={Education} />
								<Route path="/contact" component={Contact} />
							</Switch>
						</div>

					</Router>
				</div>
		);
	}
}

export default App;