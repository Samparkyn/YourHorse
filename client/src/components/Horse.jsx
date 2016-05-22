var React = require('react');

var Horse = React.createClass({

    render: function(){
      return (
        <div>
          <h1> {this.props.title}</h1>
        </div>
        )
    }
  });

module.exports = Horse;