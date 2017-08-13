import React, { Component } from 'react';
import { connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component{

  constructor(props){
    super(props);

    this.state = {term: ''};

    //bind onInputChange to this(Searchbar) and replace onInputChange with the bound instance
    //you need to bind context whenever in your jsx has a callback/function
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  //all dom handlers they all come along with this event object always
  onInputChange(event){
    //whenever we update the input, we want to update the state
    //if you use "this" it doesnt refer to the component but something else
    this.setState({term: event.target.value});
  }

  onFormSubmit(event){
    //dont submit form
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    //clear the input field after
    this.setState({term: ''});
  }

  render(){
    return (
      <form onSubmit = {this.onFormSubmit} className = "input-group">
        <input
          placeholder="Get a five day forecast in your favorite cities"
          className = "form-control"
          value = {this.state.term}
          onChange = {this.onInputChange}
        />
        <span className = "input-group-btn">
            <button type="submit" className = "btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

//hook up the SearchBar to the fetchWeather actioncreator
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch);
}

//null because we dont need state here
export default connect(null, mapDispatchToProps)(SearchBar);
