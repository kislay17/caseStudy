import React, {Component} from 'react';
import './css/bootstrap.css';
import './css/site.css';
import Footer from './WelcomePagejs/Footer.js';
import Navigation from './WelcomePagejs/Navigation.js';
import Slider from './WelcomePagejs/Slider.js';
import TicketBox from './WelcomePagejs/TicketBox.js';
import HomeSecFirst from './WelcomePagejs/HomeSecFirst.js';
import HomeFeatured from './WelcomePagejs/HomeFeatured.js';
import HomeSecSecond from './WelcomePagejs/HomeSecSecond.js';

class App extends Component {

	componentDidMount() {
		document.getElementById('dvYoutube').innerHTML = "<iframe style='width: 100%; height: 400px' src='https://www.youtube.com/embed/IyucJZev9wM' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
	}
	
	render() {
		
		return (
			<div>
				<Navigation />
				<Slider />
				<section class="hot-ticket-sec ticket-boxes">
					<TicketBox />
				</section>
				<section class="home-cat-sec text-center">
					<HomeSecFirst />
				</section>
				<section class="home-cat-sec text-center">
					<HomeSecSecond />
				</section>
				<section class="home-featured-sec text-center">
					<HomeFeatured />
				</section>
				<footer className="site-footer">	
					<Footer />		
				</footer>
			</div>
		)
	}
}

export default App;