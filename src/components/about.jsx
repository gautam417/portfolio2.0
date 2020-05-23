import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>Hi! I’m Gautam and I'm a Software Engineer and developer located in Northern California. I currently work at Orbee Auto Inc. which is the first marketing cloud built for automotive dealerships. As a Backend Engineering Associate I work closely with the Senior Software Engineers, the Data Engineering team, and the Marketing team integrating services into our platform. </p>
                    <p>I primarily develop in Ruby on Rails, Python, and JavaScript. I am currently self-teaching Node, React, and Docker.</p>
                    <p>Outside of software, I like to explore the nature, work out, box, hike, meditate, and occasionally travel.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box" data-animate-effect="fadeInUp">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I have experience building fullstack websites using JavaScript, React, Node, HTML, and CSS</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box" data-animate-effect="fadeInUp">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>RESTful API Design</h3>
                    <p>I specialize in teaching and practicing RESTful constraints when developing micro services</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box" data-animate-effect="fadeInUp">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Data</h3>
                    <p>I am well versed in cleaning, munging and manipulating data in meaningful ways and managing data in databases</p>
                </div>
                </div>
            </div>
            {}
            </div>
        </div>
        </section>
      </div>
    )
  }
}
