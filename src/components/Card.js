import { IoStar } from "react-icons/io5";
import { BsFillBagHeartFill } from "react-icons/bs";
import React from "react";
function Card({img,title,star,reviews,newPrice,prevPrice}){
    return(
        <section className='card'>
        <img src={img} alt={title} className='card-image'/>
        <div className='card-details'>
            <h3 className='card-titile'>{title}</h3>
            <section className='card-reviews'>
                <IoStar className="rating-star"/>
                <IoStar className="rating-star"/>
                <IoStar className="rating-star"/>
                <IoStar className="rating-star"/>
                <span className='total-reviews'>{reviews}</span>
                </section>
                <section className='card-price'>
                    <div className='price'>
                        <del>{prevPrice}</del>{newPrice}
                    </div>
                <div className='bag'>
                    <BsFillBagHeartFill className='bag-icon'/>
                </div>
                </section>
        </div>
    </section>
    )
}
export default Card;