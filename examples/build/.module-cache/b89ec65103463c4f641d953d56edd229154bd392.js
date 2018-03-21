// file: tag.js
// 给某一用户添加标签

var TagLog = React.createClass({displayName: "TagLog",
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("h4", null)
      )
    );
  }
});

var TagForm = React.createClass({displayName: "TagForm",
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("h4", null)

      )
    );
  }
});

var TagDefault = React.createClass({displayName: "TagDefault",
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("h4", null)

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
