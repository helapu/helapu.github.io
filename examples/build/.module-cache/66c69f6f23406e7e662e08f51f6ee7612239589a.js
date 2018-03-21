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
    console.log('操作:' + op+ '  对象:'+ uid);
  },
  render: function(){
    var handle=this.handleOp;
    var m = this.props.data.map( function(s){
      return (
        React.createElement("div", null, 
          React.createElement(SalesManItem, {data: s, handleOp: handle})
        )
      );
    });
    return (
      React.createElement("div", null, 
        React.createElement("h2", null, this.props.title), 
        React.createElement("ul", null, 
          m
        )
      )
    );
  }
});

var data = [
  {id: 1, name: '王晓龙', agent: ''},
  {id: 2, name: 'Tim', agent: ''}
];


var SalesManageBox = React.createClass({displayName: "SalesManageBox",
  render: function(){
    return(
      React.createElement("div", null, 
        React.createElement(SalesManBox, {data: data, title: "属下"}), 
        React.createElement(SalesManBox, {data:  [], title: "未关联"})
      )
    )
  }
});

React.render(
  React.createElement(SalesManageBox, null),
  document.getElementById("content")
);
