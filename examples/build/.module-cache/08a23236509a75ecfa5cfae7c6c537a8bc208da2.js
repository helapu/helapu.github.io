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
  handleClear: function(){
    this.setState({tags: ''})
    $('#newtag_id').value='';

  },
  getInitialState: function(){
    return {tags: ''}
  },

  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("h4", null, "tag form"), 
          React.createElement("p", null, 
            "将会添加新的标签: ", this.state.tags
          ), 
          React.createElement("input", {type: "text", id: "newtag_id", onChange: this.handleChange}), 
          React.createElement("input", {type: "submit", value: "Submit"}), 
          React.createElement("input", {type: "button", onClick: this.handleClear, value: "Clear"})
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
          React.createElement(TagList, null), 
          React.createElement(TagForm, null), 
          React.createElement(TagDefault, null)

      )
    );
  }
});


React.render(
  React.createElement(TagManageBox, null),
  document.getElementById("content")
);
