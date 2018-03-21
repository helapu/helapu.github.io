// file: tag.js
// 给某一用户添加标签

var TagList = React.createClass({displayName: "TagList",
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("h4", null, "tag list")
      )
    );
  }
});

var TagForm = React.createClass({displayName: "TagForm",
  handleChange: function(e){
    this.setState({tags: e.target.value})
  },
  getInitalState: function(){
    return {tags: ''}
  },
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("h4", null, "tag form"), 
          React.createElement("p", null, 
            "new tags ", this.state.tags
          ), 
          React.createElement("input", {type: "text", onChange: this.handleChange}), 
          React.createElement("input", {type: "submit", value: "Submit"}), 
          React.createElement("input", {type: "button", value: "Clear"})
      )
    );
  }
});

var TagDefault = React.createClass({displayName: "TagDefault",
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("h4", null, "tag default")

      )
    );
  }
});

var TagManageBox = React.createClass({displayName: "TagManageBox",
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("h4", null, "tag manage box"), 
          React.createElement(TagList, null)
        
      )
    );
  }
});


React.render(
  React.createElement(TagManageBox, null),
  document.getElementById("content")
);
