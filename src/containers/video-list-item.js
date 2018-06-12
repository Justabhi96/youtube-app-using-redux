import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/index';

class VideoListItem extends Component {
    Url = this.props.video.snippet.thumbnails.default.url;
    title = this.props.video.snippet.title;
    //const video = props.video;
    render(){
    return (
        <li onClick={()=> this.props.onVideoSelect(this.props.video)}  className="list-group-item" >
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={this.Url} alt='Video Thumbnail'/>
                </div>
                <div className="media-body">
                    <div className='media-heading'>
                        {this.title}
                    </div>
                </div>
            </div>
        </li>
    );
}
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(Actions, dispatch);
}

export default connect(null,mapDispatchToProps)(VideoListItem);