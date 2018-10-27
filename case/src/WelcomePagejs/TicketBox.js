import React, {Component} from 'react';

class TicketBox extends Component {
	render() {
		return (
			<div className="container">
				<h2 className="site-title">Hot Tickets <small>Get tickets to your favourite events</small></h2>
				<div className="row">
					<div className="col-xs-12 col-sm-6 col-lg-4">
						<div className="box">
							<Col1 />
						</div>
					</div>

					<div className="col-xs-12 col-sm-6 col-lg-4">
						<div className="box">
							<Col2 />
						</div>
					</div>

					<div className="col-xs-12 col-sm-6 col-lg-4">
						<div className="box">
							<Col3 />
						</div>
					</div>

					<div className="col-xs-12 col-sm-6 col-lg-4">
						<div className="box">
							<Col4 />
						</div>
					</div>
        
					<div className="col-xs-12 col-sm-6 col-lg-4">
						<div className="box">
							<Col5 />
						</div>
					</div>
        
					<div className="col-xs-12 col-sm-6 col-lg-4">
						<div className="box">
							<Col6 />
						</div>
					</div>
				</div>
				<div className="btn-sec text-center p-20 pt-0">
					<a href="#" className="btn btn-primary btn-custome-lg">Discover More</a>
				</div>
			</div>
		);
	}
}

class Col1 extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="dropdown visiter-icon">
					<a href="#" className="dropdown-toggle" type="button" data-toggle="dropdown"><span className="glyphicon glyphicon-user" aria-hidden="true"></span></a>
					<div className="dropdown-menu">
						<p>Who's attending (9)</p>
						<a href="#"> <img src = {"http://www.kyazoonga.com/images/rsvp-blank-1.jpg"} alt=""/> </a>
						<a href="#"> <img src = {"http://www.kyazoonga.com/images/rsvp-blank-1.jpg"} alt=""/> </a>
						<a href="#"> <img src = {"http://www.kyazoonga.com/images/rsvp-blank-1.jpg"} alt=""/> </a>
						<a href="#"> <img src = {"http://www.kyazoonga.com/images/rsvp-blank-1.jpg"} alt=""/> </a>
						<a href="#"> <img src = {"http://www.kyazoonga.com/images/rsvp-blank-1.jpg"} alt=""/> </a>
						<a href="#"> <img src = {"http://www.kyazoonga.com/images/rsvp-blank-1.jpg"} alt=""/> </a>
						<a href="#"> <img src = {"http://www.kyazoonga.com/images/rsvp-blank-1.jpg"} alt=""/> </a>
						<a href="#"> <img src = {"http://www.kyazoonga.com/images/rsvp-blank-1.jpg"} alt=""/> </a>
						<a href="#"> <img src = {"http://www.kyazoonga.com/images/rsvp-blank-1.jpg"} alt=""/> </a>
						<a href="#"> <img src = {"http://www.kyazoonga.com/images/rsvp-blank-1.jpg"} alt=""/> </a>
					</div>
				</div>
				<a href="#" className="block-link">
					<div className="ticket-img">
						<img src = {"http://54.149.90.101/EventBuilder/Images/sport/ht-isl-jfc.gif"} alt=""/>
							<span className="ticket-price">INR 50 - 2,500</span>
					</div>
					<div className="ticket-info">
						<span className="time-info">SAT, FEB 10, 2018 20:00 Onward</span>
						<h3 className="ticket-title">JamshedpurFC - ISL Season 4</h3>
						<p className="venue-info">JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur</p>
					</div>
				</a>
				<div className="social clearfix">
					<div className="pull-left">
						<a className="btn btn-default btn-xs ical" href="#">
							<i className="fa fa-calendar"></i> &nbsp;iCal</a>
						<a className="btn btn-default btn-xs ml-10" href="#">
							<i className="fa fa-calendar"></i> &nbsp;Google</a>
					</div>
					<div className="pull-right">
						<a className="btn btn-default btn-xs btn-circle" href="#">
							<i className="fa fa-facebook"></i></a>
						<a className="btn btn-default btn-xs btn-circle" href="#">
							<i className="fa fa-twitter"></i></a>
						<a className="btn btn-default btn-xs btn-circle" href="#">
							<i className="fa fa-twitter"></i></a>
						<a className="btn btn-default btn-xs btn-circle" href="#">
							<i className="fa fa-linkedin"></i></a>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

