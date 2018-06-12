import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/index';
import {connect} from 'react-redux';

class Searchbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "",
        }
        this.onFormSubmit = this.onFormSubmit.bind(this);    
    }
    componentWillMount(){
        this.props.videoSearch(this.props.searchString);
    }
    onInputChange(term){
        this.setState({term});
        //this.props.onSearchTermChange(term);
    }
    onFormSubmit(event) {
        event.preventDefault();
        this.props.videoSearch(this.state.term);
        this.setState({term: ''});
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit} className='input-group col-md-8'>
                <input
                    className='form-control'
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </form>
        );
    }

}
function mapStateToProps(state){
    return{
        searchString: state.VideoSearchReducer.searchString
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(Actions, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(Searchbar);