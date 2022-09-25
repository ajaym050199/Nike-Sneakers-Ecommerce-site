import React from 'react'

function Story() {
  return (
    <div>
       <section class="story section container">
                <div class="story__container grid">
                    <div class="story__data">
                        <h2 class="section__title story__section-title">
                            Our Story
                        </h2>
    
                        <h1 class="story__title">
                            Stylish Sneakers  of <br /> this year
                        </h1>
    
                        <p class="story__description">
                            The latest and modern sneaker  of this year, is available in various 
                            presentations in this store, discover them now.
                        </p>
    
                        <a href="/#home" class="button button--small">Discover</a>
                    </div>

                    <div class="story__images">
                        <img src="images/new1.png" alt="" class="story__img" />
                        <div class="story__square"></div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Story