import React from "react";

class Buy extends React.Component{
    render(){
        const {location} = this.props;
        console.log(location.state);
        return (
            <div>
                <h3>Want to buy it?</h3>
                <h5>price : $5</h5>
            </div>
        )
    }
}

export default Buy;