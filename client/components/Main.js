import React from 'react';
import {Link} from 'react-router';

class Main extends React.Component{
	render(){
		return(
			<div>
				<h1>
					<Link className='headLine' to='/'>Top 10 Trading Cards of All Time</Link>
					<p className='disclosure'>I've recently realized the skyrocketing prices of sports cards while browsing through internet auction houses. This site has been created in memory of what I believe are the world's most recognizable sports cards to date. I am not a collector - I have created this website to show my abilities programming with React/Redux and it's purely for demo'ing purposes. Thank you.</p>
				</h1>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
}

export default Main;