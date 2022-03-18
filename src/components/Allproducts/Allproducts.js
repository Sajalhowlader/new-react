import React, { useEffect, useState } from 'react';
import ShowProducts from './ShowProducts/ShowProducts';
import './Allproducts.css'

const Allproducts = (props) => {
    const { counter } = props
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>

            <h1 className='text-uppercase my-4'>All products</h1>
            <div className=' container'>
                <div className='row '>
                    {
                        products.map(product => <ShowProducts key={product.id} show={product} sendcount={counter}></ShowProducts>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Allproducts;