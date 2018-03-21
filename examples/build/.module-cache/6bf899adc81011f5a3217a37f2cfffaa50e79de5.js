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
  {id: 1, name: 'Suz', job: 'IT'},
  {id: 2, name: 'JoJo', job: 'EDit'},
  {id: 3, name: 'Jeff', job: 'Gov'},
  {id: 4, name: 'Tom', job: 'Soho'}
];


var SalesManageBox = React.createClass({displayName: "SalesManageBox",
  getInitialState: function(){
    return {relatedData: data, unrelatedData: []};
  },
  add: function(uid){
    var a = this.state.relatedData;
    var b = this.state.unrelatedData;
    tmp = null;
    for (var idx in b) {
      if (b[idx].id==uid) {
        a.splice(0, 0, b.splice(idx, 1)[0]);
        break;
      }
    }
    this.setState({relatedData: a, unrelatedData: b});

  },
  del: function(uid){
    var a = this.state.relatedData;
    var b = this.state.unrelatedData;
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
        React.createElement(SalesManBox, {data: this.state.relatedData, op: this.del, title: "数据项目A"}), 
        React.createElement(SalesManBox, {data: this.state.unrelatedData, op: this.add, title: "数据项目B"})
      )
    )
  }
});

React.render(
  React.createElement(SalesManageBox, null),
  document.getElementById("content")
);
