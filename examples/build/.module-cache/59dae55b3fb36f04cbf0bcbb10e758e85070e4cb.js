// file: tag.js
// 给某一用户添加标签

var TagList = React.createClass({displayName: "TagList",

  render: function(){

    var items = this.props.tags.map(function(tag){
      return(
        React.createElement("li", null, 
          React.createElement("button", null, tag)
        )
      );
    });
    return (
      React.createElement("div", null, 
        React.createElement("h4", null, "tag list:"), 
        React.createElement("ul", null, 
          items
        )
      )
    );
  }
});

var TagForm = React.createClass({displayName: "TagForm",
  handleSubmit: function(){
    //submit
    this.props.submit( $('#newtag_id').val());
  },
  handleChange: function(e){
    this.setState({tags: e.target.value})
  },
  handleClear: function(){
    this.setState({tags: '' });

  },
  handleClick: function(tag, e){
    this.setState({tags: tag });
  },
  getInitialState: function(){
    return {tags: ''};
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
          React.createElement("input", {type: "button", onClick: this.handleClear, value: "Clear"}), 
          React.createElement("h4", null, "tag default"), 
          React.createElement("ul", null, 
            React.createElement("li", null, 
              React.createElement("button", {onClick: this.handleClick.bind(this,'tag1')}, "tag1")
            ), 
            React.createElement("li", null, 
              React.createElement("button", {onClick: this.handleClick.bind(this,'tag2')}, "tag2")
            ), React.createElement("li", null, 
              React.createElement("button", {onClick: this.handleClick.bind(this,'tag3')}, "tag3")
            )
          )
      )
    );
  }
});

var TagManageBox = React.createClass({displayName: "TagManageBox",
  handleSubmit: function(tag){
    console.log('submit: ' + tag);
    this.state.tags.push(tag);

    this.setState({tags: tag});

  },
  handleInput: function(tag){
    console.log(tag);
    this.setState({inputData: tag});
  },
  getInitialState: function(){
    return {tags: Array.new, inputData: ''};
  },
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("h4", null, "tag manage box"), 
          React.createElement(TagList, {tags: this.state.tags}), 
          React.createElement(TagForm, {inputData: this.state.inputData, submit: this.handleSubmit})
      )
    );
  }
});

React.render(
  React.createElement(TagManageBox, null),
  document.getElementById("content")
);
