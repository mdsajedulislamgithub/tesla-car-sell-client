import { useEffect, useState } from 'react';

const UseProduct = () => {

    // ----------This is custom hooks for usage product------------
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return [products, setProducts];
};

export default UseProduct;