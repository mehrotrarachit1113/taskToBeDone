import React from 'react';
import '../style/Product.css'

const Product = (props) =>{
  const {products} = props;
  return(
    <div className = 'rootProduct'>
   <div className='mt-5 px-5'>
      {products.map(product =>{
        return(
          <div className = 'container-fluid'>
          <div className="media p-3 bg-white col-sm" key={product.id}>
          <div className = 'imgDiv'>
            <img id = 'productImage' src={product.image_urls["x300"]} alt="img" className="mr-5 mt-1" style={{width:'180'}}/>
            </div>
            <div className="media-body mt-1">
              <a href= '/' style={{color:'black'}}>
                <h5 id = 'productName'>
                  { product.name }
                  <h6 id = 'productRating' style={{color: 'grey', float: 'right'}}>
                    {product.rating} { product.rating  && <i className="fas fa-star fa-xs"/> }
                  </h6>
                </h5>
                <p id = 'productDesc'>({ product.weight} {product.weight_unit})</p>
              </a>
              <span id = 'productPrice'><strong>₹ {product.final_price}</strong> <del>{product.price}</del></span>
              <br /><br />
              {product.is_in_stock ?
                (
                  <button
                  className ='btn btn-md btnClass'
                  type='button'
                  style={{background:'#4FCF64'}}
                  id = 'addButton'>
                    <span id = 'addSpan' style={{fontSize: '0.9em'}}>ADD TO CART</span>
                  </button>
                ):
                (
                  <button
                   className ='btn btn-md disabled btnClass'
                   type='button'
                   style={{background:'grey'}}
                   id = 'outButton'>
                     <span id = 'outSpan' style={{fontSize: '0.9em'}}>OUT OF STOCK</span>
                  </button>
                )
              }
            </div>
          </div>
          </div>
        )
      })}
   </div>
   </div>
   
 );
}

export default Product;