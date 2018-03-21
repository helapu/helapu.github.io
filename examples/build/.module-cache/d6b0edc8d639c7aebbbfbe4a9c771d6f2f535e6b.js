var SalesManBox = react.createClass({
  render: function(){
    return(
      React.createElement("ul", null, 
        React.createElement("li", null, "1"), 
        React.createElement("li", null, "2")
      )
    )
  }
})

React.render(
  React.createElement(SalesManBox, null),
  document.getElementById("content")
);
