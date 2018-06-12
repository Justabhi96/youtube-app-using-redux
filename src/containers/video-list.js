import React,{Component} from 'react';
import VideoListItem from './video-list-item';
import { connect } from 'react-redux';

class VideoList extends Component{
    render(){
    const videoItems = this.props.VideoSearch.map((video) => {
        return(<VideoListItem 
            key={video.etag} 
            video={video}
            />);
    });
    return(
        <div className="col-md-4">
        <ul className="list-group" >
            {videoItems}
        </ul>
        </div>
    );
}
}
function mapStateToProps(state){
    return{
        VideoSearch: state.VideoSearchReducer.data
    }
}

export default connect(mapStateToProps,null)(VideoList);