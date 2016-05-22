var React = require('react');
var ReactDOM = require('react-dom');
var Container = require('./components/Container.jsx');

window.onload = function(){
  console.log("horse app started");
  ReactDOM.render(
    <Container url='api/competitions'></Container>, // * when api is set up, add url ='/api/lalala/' here *
    document.getElementById('app')
    );
};
