import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import AuthService from '../../services/AuthService';
import { AuthContext } from '../../context/AuthProvider';

export const Modal = ({open, onClose, reload}) => {
    const { token } = useContext(AuthContext);

    const [info, setInfo] = useState();

    const changeInfo = (e) => {
        setInfo({...info, [e.target.name]: e.target.value});
    }

    const saveProduct = async (e) => {
        e.preventDefault();
        const data = await AuthService("product", "create", "put", info, "headerAndJSON", token);
        if(data){
            alert(data)
            reload(true);
        }
    }

    if(!open){
        return null;
    }

    return ReactDOM.createPortal(
        <div>
            <div className="overlay" onClick={onClose}></div>
            <div className="modal">
                <h2>New Product</h2>
                <button className="btnBack" onClick={onClose}>Back</button>
                <div>
                    <form onSubmit={saveProduct}>
                        <input type="name" name="name" onChange={changeInfo} placeholder="Product name" />
                        <input type="text" name="description" onChange={changeInfo} placeholder="Description" />
                        <input type="number" name="price" onChange={changeInfo} placeholder="Price" />
                        <button type="submit" >Submit</button>
                    </form>
                </div>
            </div>
        </div>,
        document.getElementById('portal')
    )
}