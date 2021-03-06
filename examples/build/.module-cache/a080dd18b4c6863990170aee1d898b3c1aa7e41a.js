var SalesManItem = React.createClass({displayName: "SalesManItem",
  handleClick: function(uid, e) {
    this.props.handleOp(uid);
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
  handleOp: function(uid){
    console.log('操作:' + '  对象:'+ uid);
    this.props.op(uid);
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
  getInitialState: function(){
    return {relatedData: data, unrelatedData: []};
  },
  add: function(uid){
    data.push({id: 4, name: '王uu晓龙', agent: 'uu'});
    this.setState({relatedData: data, unrelatedData: []});
  },
  del: function(uid){

  },
  render: function(){
    return(
      React.createElement("div", null, 
        React.createElement(SalesManBox, {data: this.state.relatedData, op: this.del, title: "属下"}), 
        React.createElement(SalesManBox, {data: this.state.unrelatedData, op: this.add, title: "未关联"})
      )
    )
  }
});

React.render(
  React.createElement(SalesManageBox, null),
  document.getElementById("content")
);
