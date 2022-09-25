import React, {useState, useEffect} from 'react'
import axios from 'axios'


function Products() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchProducts() {
            const { data } = await axios.get('/api/products/')  
            setProducts(data) 
        }
        
        fetchProducts()

    }, [])


    return (
       <section class="products section container" id="products">
                <h2 class="section__title">
                    Products
                </h2>

                <div class="products__container grid">

                    {products.map(product =>(
                        <article class="products__card" key={product.id}>
                        <a href={`/product/${product._id}`}><img src={product.image} alt="" class="products__img" /></a>

                        <h3 class="products__title">{product.name}</h3>
                        <span class="products__price">${product.price}</span>

                        <button class="products__button">
                            <i class='bx bx-shopping-bag'></i>
                        </button>
                    </article>

                    ))}
                </div>
            </section>
  )
}

export default Products