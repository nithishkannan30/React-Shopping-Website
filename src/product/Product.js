import './Product.css'
import data from '../db/data';
import Card from '../components/Card';
function Product({result}){
    return(
        <>
          <section className='card-container'>
               {result}
          </section>
        </>
    )
}
export default Product;