import React from 'react'

function Showcase() {
  return (
            <section  id="home" class="home">
                <div class="home__container container grid">
                    <div class="home__img-bg">
                        <img src="images/collection1.png" alt="" class="home__img" />
                    </div>
    
                    <div class="home__social">
                        <a href="https://www.facebook.com/" target="_blank" class="home__social-link">
                            Facebook
                        </a>
                        <a href="https://twitter.com/" target="_blank" class="home__social-link">
                            Twitter
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" class="home__social-link">
                            Instagram
                        </a>
                    </div>
    
                    <div class="home__data" >
                        <h1 class="home__title">NEW SNEAKER <br /> COLLECTIONS ZOOM VOMERO 16 </h1>
                        <p class="home__description">
                            Latest arrival of the new imported sneakers of the zoom vomero 16, 
                            with a modern and resistant design.
                        </p>
                        <span class="home__price">$45</span>

                        <div class="home__btns">
                            <a href="#" class="button button--gray button--small">
                                Discover
                            </a>

                            <button class="button home__button">ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Showcase