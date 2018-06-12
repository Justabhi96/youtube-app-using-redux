import React,{Component} from 'react';
import { connect } from 'react-redux';

class VideoDetails extends Component {
    render(){
    if(!this.props.video) {
        return <div>Loading...</div>
    }
    //const video = props.video;
    const videoId = this.props.video.id.videoId;
    const Url = `https://www.youtube.com/embed/${videoId}`;
    return(
        <div className='video-detail col-md-8'>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe title='Video Play' className="embed-responsive-item" src={Url}></iframe>
            </div>
            <div className="details">
                <div>{this.props.video.snippet.title}</div>
                <div>{this.props.video.snippet.description}</div>
            </div> 
        </div>
    );
    }
}

function mapStateToProps(state){
    console.log(state);
    return{
        video: state.VideoSearchReducer.selectedVideo
    }
}

export default connect(mapStateToProps,null)(VideoDetails);