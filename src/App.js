import React, { Component } from 'react';
import './App.css';
import Projects from './components/projects'
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Skills from './components/skills'
import Timeline from './components/timeline'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
          {/*<Skills></Skills>*/}
          <Projects></Projects>
					<Timeline></Timeline>
          	</div>
      	</div>
      </div>
    );
  }
}
const path = require('path');
const PORT = process.env.PORT || 3000;
if(process.env.NODE_ENV === 'production'){
  app.use(express.static('build'));
  app.get('*',(req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}app.listen(PORT);

export default App;
