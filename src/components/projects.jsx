import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
              <div className="project" style={{backgroundImage: 'url(images/Spotify.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://spotifysongcurator.herokuapp.com">Spotify Song Curator</a></h3>
											<span>Full Stack Web App</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/Google.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/gautam417/Catcha-All">Catcha-All</a></h3>
											<span>Game</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/paypal.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/gautam417/FabFlix">Fabflix</a></h3>
											<span>Full Stack Web App</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/*<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div>*/}
					</div>
				</section>
      </div>
    )
  }
}