class Col2 extends Component {
	render() {
		return (
			<React.Fragment>
				<a href="#" className="block-link">
					<div className="ticket-img">
						<img src = {"http://54.149.90.101/EventBuilder/Images/sport/ht-isl-jfc.gif"} alt=""/>
						<span className="ticket-price">INR 50 - 2,500</span>
					</div>
					<div className="ticket-info">
						<span className="time-info">SAT, FEB 10, 2018 20:00 Onward</span>
						<h3 className="ticket-title">JamshedpurFC - ISL Season 4</h3>
						<p className="venue-info">JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur</p>
					</div>
				</a>
				<div className="social clearfix">
					<div className="pull-left">
						<a className="btn btn-default btn-xs ical" href="#">
							<i className="fa fa-calendar"></i> &nbsp;iCal</a>
						<a className="btn btn-default btn-xs ml-10" href="#">
							<i className="fa fa-calendar"></i> &nbsp;Google</a>
					</div>
					<div className="pull-right">
						<a className="btn btn-default btn-xs btn-circle" href="#">
							<i className="fa fa-facebook"></i></a>
						<a className="btn btn-default btn-xs btn-circle" href="#">
							<i className="fa fa-twitter"></i></a>
						<a className="btn btn-default btn-xs btn-circle" href="#">
							<i className="fa fa-twitter"></i></a>
						<a className="btn btn-default btn-xs btn-circle" href="#">
							<i className="fa fa-linkedin"></i></a>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

class Col3 extends Component {
	render() {
		return (
			<React.Fragment>
				<a href="#" className="block-link">
					<div className="ticket-img">
						<img src = {"http://54.149.90.101/EventBuilder/Images/sport/ht-isl-jfc.gif"} alt=""/>
						<span className="ticket-price">INR 50 - 2,500</span>
					</div>
					<div className="ticket-info">
						<span className="time-info">SAT, FEB 10, 2018 20:00 Onward</span>
						<h3 className="ticket-title">JamshedpurFC - ISL Season 4</h3>
						<p className="venue-info">JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur</p>
					</div>
				</a>
				<div className="social clearfix">
					<div className="pull-left">
						<a className="btn btn-default btn-xs ical" href="#">
							<i className="fa fa-calendar"></i> &nbsp;iCal</a>
						<a className="btn btn-default btn-xs ml-10" href="#">
							<i className="fa fa-calendar"></i> &nbsp;Google</a>
					</div>
					<div className="pull-right">
						<a className="btn btn-default btn-xs btn-circle" href="#">
							<i className="fa fa-facebook"></i></a>
						<a className="btn btn-default btn-xs btn-circle" href="#">
							<i className="fa fa-twitter"></i></a>
						<a className="btn btn-default btn-xs btn-circle" href="#">
							<i className="fa fa-twitter"></i></a>
						<a className="btn btn-default btn-xs btn-circle" href="#">
							<i className="fa fa-linkedin"></i></a>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

class Col4 extends Component {
	render() {
		return (
			<React.Fragment>
				<a href="#" className="block-link">
					<div className="ticket-img">
						<img src = {"http://54.149.90.101/EventBuilder/Images/sport/ht-isl-jfc.gif"} alt=""/>
						<span className="ticket-price">INR 50 - 2,500</span>
					</div>
					<div className="ticket-info">
						<span className="time-info">SAT, FEB 10, 2018 20:00 Onward</span>
						<h3 className="ticket-title">JamshedpurFC - ISL Season 4</h3>
						<p className="venue-info">JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur</p>
					</div>
				</a>
				<div className="social clearfix">
					<div className="pull-left">
						<a className="btn btn-default btn-xs ical" href="#">
							<i className="fa fa-calendar"></i> &nbsp;iCal</a>
						<a className="btn btn-default btn-xs ml-10" href="#">
							<i className="fa fa-calendar"></i> &nbsp;Google</a>
					</div>
					<div className="pull-right">
						<a className="btn btn-default btn-xs btn-circle" href="#">
							<i className="fa fa-facebook"></i></a>
						<a className="btn btn-default btn-xs btn-circle" href="#">
							<i className="fa fa-twitter"></i></a>
						<a className="btn btn-default btn-xs btn-circle" href="#">
							<i className="fa fa-twitter"></i></a>
						<a className="btn btn-default btn-xs btn-circle" href="#">
							<i className="fa fa-linkedin"></i></a>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

class Col5 extends Component {
	render() {
		return (
			<React.Fragment>
				<a href="#" className="block-link">
					<div className="ticket-img">
						<img src = {"http://54.149.90.101/EventBuilder/Images/sport/ht-isl-jfc.gif"} alt=""/>
						<span className="ticket-price">INR 50 - 2,500</span>
					</div>
					<div className="ticket-info">
						<span className="time-info">SAT, FEB 10, 2018 20:00 Onward</span>
						<h3 className="ticket-title">JamshedpurFC - ISL Season 4</h3>
						<p className="venue-info">JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur</p>
					</div>
				</a>
				<div className="social clearfix">
					<div className="pull-left">
						<a className="btn btn-default btn-xs ical" href="#">
							<i className="fa fa-calendar"></i> &nbsp;iCal</a>
						<a className="btn btn-default btn-xs ml-10" href="#">
							<i className="fa fa-calendar"></i> &nbsp;Google</a>
					</div>
					<div className="pull-right">
						<a className="btn btn-default btn-xs btn-circle" href="#">
							<i className="fa fa-facebook"></i></a>
						<a className="btn btn-default btn-xs btn-circle" href="#">
							<i className="fa fa-twitter"></i></a>
						<a className="btn btn-default btn-xs btn-circle" href="#">
							<i className="fa fa-twitter"></i></a>
						<a className="btn btn-default btn-xs btn-circle" href="#">
							<i className="fa fa-linkedin"></i></a>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

class Col6 extends Component {
	render() {
		return (
			<React.Fragment>
				<a href="#" className="block-link">
					<div className="ticket-img">
						<img src = {"http://54.149.90.101/EventBuilder/Images/sport/ht-isl-jfc.gif"} alt=""/>
						<span className="ticket-price">INR 50 - 2,500</span>
					</div>
					<div className="ticket-info">
						<span className="time-info">SAT, FEB 10, 2018 20:00 Onward</span>
						<h3 className="ticket-title">JamshedpurFC - ISL Season 4</h3>
						<p className="venue-info">JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur</p>
					</div>
				</a>
				<div className="social clearfix">
					<div className="pull-left">
						<a className="btn btn-default btn-xs ical" href="#">
							<i className="fa fa-calendar"></i> &nbsp;iCal</a>
						<a className="btn btn-default btn-xs ml-10" href="#">
							<i className="fa fa-calendar"></i> &nbsp;Google</a>
					</div>	
					<div className="pull-right">
						<a className="btn btn-default btn-xs btn-circle" href="#">
							<i className="fa fa-facebook"></i></a>
						<a className="btn btn-default btn-xs btn-circle" href="#">
							<i className="fa fa-twitter"></i></a>
						<a className="btn btn-default btn-xs btn-circle" href="#">
							<i className="fa fa-twitter"></i></a>
						<a className="btn btn-default btn-xs btn-circle" href="#">
							<i className="fa fa-linkedin"></i></a>
					</div>
				</div>
			</React.Fragment>
		);
	}	
}

export default TicketBox;