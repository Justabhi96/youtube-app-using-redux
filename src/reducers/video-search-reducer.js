import {SEARCH_VIDEO, ON_VIDEO_SELECT} from '../actions/Action_Types';


let dataState = {data: [],selectedVideo: undefined, searchString: 'Messi body feints'};
const VideoSearchReducer = (state = dataState, action ) => {
    switch(action.type){
        case SEARCH_VIDEO:
            state = Object.assign({}, state, {data: action.data, selectedVideo: action.data[0]});
            return state;
        case ON_VIDEO_SELECT:
            state = Object.assign({},state,{selectedVideo: action.data});
            return state;    
        default:
            return state;    
    }
}

export default VideoSearchReducer;