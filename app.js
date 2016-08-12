// 
// var Cucumbers = () => (
//     <li>Cucumbers</li>  
// );
// var Kale = () => (
//     <li>Kale</li>
// );

// var GroceryList = props => (
//   <ul>
//     <li>{props.items[0]}</li>
//     <li>{props.items[1]}</li>
//     <li>{props.items[2]}</li>
//   </ul>
// );

// var App = () => (
//   <div>
//     <h2>My GroceryList</h2>
//     <GroceryList items={['Cucumbers', 'Kale', 'Bananas']}/>
//   </div>
// );

// ReactDOM.render(<App />, document.getElementById("app"));

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }
  onMouseEnterHandler() {
    this.setState({
      hover: true
    });
  }
  onMouseLeaveHandler() {
    this.setState({
      hover: false
    });
  }
  render() {
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };
    return(
      <li style={style} 
        onMouseEnter={this.onMouseEnterHandler.bind(this)}
        onMouseLeave={this.onMouseLeaveHandler.bind(this)} >
        {this.props.item}
      </li>
    );
  }
}

var GroceryList = props => (
  <div>
    <h2>Grocery List</h2>
    <ul>
      {props.items.map(item => 
        <ListItem item={item} />
      )}
    </ul>
  </div>
);

ReactDOM.render(<GroceryList items={['Cucumbers', 'Kale', 'Bananas']}/>, document.getElementById("app"));