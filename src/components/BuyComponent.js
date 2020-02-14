import React from "react";
import {Link} from "react-router-dom";

function BuyComponent({id, title, poster}){
    return (
        <Link to={{
            pathname: "buy",
            state:{
                id,
                title,
                poster
            }
        }}>
            <div>
                <span>Buy it now!</span>
            </div>
        </Link>
    );
}

export default BuyComponent;