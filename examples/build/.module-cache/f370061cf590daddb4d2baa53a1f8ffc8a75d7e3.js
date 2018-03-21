

var SalesManBox = React.createClass({displayName: "SalesManBox",
  render: function(){
    console.log('--');
    var m = this.props.data.map( function(s){
      console.log(s);
      return (
        React.createElement("li", null, "s.name + ' ' + s.agent")
      );
    });
    return (
      React.createElement("ul", null, 
        React.createElement("li", null, "2"), 
        m
      )
    );
  }
});

var data = [
  {name: '王晓龙', agent: ''},
  {name: 'Tim', agent: ''}
];

React.render(
  React.createElement(SalesManBox, {data: data}),
  document.getElementById("content")
);
