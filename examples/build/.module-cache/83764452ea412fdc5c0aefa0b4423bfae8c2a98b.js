// file: tag.js
// 给某一用户添加标签

var TagList = React.createClass({displayName: "TagList",
  componentWillReceiveProps: function(){
    console.log('tag list --');
    console.log(this.props.tags);
  },
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("h4", null, "tag list: ", this.props.tags)
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

  },
  getInitialState: function(){
    return {tags: ''};
  },
  componentWillUpdate: function() {
    console.log('componentWillReceiveProps');
    console.log(this.props.inputData);
    if (this.props.inputData) {
      // this.setState({tags: this.props.inputData });
    }

  //   console.log('form 立即更新');
  //   console.log(this.state.tags);
    // $('#newtag_id').val( this.props.inputData );
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
    var oldTag = this.state.tags;
    this.setState({tags: oldTag + tag});

  },
  handleInput: function(tag){
    console.log(tag);
    this.setState({inputData: tag});
  },
  getInitialState: function(){
    return {tags: '', inputData: ''};
  },
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("h4", null, "tag manage box"), 
          React.createElement(TagList, {tags: this.state.tags}), 
          React.createElement(TagForm, {inputData: this.state.inputData, submit: this.handleSubmit}), 
          React.createElement(TagDefault, {inputClick: this.handleInput})
      )
    );
  }
});


React.render(
  React.createElement(TagManageBox, null),
  document.getElementById("content")
);
