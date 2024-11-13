import React from 'react'

const Home = () => {
    return (
    <>
            <div>
                <div className="add-to-cart">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
                </div>
                <h1>Home Componet</h1>
                <div className="cart-wrapper">
                    <div className="img-wrapper item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMoVt6SOQJUVhNKFkJa3MyUd_EanbLJPmrww&s" />
                    </div>
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button>
                        Add To Cart</button>
                </div>

                </div>
            </>

            )
}

            export default Home