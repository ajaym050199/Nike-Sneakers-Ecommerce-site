import React,  {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'

function Featured({match}) {
    const {id}  = useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {
        async function fetchProduct() {
            const { data } = await axios.get(`/api/featured-products/${id}`)  
            setProduct(data) 
        }
        
        fetchProduct()

    }, [])
  return (
    <div>
       <section class="home" id="home">
        <div class="home__container container grid">
            <div class="home__img-bg product_img-bg">
                <img src={product.img} alt="" class="home__img" id="productimg" />
            </div>
            <div class="home__data">
                <h6><Link to='/'>Home</Link>/featured</h6>
                <h1 class="home__title">NIKE<br />{product.name}</h1>
                <h2 class="home__price product__price">${product.price}</h2>
                <select class="size">
                    <option>size</option>
                    <option>11</option>
                    <option>10</option>
                    <option>9</option>
                    <option>8</option>
                    <option>7</option>
                </select>
                <div class="home__btns">
                    <input class="button button--gray button--small" type="number" value="1"/>

                    <button class="button home__button">ADD TO CART</button>
                </div>
                <p class="home__description procut_detail">${product.desc}</p>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Featured