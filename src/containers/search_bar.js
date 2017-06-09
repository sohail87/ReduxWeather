import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {term:''};
    //if youve got a callback that makes a reference to 'this'
    //you need to bind it
    this.onInputChange = this.onInputChange.bind(this);//bind the context to this Component
    this.onFormSubmit = this.onFormSubmit.bind(this);//bind the context to this Component

  }
  onInputChange(event){
    this.setState({term: event.target.value})
  }
  onFormSubmit(event){
    event.preventDefault(); //stop auto submit when a button clicked or enter is hit on keyboard
    this.props.fetchWeather(this.state.term);
    this.setState({term:''});

    //we need to go a fetch weather data here
    //
  }
  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          placeholder="get a five day forecast in your favourite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
          />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather},dispatch)
}
export default connect(null, mapDispatchToProps)(SearchBar)
