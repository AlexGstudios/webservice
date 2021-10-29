import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Modal } from '../modal/Modal';
import AuthService from '../../services/AuthService';
import { Product } from './subviews/Product';

export const Products = () => {
    const { authenticated, setAuthenticated, token} = useContext(AuthContext);

    const [toOpen, setToOpen] = useState(false);
    const [productsRetrieved, setProductsRetrieved] = useState(true)
    const [fullList, setFullList] = useState([]); 

    const logout = () => {
        setAuthenticated(false);
    }

    const getProducts = async () => {
        const data = await AuthService("product", "all", "get", null, "token", token);
        setFullList(data);
        setProductsRetrieved(false);
    }

    useEffect(() => {
        if(productsRetrieved){
            getProducts();
        }
    }, [productsRetrieved])

    return(
        <div className="products">
            <button className="btnToOpen" onClick={() => {setToOpen(true)}} >New Product</button>
            <Modal open={toOpen} onClose={() => setToOpen(false)} reload={setProductsRetrieved} />
            <button onClick={logout} >Logout</button>
            <div>
                { authenticated ? fullList.map((item, i) => {
                    return(
                        <div key={i}>
                            <Product key={"product" + i} props={item} reload={setProductsRetrieved} ></Product>
                        </div>
                    )
                })
                : <div>Loading...</div>
            }
            </div>
        </div>
    )
}