import React from 'react';
import {Link} from 'react-router';
import Card from './Card.js';
import Comments from './Comments.js'

class Single extends React.Component{
	render(){
		console.log(this);
		//index of the post
		// const [postId] = this.props.params;
		const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
		// console.log(i);
		//get us the post
		const post = this.props.posts[i];
		// // console.log(this.props.comments);
		// const commentId = this.props.params.postId;
		const postComments = this.props.comments[this.props.params.postId] || [];
		// console.log(comment);
		return(
			<div className='single-card'>
				<Card i={i} post={post} {...this.props} />
				<Comments postComments={postComments} {...this.props}/>
			</div>
		)
	}
}

export default Single;