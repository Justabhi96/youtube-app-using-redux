import {ON_VIDEO_SELECT} from '../actions/Action_Types';

let dataState = {data: []};
const VideoSelectReducer = (state = dataState, action ) => {
    switch(action.type){
        case ON_VIDEO_SELECT:
                state = Object.assign({}, state, {selectedVideo: action.data});
        default:
            return state;    
    }
}

export default VideoSelectReducer;