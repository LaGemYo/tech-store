import React from 'react';
import Product from '../Product';
import Title from '../Title';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../../context';

export default function Featured() {
    return (
        <section className="py-5">
            <div className="container">
                {/* Title */}
                <Title title="featured products" center="true" />
                {/* products */}
                <div className="row">
                    <ProductConsumer>
                        {value => {
                            const {featuredProducts} = value;
                            return featuredProducts.map(product => (
                            <Product 
                            key={product.id}
                            product={product}
                            >
                            </Product>))
                        }}
                    </ProductConsumer>
                </div>
                <div className="row mt-5">
                    <div className="col text-center">
                        <Link to="/products" className="main-link">
                            our products
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}