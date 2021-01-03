import React, { useState, useEffect} from 'react'
import Products from './Products/Products'
import { db } from "../../lib/firebase";
import './styles.css'

function Home() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        db.collection('products')
        .onSnapshot(snapshot => {
            setProducts(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [])
    
    return (
        <div className="home">
            <img className="home__banner" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Christmas20/GW/new/Christmas-GW-Hero-PC1x._CB413564947_.jpg" alt="Banner"/>
            <Products products={products}/>
        </div>
    )
}

export default Home
