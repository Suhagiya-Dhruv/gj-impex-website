import { Link } from 'react-router-dom'
import { productList } from '../../contant'
import Style from './style.module.css'

function Products() {
  return (
    <>
      {/* <section className={Style.img_style}>
        <h1>Products</h1>
        <img src={productsBanner} alt="" width="100%" height="100%" />
      </section> */}
      <div className="p-4">
        <ul className={Style.products_contianer}>
          {productList.map((product, index) => (
            <Link to={product.path} key={index} className={Style.product_name}>
              <div className={Style.image}>
                <img src={product?.img} alt=""/>
              </div>
              <h1>{product.name}</h1>
            </Link>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Products
