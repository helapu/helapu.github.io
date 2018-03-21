var SalesManItem = React.createClass({
  handleClick: function(uid, e) {
    this.props.handleOp(uid);
  },
  render: function(){
    return (
      <li data-uid={this.props.data.id} onClick={this.handleClick.bind(this, this.props.data.id)}>
        <a href='#'> name:{this.props.data.name}     Job:{this.props.agent}</a>
      </li>
    );
  }
});

var SalesManBox = React.createClass({
  handleOp: function(uid){
    this.props.op(uid);
  },
  render: function(){
    var handle=this.handleOp;
    var m = this.props.data.map( function(s){
      return (
        <div>
          <SalesManItem data={s} handleOp={handle}/>
        </div>
      );
    });
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ul>
          {m}
        </ul>
      </div>
    );
  }
});

var data = [
  {id: 1, name: 'Suz', job: 'IT'},
  {id: 2, name: 'JoJo', job: 'EDit'},
  {id: 3, name: 'Jeff', job: 'Gov'},
  {id: 4, name: 'Tom', job: 'Soho'}
];


var SalesManageBox = React.createClass({
  getInitialState: function(){
    return {relatedData: data, unrelatedData: []};
  },
  add: function(uid){
    var a = this.state.relatedData;
    var b = this.state.unrelatedData;
    tmp = null;
    for (var idx in b) {
      if (b[idx].id==uid) {
        a.splice(0, 0, b.splice(idx, 1)[0]);
        break;
      }
    }
    this.setState({relatedData: a, unrelatedData: b});

  },
  del: function(uid){
    var a = this.state.relatedData;
    var b = this.state.unrelatedData;
    tmp = null;
    for (var idx in a) {
      if (a[idx].id==uid) {
        b.splice(0, 0, a.splice(idx, 1)[0]);
        break;
      }
    }
    this.setState({relatedData: a, unrelatedData: b});

  },
  render: function(){
    return(
      <div>
        <SalesManBox data={this.state.relatedData} op={this.del} title='数据项目A' />
        <SalesManBox data={this.state.unrelatedData} op={this.add} title='数据项目B' />
      </div>
    )
  }
});

React.render(
  <SalesManageBox />,
  document.getElementById("content")
);

// file: ul.js
