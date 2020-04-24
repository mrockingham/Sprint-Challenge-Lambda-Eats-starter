import React from 'react'

const Pizza = props  =>{

    return(

                    // Calzone
        <div className = 'Menu'>
            <div className = 'Food-Box'>
                <h2 className ='Calzone'>Calzone</h2>
                    <ul>
                        <li>Chicken Calzone</li>
                        <li>Hawaiian Calzone</li>
                        <li>Steak Calzone</li>
                        <li>Veggie Calzone</li>
                    </ul>
            </div>


            {/* // Cold Sub */}
        
            <div className = 'Food-Box'>
                <h2 className ='Cold Sub'>Cold Sub</h2>
                    <ul>
                        <li>Ham and Cheese</li>
                        <li>Roast Beef and Cheese</li>
                        <li>Turkey and Cheese</li>
                        <li>Veggie</li>
                    </ul>
            </div>


            
            {/* // Wings */}
        
            <div className = 'Food-Box'>
                <h2 className ='Wings'>Wings</h2>
                    <ul>
                        <li>Regular</li>
                        <li>Sweet and Tangy</li>
                        <li>Garlic</li>
                        <li>Spicy</li>
                    </ul>
            </div>


            
            {/* // Apps */}
        
            <div className = 'Food-Box'>
                <h2 className ='Apps'>Apps</h2>
                    <ul>
                        <li>Fries</li>
                        <li>Mozzarella Stix</li>
                        <li>Fried Mushroom</li>
                        <li>Garlic KNots</li>
                    </ul>
            </div>
            
        </div>
    )
}

export default Pizza;