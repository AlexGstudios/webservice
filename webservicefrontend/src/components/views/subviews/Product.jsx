import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import AuthService from "../../../services/AuthService";

export const Product = ({props, noBtn}) => {
    const {token} = useContext(AuthContext);

    const [isTrue, setIsTrue] = useState(true);

    const addFavorite = async () => {
        let name = props.name;
        const data = await AuthService("product", "add-favorite", "put", name, "", token);
        alert(data);
    }

    useEffect(() => {
        if(noBtn === "noBtn"){
            setIsTrue(false);
        }
    }, [])

    return(
        <div className="product">
                <p>Name: {props.name}</p>
                <p>Description: {props.description}</p>
                <p>Price: {props.price}</p>
                {isTrue ? <button onClick={() => addFavorite()}>Add to favorite</button>
                :<div></div>
            }
        </div>
    )

}