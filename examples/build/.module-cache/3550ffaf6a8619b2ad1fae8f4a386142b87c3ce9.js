var CommentList = React.createClass({displayName: "CommentList",
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        React.createElement(Comment, {author: comment.author}, 
          comment.text
        )
      );
    });
    return (
      React.createElement("div", {className: "commentList"}, 
        commentNodes
      )
    );
  }
});

var SalesManBox = React.createClass({displayName: "SalesManBox",
  render: function(){
    console.log('--');
    var m = this.props.data.map( function(s){
      console.log(s);
      return (
        React.createElement("li", null, "s")
      );
    });
    return (
      React.createElement("ul", null, 
        React.createElement("li", null, "2")
      )
    );
  }
});

var data = ['王晓龙', 'Tim', 'Dock']

React.render(
  React.createElement(SalesManBox, {data: data}),
  document.getElementById("content")
);
