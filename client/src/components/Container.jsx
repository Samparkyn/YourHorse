var React = require('react');
var Concours = require('./Concours.jsx');
import {Navbar, NavItem} from 'react-materialize';

var Container = React.createClass({

  getInitialState: function(){
    return { competitions: []};
  },

  sendHTTPRequest: function(url){
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function(){
      if(request.status === 200){
        var competitions = JSON.parse(request.responseText);
        this.setState({competitions: competitions[0].competitions});
      }
    }.bind(this);

    request.send(null);
  },

  componentDidMount: function(){
    this.sendHTTPRequest(this.props.url);
  },

  render: function(){
    return (
        <div>
        <Navbar brand='logo' right>
          <NavItem href='#'>Getting started</NavItem>
          <NavItem href='#'>Components</NavItem>
        </Navbar>
          <h1>Your Horse</h1>
          <Concours competitions={this.state.competitions}></Concours>
        </div>
      );
  }
});

module.exports = Container;