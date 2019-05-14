import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators.js';
import Main from './Main';


function mapStateToProps(state){
	return {
		posts: state.posts,
		comments: state.comments
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

// class test extends React.Component{
// 	render(){
// 	console.log('poetic');
// 		console.log(this.props.posts);
// 	}
// }

export default App;