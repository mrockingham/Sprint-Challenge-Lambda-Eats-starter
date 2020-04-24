import React from 'react'
import (useForm from 'react-hook-form')

const NewPizza = props =>{
    Const {register, handleSubmint, erors} =useForm()
    
    
    return(

    <div ClassName ='Pizza-Form'>
        {/* Name */}
            <form>
                <label className = 'Form-Username'>Username:
                <input type ='text' placeholder = 'First Name' name= 'FirstName' ref={register({})} />
                <input type ='text' placeholder='Last Name' name='LastName'
                </label>
            </form>
    </div>
    
    
    
        )
}