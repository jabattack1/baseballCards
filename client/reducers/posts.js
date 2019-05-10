//a reducer takes in two things:

//1. the action(info about what happened)
//2. copy of current state

function posts(state = [], action){
	// console.log('the post will change');
	// console.log(state, action);
	switch(action.type){
		case 'INCREMENT_LIKES' :
		// console.log('incrementing likes');
		var i = action.index;
		//return the updated state
		return [
			...state.slice(0,i), //before the one we are updating
			{...state[i], likes: state[i].likes+1},
			...state.slice(i+1), //after the one we are updating
		]

		case 'CHANGE_PHOTO' :
		// console.log('incrementing likes');
		console.log('in');
		var i = action.index;
		//return the updated state
		return [
			...state.slice(0,i),
			{...state[i], display_src: state[i].display_src2},
			...state.slice(i+1),
		]

		case 'CHANGEBACK_PHOTO' :
		// console.log('incrementing likes');
		var i = action.index;
		console.log('out');
		//return the updated state
		return [
			...state.slice(0,i),
			{...state[i], display_src: state[i].display_src3},
			...state.slice(i+1),
		]

		default:
			return state;
	}
	// state[action.i].likes++;
	// return state;
}

export default posts;