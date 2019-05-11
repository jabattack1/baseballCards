import React from 'react';
import {Link} from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Card = React.createClass({
	render(){
		// console.log(this.props);

		const {post, i, comments} = this.props;

		return(
			<figure className='grid-figure'>
				<div className='grid-figure-wrap'>
					<h1 className='rank'>{post.rank}</h1>
					<Link to={'/view/'+ post.code } onClick={this.hideP()}>
						<img src={post.display_src} alt={post.caption} className='grid-card' onMouseOver={this.props.change.bind(null, i)} onMouseOut={this.props.changeBack.bind(null, i)}/>
					</Link>

					<CSSTransitionGroup transitionName='like' transitionEnterTimeout={500} transitionLeaveTimeout={500}>
						<span key={post.likes} className='likes-heart'>{post.likes}</span>
					</CSSTransitionGroup>
				</div>


				<figcaptions>
					<p className='caption'>{post.caption}</p>
					<p className='description'>{post.description}</p>
					<div className='control-buttons'>
						<button onClick={this.props.increment.bind(null, i)} className='likes'>&hearts; {post.likes}</button>
					</div>
				</figcaptions>
			</figure>
		)
	},

	hideP(){
		console.log('zone');
		let object = document.getElementsByClassName('disclosure')
		console.log(object);
	}
})

export default Card;