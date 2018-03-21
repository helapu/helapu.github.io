var SalesManItem = React.createClass({displayName: "SalesManItem",
  handleClick: function(uid, e) {
    this.props.handleOp(uid, "DEL");
  },
  render: function(){
    return (
      React.createElement("li", {"data-uid": this.props.data.id, onClick: this.handleClick.bind(this, this.props.data.id)}, 
        React.createElement("a", {href: "#"}, " 业务员:", this.props.data.name, "   代理商:", this.props.agent)
      )
    );
  }
});

var SalesManBox = React.createClass({displayName: "SalesManBox",
  handleOp: function(uid, op){
    console.log('操作:' + op);
    console.log(uid);
  },
  render: function(){
    var handle=this.handleOp;
    var m = this.props.data.map( function(s){
      return (
        React.createElement(SalesManItem, {data: s, handleOp: handle})
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
