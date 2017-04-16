import React, { Component } from 'react';
import Devices from './Devices.js';
import $ from 'jquery';
import './App.css';

const apiEndpoint = 'http://healthapi/devices';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  componentDidMount() {
    $.ajax({
      url : apiEndpoint,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  render() {
    return (
      <div className="App">
       <Devices data={this.state.data} />
      </div>
    );
  }
}

export default App;
