import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {term:''};
    //if youve got a callback that makes a reference to this
    //you need to bind it
    this.onInputChange = this.onInputChange.bind(this);//bind the context to this Component
  }
  onInputChange(event){
    console.log(event.target.value);
    this.setState({term: event.target.value})
  }
  onFormSubmit(event){
    event.preventDefault(); //stop auto submit when a button clicked or enter is hit on keyboard

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
