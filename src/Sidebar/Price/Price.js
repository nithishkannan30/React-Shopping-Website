import'./Price.css';
import Input from '../../components/Input';
function Price({handleChange}){
    console.log(handleChange);
    return(
        <div>
           <h2 className='sidebar-title'>Price</h2>
           <div className='ul'>
           <Input handleChange={handleChange}
                value={50}
                title="Rs.50-100"
                name="test2"/>
                 <Input handleChange={handleChange}
                value={100}
                title="Rs.100-150"
                name="test2"/>
                 <Input handleChange={handleChange}
                value={150}
                title="Rs.150-200"
                name="test2"/>
                 <Input handleChange={handleChange}
                value={200}
                title="Rs.200-250"
                name="test2"/>
                <Input handleChange={handleChange}
                value={500}
                title="Above 250"
                name="test2"/>

           </div>
        </div>
    )
}
export default Price;