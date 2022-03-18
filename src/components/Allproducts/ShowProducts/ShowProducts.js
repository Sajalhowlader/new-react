import React from 'react';
import ReactModal from '../../ReactModal/ReactModal';
import './ShowProducts.css'

const ShowProducts = (props) => {
    let { sendcount } = props
    const { title, price, description, category, image } = props.show
    console.log(props.show)
    return (
        <div data-aos="flip-left" className='col-md-4 single-items'>

            <div className='card p-3 border w-75'>

                <img className='img-fluid' src={image} alt="" />
                <h3>{category}</h3>
                <h2>{price}</h2>
                <p>{description.slice(0, 30)}</p>
                <p>{title}</p>
                <div className='d-flex text-center mx-auto'>
                    <button onClick={sendcount} className='border border-0 mx-2 p-3 bg-danger'>Add to cart</button>
                    <button className='border border-0 mx-2 p-3'>Buy Now</button>
                    <ReactModal sendProducts={props.show} ></ReactModal>
                </div>

            </div>
        </div>
    );
};

export default ShowProducts;