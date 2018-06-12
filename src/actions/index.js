import YTSearch from 'youtube-api-search';
import {SEARCH_VIDEO,ON_VIDEO_SELECT} from './Action_Types';

const API_KEY = 'AIzaSyCQNQZHXJ8nnus9nCJDrEuBUBON5e9WSL8';

export function videoSearch(searchTitle){
    return function(dispatch){
        YTSearch({key:API_KEY, term:searchTitle},(data) => {
            dispatch({type:SEARCH_VIDEO, data: data});
        },(err) => {
            dispatch({type:SEARCH_VIDEO, data: err});
        });
    }
}
export function onVideoSelect(video){
    return function(dispatch){
        dispatch({type: ON_VIDEO_SELECT, data: video});
    }
}