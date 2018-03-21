// file: tag.js
// 给某一用户添加标签

var TagList = React.createClass({
  handleClick: function(tag, e){
    this.props.delOp(tag.tag);
    console.log(tag.tag);
  },
  render: function(){
    var selfStrong = this.handleClick;
    var items = this.props.tags.map(function(tag){
      return(
        <li>
          <button onClick={selfStrong.bind(this, {tag}) } >{tag}</button>
        </li>
      );
    });
    return (
      <div>
        <h4>tag list:</h4>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
});

var TagForm = React.createClass({
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
      <div>
        <h4>tag form</h4>
          <p>
            将会添加新的标签: {this.state.tags}
          </p>
          <input type="text" id='newtag_id' value={this.state.tags} onChange={this.handleChange}/>
          <input type="submit" onClick={this.handleSubmit} value="Submit"/>
          <input type="button" onClick={this.handleClear} value="Clear"/>
          <h4>tag default</h4>
          <ul>
            <li>
              <button onClick={this.handleClick.bind(this,'tag1')}>tag1</button>
            </li>
            <li>
              <button onClick={this.handleClick.bind(this,'tag2')}>tag2</button>
            </li><li>
              <button onClick={this.handleClick.bind(this,'tag3')}>tag3</button>
            </li>
          </ul>
      </div>
    );
  }
});

var TagManageBox = React.createClass({
  handleDel: function(tag) {
    console.log('delete -- '+ tag);
    var old = this.state.tags;
    var idx = old.indexOf(tag);
    if (idx>-1) {
      old.splice(idx, 1);
    }
    console.log(old);
    this.setState({tags: old });
  },
  handleSubmit: function(tag){
    var old = this.state.tags;
    var sub = tag.split(' ');
    for (var i = 0; i < sub.length; i++) {
      old.push( sub[i]);
    }
    this.setState({tags: old });
  },
  handleInput: function(tag){
    console.log(tag);
    this.setState({inputData: tag});
  },
  getInitialState: function(){
    return {tags: ['a', 'b'], inputData: ''};
  },
  render: function(){
    return (
      <div>
        <h4>tag manage box</h4>
          <TagList tags={this.state.tags} delOp={this.handleDel}/>
          <TagForm inputData={this.state.inputData} submit={this.handleSubmit}/>
      </div>
    );
  }
});

React.render(
  <TagManageBox />,
  document.getElementById("content")
);
