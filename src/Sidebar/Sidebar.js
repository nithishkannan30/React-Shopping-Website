import'./Sidebar.css';
import Category from './Category/Catergory';
import Price from './Price/Price';
import Color from './Color/Color';

import { FaShoppingCart } from "react-icons/fa";
function Sidebar({handleChange}){
    return(
        <div>
           <section className='sidebar'>
            <div className='logo-container'>
                <h1 className='logo'><FaShoppingCart /></h1>
            </div>
            <Category handleChange={handleChange}/>
            <Price handleChange={handleChange}/>
            <Color handleChange={handleChange}/>
           </section>
        </div>
    )
}
export default Sidebar;