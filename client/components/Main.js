import React from 'react';
import {Link} from 'react-router';

class Main extends React.Component{
	render(){
		return(
			<div>
				<h1>
					<Link className='headLine' to='/'>Baseball Cards</Link>
				</h1>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
}

export default Main;