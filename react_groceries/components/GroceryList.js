
class GroceryList extends React.Component{
    
    render () {
        return(
           
          <li style={this.props.groceries.isPurchased? {display:'none'}:{display:'block'}}>
            {this.props.groceries.item}
            {this.props.groceries.brand}
            {this.props.groceries.unit}
            {this.props.groceries.quantity}
            {this.props.groceries.isPurchased.toString()}
          </li>
        )
        
    }
}