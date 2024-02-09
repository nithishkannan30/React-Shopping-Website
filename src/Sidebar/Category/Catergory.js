import'./Category.css';
import Input from '../../components/Input';
function Category({handleChange}){
    return(
        <div>
        <h2 className='sidebar-title'>Category</h2>
              <Input handleChange={handleChange}
                value="sneakers"
                title="sneakers"
                name="test1"/>
                 <Input handleChange={handleChange}
                value="flats"
                title="Flats"
                name="test1"/>
                 <Input handleChange={handleChange}
                value="sandals"
                title="sandals"
                name="test1"/>
                 <Input handleChange={handleChange}
                value="Heels"
                title="Heels"
                name="test1"/>

        </div>
    )
}
export default Category;