import React from 'react';
import {Link} from 'react-router-dom';
import Hero from '../components/Hero';
import singleProductImg from '../images/singleProductBcg.jpeg';
import {ProductConsumer} from '../context';

export default function SingleProductPage() {
    return (
        <>
            <Hero img={singleProductImg} title="single product" />
            <ProductConsumer>
                {value => {
                    const {singleProduct, addToCart, loading} = value;

                    if(loading) {
                        console.log('Hello from loading');
                        return <h1>product loading...</h1>
                    }
                    const {
                        company, 
                        description,
                        id, 
                        price, 
                        title, 
                        image
                    } = singleProduct
                    return <section className="py-5">
                        <div className="container">
                            <div className="row">
                                <div className= "col-10 mx-auto col-sm-8 col-md-6 my-3">
                                    <img src={`../${image}`} 
                                    alt="single product" 
                                    className="img-fluid" 
                                    />
                            <div className= "col-10 mx-auto col-sm-8 col-md-6 my-3">
                                <h5 className="text-title mb-4">
                                    model : {title}
                                </h5>
                                <h5 className="text-capitalize text-muted mb-4">
                                    company: {company}
                                </h5>
                            </div>
                                </div>
                            </div>
                        </div>
                    </section>
                }}
            </ProductConsumer>
        </>
    );
}