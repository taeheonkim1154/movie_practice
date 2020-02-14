import React from "react";

class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;
        if (location.state === undefined){
            history.push("/");
        }
    }
    render(){
        const {location} = this.props;
        if (location.state){
            return (
                <div className="detail__container">
                    <h1>{location.state.title}</h1>
                    <p>{location.state.summary}</p>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Detail;