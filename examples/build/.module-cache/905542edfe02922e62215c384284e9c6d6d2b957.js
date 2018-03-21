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
  handleSubmit: function(){
    //submit
    this.props.submit();
  },
  handleChange: function(e){
    this.setState({tags: e.target.value})
  },
  handleClear: function(){
    this.setState({tags: ''})
    $('#newtag_id').val('');
    console.log($('#newtag_id'));

  },
  getInitialState: function(){
    return {tags: this.props.tags}
  },

  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("h4", null, "tag form"), 
          React.createElement("p", null, 
            "将会添加新的标签: ", this.state.tags
          ), 
          React.createElement("input", {type: "text", id: "newtag_id", value: this.state.tags, onChange: this.handleChange}), 
          React.createElement("input", {type: "submit", onClick: this.handleSubmit, value: "Submit"}), 
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
  handleSubmit: function(){
    console.log('submit');
  },
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("h4", null, "tag manage box"), 
          React.createElement(TagList, null), 
          React.createElement(TagForm, {tags: "hello", submit: this.handleSubmit}), 
          React.createElement(TagDefault, null)

      )
    );
  }
});


React.render(
  React.createElement(TagManageBox, null),
  document.getElementById("content")
);
