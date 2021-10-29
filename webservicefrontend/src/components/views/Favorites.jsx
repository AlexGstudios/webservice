import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import AuthService from "../../services/AuthService";
import { Product } from "./subviews/Product";

export const Favorites = () => {
    const { token } = useContext(AuthContext);

    const [favoritesList, setFavoritesList] = useState({});

    const getFavorites = async () => {
        const data = await AuthService("product", "favorites", "get", null, "token", token);
        setFavoritesList(data);
    }

    useEffect(() => {
            getFavorites();
    }, [])

    return(
        <div className="favorites">
            {Object.entries(favoritesList).map(([key, value], i) => {
                return(
                    <Product key={i} props={value} noBtn="noBtn"></Product>
                )
            })}
        </div>
    )
}