import React, { Component } from 'react';
import './App.css';
import {bindActionCreators} from 'redux';
import * as Actions from './actions/index';
import { connect } from 'react-redux';
import VideoList from "./containers/video-list";
import VideoDetails from './containers/video-detail';
import Searchbar from './containers/searchbar';

class App extends Component {
  render() {
    return (
      <div className="App col-md-12">
        <Searchbar/>
        <VideoDetails/>
        <VideoList/>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions , dispatch)
}
export default connect(null, mapDispatchToProps)(App);
