import'./Color.css';
import Input from '../../components/Input';
function Color({handleChange}){
    return(
        <div>
         <h2 className='sidebar-title'>Color</h2>
         <Input handleChange={handleChange}
                value="black"
                title="Black"
                name="test3"/>
                 <Input handleChange={handleChange}
                value="blue"
                title="Blue"
                name="test3"/>
                 <Input handleChange={handleChange}
                value="white"
                title="White"
                name="test3"/>
                 <Input handleChange={handleChange}
                value="red"
                title="Red"
                name="test3"/>
                <Input handleChange={handleChange}
                value="green"
                title="Green"
                name="test3"/>
           </div>
       
    )
}
export default Color;