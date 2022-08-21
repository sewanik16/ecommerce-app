import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompnay] = React.useState('');
    const [error,setError] = React.useState(false);

    const navigate= useNavigate()
    const addProduct = async () => {
        // console.log(name,category,company)
        if(!name || !price || !company || !category)
        {
            setError(true);
            return false
        }

        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:5000/add-product", {
            method: "post",
            body: JSON.stringify({ name, price, category, company, userId }),
            headers: {
                "Content-type": "application/json"
            }
        });
        result = await result.json();
        navigate("/product")

    }

    return (
        <div className='product'>
            <h1>Add Product</h1>
            <input type="text" placeholder='Enter product name' className='inputBox'
                onChange={(e) => { setName(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))} }
                value={name}
            //    style={{textTransform:"capitalize"}} 
            />
            {error && !name && <span className='invalid-input'>Enter valid name</span>}

            <input type="text" placeholder='Enter product price' className='inputBox' style={{textTransform:"capitalize"}}
                value={price} onChange={(e) => { setPrice(e.target.value) }}
            />
            {error && !price && <span className='invalid-input'>Enter valid price</span>}

            <input type="text" placeholder='Enter product category' className='inputBox' style={{textTransform:"capitalize"}}
                value={category} onChange={(e) => { setCategory(e.target.value) }}
            />
            {error && !category && <span className='invalid-input'>Enter valid category</span>} 

            <input type="text" placeholder='Enter product company' className='inputBox' style={{textTransform:"capitalize"}}
                value={company} onChange={(e) => { setCompnay(e.target.value) }}
            />
            {error && !company && <span className='invalid-input'>Enter valid company</span>}


            <button onClick={addProduct} className='appButton'>Add Product</button>
        </div>
    )
}

export default AddProduct;