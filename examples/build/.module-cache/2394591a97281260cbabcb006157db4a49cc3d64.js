var SalesManBox = React.createClass({displayName: "SalesManBox",
  render: function(){
    return(
      React.createElement("ul", null, 
        React.createElement("li", null, "1"), 
        React.createElement("li", null, "2")
      )
    );
  }
});

var data = ['王晓龙', 'Tim', 'Dock']

React.render(
  React.createElement(SalesManBox, {data: data}),
  document.getElementById("content")
);
