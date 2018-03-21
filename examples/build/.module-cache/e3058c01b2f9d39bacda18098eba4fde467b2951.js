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
    var a = this.state.relatedData;
    var b = this.state.unrelatedData;

    tmp = null;
    for (var obj in this.state.unrelatedData) {
      if (obj.id==uid) {
        tmp = obj;
      }
    }
    a.push(tmp);


    this.setState({relatedData: a, unrelatedData: b});
  },
  del: function(uid){
    console.log('操作:' + '  对象:'+ uid);

    var a = this.state.relatedData;
    var b = this.state.unrelatedData;

    console.log(a);

    tmp = null;
    for (var idx in a) {
      if (a[idx].id==uid) {
        b.splice(0, 0, a.splice(idx, 1)[0]);
        break;
      }
    }
    this.setState({relatedData: a, unrelatedData: b});

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
