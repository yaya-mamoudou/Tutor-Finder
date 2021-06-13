import React from 'react'
import './chat.css'
function Displaymenu() {
    return (
            <div className='hamburgerDropDown'>
                    <li className='nav-link'><div to='/' >Home</div></li>
                    <li className='nav-link'><div to='/about'>About </div></li>
                    <li className='nav-link'><div to='/criminalDefence'>Criminal Defence</div></li>
                    <li className='nav-link'><div to='/DUIS'>DUIS</div></li>
                    <li className='nav-link'><div to='/personalInjury'>Personal Personal Injury</div></li>
                    <li className='nav-link'><div to='/contact'>Contact</div></li>
                </div>
    )
}

export default Displaymenu