// file: tag.js
// 给某一用户添加标签

var TagBox = React.createClass({displayName: "TagBox",
  render: function(){
    return (
      React.createElement("div", null)
    );
  }
});

var TagBox = React.createClass({displayName: "TagBox",
  render: function(){
    return (
      React.createElement("div", null)
    );
  }
});

var TagBox = React.createClass({displayName: "TagBox",
  render: function(){
    return (
      React.createElement("div", null)
    );
  }
});

var TagManageBox = React.createClass({displayName: "TagManageBox",
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement(TagList, null), 
        React.createElement(TagFormBox, null), 
        React.createElement(TagDefault, null)
      )
    );
  }
});


React.render(
  React.createElement(TagManageBox, null),
  document.getElementById("content")
);
