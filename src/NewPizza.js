import React from 'react'
import {useForm} from 'react-hook-form'

const NewPizza = props => {
    const {register, handleSubmit, errors} =useForm();
    const onSubmit =(data) =>{
        console.log(data)
    }
    
    
    return(

    <div className ='Pizza-Form'>
        {/* Name */}

            <form  onSubmit={handleSubmit(onSubmit)}>
                    <label className = 'Form-Username'>Username:
                        <input type ='text' placeholder = 'First Name' name= 'FirstName' ref={register({required: true, minLength: 2})} />
                            {errors.FirstName && <p>Name too short</p>}
                        <input type ='text' placeholder='Last Name' name='LastName' ref={register({required: true, minLength: 2})} />
                            {errors.LastName && <p>Name too short</p>}
                    </label>
            
        {/* Address */}
                
                    <label className= 'Address'>Address:
                        <input type='text' placeholder ="Address" name='Address' ref={register({})} />
                    </label>
                

        {/* City,State,Zipcode */}
                    <label className='City -etc'>City, State, and Zipcode:
                        <input type='text' placeholder='City' name='City' ref={register({required: true, minLength: 2})} />
                        {errors.City && <p>City too short</p>}
                
            
                        <input type='text' placeholder='State' name='State' ref={register({required: true, minLength: 1})} />
                        {errors.State && <p>State too short</p>}
                
                
                        <input type='text' placeholder='Zipcode' name='Zipcode' ref={register({required: true, minLength: 5, maxLength:5})} />
                        {errors.Zipcode && <p>Zipcode is not correct length</p>}

                    </label>

            {/* Pizza Size */}
                    <label className='Pizza-size'>Select Your Pizza Size
                        <select name='Pizza-size'>
                            <option defaultValue=''>Please choose</option>
                            <option value='Kids'>Kids 6 '</option>
                            <option value='Personal'>Personal 8'</option>
                            <option value='Gluten-Free'>Gluten Free 10'</option>
                            <option value='Medium'>Medium 12'</option>
                            <option value='Large'>Large 16'</option>

                         </select>

                     </label>
            {/* Toppings */}
        <div className= 'Toppings-container'>
            <label className='Toppings'>Now, Select Your Toppings</label>
            <label>
            <input name='Pepperoni' type='checkbox' />Pepperoni
            </label>
            <label>
            <input name='Bacon' type='checkbox' />Bacon
            </label>
            <label>
            <input name='Mushroom' type='checkbox' />Mushroom
            </label>
            <label>
            <input name='Anchovies' type='checkbox' />nchovies
            </label>
            <label>
            <input name='Italian-Sausage' type='checkbox' />Italian Sausage
            </label>
            <label>
            <input name='Grilled-Chicken' type='checkbox' />Grilled Chicken
            </label>
            <label>
            <input name='Ham' type='checkbox' />Ham
            </label>
            <label>
            <input name='Steak' type='checkbox' />Steak
            </label>
            <label>
            <input name='Extra-Cheese' type='checkbox' />Extra-Cheese
            </label>
            <label>
            <input name='Veggies' type='checkbox' />Veggies
            </label>
        </div>

            {/* Special instructions */}
            <label className='Special-Instructions'>Special instructions
            <textarea name='Special-Instructions' placeholder='What would you like...'style={{height:'200px', width:'300px'}} ></textarea>
            </label>
            <input type='submit' />
            </form>
    </div>
    
    
    
        )
}
export default NewPizza