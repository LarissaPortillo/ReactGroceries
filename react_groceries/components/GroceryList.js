
class GroceryList extends React.Component{
 
    render () {
        return(
           
          <li style={this.props.groceries.isPurchased ? {display:'none'}:{display:'block'}}>
            Item: {this.props.groceries.item } ,
            Brand: {this.props.groceries.brand } ,
            Unit: {this.props.groceries.units} ,
            Quantity:{this.props.groceries.quantity }
          </li>
        )
        
    }
}