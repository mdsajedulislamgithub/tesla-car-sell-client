import { useEffect, useState } from 'react';

const UseProduct = () => {

    // ----------This is custom hooks for usage product------------
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return [products, setProducts];
};

export default UseProduct;