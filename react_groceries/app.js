 
console.log(groceries);
class App extends React.Component{
    state={     
        groceries:groceries,   
        item: '',
        brand: '',
        units: '',
        quantity: 0,
        isPurchased:false,
        
    }

    handleBool=(event)=>{
        this.setState({isPurchased:document.querySelector('input[name="isPurchased"]:checked').value});
        
    }

    handleChange=(event)=>{
        event.preventDefault();
        this.setState({[event.target.id]:event.target.value});
    }

    //fill out form and press submit
    handleSubmit=(event)=>{
        event.preventDefault(); //prevent default of form submision response 
        const newItem={
            item: this.state.item,
            brand: this.state.brand,
            units:this.state.units,
            quantity:this.state.quantity,
            isPurchased:this.state.isPurchased
        }

        this.setState({
            groceries:[newItem, ...this.state.groceries],
            item:'',
            brand:'',
            units:'',
            quantity:0,
            isPurchased:false,
           
        })
        document.querySelector('#true').checked = false;
    }

    render(){
        return(
            <div> 
                <form onSubmit={this.handleSubmit}>
                    <label>Item</label><input type='text' value={this.state.item} onChange={this.handleChange} id='item'></input>
                    <br></br>
                    <label>Brand</label><input type='text' value={this.state.brand} onChange={this.handleChange} id='brand'></input>
                    <br></br>
                    <label>Units</label><input type='text' value={this.state.units} onChange={this.handleChange} id='units'></input>
                    <br></br>
                    <label>Quantity</label><input type='number' value={this.state.quantity} onChange={this.handleChange} id='quantity'></input>
                    <br></br>
                    <fieldset>
                       <legend>Purchased?</legend>
                       <input id='true' type='checkbox'  value={true} name='isPurchased' onChange={this.handleBool}></input><label >True</label>
                    </fieldset>
                    <input type='submit' />
                </form>
                <div>
                    <ul>
                        {this.state.groceries.map(groceries=>{
                            return( 
                                <GroceryList groceries={groceries}/>                 
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
)