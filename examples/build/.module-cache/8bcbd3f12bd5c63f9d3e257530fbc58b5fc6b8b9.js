// file: tag.js
var SalesManItem = React.createClass({displayName: "SalesManItem",
  handleClick: function(uid, e) {
    this.props.handleOp(uid);
  },
  render: function(){
    return (
      React.createElement("li", {"data-uid": this.props.data.id, onClick: this.handleClick.bind(this, this.props.data.id)}, 
        React.createElement("a", {href: "#"}, " name:", this.props.data.name, "     Job:", this.props.agent)
      )
    );
  }
});




React.render(
  React.createElement(SalesManageBox, null),
  document.getElementById("content")
);
