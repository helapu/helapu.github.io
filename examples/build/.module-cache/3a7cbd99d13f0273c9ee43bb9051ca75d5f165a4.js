var SalesManItem = React.createClass({displayName: "SalesManItem",
  handleClick: function(e) {
    e.stopPropagation();
    console.log(e.target);
  },
  render: function(){
    return (
      React.createElement("li", {key: this.props.data.id, onClick: this.props.handleClick}, 
        React.createElement("a", {href: "#", uid: this.props.id}, " 业务员:", this.props.data.name, "   代理商:", this.props.agent)
      )
    );
  }
});

var SalesManBox = React.createClass({displayName: "SalesManBox",
  handleClick: function(e){
    console.log(e.target);
  },
  render: function(){
    var handle = this.handleClick;
    var m = this.props.data.map( function(s){
      console.log(s);
      return (
        React.createElement(SalesManItem, {data: s, handleClick: handle})
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
