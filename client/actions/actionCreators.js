//increment
export function increment(index) {
	return{
		type: 'INCREMENT_LIKES',
		index
	}
}

export function change(index) {
	return{
		type: 'CHANGE_PHOTO',
		index
	}
}

export function changeBack(index) {
	return{
		type: 'CHANGEBACK_PHOTO',
		index
	}
}


//add comment
export function addComment(postId, author, comment){
	console.log('dispatching add comment');
	return{
		type: 'ADD_COMMENT',
		postId,
		author,
		comment
	}
}


//remove comment
export function removeComment(postId, i){
	return{
		type: 'REMOVE_COMMENT',
		postId,
		i
	}
}