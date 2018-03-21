var SalesManItem = React.createClass({displayName: "SalesManItem",
  handleClick: function(e) {
    e.stopPropagation();
    console.log(e);
  },
  render: function(){
    return (
      React.createElement("li", null, 
        React.createElement("a", {href: "#", uid: this.props.id, key: this.props.data.id, onClick: this.handleClick}, " 业务员:", this.props.data.name, "   代理商:", this.props.agent)
      )
    );
  }
});

var SalesManBox = React.createClass({displayName: "SalesManBox",
  handleClick: function(e){
    console.log(e.target.value);
  },
  render: function(){
    var m = this.props.data.map( function(s){
      console.log(s);
      return (
        React.createElement(SalesManItem, {data: s})
      );
    });
    return (
      React.createElement("ul", null, 
        m
      )
    );
  }
});

var data = [
  {id: 1, name: '王晓龙', agent: ''},
  {id: 2, name: 'Tim', agent: ''}
];

React.render(
  React.createElement(SalesManBox, {data: data}),
  document.getElementById("content")
);
