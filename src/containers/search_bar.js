import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = { term :'' };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this); 
    }
    onInputChange(event){
        this.setState({ term : event.target.value });
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({ term : '' });
    }   
    render(){
        return(
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input type="text" className="form-control" value={this.state.term} onChange={this.onInputChange} placeholder="Enter the city name"/>
                <span className="input-group-btn">
                    <button className="btn btn-secondary custom_btn" type="submit">Search</button>
                </span>
            </form>
        )
    }
}
// now we get the access to the action creator fetchWeather as props
function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather : fetchWeather }, dispatch); 
}


export default connect(null, mapDispatchToProps)(SearchBar); 