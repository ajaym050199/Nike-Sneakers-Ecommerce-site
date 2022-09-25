import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Featured() {
  const [featured_products, setFeaturedProducts] = useState([])

    useEffect(() => {
        async function fetchProducts() {
            const { data } = await axios.get('/api/featured-products/')  
            setFeaturedProducts(data) 
        }
        
        fetchProducts()

    }, [])


  return (
      <section className="featured section container" id="featured">
                <h2 class="section__title">
                    Featured
                </h2>

                <div class="featured__container grid">
                       {featured_products.map(product => (
                         <article key = {product.id} class="featured__card">
                         <span class="featured__tag">Sale</span>
 
                         <a href={`featured/${product.id}`}><img src= {product.img} alt="" class="featured__img"  onclick = "clickimg(this)" /></a>
 
                         <div class="featured__data">
                             <h3 class="featured__title">{product.name}</h3>
                             <span class="featured__price">${product.price}</span>
                         </div>
 
                         <button class="button featured__button">ADD TO CART</button>
                     </article>
                       ))}
                </div>
            </section>
  )
}

export default Featured