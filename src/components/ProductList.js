import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
// import { storeProducts } from "../data";
import { ProductConsumer } from "../context";

export default class ProductList extends Component {
    // state={
    //     products: storeProducts
    // };

    render() {
       // console.log(this.state.products);

        return (
            <React.Fragment>
        <div className="py-5">
             <div className="container">
                 <h3 className="text-center text-capitalize"> Attend your event with your favorite team shirt </h3>
                 <Title name="our" title="products" />
                 <div className="row">
                     <ProductConsumer>
                      {value => { 
                         //console.log(value);
                        return value.product.map( product =>{
                            return <Product key={product.id} product= {product}/>;
                        })
                      }}
                     </ProductConsumer> 
                 </div>
             </div>
        </div>    
            </React.Fragment>
            // <Product />
        );
    }
}
