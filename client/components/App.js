import { bindActionCreators } from 'redux';
// connect позволяет передавать свойства props компонентам с любой вложенностью
// в обычном реакте нужно передавать параметры через props от компонента-родителя к компоненту-потомку
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import Main from './Main';

// функция, позволяющая передавать состояния store как свойства props нижележащим компонентам,
// к которым можно обращаться через this.props.posts или this.props.comments
const mapStateToProps = (state) => ({
  posts: state.posts,
  comments: state.comments
});

// функция, позволяющая передавать actionCreators как свойства props нижележащим компонентам
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(actionCreators, dispatch);

// теперь у Main в качестве props доступны все свойства из state и все actionCreators
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default App;
