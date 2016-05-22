var React = require('react');

var Concours = React.createClass({

  populateList: function(){ // to populate list of competitions

    var selectedCompetition = document.getElementById("selectedCompetition"); // not sure will need this??

    var getListItems = function(item){ //item being the individual competition to go in the list
      var listItems = [];
      for(var competition of this.props.competitions){ //this.props.competitions needs to be refering to the list of competitions in the api
        if(!listItems.includes(competition[item])){
          listItems.push(competition[item]);
        }
      }
      var itemString = "";
      for(var item of listItems){
        itemString += "<li value='" + item + "'>" + item + "</li>";

      }
      return optionString;
    }.bind(this);
  },

   getProperties: function(object){
     var keys = [];
     for(var key in object){
      keys.push(key);
    }
    return keys;
  },

  render: function(){

    var competitionList = this.props.competitions.map(function(competition, index){
      return(
        <li value={competition.Location} key={index}>{competition.Location}</li>
        )
    });
    console.log(competitionList);
    console.log(this.props.competitions);

    return (
      <div>
        Competitions:
        <ul>
          {competitionList}
        </ul>
      </div> // ** i think that the above should populate the list with the individual list items from the map.. but need to check this is the right way to populate a list in react! **
      )
  }
});

module.exports = Concours;
